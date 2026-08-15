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
- **2026-07-28**: Diseño del estante para la heladera Dometic CFX5 75DZ (89,2 x 49,5 x 47,2cm, ~25kg vacía) en el fondo de la camioneta, contra la pared de la ventana a la cabina, pegado al final de la mesada izquierda (mesada real: 56cm alto, 53cm de mesada + 75cm de pasillo confirmados por Martín). Plataforma fija (sin rieles) de 100 x 57cm, 8,9cm de alto (marco de 1x4 de canto + tapa de contrachapado 3/4in, mismo laminado que la mesada), tapa de la heladera queda a 56,1cm — con el techo abajo (113cm real) sobran 56,9cm para abrir la tapa; con el techo arriba (>200cm) sobra de sobra. Anclaje: bulones al piso + Dometic Tie-Down Kit (no alcanza con tornillos solos). Se generaron 3 entregables en la carpeta del proyecto: `estante_dometic_3d.html` (diseño 3D interactivo con sliders para probar posición/altura/techo), `lista_compras_home_depot.xlsx` (materiales con modelos y precios de Home Depot), `manual_estante_dometic.docx` (manual paso a paso con diagramas de corte). Pendiente: confirmar contra el `configurador.html` existente si el ancho total real del fondo coincide (el configurador tenía dims viejas/desactualizadas: pasillo daba 41cm ahí vs 75cm real).
- **2026-08-15**: Cierre de la fase de planificación. Se corrigió el orden México/Baja/Hermosillo (entrada directa por Tecate/Mexicali, ferry Santa Rosalía↔Guaymas en vez de La Paz↔Mazatlán, Nogales eliminado del todo), se comprimió la ruta de ~167 a 131 días con salida movida al 19/8 (EE.UU. 46 / México 41 / Centroamérica 18 / Sudamérica 26 días), se sincronizó Ventas con el perfil real de Lula en Facebook Marketplace (65 publicaciones), se reescribieron los 10 ítems de Trámites con investigación 2026 (incluye alerta nueva: entrada del auto a Argentina en Villazón sin resolver, régimen de ciudadano vs. turista) y se rediseñó Gastos (consumo en MPG, tarifas de nafta/comida/alojamiento por región, contingencia al 20%, categorías nuevas de Mantenimiento/Peajes/Entretenimiento). Presupuesto total estimado: ~USD 25.300. Detalle completo en `RESUMEN_PLANIFICACION.md`.
- **2026-07-29**: Rediseño del mueble de la Dometic (v2, reemplaza al de la sesión anterior). Ahora es un gabinete de 56cm de alto x 70cm de ancho x 57cm de profundidad — mismo alto que la mesada — pegado directamente a la punta de la mesada izquierda contra la pared del fondo. La heladera queda centrada en el tramo combinado mesada+mueble (36,1cm apoyada sobre la mesada existente, 53,1cm sobre el mueble nuevo), sin volar en el aire. Los 89,2cm de la heladera quedan perpendiculares al pasillo (cruzando el ancho), como pidió Martín. Trade-offs aceptados conscientemente: con el techo abajo (113cm) NO alcanza para abrir la tapa (solo 9,8cm libres) — hay que levantar el techo cada vez; y el mueble+heladera tapan buena parte de la ventana del fondo (quedan 53cm por encima de su borde inferior). Construcción: 2 laterales de contrachapado (56x57cm, de un panel 2x4ft) + 1 tapa (70x57cm, de otro panel 2x4ft) + travesaño inferior de 1x4, sin fondo ni piso propio (se atornilla a la mesada y a la pared, se bulona al piso). Presupuesto ≈ USD 312 (≈ USD 247 sin comprar laminado nuevo). Los 3 archivos (`estante_dometic_3d.html`, `lista_compras_home_depot.xlsx`, `manual_estante_dometic.docx`) están actualizados a esta versión en la carpeta del proyecto.
