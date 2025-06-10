---
title: MEV
sidebar_label: MEV
---

# MEV

Maximal Extractable Value (MEV) refers to profit captured by reordering or injecting transactions within a block. This is often via sandwich or frontrunning attacks that drain user funds and undermine fairness.

TEEs counter MEV by enabling encrypted block building, which hides transaction contents until after a validator commits. Project like Flashbots’ TEE-powered builders and protocols like [SUAVE](https://github.com/flashbots/suave-geth) let you set private execution rules inside the enclave, so your transaction goes exactly where and when you want it, without leaking to the public mempool.

For more on MEV, check out MEV Wiki: https://www.mev.wiki/
