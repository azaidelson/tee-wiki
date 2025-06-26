---
title: Side-channel attacks
description: 'This is a public resource for learning about Trusted Execution Environments (TEEs). Our aim is to provide comprehensive coverage of key concepts, research advancements, and real-world applications of TEEs.'
sidebar_label: Side-channel attacks
---

# Side-channel attacks

These attacks don’t break the enclave directly, they infer secrets by watching its behavior, such as timing differences or physical emissions.

### [CacheZoom (Timing-based attack)](https://eprint.iacr.org/2017/618.pdf)
By carefully measuring how long certain memory operations took, attackers reconstructed secret access patterns in SGX.

**Mitigation:** Developers can use constant-time algorithms and memory obfuscation techniques like ORAM to reduce timing leaks.

### Power & EM analysis
Observing power draw or electromagnetic signals during enclave execution can reveal cryptographic keys or sensitive data.

**Mitigation:** Injecting noise, isolating sensitive workloads, and rotating keys regularly can make these attacks infeasible in practice.
