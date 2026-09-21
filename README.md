🌌 ANDRYUS LAB

Plataforma Modular de Microherramientas Digitales 🚀

"No almacenar lo que puede calcularse nuevamente; no conservar lo que puede expirar; no subir al servidor lo que puede procesarse en el navegador."


Bienvenido al repositorio oficial de Andryus Lab, un ecosistema digital diseñado bajo una arquitectura minimalista, elegante y altamente eficiente. Nuestro objetivo no es construir una aplicación monolítica pesada, sino un motor de pequeñas soluciones independientes que resuelven problemas concretos con el mínimo almacenamiento y bajo coste operativo.


🧭 Visión y Arquitectura

Andryus Lab es una plataforma web modular orientada a microherramientas con una experiencia mobile-first. La infraestructura existe para habilitar soluciones rápidas y eficientes, delegando la mayor cantidad de trabajo posible al navegador del usuario. El backend interviene única y exclusivamente cuando aporta un valor real e insustituible.


⚖️ Principios Fundamentales

🏠 Local-first: Si una operación matemática, lógica o de conversión puede hacerse con JavaScript en el dispositivo del usuario, se hace localmente.

📉 Data Minimization: Solo se almacena el mínimo dato estrictamente imprescindible para que la herramienta funcione.

⏳ Ephemeral by default: Los datos temporales cuentan con un tiempo de vida (TTL) y deben eliminarse automáticamente.

🚫 No Heavy Storage: Se evita usar la nube como depósito de PDFs, imágenes o vídeos si el archivo puede ser generado y procesado localmente.

🔄 Provider Independence: Firebase y Supabase son componentes intercambiables; la arquitectura conceptual no está atada a un solo proveedor.

🧩 Modularity: Cada microherramienta es un módulo autónomo con su propia entrada, procesamiento, salida y pruebas.


🛠️ Stack Tecnológico (MVP)

La especificación técnica del Producto Mínimo Viable (MVP) define un ecosistema moderno, ligero y preparado para escalar sin inflar los costes:# Andryus-Labs


CapaTecnologíaRazón Estratégica
Frontend⚡ Vite + TypeScriptLigero, extremadamente rápido y fuertemente tipado.
UI🎨 HTML/CSSComponentes propios para evitar dependencias innecesarias de librerías externas.
Estado Local💾 LocalStorage / IndexedDBPersistencia de datos en el dispositivo sin necesidad de servidor.
Backend A🔥 FirebaseGestión de autenticación (Auth) y funciones serverless puntuales.
Backend B🐘 SupabasePostgreSQL y API para casos donde exista una necesidad relacional real.
Calidad✅ VitestEjecución de pruebas unitarias ultrarrápidas de la lógica de dominio.
DevOps🤖 GitHub ActionsCI/CD para builds y pruebas automáticas en cada push.
Estilo🧹 ESLint + PrettierMantenimiento de la consistencia visual y estructural del código.



🧰 Herramientas Iniciales (Fase MVP)

El MVP demuestra la potencia de la arquitectura descentralizada mediante cuatro herramientas fundacionales:

💰 Real Cost Calculator: Cálculo de coste total y margen comercial ejecutado 100% en local, sin necesidad de backend.

🔋 Battery Runtime Calculator: Estimación de autonomía aproximada operando puramente en el dispositivo del usuario.

🔲 QR Generator: Generación de códigos localmente en el navegador, sin guardar jamás el contenido introducido en ningún servidor.

🔗 Temporary Share: Nuestro primer caso de uso real de persistencia remota; permite compartir cargas útiles (payloads) con una fecha de expiración estricta (TTL) tras la cual se autodestruyen.



📂 Estructura del Ecosistema

El repositorio impone una separación estricta de responsabilidades. Una herramienta de la capa de dominio jamás debe importar directamente un SDK de Firebase o Supabase en su función de cálculo. Todo se comunica mediante adaptadores.

andryus-lab/
├── apps/web/
│   └── src/
│       ├── components/    # UI pura y componentes visuales
│       ├── tools/         # Módulos aislados (ej. real-cost, qr-generator)
│       ├── domain/        # Lógica de negocio y reglas puras
│       └── adapters/      # Implementaciones concretas (firebase, supabase)
├── packages/              # Librerías compartidas (ui, schemas)
└── .github/workflows/     # Tuberías de CI/CD automatizadas



🛡️ Reglas de Oro para Contribuidores

Si deseas aportar código, diseñar una nueva herramienta o entrenar a una IA en este proyecto, debes acatar estas leyes inviolables:

La Pregunta de Fuego: Antes de sugerir Firebase, Supabase, Storage o cualquier API, debes responder: "¿Por qué esta función no puede ejecutarse localmente?". Si existe una respuesta técnica válida, se añade el servicio. Si no, permanece local.

La Regla del Tiempo: "¿Qué dato estamos almacenando y durante cuánto tiempo?". Si no existe una respuesta concreta (como un TTL explícito), ese dato no se almacena.

Seguridad Frontal: El frontend nunca es un lugar seguro; cualquier cosa que llegue al navegador debe considerarse potencialmente visible. Jamás expongas claves privadas o service-role keys en el cliente.



✅ Definition of Done (Criterios de Aceptación)

Toda Pull Request o nueva herramienta debe cumplir estrictamente con lo siguiente para ser fusionada en la rama principal:

[x] Código fuertemente tipado (TypeScript) y formateado.

[x] Las pruebas unitarias (tests) se ejecutan y pasan correctamente (caso normal, cero, extremos e inválidos).

[x] Cero secretos, tokens o contraseñas en el control de versiones de Git.

[x] El diseño es Responsive operando sin problemas desde anchos de 360 px en dispositivos Android.

[x] El coste de almacenamiento está evaluado, estimado y cuenta con una política de retención (TTL) definida si guarda datos.


Documento basado en la Especificación Técnica v1.0 y Documento Maestro de Arquitectura v1.0.
