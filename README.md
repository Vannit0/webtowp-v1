# WebToWP - WordPress Headless + Astro

Agencia de desarrollo web premium especializada en WordPress Headless con Astro. Sitios ultrarrápidos, seguros y optimizados para SEO.

## 🚀 Stack Técnico

- **Framework**: Astro 5.x
- **UI Library**: React 19.x
- **Estilos**: Tailwind CSS 4.x
- **Componentes**: shadcn/ui
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Smooth Scroll**: Lenis

## 📁 Estructura del Proyecto

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes shadcn/ui
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── Hero.tsx         # Sección Hero con animaciones
│   │   ├── Services.tsx     # Grid de servicios
│   │   ├── ValueProposition.tsx
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── SmoothScroll.tsx # Lenis smooth scroll
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   ├── lib/
│   │   └── utils.ts         # Utilidades (cn helper)
│   ├── pages/
│   │   └── index.astro      # Homepage
│   └── styles/
│       └── global.css       # Estilos globales + Tailwind
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`|
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Previsualiza la build localmente                 |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |

## ✨ Características

- ✅ **Light Mode Premium**: Diseño minimalista y corporativo de alto nivel
- ✅ **100% Responsive**: Optimizado para todos los dispositivos
- ✅ **Animaciones Fluidas**: Framer Motion para transiciones elegantes
- ✅ **Smooth Scroll**: Navegación suave con Lenis
- ✅ **SEO Optimizado**: Meta tags y estructura semántica
- ✅ **TypeScript**: Type-safe con configuración estricta
- ✅ **Componentes Reutilizables**: shadcn/ui + Lucide icons

## 🎨 Secciones de la Homepage

1. **Navbar**: Logo, navegación y CTA "Cotizar proyecto"
2. **Hero**: Título impactante, subtítulo, CTAs y métricas
3. **Servicios**: Grid de 4 cards con iconos (Landing Pages, Sitios Informativos, Optimización WP, Migración Headless)
4. **Logo Marquee**: Scroll infinito de tecnologías conectado con WordPress
5. **Valor**: Explicación de beneficios Headless (Velocidad, Seguridad, SEO)
6. **Footer**: Enlaces rápidos, redes sociales y copyright

## 🚀 Empezar

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno (opcional para WordPress)
cp .env.example .env
# Edita .env y agrega tu URL de WordPress API

# Iniciar servidor de desarrollo
npm run dev
```

Visita `http://localhost:4321` para ver el sitio en acción.

## 🔌 Configuración WordPress (Opcional)

El componente **LogoMarquee** puede conectarse dinámicamente con WordPress para mostrar logos de tecnologías.

1. Crea un archivo `.env` basado en `.env.example`
2. Configura `PUBLIC_WP_API_URL` con tu sitio WordPress
3. En WordPress, crea un Custom Post Type llamado `herramientas`
4. Agrega posts con imágenes destacadas (logos)

Ver `LOGO_MARQUEE.md` para documentación completa del componente.

## 📝 Notas de Desarrollo

- Los componentes React usan `client:load` o `client:visible` para hidratación optimizada
- Lenis se inicializa globalmente para smooth scroll en toda la página
- Tailwind CSS 4.x usa la nueva sintaxis `@import "tailwindcss"`
- Path alias `@/*` configurado para imports limpios
