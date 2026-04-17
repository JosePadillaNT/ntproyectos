# 📦 Catálogo de Productos — NT Soluciones

> Referencia oficial para el equipo comercial y el agente.
> Usar este catálogo al crear sitios web y presentaciones.

---

## Suite NT Soluciones

### 🏢 Business
**Descripción:** Plataforma de gestión empresarial integral para PyMEs y medianas empresas.  
**Mercado objetivo:** Empresas con necesidades de administración y control de operaciones.  
**Países disponibles:** MX, DO, CO, ES  
**Integraciones:** SAP, Oracle, Dynamics  

---

### 🤖 FactoIA
**Descripción:** Facturación electrónica potenciada con Inteligencia Artificial. Automatiza la generación, validación y envío de facturas cumpliendo normativas fiscales de cada país.  
**Mercado objetivo:** Empresas con alto volumen de facturación.  
**Países disponibles:** MX (CFDI), DO (NCF), CO (FE), ES (FacturaE)  
**Diferenciador:** IA para clasificación automática de conceptos y detección de errores.  

---

### 🏨 Hospitality
**Descripción:** Suite de soluciones para la industria hotelera y de restaurantes. Integración con sistemas PMS y POS.  
**Mercado objetivo:** Hoteles, cadenas hoteleras, restaurantes, resorts.  
**Países disponibles:** MX, DO, CO, ES  
**Integraciones:** Opera PMS, Micros POS  

---

### 🔗 iSquare
**Descripción:** Middleware de integración entre sistemas POS, PMS, ERP y plataformas de facturación.  
**Mercado objetivo:** Empresas con múltiples sistemas que necesitan comunicarse entre sí.  
**Países disponibles:** MX, DO  
**Diferenciador:** Conecta sistemas legados con tecnología moderna sin reescribir nada.  

---

### Nómina
**Descripción:** Gestión completa de nómina y recursos humanos. Cálculo automático de impuestos, prestaciones y timbrado de recibos.  
**Mercado objetivo:** Empresas con 10+ empleados.  
**Países disponibles:** MX, DO  
**Cumplimiento:** IMSS, SAT (MX) / TSS, DGII (DO)  

---

### Orders
**Descripción:** Sistema de gestión de pedidos y órdenes de trabajo. Flujo completo desde la solicitud hasta la entrega y facturación.  
**Mercado objetivo:** Distribuidoras, empresas de servicios, restaurantes.  
**Países disponibles:** MX, DO, CO  
**Integraciones:** Hospitality, FactoIA  

---

### Valid
**Descripción:** Plataforma de validación y compliance fiscal. Verifica la autenticidad de facturas electrónicas ante los organismos fiscales de cada país.  
**Mercado objetivo:** Contadores, áreas de finanzas, auditorías.  
**Países disponibles:** MX, DO, CO, ES  
**Diferenciador:** Validación en tiempo real contra el SAT, DGII, DIAN y AEAT.  

---

## FactoSuite (producto independiente)

### 🧾 FactoSuite
**Descripción:** Suite completa de facturación electrónica multi-país. Solución todo-en-uno para empresas que operan en múltiples países de Latinoamérica.  
**Mercado objetivo:** Grupos empresariales, multinacionales, empresas con operaciones en +2 países.  
**Países disponibles:** MX, DO, CO, ES, CR  
**Marca:** Tiene identidad visual propia (logo `FactoSuite/`)  

---

## Tabla resumen

| Producto | MX | DO | CO | ES |
|---|---|---|---|---|
| Business | ✅ | ✅ | ✅ | ✅ |
| FactoIA | ✅ | ✅ | ✅ | ✅ |
| Hospitality | ✅ | ✅ | ✅ | ✅ |
| iSquare | ✅ | ✅ | 🔧 | 🔧 |
| Nómina | ✅ | ✅ | 🔧 | 🔧 |
| Orders | ✅ | ✅ | ✅ | 🔧 |
| Valid | ✅ | ✅ | ✅ | ✅ |
| FactoSuite | ✅ | ✅ | ✅ | ✅ |

Disponible / En desarrollo

---

## NT Identity Connect

**Tipo:** Plataforma SaaS de cumplimiento regulatorio
**Mercado:** Solo Mexico (MX)
**Regulacion:** PUI — Plataforma Unica de Identidad (SEGOB / RENAPO / CNB)

### Descripcion
Automatiza el cumplimiento obligatorio de la ley PUI para hoteles en Mexico.
La Plataforma Unica de Identidad exige que los hoteles busquen personas desaparecidas en sus registros de huespedes.
El incumplimiento conlleva multas de $1.17M a $2.34M MXN por infraccion (Art. 43 Bis LGMDFP).

### Funcionalidades clave
- Busqueda automatica en 3 fases: datos basicos, historica (hasta 12 anos), continua (cada 1-4 hrs)
- OCR inteligente de INE con Google Cloud Vision + Gemini Vision como respaldo
- 5 fuentes de datos: PMS, CSV, formulario, escaneo INE, API REST
- Cifrado AES-256-GCM por hotel con clave unica en Secret Manager
- Notificacion cifrada automatica al gobierno cuando hay coincidencia
- Dashboard de operacion para el personal del hotel
- Reportes SAST/DAST/SCA listos para SEGOB
- JWT dual: PUI gobierno + Auth0 para operadores

### Planes
| Plan | Perfil | Incluye |
|---|---|---|
| Basico | Hotel independiente | PUI + panel + CSV/formulario |
| Profesional | Cadena hotelera | + Integracion PMS + Escaneo IA |
| Enterprise | Grupo hotelero | + Multi razon social + API abierta + CFDI + analitica |

### Ventaja competitiva
Unico producto en el mercado con OCR IA (Cloud Vision + Gemini), integracion con cualquier PMS
(Opera, Innsist, Cloudbeds, SisHotel) y suite CFDI incluida.

### URL de producto
`/identity-connect/` — subpagina del sitio MX
