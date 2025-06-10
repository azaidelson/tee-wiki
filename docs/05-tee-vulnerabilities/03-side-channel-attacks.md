---
title: Side-Channel Attacks
sidebar_label: Side-Channel Attacks
---

# Side-Channel Attacks

These attacks don’t break the enclave directly, they infer secrets by watching its behavior, such as timing differences or physical emissions.

### [CacheZoom (Timing-based Attack)](https://eprint.iacr.org/2017/618.pdf)
By carefully measuring how long certain memory operations took, attackers reconstructed secret access patterns in SGX.

**Mitigation:** Developers can use constant-time algorithms and memory obfuscation techniques like ORAM to reduce timing leaks.

### Power & EM Analysis
Observing power draw or electromagnetic signals during enclave execution can reveal cryptographic keys or sensitive data.

**Mitigation:** Injecting noise, isolating sensitive workloads, and rotating keys regularly can make these attacks infeasible in practice.
