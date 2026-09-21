```markdown
<div align="center">

# 🧪 ANDRYUS LAB

### ⚡ Microherramientas Digitales · Minimalistas · Efímeras · Poderosas ⚡

<br>

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge&logo=github)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Mobile First](https://img.shields.io/badge/Mobile--First-✅-FF69B4?style=for-the-badge)
![Local First](https://img.shields.io/badge/Local--First-🚀-00C853?style=for-the-badge)

<br>

> _"No almacenar lo que puede calcularse nuevamente;_
> _no conservar lo que puede expirar;_
> _no subir al servidor lo que puede procesarse en el navegador."_ 🌐✨

<br>

[🚀 Empezar](#-empezar) · [📖 Documentación](#-documentación) · [🧰 Herramientas](#-herramientas) · [🏗️ Arquitectura](#-arquitectura) · [🤝 Contribuir](#-contribuir)

</div>

---

## 🌟 ¿Qué es Andryus Lab?

**Andryus Lab** es una plataforma web modular compuesta por pequeñas herramientas independientes, diseñada bajo una filosofía radical: **resolver problemas concretos con el mínimo almacenamiento posible, bajo coste operativo y datos efímeros cuando sea viable**.

No es otra aplicación monolítica. No es otro SaaS que consume recursos innecesarios. Es un **ecosistema de microsoluciones** donde el navegador hace la mayor parte del trabajo pesado y el backend solo interviene cuando aporta valor real. 💡

### 🎯 Visión

Construir un motor de pequeñas soluciones donde **10.000 usuarios pueden utilizar una herramienta miles de veces sin que cada uso obligue a guardar un archivo o una fila permanente**.

---

## 🧭 Filosofía · Principios Arquitectónicos

| # | 🎯 Principio | 📜 Regla |
|---|---|---|
| 1️⃣ | **Local-first** | Si una operación puede hacerse con JavaScript en el dispositivo, se hace localmente. |
| 2️⃣ | **Data minimization** | Solo se almacena el mínimo dato imprescindible. |
| 3️⃣ | **Ephemeral by default** | Los datos temporales tienen TTL y deben eliminarse automáticamente. ♻️ |
| 4️⃣ | **No heavy storage** | Evitar usar la nube como depósito de PDFs, imágenes o vídeos cuando puedan generarse localmente. |
| 5️⃣ | **Provider independence** | Firebase y Supabase son componentes intercambiables; no hay dependencia conceptual de uno solo. |
| 6️⃣ | **Modularity** | Cada herramienta es un módulo con entrada, procesamiento, salida y pruebas propias. |

---

## 🏗️ Arquitectura General

```
┌─────────────────────────────────────────────────────────────┐
│                      👤 USUARIO / MÓVIL                      │
│                         (HTTPS)                              │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              🎨 FRONTEND ESTÁTICO (Vite + TS)                │
│         HTML + CSS + JavaScript/TypeScript                   │
│    UI · Herramientas locales · Validaciones                  │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
               ▼                              ▼
┌──────────────────────────┐    ┌──────────────────────────────┐
│   🌐 NAVEGADOR           │    │  🔥 FIREBASE                  │
│   Cálculo local          │    │  Auth / funciones puntuales   │
│   PDF / imágenes         │    │  Datos ligeros                │
│   IndexedDB              │    │  Sincronización               │
└──────────────────────────┘    └──────────────────────────────┘
                                          │
                                          ▼
                           ┌──────────────────────────────┐
                           │  ⚡ SUPABASE                  │
                           │  PostgreSQL · Edge Functions  │
                           │  Storage puntual              │
                           │  APIs estructuradas           │
                           └──────────────────────────────┘
