---
title: Hardware attacks
description: 'This is a public resource for learning about Trusted Execution Environments (TEEs). Our aim is to provide comprehensive coverage of key concepts, research advancements, and real-world applications of TEEs.'
sidebar_label: Hardware attacks
---

# Hardware attacks

These target the physical components of the chip, often requiring specialized equipment and physical access.

### [VoltPillager (Voltage fault injection)](https://www.usenix.org/system/files/sec21summer_chen-zitai.pdf)
Attackers rapidly altered the power supply to SGX CPUs to bypass memory protections and read secrets from enclaves.

**Mitigation:** Modern TEEs include power integrity monitors that shut down execution on abnormal voltage behavior. VM-based TEEs (like Intel TDX) further isolate sensitive logic from these low-level attacks.

### Laser fault injection
Focused lasers were used to flip individual bits on a chip, interfering with secure operations and enabling privilege escalation.

**Mitigation:** Some secure chips integrate tamper sensors that detect physical intrusion and wipe memory if a breach is attempted.
