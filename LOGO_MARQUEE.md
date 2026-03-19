# Logo Marquee Component - Documentación

## 📋 Descripción

Componente de marquesina infinita que muestra logos de tecnologías/herramientas de forma dinámica, conectado con WordPress a través de su REST API.

## 🎯 Características Implementadas

- ✅ **Scroll infinito suave** sin saltos visuales
- ✅ **Pausa al hover** para mejor UX
- ✅ **Efecto grayscale → color** al pasar el mouse
- ✅ **Gradientes laterales** para efecto fade in/out
- ✅ **Conexión dinámica con WordPress** vía REST API
- ✅ **Fallback automático** si WordPress no está disponible
- ✅ **100% Responsive** con ajustes para mobile
- ✅ **Dos versiones**: CSS puro y Framer Motion

## 📁 Archivos Creados

### 1. `src/lib/api.js`
Funciones para obtener datos desde WordPress:

```javascript
// Obtiene logos desde WordPress
getLogos() 

// Logos de respaldo si WordPress falla
getLogosFallback()
```

**Endpoint esperado:** `/wp-json/wp/v2/herramientas?_embed`

**Estructura de datos esperada:**
```json
{
  "id": 1,
  "title": { "rendered": "WordPress" },
  "_embedded": {
    "wp:featuredmedia": [{
      "source_url": "https://...",
      "alt_text": "WordPress Logo"
    }]
  }
}
```

### 2. `src/components/LogoMarquee.astro`
Componente principal con animación CSS pura.

**Características:**
- Animación CSS `@keyframes scroll`
- Pausa automática con `:hover`
- Duplicación de logos para scroll infinito
- Gradientes laterales con `bg-gradient-to-r/l`

### 3. `src/components/LogoMarqueeReact.tsx`
Versión alternativa con Framer Motion para animaciones más avanzadas.

**Ventajas:**
- Control más preciso de la animación
- Transiciones más suaves
- Mejor performance en algunos navegadores

## 🔧 Configuración

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
PUBLIC_WP_API_URL=https://tu-sitio-wordpress.com/wp-json
```

### 2. WordPress Setup

En tu WordPress, crea un Custom Post Type llamado `herramientas`:

```php
// functions.php o en un plugin
function register_herramientas_cpt() {
    register_post_type('herramientas', [
        'labels' => [
            'name' => 'Herramientas',
            'singular_name' => 'Herramienta'
        ],
        'public' => true,
        'show_in_rest' => true, // IMPORTANTE para REST API
        'supports' => ['title', 'thumbnail'],
        'menu_icon' => 'dashicons-admin-tools'
    ]);
}
add_action('init', 'register_herramientas_cpt');
```

### 3. Agregar Logos en WordPress

1. Ve a **Herramientas → Añadir nueva**
2. Escribe el nombre de la tecnología (ej: "WordPress")
3. Sube la imagen destacada (logo)
4. Publica

## 🎨 Personalización

### Cambiar velocidad de animación

**En LogoMarquee.astro:**
```css
.logo-marquee {
  animation: scroll 40s linear infinite; /* Cambia 40s */
}
```

**En LogoMarqueeReact.tsx:**
```tsx
transition={{
  duration: 40, // Cambia este valor
}}
```

### Ajustar espaciado entre logos

**CSS:**
```css
.logo-marquee {
  gap: 4rem; /* Ajusta el gap */
}
```

**React:**
```tsx
<motion.div className="flex gap-16"> {/* Cambia gap-16 */}
```

### Modificar efecto de color

**CSS:**
```css
.logo-image {
  filter: grayscale(100%) opacity(0.6); /* Estado inicial */
}

.logo-item:hover .logo-image {
  filter: grayscale(0%) opacity(1); /* Estado hover */
}
```

### Cambiar gradientes laterales

```astro
<!-- Ajusta el ancho (w-32) y el color (from-slate-50) -->
<div class="absolute left-0 ... w-32 bg-gradient-to-r from-slate-50 to-transparent"></div>
```

## 🔄 Usar Versión React (Opcional)

Si prefieres usar la versión con Framer Motion:

**En `src/pages/index.astro`:**
```astro
---
import LogoMarqueeReact from '../components/LogoMarqueeReact';
import { getLogos, getLogosFallback } from '../lib/api.js';

let logos = [];
try {
  logos = await getLogos();
  if (logos.length === 0) logos = await getLogosFallback();
} catch (error) {
  logos = await getLogosFallback();
}
---

<section class="py-16 bg-gradient-to-b from-white to-slate-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
      Tecnologías que dominamos
    </h2>
  </div>
  <LogoMarqueeReact logos={logos} client:load />
</section>
```

## 📱 Responsive Breakpoints

- **Desktop:** Logos de 160px, gap de 4rem, animación 40s
- **Mobile (<768px):** Logos de 120px, gap de 3rem, animación 30s

## 🐛 Troubleshooting

### Los logos no se muestran

1. Verifica que `PUBLIC_WP_API_URL` esté configurado en `.env`
2. Comprueba que el endpoint responda: `https://tu-sitio.com/wp-json/wp/v2/herramientas`
3. Verifica que los posts tengan imagen destacada
4. Revisa la consola del navegador para errores

### La animación no es fluida

1. Asegúrate de duplicar los logos: `[...logos, ...logos]`
2. Verifica que `transform: translateX(-50%)` coincida con la duplicación
3. Prueba la versión React con Framer Motion

### CORS errors

Si WordPress está en otro dominio, agrega en `functions.php`:

```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET');
        return $value;
    });
});
```

## 🎯 Próximas Mejoras

- [ ] Agregar categorías de logos (Frontend, Backend, DevOps)
- [ ] Implementar lazy loading más agresivo
- [ ] Añadir tooltips con información de cada tecnología
- [ ] Crear admin UI para controlar velocidad desde WordPress
- [ ] Implementar modo oscuro

## 📚 Referencias

- [Astro Docs](https://docs.astro.build)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS Animations](https://tailwindcss.com/docs/animation)
