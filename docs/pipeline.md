RugRadar Analysis Pipeline
RugRadar analyzes a token using a 5-step intelligence pipeline built on Binance Web3 data and on-chain signals.
Each step evaluates a different risk factor and contributes to the final RugRadar risk score.
The goal is to answer a critical question for traders:
“Is the project team quietly exiting while retail is still buying?”
Step 1 — Contract Security Scan
Skill: query-token-audit
RugRadar first checks the token smart contract for structural risks.
The audit detects potential issues such as:
Honeypot behavior
Hidden buy or sell taxes
Blacklist or freeze functions
Suspicious ownership permissions
Malicious contract patterns
If major risks are detected, the token receives an immediate risk increase.
Step 2 — Token Structure Analysis
Skill: query-token-info
This step evaluates the token’s current market structure.
Signals analyzed include:
Buy vs sell pressure
Smart money wallet participation
Developer wallet holdings
Basic liquidity indicators
This helps determine whether the token is controlled by insiders or distributed more fairly among holders.
Step 3 — Smart Money Signal Detection
Skill: trading-signal
RugRadar evaluates whether experienced traders or large wallets are entering or exiting the market.
The system looks for:
Smart money accumulation
Smart money exit patterns
sudden momentum changes
abnormal trading behavior
Smart money exiting while retail is buying is often a warning sign.
Step 4 — Social Momentum Check
Skill: crypto-market-rank
Markets are heavily influenced by narrative and attention.
RugRadar checks:
trending tokens
social attention levels
hype momentum
whether interest in the project is growing or fading
Declining attention can indicate weakening demand.
Step 5 — Creator Wallet Forensics
Skill: query-address-info
This is the most important part of the RugRadar investigation.
The system analyzes the project creator’s wallet and related addresses to detect:
large token transfers
developer token selling
transfers to exchanges
possible insider distribution
This helps determine whether the team is still aligned with the project or already exiting.
Final Risk Score
After all five steps are completed, RugRadar combines the signals into a unified risk score.
Example interpretation:
0-29 → Low Risk
30-59 → Medium Risk
60-100 → High Risk
The final result includes both the score and the evidence collected during the analysis.
RugRadar does not rely on a single signal.
Instead, it combines contract security, market structure, wallet behavior, trading signals, and social momentum to give traders a clearer view of potential risks.
