---
title: Confidential chains
sidebar_label: Confidential chains
---

# Confidential chains

Some chains integrate TEEs at the execution layer, running smart contracts in secure enclaves so that inputs, state, and outputs remain encrypted on‑chain. Leading examples include:

*   [Secret Network](http://docs.scrt.network): Every validator processes “Secret Contracts” inside SGX, with all inputs/outputs encrypted end‑to‑end.
*   [Phala Network](https://docs.phala.network/): WebAssembly dApps execute in SGX enclaves, protecting code and data while preserving decentralized validation. 

By executing smart contracts inside TEEs, confidential chains offer built-in privacy guarantees without the need of designing complex zero-knowledge proof systems.