```

> ⚠️ **Nota:** No es obligatorio usar Firebase y Supabase simultáneamente. La arquitectura permite que cada herramienta use solo frontend, frontend+Firebase, frontend+Supabase, o una combinación controlada cuando exista una razón técnica.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Razón |
|---|---|---|
| 🎨 **Frontend** | Vite + TypeScript | Ligero, rápido y modular |
| 🖼️ **UI** | HTML/CSS + componentes propios | Evita dependencias innecesarias |
| 💾 **Estado local** | LocalStorage / IndexedDB | Persistencia sin servidor |
| 🔥 **Backend A** | Firebase | Auth y funciones puntuales |
| ⚡ **Backend B** | Supabase | PostgreSQL/API cuando exista necesidad relacional |
| 🧪 **Tests** | Vitest | Pruebas rápidas de lógica |
| ✨ **Lint/Format** | ESLint + Prettier | Consistencia del código |
| 🚀 **CI/CD** | GitHub Actions | Build y tests automáticos |

---

## 🧰 Herramientas Incluidas

### 🔧 Herramientas 100% Locales (sin backend)

| Herramienta | Descripción | Persistencia |
|---|---|---|
| 💰 **Real Cost Calculator** | Calcula el coste real de un producto incluyendo envío, comisiones, impuestos, empaque y publicidad. | ❌ Ninguna |
| 🔋 **Battery Runtime Calculator** | Estima la autonomía de una batería con advertencias sobre los supuestos del cálculo. | ❌ Ninguna |
| 📱 **QR Generator** | Genera códigos QR localmente sin guardar el contenido en ningún servidor. | ❌ Ninguna |

### 🔄 Herramientas con Persistencia Temporal

| Herramienta | Descripción | Persistencia |
|---|---|---|
| 📨 **Temporary Share** | Comparte texto o datos con enlaces que expiran automáticamente (TTL configurable). | ✅ Remota con TTL |

---

## 📁 Estructura del Proyecto

```
andryus-lab/
├── 📂 apps/
│   └── 📂 web/
│       └── 📂 src/
│           ├── 📂 app/
│           ├── 📂 components/
│           │   ├── 📂 layouts/
│           │   └── 📂 pages/
│           ├── 📂 tools/                  ⭐ Cada herramienta es un módulo
│           │   ├── 📂 real-cost/
│           │   ├── 📂 battery-runtime/
│           │   ├── 📂 qr-generator/
│           │   └── 📂 temporary-share/
│           ├── 📂 domain/                 🧠 Lógica pura de negocio
│           ├── 📂 repositories/
│           ├── 📂 adapters/
│           │   ├── 📂 firebase/
│           │   └── 📂 supabase/
│           ├── 📂 storage/
│           ├── 📂 security/
│           └── 📂 utils/
├── 📂 packages/
│   ├── 📂 ui/
│   ├── 📂 schemas/
│   └── 📂 config/
├── 📂 docs/
├── 📂 tests/
├── 📂 public/
├── 📂 .github/workflows/
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 README.md
```

> 🔑 **Regla de oro:** Una herramienta **nunca** debe importar directamente un SDK de Firebase/Supabase dentro de su función de cálculo. Debe hablar con una interfaz de repositorio/adaptador.

---

## ♻️ Ciclo de Vida de los Datos Temporales

```
    ┌──────────┐
    │  CREAR   │
    └────┬─────┘
         ▼
    ┌──────────┐
    │ VALIDAR  │
    └────┬─────┘
         ▼
    ┌──────────────────┐
    │ GUARDAR SOLO     │
    │ LO NECESARIO     │
    └────┬─────────────┘
         ▼
    ┌──────────────────┐
    │ ASIGNAR TTL /    │
    │ expiresAt        │
    └────┬─────────────┘
         ▼
    ┌──────────┐
    │ UTILIZAR │
    └────┬─────┘
         ▼
    ┌──────────────────┐
    │ EXPIRAR O        │
    │ ELIMINAR         │
    └────┬─────────────┘
         ▼
    ┌──────────────────┐
    │ LIMPIAR ÍNDICES  │
    └────┬─────────────┘
         ▼
    ┌──────────────────┐
    │ ESPACIO          │
    │ REUTILIZABLE ♻️  │
    └──────────────────┘
```

### 📋 Ejemplo de registro temporal

```json
{
  "id": "7F92KA",
  "payload": "...",
  "createdAt": "2026-09-21T22:00:00Z",
  "expiresAt": "2026-09-21T22:10:00Z",
  "maxViews": 1,
  "views": 0
}
```

---

## 🚀 Empezar

### 📥 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/andryus-lab.git
cd andryus-lab

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar pruebas
npm run test
```

### 🔐 Variables de Entorno

Crear un archivo `.env` en la raíz:

