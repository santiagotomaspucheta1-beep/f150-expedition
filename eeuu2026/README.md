# Expedición EEUU 2026 — app

App de planificación del viaje Chattanooga → Los Ángeles (24 ago – 6 oct 2026),
venta de la camioneta y vuelo a Córdoba con Samy.

## Es una app NUEVA, no una migración

La app de la Panamericana (`/mapa.html`) queda **intacta y funcionando**, con
todos sus datos. Esta vive en su propia carpeta y, sobre todo, **en su propio
documento de Firestore**:

| App | Documento en Firestore |
|---|---|
| Panamericana (131 días) | `mapa_ruta/estado` |
| Expedición EEUU (44 días) | `expedicion_eeuu/estado` |

Mismo proyecto de Firebase (`f150-9a6e4`), documentos distintos: podés abrir las
dos a la vez y no se pisan. El plan viejo queda como archivo por si la camioneta
se recupera y vuelve a la mesa.

## Publicar

La carpeta se sube tal cual al repo. Vercel la sirve en:

    https://f150-expedition.vercel.app/eeuu2026/

No hay build ni dependencias: son tres archivos estáticos.

## Archivos

- `index.html` — la app entera (7 pestañas, sin framework)
- `manifest.webmanifest` — para instalarla en el teléfono como app
- `sw.js` — service worker: hace que **abra** sin señal

## Sobre el offline

El service worker cachea el shell (HTML + Leaflet + Firebase), así que la app
**abre** sin señal — importante en Bighorn, Beartooth y buena parte de Glacier,
donde no hay cobertura de ningún operador.

Pero los **datos** viven en Firestore y necesitan conexión. Sin señal ves lo
último que quedó en caché, y lo que edites no se sincroniza hasta que vuelva.
Por eso el header tiene un indicador: **● sincronizado** en verde, o
**● sin señal — no guarda** en rojo. Es para que nadie cargue un gasto en
Wyoming creyendo que quedó guardado.

## Cambiar los datos por defecto más adelante

Los `DEFAULT_STOPS`, `DEFAULT_ITEMS`, `DEFAULT_BUDGET` y `DEFAULT_SALES` solo se
escriben en Firestore la primera vez. Para empujar un cambio a un documento que
ya existe: editá el `DEFAULT_*` **y subí la constante de versión** correspondiente
(`ITEMS_VERSION`, `STOPS_VERSION`, `EXPENSES_VERSION`, `SALES_VERSION`, arriba de
las funciones `migrate*`). Sin subir la versión, el cambio no llega a la nube.

Ojo: subir la versión **reemplaza**, no fusiona. Lo que hayan tildado o editado
a mano en esa sección se pierde.

Y si cambiás `index.html`, subí también `VERSION` en `sw.js` — si no, el
teléfono sigue mostrando la versión vieja desde la caché.
