---
id: 0019-one-token-set
sidebar_position: 20
title: "0019 · El sistema de diseño ATRIUM AD es el sistema visual"
sidebar_label: "0019 · El sistema de diseño ATRIUM AD es el sistema visual"
description: "El sistema de diseño ATRIUM AD es el sistema visual"
---

# ADR 0019: El sistema de diseño ATRIUM AD es el sistema visual

| Estado | Fecha | Decisores |
| --- | --- | --- |
| **Aceptada** | 2026-10-04 | Atrium · producto y tecnología |

## Contexto

Había tres direcciones visuales en juego: un tema de producto provisional en `packages/ui` (tinta, lima, crema, ámbar), un sistema de marca teal y menta, y los prototipos, que usaban una tercera fuente (Geist). La [decisión 15](../plan/open-decisions) pidió reconciliarlos. El dueño del producto ahora nombró un sistema a usar: el **sistema de diseño ATRIUM AD** (carbón sobre papel crema, una señal lima, una arcilla, esquinas rectas, una regla de 3 px, Inter Tight e Instrument Serif).

## Decisión

El sistema de diseño ATRIUM AD es el sistema visual de la Platform, el Manager, el Hub, la app móvil y esta documentación.

- Una **copia** del sistema vive en `design/system`, con un `SOURCE.md` que dice de dónde vino y qué se dejó fuera. Es la referencia; no se edita para cambiar el producto.
- Los tokens se escriben una vez en `src/design/tokens.ts` y se generan a CSS y a un tema de Tailwind v4. Los componentes leen **roles**, nunca colores crudos.
- La **paleta cruda, la tipografía, el espaciado, los radios, los bordes, las sombras y el movimiento del sistema se usan tal cual.**
- El sistema no dice nada sobre estado, gráficos, un tema oscuro ni componentes de producto. Esa **capa de producto** se construye aquí con la propia paleta del sistema: estado distinguido por relleno, una regla izquierda y una marca; una paleta de datos de seis; un tema oscuro; y los componentes que el producto necesita más allá de los trece que trae el sistema.
- **Inter Tight** es la fuente del producto. Geist fue un artefacto del prototipo.
- Se hacen seis excepciones por contraste, cada una mueve un color un paso: el botón arcilla se rellena con clay-600, el chip arcilla usa un nuevo texto clay-700, los bordes de campo usan charcoal-500, la arcilla nunca es texto sobre crema, el eyebrow lima solo aparece sobre carbón, y el texto sobre una tarjeta arcilla es de 24 px o más. [Tokens](../design/tokens#qué-es-nuestro) las lista con sus ratios.
- Una guarda de contraste corre al generar los tokens y rompe el build cuando una combinación baja de 4.5:1 en texto o de 3:1 en partes de interfaz.

## Consecuencias

- Un solo aspecto y un solo vocabulario en todas las superficies.
- `packages/ui` debe adoptar los tokens. Su tema provisional ya usa crema, tinta y lima, así que la mayor parte del cambio es renombrar. Los pasos están en [Tokens](../design/tokens#adoptar-los-tokens-en-packagesui).
- Los archivos de la marca teal anterior, el favicon y las imágenes sociales son de otra identidad y hay que reemplazarlos cuando exista el arte. Los seis agentes conservan sus colores hasta que decida el dueño de la identidad.
- Los pendientes del sistema siguen abiertos: **lima y arcilla son provisionales** hasta que se puedan leer los tableros de marca, **no hay logo** (el wordmark es tipográfico) y **no hay set de iconos**. Lucide se usa como sustituto en algunos lugares del producto y necesita aprobación.
- Los restaurantes del Hub pueden fijar un color de acento. Reemplaza solo a `--accent` y se verifica el contraste al configurar.

## Alternativas descartadas

- Mantener dos temas (uno de marca para marketing y uno de producto para pantallas): se separan y un guest ve dos empresas.
- Adoptar una paleta de estado de un sistema de diseño público: añadiría una segunda identidad visual para un solo trabajo.
- Usar las combinaciones del sistema sin cambios: seis de ellas quedan por debajo del contraste que necesita una persona con baja visión.
