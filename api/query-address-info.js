async function queryAddressInfo(walletAddress, chainId = "56") {
  const endpoint =
    "https://web3.binance.com/bapi/defi/v1/public/wallet-direct/address/info";

  const payload = {
    binanceChainId: chainId,
    address: walletAddress,
    requestId: crypto.randomUUID(),
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      success: true,
      input: payload,
      result: data,
    };
  } catch (error) {
    return {
      success: false,
      input: payload,
      error: error.message,
    };
  }
}

// Example usage
queryAddressInfo("0xCreatorWalletAddressHere")
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((err) => console.error(err));
