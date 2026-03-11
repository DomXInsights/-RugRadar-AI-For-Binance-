# RugRadar Skills

RugRadar uses five analysis skills powered by Binance Web3 data to detect potential token risks and insider dumping behavior.

Each skill evaluates a different signal before contributing to the final RugRadar risk score.

---

## 1. query-token-audit

Purpose:
Detects smart contract risks.

What it checks:
- honeypots
- hidden taxes
- malicious functions
- blacklist or freeze permissions

Input:
Token contract address

Output:
Contract safety evaluation.

---

## 2. query-token-info

Purpose:
Analyzes the token’s market structure.

What it checks:
- buy vs sell pressure
- developer wallet percentage
- smart money holdings
- liquidity indicators

Input:
Token contract address

Output:
Token structure analysis.

---

## 3. trading-signal

Purpose:
Detects whether experienced traders are entering or exiting the token.

What it checks:
- smart money entry
- smart money exit
- abnormal market behavior

Input:
Token symbol or contract address

Output:
Trading signal indicating market direction.

---

## 4. crypto-market-rank

Purpose:
Evaluates the token’s market attention and narrative strength.

What it checks:
- trending tokens
- social hype momentum
- community attention

Input:
Token name or symbol

Output:
Market momentum evaluation.

---

## 5. query-address-info

Purpose:
Analyzes the creator or developer wallet.

What it checks:
- token transfers
- developer selling
- transfers to exchanges
- insider distribution behavior

Input:
Creator wallet address

Output:
Wallet activity analysis.

---

## Combined Risk Evaluation

After all five skills run, RugRadar combines the signals into a unified risk score that helps traders understand whether a token shows potential warning signs.
