# RugRadar Analysis Pipeline

RugRadar analyzes a token using a five-step intelligence pipeline built on Binance Web3 data and on-chain signals.  
Each step evaluates a different risk factor and contributes to the final RugRadar risk score.

The goal is to answer one critical question:

**Did the project team already dump before retail investors bought in?**

---

## Step 1 — Contract Security Scan
**Skill:** query-token-audit

RugRadar first checks the token smart contract for structural risks.

The audit detects issues such as:
- honeypot behavior
- hidden buy or sell taxes
- blacklist or freeze functions
- suspicious ownership permissions
- malicious contract patterns

If major risks are detected, the token immediately receives a higher risk score.

---

## Step 2 — Token Structure Analysis
**Skill:** query-token-info

This step evaluates the token’s market structure.

Signals analyzed include:
- buy vs sell pressure
- smart money wallet participation
- developer wallet holdings
- liquidity indicators

This helps determine whether the token is dominated by insiders or distributed among holders.

---

## Step 3 — Smart Money Signal Detection
**Skill:** trading-signal

RugRadar evaluates whether experienced traders or large wallets are entering or exiting the market.

The system looks for:
- smart money accumulation
- smart money exit patterns
- sudden momentum changes
- abnormal trading behavior

Smart money exiting while retail buying increases risk.

---

## Step 4 — Social Momentum Check
**Skill:** crypto-market-rank

RugRadar checks the market narrative and community attention.

Signals include:
- trending token rankings
- social attention level
- narrative momentum
- fading community interest

A dying narrative often signals weakening demand.

---

## Step 5 — Creator Wallet Forensics
**Skill:** query-address-info

The final step investigates the creator or developer wallet.

RugRadar detects:
- large token transfers
- developer selling activity
- transfers to exchanges
- possible insider distribution

This helps determine whether the team is still aligned with the project.

---

## Final Risk Score

After all five steps run, RugRadar combines the signals into a unified risk score.

Example interpretation:

- **0–29 → Low Risk**
- **30–59 → Medium Risk**
- **60–100 → High Risk**

The final report includes both the score and the evidence gathered during the analysis.

RugRadar combines **contract security, wallet behavior, market structure, smart money signals, and social momentum** to give traders a clearer view of potential risks.
