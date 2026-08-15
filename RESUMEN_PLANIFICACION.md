# Resumen de la etapa de planificación — F-150 Expedition Hub

> Cierre de la fase de planificación (agosto 2026). Este documento es la base de contexto para la siguiente fase, "Vida de Ruta" (control de gastos reales, carga de datos reales de ruta/progreso, fotos, etc. durante el viaje en sí).

## 1. El viaje, en una línea

Martín, Lula y Samy (perro) manejan desde Chattanooga, TN hasta Córdoba, Argentina en una Ford F-150 2019 5.0L V8 con camper. **Salida: 19 de agosto de 2026. Llegada estimada: 27 de diciembre de 2026 — 131 días, 70 paradas.**

Días por región: **EE.UU. 46 · México 41 · Centroamérica 18 · Sudamérica 26**.

Países cruzados en orden: EE.UU. → México → Belice → Guatemala → El Salvador → Honduras → Nicaragua → Costa Rica → Panamá → *(shipping Darién)* → Colombia → Ecuador → Perú → Bolivia → Argentina.

## 2. Dónde vive todo

- **App**: [f150-expedition.vercel.app/mapa.html](https://f150-expedition.vercel.app/mapa.html) — single-page app (`mapa.html`), sin framework.
- **Repo**: `santiagotomaspucheta1-beep/f150-expedition` en GitHub, deploy automático a Vercel en cada push a `main`.
- **Datos**: Firebase Firestore, proyecto `f150-9a6e4`, colección `mapa_ruta`, documento `estado`. Todo cambio de datos (rutas, compras, trámites, ventas, presupuesto) se guarda ahí en tiempo real — no hace falta redeploy para que se vea. Los cambios de *código* (layout, fórmulas, UI) sí necesitan `git push` para llegar a Vercel.
- **Pestañas de la app**: 🎛️ Tablero · 🗺️ Mapa · 🛒 Compras · 📄 Trámites · 📅 Calendario · 💰 Gastos · 🏷️ Ventas · 🚙 3D Camper.
- Estructura del estado (`state` en el JS de `mapa.html`): `stops[]` (paradas con fecha/lat/lon/nota), `items[]` (Compras + Trámites, distinguidos por `cat`), `sales[]` (Ventas), `budget` (presupuesto: `perDayUsd`, `fuel`, `oneOff[]`, `contingencyPct`), `expenses[]` (gastos reales — hoy vacío, es el lugar donde la fase de Vida de Ruta cargaría los gastos reales día a día).

## 3. Qué se hizo en esta sesión

### Ruta / Mapa

- Se corrigió el cruce de líneas en el bloque de EEUU (Glacier NP y Bozeman estaban invertidos en el orden) y el corrimiento de fechas en cascada que eso generaba (~15 paradas, Grand Teton → San Diego).
- **Reordenamiento de México/Baja**: el orden original visitaba Hermosillo (Sonora, lado este) antes de cruzar a Baja California por Tecate/Mexicali (lado oeste), generando un zigzag geográfico sin sentido. Se corrigió: ahora se entra a México directo por Tecate/Mexicali (al lado de San Diego), se recorre toda la península de Baja (Ensenada → Guerrero Negro → Mulegé/Bahía Concepción → La Paz), se vuelve a Santa Rosalía para cruzar en ferry (**Mexferry, Santa Rosalía↔Guaymas, ~10h, sale mié/vie/dom**) al continente, y desde Guaymas se sigue a Hermosillo y después a Mazatlán antes de continuar hacia Guadalajara. La parada "Nogales — cruce a México" se eliminó por completo (ya no hace falta, el cruce real ahora es en Tecate/Mexicali).
- **Compresión de ruta**: de ~167 días originales a 131 días, con salida movida de 10/8 a 19/8. Objetivo pedido por Martín: EE.UU. 45 / México 40 / Centroamérica 20 / Sudamérica el resto — el resultado real quedó en 46/41/18/26 porque Cartagena tiene una espera fija de 15 días por trámites de aduana/shipping que no se puede comprimir.
- Verificado sin fechas superpuestas ni cruces de líneas en las 70 paradas.

### Ventas

- Se sincronizó la pestaña Ventas con el perfil real de Lula en Facebook Marketplace (`facebook.com/marketplace/you/selling`) — 65 publicaciones (13 en venta, 52 vendidas). Total: **~USD 5.050 en venta + ~USD 7.145 ya vendido** (las cifras de vendido cambian a medida que se venden cosas; revisar la pestaña Ventas para el número actualizado).

### Trámites

Se reescribieron los 10 ítems con investigación 2026 real (antes eran 9, genéricos o solo con México cubierto):

1. Tarjeta alternativa, 2. Seguro internacional del auto (ahora con matriz por país de Sudamérica: Ecuador no exige seguro, Bolivia depende de si el Mercosur lo cubre, Argentina con patente extranjera solo permite terceros), 3. Seguro del viajero, 4. Teléfono eSIM, 5. Aduana/TIP vehículo (ahora cubre los 12 países, no solo México), 6. Pasaporte/status migratorio (confirmado: ni Martín ni Lula necesitan visa en ningún país de la ruta, ambos con pasaporte argentino), 7. Título/registro del auto, 8. Licencia IDP, 9. Aerolínea/transporte/documentación de Samy (con el detalle real del shipping del Darién: RoRo Manzanillo→Cartagena, ~USD 1.640-2.840 según tamaño, 10-14 días de auto "parado", ojo con las garrafas de gas), **10. NUEVO — Entrada del auto a Argentina (Villazón): marcado explícitamente como el trámite de mayor riesgo sin resolver**, porque el régimen turístico de importación de vehículo está pensado para extranjeros no residentes, y Martín es ciudadano argentino — falta confirmar con AFIP/consulado qué régimen aplica.

### Gastos / Presupuesto

- Consumo de nafta ahora se ingresa en **MPG** (como el tablero de la F-150) en vez de L/100km.
- Nafta, comida y alojamiento pasaron de un valor único para toda la ruta a **un valor por región** (EE.UU./México/Centroamérica/Sudamérica), investigado con fuentes reales (globalpetrolprices, dailyfuels, tradingeconomics, comparables de overlanders). "Otros" se mantuvo fijo a pedido.
- Contingencia: 15% → **20%**.
- Categoría nueva **Mantenimiento del auto** (~USD 1.100: cambios de aceite, neumáticos, frenos, filtros).
- Categoría nueva **Peajes**, como monto total por tramo (no por día): **~USD 600** (México ~400 es el grueso, Colombia ~110, resto repartido).
- Categoría nueva **Entretenimiento**, con ítems específicos de la ruta real en vez de un $/día genérico: pase America the Beautiful (13 parques NPS en la ruta — ojo, desde 2026 cuesta USD 80 si son residentes de EEUU o USD 250 si son no residentes, a confirmar en recreation.gov), Tikal al amanecer, volcano boarding en Cerro Negro, termas de Arenal, trekking a Acatenango, Canal de Panamá, cenotes de Tulum, El Peñón de Guatapé, tour al Salar de Uyuni, entrada a Custer State Park (no cubierto por el pase federal por ser parque estatal).
- **Presupuesto total estimado actual: ~USD 25.300** para los 131 días (comida+alojamiento+otros ~6.135 + nafta ~5.933 + costos únicos ~9.000 + contingencia 20% ~4.214).

## 4. Riesgos / pendientes abiertos (no resueltos, hay que seguirlos)

- **Entrada del auto a Argentina en Villazón** — el de mayor riesgo. Sin confirmar con AFIP/consulado.
- **Pase America the Beautiful**: confirmar si Martín/Lula califican como "residentes" o "no residentes" de EEUU antes de comprarlo (USD 80 vs 250).
- **Tarifa del ferry Santa Rosalía→Guaymas para el vehículo**: no se encontró el precio exacto para una camioneta con camper, solo el de pasajero. Confirmar directo con Mexferry.
- **Peajes de México**: el monto de USD 400 es una estimación con un solo dato real confirmado (Guaymas→Guadalajara) extrapolado al resto de la ruta con un recargo por categoría de vehículo. Conviene correrlo por una calculadora tipo TollGuru más cerca de la fecha.
- Confirmar si las garrafas de gas (FineFlame, calefactor Vevor) son aceptadas en el shipping del Darién o si hay que vaciarlas antes.

## 5. Para la fase "Vida de Ruta"

Esta app (`mapa.html`) fue la herramienta de **planificación**: define la ruta ideal, el presupuesto estimado, la checklist de trámites y compras, y ahora queda "congelada" como el plan de referencia. `state.expenses[]` ya existe en el modelo de datos pero está vacío — es el lugar pensado para cargar los gastos reales día a día y compararlos contra este presupuesto estimado.

Lo que se sabe de otro proyecto en paralelo (probablemente relacionado): Martín construyó y descartó dos apps de seguimiento diario (una de hábitos/tareas compartida con Lula, y "VIDA", un sistema de check-in personal), y se quedó con una tercera — **Ruta Sur — Bitácora**, un HTML autónomo sin login, offline-first, con odómetro derivado, tarjeta del día (dónde durmieron, gastos multi-moneda, nota) y panel de totales. La regla que sacó de esa experiencia: una sola pantalla, cero fricción, sin acumulación de alcance. Si "Vida de Ruta" es la continuación de esa idea o algo nuevo conectado a esta app del mapa, vale tenerlo en cuenta antes de diseñarla.
