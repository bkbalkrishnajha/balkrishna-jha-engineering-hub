---
title: "Using Manning’s Equation for a Rectangular Channel"
description: "A practical introduction to estimating uniform-flow velocity and discharge in a rectangular open channel, with assumptions and a worked example."
publishDate: 2026-11-05
category: "Hydraulics"
tags: ["Hydraulics", "Open-channel flow", "Manning equation"]
draft: false
featured: true
---

Manning’s equation is commonly used to estimate the mean velocity of steady, uniform flow in an open channel. For a rectangular channel, the geometry is straightforward, making it useful for preliminary hydraulic calculations and learning exercises.

## Governing equations

The mean velocity is `V = (1/n) × R^(2/3) × S^(1/2)`. Discharge is `Q = A × V`.

where:

- \(V\) = mean flow velocity (m/s)
- \(n\) = Manning roughness coefficient
- \(R\) = hydraulic radius (m)
- \(S\) = energy slope (m/m)
- \(A\) = flow area (m²)
- \(Q\) = discharge (m³/s)

For a rectangular channel of width `b` and flow depth `y`: `A = b × y`, `P = b + 2y`, and `R = A/P`.

Here, \(P\) is the wetted perimeter.

## Worked example

Consider a rectangular channel with width 2.0 m, flow depth 0.8 m, Manning’s `n = 0.015`, and slope `S = 0.001`.

1. Flow area: `A = 2.0 × 0.8 = 1.60 m²`.
2. Wetted perimeter: `P = 2.0 + 2(0.8) = 3.60 m`.
3. Hydraulic radius: `R = 1.60/3.60 = 0.4444 m`.
4. Mean velocity: `V = (1/0.015) × (0.4444)^(2/3) × (0.001)^(1/2)`, approximately 1.23 m/s.
5. Discharge: `Q = 1.60 × 0.89`, approximately 1.96 m³/s.

The values are illustrative and rounded; a calculator should retain adequate precision internally.

## Important assumptions and checks

Manning’s equation is normally applied to steady, uniform flow in a prismatic channel. The slope used should represent the energy slope under the assumed conditions. Roughness selection should reflect the channel boundary, vegetation, irregularity and maintenance condition. Check flow regime, freeboard, sediment, transitions, bends, local losses and flood conditions separately where relevant.

This calculation is an educational estimate, not a complete channel design. Final design should follow the applicable project criteria, hydrological assessment, field observations and engineering review.

## Try the calculator

Use the [Manning equation calculator](/tools/) to vary the channel dimensions, roughness and slope and see how the estimated velocity and discharge change.
