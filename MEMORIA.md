# MEMORIA DEL PROYECTO — Panamerican Expedition

> Propósito: si retomás este proyecto en otro chat o computadora, pegá o compartí este archivo para dar todo el contexto. Mantener actualizado al final de cada sesión de trabajo.

## Quiénes y qué

- **Viajeros**: Martín Pucheta + Lula + Samy (perro).
- **Vehículo**: Ford F-150 2019, V8 5.0, con canopy camper ya armado para dormir (fotos en `Fotos camioneta/`).
- **Viaje**: EEUU → México → Centroamérica → Argentina, por tierra.
- **Salida**: 10 de agosto de 2026 desde Chattanooga, TN. Máximo ~60 días en EEUU (margen migratorio de 2 meses).

## Decisiones tomadas

1. **Punto de partida**: Chattanooga (confirmado 2026-07-05).
2. **Ruta EEUU (híbrida, V2)**: Chattanooga → Ozarks/Buffalo River (AR) → Kansas (Monument Rocks) → Badlands/Black Hills (SD) → Devils Tower → Bozeman → Glacier (MT) → Yellowstone/Grand Teton (WY) → Colorado (RMNP, Denver, Million Dollar Hwy) → Utah (Moab, Capitol Reef, Bryce, Zion) → California (Sequoia, Yosemite, SF, Hwy 1, Big Sur, San Diego) → Nogales.
   - Se descartaron: Idaho, Oregon, Redwoods, Oklahoma. Reemplazan al eje del Roadbook V1.
3. **México inicio**: Nogales → Hermosillo (amigos, obligatorio) → Baja de norte a sur → ferry desde La Paz (Mazatlán o Topolobampo, sin decidir).
4. **Mapa**: HTML interactivo (`Mapa_Ruta.html`) + KML para Google My Maps (`Ruta_Panamerican.kml`).

## Pendientes / decisiones abiertas

- Ferry: destino (Mazatlán vs Topolobampo), operador (Baja Ferries vs TMC), reglas para Samy.
- Compras/proyectos vehículo: portón automático, tapar ventanas por dentro, soporte celular, Starlink vs eSIM, pantalla F-150 (CarPlay roto — diagnosticar USB hub primero), cámara + sensores retroceso, proyector, drone (<250g sugerido).
- Ruta post-ferry: México central y Centroamérica sin planificar todavía.
- Presupuesto diario sin definir.

## Convenciones de trabajo

- `PLAN.md` es el documento maestro; toda decisión nueva se registra ahí y se resume acá.
- Fechas en formato bloque (ver tabla en PLAN.md); no son rígidas.
- Prioridades irrenunciables según Roadbook V1: Montana, California, Hermosillo, Baja.
- Con Samy: parques nacionales = scenic drives; los días buenos de perro son en National Forests/BLM/state parks.

## Historial de sesiones

- **2026-07-05**: Sesión inicial. Se leyó Roadbook V1, se definió ruta híbrida V2 con bloques y fechas, se creó PLAN.md, mapa HTML y KML, y se registró la lista de compras/proyectos.
- **2026-07-05 (2)**: `Mapa_Ruta.html` pasó a ser una app con 2 páginas: Mapa (editable: agregar/editar/borrar/reordenar paradas con fecha, botón "Navegar" que abre Google Maps) y Compras (checklist por categorías Samy/Auto/Nosotros/Trámites con ~31 ítems, links y notas editables). Los cambios se guardan en el navegador (localStorage); para pasar a otra compu usar botones Exportar/Importar (archivo `panamerican_datos.json`). La lista de compras completa vive ahora en la app, no en PLAN.md.
- **2026-07-11**: Costos únicos investigados con precios 2026 para 2 adultos + Samy y cargados en la app (pestaña Presupuesto → `oneOff`, migración `expensesVersion` 4 que NO borra gastos registrados). Total estimado ~USD 6.390 (neto ~5.990 porque el depósito TIP de USD 400 se recupera en Chetumal). Claves: ferry La Paz→Mazatlán ~USD 750 (F-150 hasta 6 m + 2 pax + cabina pet-friendly + mascota 650 MXN); Darién RoRo todo incluido ~USD 2.800; vuelos PTY→CTG ~USD 240 los dos; OJO Samy: Copa NO transporta mascotas en bodega en dic-ene — si pesa +10 kg con bolso, usar Avianca vía Bogotá (~USD 200); FMM 983 MXN c/u; Belice ~USD 105 (BAHA BZ$70 el permiso del perro); fronteras Guatemala→Panamá ~USD 370; SafetyWing ×2 ~USD 750. Pendiente: cotizar shipping con agente real (meses antes) y confirmar peso de Samy para decidir aerolínea.
- **2026-07-08**: Nota: los datos de "Compras" ya NO viven solo en localStorage, migraron a Firebase Firestore (proyecto `f150-9a6e4`, colección `mapa_ruta`, doc `estado`) — el sitio está deployado en `f150-expedition.vercel.app` desde el repo de GitHub (`santiagotomaspucheta1-beep/f150-expedition`). Para actualizar contenido ya guardado en Firebase sin acceso directo a la consola: editar el array `DEFAULT_ITEMS` en `mapa.html` (agrega notas/links nuevos sin duplicar) y subir en 1 el número de `itemsVersion` (la función `migrateItems` fusiona lo nuevo la próxima vez que alguien abre la página). Se aclaró además que la pantalla instalada actualmente NO es un Sync 3 de fábrica intacto — ya hubo un cambio de head unit previo; hay una unidad de repuesto Android aftermarket (TS10) con el vidrio roto que entregó el vendedor, y la cámara de retroceso ya está instalada físicamente en el portón (falta solo que una pantalla la muestre). Detalle en PLAN.md sección 3 y en la app.
