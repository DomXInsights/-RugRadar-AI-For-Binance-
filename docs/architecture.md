# RugRadar System Architecture

RugRadar is an AI-powered on-chain analysis assistant that helps traders detect potential insider dumping and token risks using Binance Web3 data and OpenClaw AI agents.

The system follows a modular architecture where multiple analysis skills evaluate different signals before producing a final risk score.

## 1. User Interface

The user interacts with RugRadar through a simple query.

Example request:

Analyze token: 0xTokenAddress

The user only needs to provide a token contract address or token name.

## 2. OpenClaw AI Agent

The OpenClaw AI agent acts as the orchestrator of the system.

Its responsibilities include:
- receiving user requests
- triggering analysis skills
- collecting results from each module
- combining signals into a final report

This allows RugRadar to function as a natural-language crypto intelligence assistant.

## 3. RugRadar Analysis Engine

The analysis engine runs the full investigation pipeline.

It executes five main skills:
- Contract security scan
- Token market structure analysis
- Smart money trading signal detection
- Social momentum evaluation
- Creator wallet forensics

Each skill produces a signal that contributes to the final risk score.

## 4. Binance Web3 Data Layer

RugRadar relies on Binance Web3 APIs and on-chain data sources.

Examples include:
- token contract security analysis
- token market data
- wallet transaction history
- holder distribution
- trading activity signals

These sources allow RugRadar to analyze tokens using real blockchain evidence.

## 5. Risk Scoring System

After collecting results from all analysis steps, RugRadar calculates a unified risk score.

Signals include:
- malicious contract functions
- developer wallet selling
- smart money exit
- abnormal holder concentration
- declining social momentum

The combined score is translated into a simple risk classification.

## Output

The final RugRadar report includes:
- contract security status
- token market structure analysis
- smart money behavior
- creator wallet activity
- RugRadar risk score

This provides traders with a clear evidence-based evaluation of potential token risks.
