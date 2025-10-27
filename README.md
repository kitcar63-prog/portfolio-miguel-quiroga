# Portfolio Premium - Miguel Ángel Quiroga

Portfolio personal con diseño moderno inspirado en Kitpro-Fluke, con animaciones avanzadas y efectos profesionales.

## 🎨 Características Premium

### Animaciones Avanzadas
- ✅ **Scroll Animations**: Elementos que aparecen al hacer scroll
- ✅ **Counter Animation**: Números que cuentan progresivamente
- ✅ **Hover Effects**: Transiciones suaves en todos los elementos
- ✅ **Smooth Scroll**: Navegación fluida entre secciones
- ✅ **Header Dinámico**: Se comprime al hacer scroll
- ✅ **Parallax Effects**: Fondo con movimiento sutil

### Diseño
- ✅ Tipografía grande y bold
- ✅ Espacios amplios (whitespace generoso)
- ✅ Grid moderno y responsive
- ✅ Gradientes en hover
- ✅ Sombras y elevaciones
- ✅ Transiciones CSS avanzadas

## 📸 Cómo Agregar Imágenes de tus Proyectos

### Opción 1: Imágenes Locales

1. **Crea la carpeta de imágenes:**
```bash
mkdir -p public/projects
```

2. **Agrega tus screenshots:**
```
public/
  projects/
    elcorteingles.jpg
    vetoclock.jpg
    crown.jpg
```

3. **Actualiza el código** en `src/app/page.tsx`:
```tsx
<div className="project-image">
  <img src="/projects/elcorteingles.jpg" alt="El Corte Inglés Intranet" />
</div>
```

### Opción 2: Usar URLs Externas

Si tienes las imágenes en otro lugar (Imgur, CloudFlare, etc.):

```tsx
<div className="project-image">
  <img src="https://tu-url.com/imagen.jpg" alt="Proyecto" />
</div>
```

### Opción 3: Next.js Image Component (Recomendado)

Para mejor performance:

```tsx
import Image from 'next/image';

<div className="project-image">
  <Image 
    src="/projects/vetoclock.jpg" 
    alt="VetoClock"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
```

## 🚀 Comandos

### Desarrollo
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Deploy en Netlify

El proyecto está configurado para deploy automático en Netlify desde GitHub.

**Build settings:**
- Build command: `npm run build`
- Publish directory: `.next`

## 📝 Personalización

### Cambiar Colores del Gradiente

En `src/app/globals.css`, busca:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Ajustar Velocidad de Animaciones

En `src/app/globals.css`:
```css
animation: fadeInUp 0.8s ease-out forwards; /* Cambia 0.8s */
```

### Modificar Tamaños

En `src/app/globals.css`:
```css
.hero h1 {
  font-size: 80px; /* Ajusta aquí */
}
```

## 📧 Contacto

- Email: maqdevelopment.com@gmail.com
- LinkedIn: [miguel-angel-quiroga-55133314](https://www.linkedin.com/in/miguel-angel-quiroga-55133314/)
- GitHub: [kitcar63-prog](https://github.com/kitcar63-prog)

## 🛠 Tech Stack

- Next.js 16
- TypeScript
- CSS3 (Animaciones avanzadas)
- Intersection Observer API
- Responsive Design

---

**Hecho con ❤️ por Miguel Ángel Quiroga**