```env
# Firebase (opcional)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=

# Supabase (opcional)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

> ⚠️ **Nunca** coloques claves privadas, service-role keys o secretos en el frontend.

---

## 🧪 Testing

Cada herramienta incluye pruebas unitarias que cubren:

- ✅ Caso normal
- ✅ Valores cero
- ✅ Valores extremos
- ✅ Entrada inválida
- ✅ Precisión numérica

```typescript
describe("calculateRealCost", () => {
  it("sums all cost components", () => {
    expect(
      calculateRealCost({
        purchase: 100,
        shipping: 10,
        commission: 5,
        taxes: 5,
        packaging: 2,
        advertising: 3
      }).total
    ).toBe(125);
  });
});
```

---

## 🗺️ Roadmap

| Fase | Sprint | Descripción |
|---|---|---|
| 🏁 **Fase 0** | — | Especificación, identidad, arquitectura, políticas |
| 🏗️ **Fase 1** | Sprint 1 | Repositorio + Vite/TS + UI base + routing + CI |
| 🧰 **Fase 2** | Sprint 2 | Real Cost + Battery Runtime + QR Generator |
| 🧪 **Fase 3** | Sprint 3 | Testing + SEO + accesibilidad + PWA opcional |
| 🔄 **Fase 4** | Sprint 4 | Temporary Share + backend + TTL + rate limiting |
| 🔐 **Fase 5** | Sprint 5 | Autenticación opcional + dashboard mínimo |
| 📊 **Fase 6** | Sprint 6 | Métricas + monetización experimental |
| 🚀 **Fase 7** | Sprint 7 | Nuevas herramientas basadas en uso real |

---

## 🔒 Seguridad

- 🚫 Nunca colocar claves privadas o service-role keys en el frontend
- ✅ Validar datos tanto en cliente como en servidor
- 🔐 Aplicar autorización por usuario/registro
- 📏 Limitar tamaño de payloads
- ⏱️ Aplicar rate limiting a endpoints públicos
- 🧼 Sanitizar contenido HTML
- 🛡️ Separar identificadores públicos de internos

> 📌 **Regla:** Cualquier cosa que llegue al navegador debe considerarse potencialmente visible para el usuario. El frontend **nunca** es un lugar seguro para secretos.

---

## 💎 Modelo de Monetización

| Nivel | Descripción |
|---|---|
| 🆓 **Gratis** | Herramientas esenciales sin cuenta |
| 📢 **Publicidad** | Solo cuando exista tráfico suficiente |
| 👑 **Premium** | Historial, sincronización, personalización |
| 🏢 **B2B** | Paquetes para pequeños negocios |
| 🤝 **Afiliación** | Solo con relación natural y transparente |
| 🎯 **Especializadas** | Productos digitales con valor concreto |

---

## 📱 Mobile-First

- 📐 Interfaz usable desde 360px de ancho
- 👆 Botones táctiles grandes
- 🚫 No depender de hover
- ⌨️ Inputs con teclado numérico cuando corresponda
- ⚡ Procesamiento local para evitar esperas
- 🤖 Compatibilidad con navegadores Android modernos
- 🎭 Estados claros: calculando, listo, error, copiado, expirado

---

## 📊 Observabilidad

Se monitorean las siguientes métricas **sin registrar contenido privado**:

- ⏱️ Tiempo de respuesta
- ❌ Errores por endpoint
- 📈 Elementos temporales creados/expirados
- 📦 Tamaño promedio de payload
- 🌐 Uso de egress y almacenamiento
- 🐛 Tasa de errores del frontend

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Antes de contribuir:

1. 🍴 Haz fork del repositorio
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/nueva-herramienta`)
3. ✍️ Escribe tests para tu código
4. 💾 Haz commit de tus cambios (`git commit -m 'feat: añadir nueva herramienta'`)
5. 🚀 Haz push a la rama (`git push origin feature/nueva-herramienta`)
6. 📨 Abre un Pull Request

### ✅ Checklist antes de enviar un PR

- [ ] Código tipado y formateado
- [ ] Tests pasando
- [ ] Sin secretos en Git
- [ ] Validación de entradas
- [ ] Responsive en Android
- [ ] Accesibilidad básica
- [ ] Errores manejados
- [ ] Documentación de la herramienta
- [ ] Métricas mínimas
- [ ] Política de retención definida

---

## 🎯 Reglas de Oro para Futuras IAs/Desarrolladores

<div align="center">

### 🥇 Primera Pregunta Obligatoria

> _"¿Por qué esta función no puede ejecutarse localmente?"_

Si existe una respuesta técnica válida → se añade el servicio.
Si no existe → **permanece local**.

### 🥈 Segunda Pregunta Obligatoria

> _"¿Qué dato estamos almacenando y durante cuánto tiempo?"_

Si no existe una respuesta concreta → **ese dato no debe almacenarse**.

</div>

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [`LICENSE`](LICENSE) para más detalles.

---

<div align="center">

### 🧪 Hecho con 💙 por la comunidad Andryus Lab

<br>

**Andryus Lab no es "un sitio que almacena herramientas".**
**Es un motor de pequeñas soluciones.** ⚡

<br>

[⭐ Dale una estrella si te gustó el proyecto](#) · [🐛 Reportar un bug](../../issues) · [💡 Sugerir una herramienta](../../issues/new)

<br>

![Andryus Lab](https://img.shields.io/badge/Andryus-Lab-646CFF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMyAxNi4xMnMtLjUzLjQtMS41LjRjLTEuMTAgMC0xLjUtLjQtMS41LS40cy0uNC0uMy0uNC0uOWMwLS42LjQtLjkuNC0uOXMuNTMtLjQgMS41LS40YzEuMSAwIDEuNS40IDEuNS40cy40LjMuNC45YzAuNi0uNC45LS40Ljl6Ii8+PC9zdmc+)

<br>

<sub>📅 Documento Maestro v1.0 · Septiembre 2026</sub>

</div>
```
