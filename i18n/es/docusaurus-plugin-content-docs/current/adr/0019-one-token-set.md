---
id: 0019-one-token-set
sidebar_position: 20
title: "0019 · Un solo conjunto de tokens, tematizado por superficie"
sidebar_label: "0019 · Un solo conjunto de tokens, tematizado por superficie"
description: "Un solo conjunto de tokens, tematizado por superficie"
---

# ADR 0019: Un solo conjunto de tokens, tematizado por superficie

| Estado | Fecha | Decisores |
| --- | --- | --- |
| **Propuesta** | 2026-10-04 | Atrium · producto y tecnología |

## Contexto

Existían dos sistemas visuales en paralelo. El sistema de marca (teal profundo, menta, cloud, ámbar, un wordmark en minúscula, Inter Tight e Instrument Serif) se dibujó para identidad y marketing. Las pantallas de producto usaban un tema provisional (tinta, lima, crema, ámbar) escrito antes de encontrar los archivos de la marca, y el prototipo de la Platform usaba una tercera fuente, Geist. La marca no tiene rojo ni verde, pero un dashboard tiene que decir "bien" y "mal". La [decisión 15](../plan/open-decisions) pidió reconciliarlos.

## Decisión

Hay **un solo conjunto de tokens**, escrito una vez en `src/design/tokens.ts` y generado a CSS y a un tema de Tailwind v4.

- La **paleta cruda, la tipografía, el espaciado, los radios y el movimiento** son los del sistema de marca.
- La **capa de producto** añade lo que los prototipos usan pero nunca nombraron: cinco colores de estado (positivo, aviso, peligro, info, neutro), una paleta de datos de seis, las identidades de los agentes y un tema oscuro para el chrome del Manager.
- Los componentes leen **roles** (`surface-card`, `text-strong`, `status-danger-fg`), nunca colores crudos. Una superficie se tematiza redefiniendo roles.
- **Inter Tight** es la fuente del producto. Geist fue un artefacto del prototipo.
- Dos desvíos de los archivos de la marca, ambos por accesibilidad: el anillo de foco es teal con un halo ámbar, porque el ámbar solo es 1.9:1 sobre blanco; y los estados de error usan el estado de peligro, porque el borde amber-600 de la marca era 2.4:1.
- Una guarda de contraste corre al generar los tokens y rompe el build cuando una combinación baja de 4.5:1 en texto o de 3:1 en partes de interfaz.

## Consecuencias

- La Platform, el Manager, el Hub, la app móvil y esta documentación comparten un aspecto y un vocabulario.
- `packages/ui` debe adoptar los tokens; el tema provisional que tiene se reemplaza. Los pasos están en [Tokens](../design/tokens#adoptar-los-tokens-en-packagesui).
- Un cambio de color de marca es un acto deliberado: necesita una decisión, no un comentario en un pull request.
- Los restaurantes del Hub pueden fijar un color de acento. Reemplaza solo a `--accent` y se verifica el contraste al configurar.

## Alternativas descartadas

- Mantener dos temas (marca para marketing, producto para pantallas): se separan y un guest ve dos empresas.
- Adoptar una paleta de estado de un sistema de diseño público: añadiría una segunda identidad visual para un solo trabajo.
- Usar Geist en el producto: no está en el sistema de marca, e Inter Tight tiene métricas cercanas.
