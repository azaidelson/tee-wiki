---
title: TEEs + ZK
description: 'This is a public resource for learning about Trusted Execution Environments (TEEs). Our aim is to provide comprehensive coverage of key concepts, research advancements, and real-world applications of TEEs.'
sidebar_label: TEE + ZK
---

# TEE + ZK

TEEs and ZK can work in tandem in a variety of scenarios:

*   TEEs offer an independent mechanism for generating proofs as a secondary check for a greater guarantee of ZK proof correctness
*   TEEs provide soft finality in the block-building process due to their lightweight nature while ZK provides the final determination of correctness, but it takes a longer time to generate the proof
*   TEEs can be used to receive private inputs and ensure that these inputs are not exposed
