import { queryTokenAudit } from "./query-token-audit.js";
import { queryTokenInfo } from "./query-token-info.js";
import { queryTradingSignal } from "./trading-signal.js";
import { queryCryptoMarketRank } from "./crypto-market-rank.js";
import { queryAddressInfo } from "./query-address-info.js";

async function runRugRadarAnalysis(tokenAddress, creatorWallet, tokenSymbol) {
  const report = {
    contractAudit: null,
    tokenStructure: null,
    tradingSignal: null,
    marketMomentum: null,
    creatorWallet: null,
    riskScore: 0,
    riskLevel: "Low",
  };

  try {
    report.contractAudit = await queryTokenAudit(tokenAddress);
    report.tokenStructure = await queryTokenInfo(tokenAddress);
    report.tradingSignal = await queryTradingSignal(tokenSymbol);
    report.marketMomentum = await queryCryptoMarketRank(tokenSymbol);
    report.creatorWallet = await queryAddressInfo(creatorWallet);

    let riskScore = 0;

    // Contract risk
    if (report.contractAudit?.result?.riskLevel === "HIGH") {
      riskScore += 30;
    }

    // Developer wallet concentration
    if (report.tokenStructure?.result?.devWalletPercent > 20) {
      riskScore += 20;
    }

    // Smart money exiting
    if (report.tradingSignal?.result?.signal === "EXIT") {
      riskScore += 20;
    }

    // Social hype fading
    if (report.marketMomentum?.result?.trend === "DOWN") {
      riskScore += 10;
    }

    // Creator selling tokens
    if (report.creatorWallet?.result?.recentSellActivity === true) {
      riskScore += 20;
    }

    report.riskScore = riskScore;

    if (riskScore >= 60) {
      report.riskLevel = "High";
    } else if (riskScore >= 30) {
      report.riskLevel = "Medium";
    }

    return report;
  } catch (error) {
    return {
      error: "RugRadar analysis failed",
      details: error.message,
    };
  }
}

// Example run
runRugRadarAnalysis(
  "0xTokenAddressHere",
  "0xCreatorWalletHere",
  "TOKEN_SYMBOL"
).then((result) => console.log(JSON.stringify(result, null, 2)));
