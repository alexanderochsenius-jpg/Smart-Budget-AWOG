

Archivo creado por IA GEMINI de Google el 2026 julio 05 a las 22:50 horas aprox. 
Aquí tienes un archivo **`README.md`** completo, estructurado profesionalmente y adaptado exactamente a la estructura actual de tu proyecto **SmartBudget**.
Puedes copiar este contenido directamente y crear tu archivo en GitHub siguiendo los pasos que vimos antes.
```markdown
# SmartBudget — Tus finanzas, en orden 📊
SmartBudget es una aplicación web de finanzas personales diseñada para ofrecer una vista clara de gastos, ingresos y metas de ahorro en un solo lugar de forma intuitiva, accesible y visual, eliminando la complejidad de las tradicionales hojas de cálculo.
Este proyecto fue desarrollado en el marco del **Curso Sence Front End Trainee (Módulo 3, Producto Digital)**.
## 📂 Estructura de Carpetas y Orden del Proyecto

Para mantener el código mantenible, escalable y limpio, el proyecto organiza sus estilos utilizando la metodología BEM y una arquitectura modular basada en el patrón de Sass. El orden de los archivos dentro del repositorio es el siguiente:
text
smartbudget-repository/
│
├── abstracts/            # Herramientas globales de Sass (No generan código CSS por sí solas)
│   ├── _variables.scss   # Token system: Sistema de colores (Tema oscuro), fuentes y espaciados.
│   └── _mixins.scss      # Bloques de código reutilizables (Flexbox, media queries responsive, etc.).
│
├── components/           # Elementos o componentes visuales aislados y reutilizables
│   ├── _navbar.scss      # Estilos de la barra de navegación superior (Header).
│   └── _tarjeta.scss     # Bloque base para los contenedores interactivos y destacados.
│
├── pages/                # Estilos exclusivos para secciones o páginas completas del sitio
│   └── _mercados.scss    # Estilos del módulo de mercados financieros (Oro, Bitcoin, Acciones).
│
├── css/                  # Archivos CSS finales listos para el navegador
│   └── style.css         # Archivo CSS unificado y compilado a partir de los módulos de Sass.
│
├── index.html            # Estructura e interfaz principal del producto digital.
├── main.js               # Lógica de interacciones (Modales, menús móviles y scroll suave).
├── main.scss             # Archivo centralizador que importa y unifica todos los módulos Sass.
└── README.md             # Documentación general del proyecto.

## 💻 Explicación Detallada de los Códigos

### 1. Interfaz y Estructura (`index.html`)

Es el punto de entrada de la aplicación. Define la arquitectura semántica del sitio web para garantizar una correcta accesibilidad (WCAG 2.1). Está dividido en secciones clave:
* **Navbar:** Barra de navegación fija con el logotipo adaptado en fucsia y verde, menú interactivo y la firma digital del proyecto.
* **Hero Section:** Mensaje principal ("Tu dinero, bajo control") acompañado de un Dashboard financiero simulado con balances y gráficos en tiempo real.
* **Características, Cómo funciona y Planes:** Secciones modulares que explican las ventajas del software y sus diferentes niveles de suscripción.
* **Mercados Financieros:** Panel oscuro integrado con tablas responsivas para visualizar las cotizaciones de activos.
### 2. Lógica de Interacción (`main.js`)
Archivo en JavaScript nativo encargado de dar vida a los elementos interactivos del sitio:
* **Control de Modales:** Funciones para abrir y cerrar la ventana flotante de contacto (`abrirModal` / `cerrarModal`), incluyendo accesibilidad mediante el enfoque automático de campos y cierre con la tecla `Escape`.
* **Menú Hamburguesa:** Controla el despliegue del menú de navegación en dispositivos móviles mediante estados CSS.
* **Navegación Suave (Smooth Scroll):** Aplica un desplazamiento fluido y estético al hacer clic en los enlaces internos de la barra superior.
### 3. Estilos Centralizados (`main.scss`)
Funciona como el motor de importación del diseño. En lugar de escribir miles de líneas en un solo lugar, utiliza las directivas modernas de Sass (`@use`) para llamar a las abstracciones, componentes y vistas en el orden correcto de jerarquía, garantizando que no se duplique código en la compilación.
### 4. Herramientas y Variables (`abstracts/`)
* **`_variables.scss`:** Centraliza los tokens de diseño. Configura el esquema de color en **Tema Oscuro** utilizando variables para el fondo base, superficies de tarjetas, alertas y tipografías (Syne para títulos e Inter para textos).
* **`_mixins.scss`:** Contiene plantillas de código reutilizables como `@mixin desde-pantalla` y `@mixin hasta-pantalla` que gestionan los puntos de quiebre (breakpoints) para que la página sea 100% responsiva en móviles, tablets y monitores grandes.
### 5. Componentes de Interfaz (`components/`)
* **`_navbar.scss`:** Diseña el comportamiento de la cabecera, fijándola en la parte superior con un efecto de desenfoque de fondo (`backdrop-filter`) y organizando los elementos mediante Flexbox.
* **`_tarjeta.scss`:** Aplica los estilos base de las "cards" del sitio, controlando sus sombras, micro-animaciones al pasar el cursor (`hover`) y variantes de diseño (como las tarjetas destacadas o negativas).
### 6. Secciones Específicas (`pages/`)
* **`_mercados.scss`:** Controla los estilos de la sección financiera. Configura los paneles oscuros de alto contraste para mostrar las variaciones porcentuales (subidas en verde, bajadas en rojo) y provee soporte de desbordamiento horizontal (`overflow-x: auto`) para que las tablas de acciones no se deformen en teléfonos móviles.
### 7. Compilación Final (`css/style.css`)
Es el resultado de procesar todos los archivos `.scss`. Contiene el código CSS interpretado que el navegador lee directamente, incluyendo la importación de tipografías desde Google Fonts, el reseteo global de márgenes (`box-sizing`), las clases utilitarias de accesibilidad (`.sr-only`) y las adaptaciones para pantallas táctiles.
## 🛠️ Tecnologías Utilizadas

* **HTML5** Semántico
* **CSS3 / SASS** (Arquitectura modular y Metodología BEM)
* **JavaScript** (Vanilla JS)

## ✒️ Autoría y Créditos

* **Desarrollador:** Alexander Wolfgang Ochsenius Geis
* **Año:** 2026
* **Contexto:** Alumno del profesor Francisco Totesaut, Curso Sence Front End Trainee.


