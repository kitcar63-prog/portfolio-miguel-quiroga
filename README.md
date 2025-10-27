# Portfolio Minimalista Nórdico - Miguel Ángel Quiroga

Portfolio personal de estilo nórdico minimalista con Next.js y TailwindCSS.

## 🚀 Deploy en Netlify

### Opción 1: Deploy Manual

1. Inicializa el repositorio Git (si no lo has hecho):
```bash
cd /Users/miguelangelquirogafolguers/portfolio-minimal
git init
git add .
git commit -m "Initial commit"
```

2. Sube el código a GitHub:
```bash
# Crea un repositorio en GitHub primero
git remote add origin https://github.com/kitcar63-prog/portfolio.git
git push -u origin main
```

3. Ve a [Netlify](https://app.netlify.com/) y:
   - Click en "Add new site" > "Import an existing project"
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click en "Deploy"

### Opción 2: Deploy con Netlify CLI

```bash
# Instala Netlify CLI
npm install -g netlify-cli

# Login en Netlify
netlify login

# Deploy
cd /Users/miguelangelquirogafolguers/portfolio-minimal
netlify deploy --prod
```

## 🌐 Características

- ✅ Diseño minimalista nórdico (blanco, negro, gris)
- ✅ Soporte bilingüe (Español/Inglés)
- ✅ Responsive design
- ✅ Next.js 16 con TypeScript
- ✅ TailwindCSS
- ✅ Información real de proyectos
- ✅ Enlaces a proyectos reales

## 📝 Personalización

Para modificar el contenido, edita: `src/app/page.tsx`

## 🛠 Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📧 Contacto

- Email: maqdevelopment.com@gmail.com
- LinkedIn: [miguel-angel-quiroga-55133314](https://www.linkedin.com/in/miguel-angel-quiroga-55133314/)
- GitHub: [kitcar63-prog](https://github.com/kitcar63-prog)