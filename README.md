# 🚢 VÍREMO - Landing Page de Alto Impacto

> Landing page innovador para VÍREMO: Empresa especializada en logística portuaria y transporte terrestre con énfasis en carga sobredimensionada.

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-cyan)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-pink)](https://www.framer.com/motion/)

---

## ✨ Características Principales

### 🎨 Diseño Innovador
- **Scroll Asimétrico**: Navegación lateral flotante con anclajes interactivos
- **Animaciones 3D**: Elementos flotantes y parallax effects
- **Timeline Circular 360°**: Visualización única de métricas empresariales
- **Mapa Logístico Interactivo**: Servicios posicionados en un mapa portuario

### 🚀 Experiencia Interactiva
- **Quiz Selector de Carga**: Personalización inmediata del journey del usuario
- **Hover Reveals**: Filosofías del equipo que se revelan al pasar el mouse
- **Micro-interacciones**: Cada elemento tiene animaciones significativas
- **Auto-scroll Inteligente**: Navegación fluida entre secciones

### 💼 Elementos de Conversión
- **CTAs Creativos**: "Lleva tu Proyecto a Puerto", "Estrategia 360°"
- **Formulario Inteligente**: Con validación y tipos de proyecto
- **Múltiples Puntos de Contacto**: Teléfono, email, formulario detallado
- **Casos de Éxito Reales**: Con métricas verificables

---

## 🚀 Quick Start

### Instalación

```bash
# Clonar el repositorio
git clone [tu-repo-url]

# Navegar al directorio
cd ViremoWeb

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build de producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecutar ESLint
```

---

## 📁 Estructura del Proyecto

```
ViremoWeb/
├── src/
│   ├── pages/
│   │   └── Home.tsx          # Landing page principal (componente único)
│   ├── App.tsx               # Componente raíz con routing
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales + Tailwind
├── public/                   # Assets estáticos
├── docs/
│   ├── LANDING_PAGE_DOCS.md        # Documentación completa técnica
│   ├── VISUAL_FLOW_SKETCHES.md     # Bocetos y flujo visual
│   └── CUSTOMIZATION_GUIDE.md      # Guía de personalización
└── package.json
```

---

## 🎯 Secciones del Landing Page

### 1️⃣ Hero Section - Primer Impacto
- Logo animado con efecto 3D
- Titular impactante con gradiente
- **Quiz interactivo** de tipo de carga (Standard/Especial)
- Elementos flotantes animados
- Auto-scroll al seleccionar tipo de carga

### 2️⃣ Timeline Circular - Confianza
- **Timeline 360°** con 6 métricas clave:
  - 95% Puntualidad
  - 30%+ Rentabilidad mínima
  - 100% Seguridad (Cero incidentes)
  - 98% Satisfacción del cliente
  - 15+ Años de experiencia
  - Top 5 en innovación tecnológica
- Hover effects con rotación y tooltips
- Cards de compromisos de calidad

### 3️⃣ Mapa Interactivo - Servicios
- **Mapa logístico portuario** con grid pattern
- 3 servicios principales posicionados:
  - 🚛 Fletes Especializados
  - 📦 Movimiento de Maquinaria (Exclusivo Manzanillo)
  - 🏭 Almacenaje Portuario
- Click para expandir casos de éxito
- Badge especial para "Proyectos Especiales" detectados

### 4️⃣ Equipo - La Fuerza Humana
- Cards con hover reveal de filosofías
- 3 valores centrales:
  - 🎯 Integridad
  - 🛡️ Confianza
  - 🚀 Excelencia
- Misión y Visión en cards destacados

### 5️⃣ Contacto - Conversión
- CTAs con gradientes llamativos
- Formulario inteligente con validación
- Múltiples opciones de contacto:
  - 📞 Teléfono directo
  - ✉️ Email
  - 📝 Formulario detallado

---

## 🎨 Tecnologías Utilizadas

### Core
- **React 18.2.0** - Library para UI
- **TypeScript 5.8.3** - Type safety
- **Vite 7.2.2** - Build tool ultra-rápido

### UI & Animaciones
- **Framer Motion 12.23.24** - Animaciones avanzadas y micro-interacciones
- **Lucide React 0.553.0** - Iconografía moderna y limpia
- **TailwindCSS 3.4.17** - Estilos utility-first

### Utilities
- **React Intersection Observer 10.0.0** - Detección de scroll para animaciones
- **React Router DOM 6.18.0** - Routing (preparado para multi-página)

---

## 📚 Documentación Adicional

### Para Desarrolladores
- **[LANDING_PAGE_DOCS.md](./LANDING_PAGE_DOCS.md)** - Arquitectura completa, componentes, animaciones, y guía técnica detallada

### Para Diseñadores
- **[VISUAL_FLOW_SKETCHES.md](./VISUAL_FLOW_SKETCHES.md)** - Bocetos ASCII, flujo de usuario, metáforas visuales, y diseño responsive

### Para Personalización
- **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - Guía paso a paso para personalizar contenido, colores, servicios, y más

---

## 🎨 Paleta de Colores

```css
/* Primary */
Cyan 400:  #22d3ee  /* Accents principales */
Blue 500:  #3b82f6  /* Botones y links */
Blue 600:  #2563eb  /* Hover states */

/* Secondary */
Purple 400: #c084fc  /* Proyectos especiales */
Purple 500: #a855f7  /* Accents secundarios */

/* Backgrounds */
Slate 950: #020617  /* Background principal */
Slate 900: #0f172a  /* Background secundario */
Slate 800: #1e293b  /* Cards */
```

---

## 🚀 Deploy a Producción

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Configurar vite.config.ts con base: '/nombre-repo/'
npm run build
# Deploy carpeta dist/ a gh-pages branch
```

---

## ✅ Checklist Pre-Launch

Antes de lanzar a producción, asegúrate de:

- [ ] Actualizar información de contacto (teléfono, email, dirección)
- [ ] Reemplazar métricas con datos reales
- [ ] Actualizar casos de éxito con proyectos reales
- [ ] Personalizar Misión y Visión oficial
- [ ] Agregar logo real de la empresa
- [ ] Configurar backend para formulario de contacto
- [ ] Agregar Google Analytics
- [ ] Configurar meta tags SEO
- [ ] Agregar favicon personalizado
- [ ] Probar en múltiples dispositivos
- [ ] Verificar velocidad de carga (Lighthouse)
- [ ] Revisar accesibilidad (WCAG)

---

## 🎯 Filosofía de Diseño

### Principios Clave
1. **Innovación sobre convención**: Diferenciarse de sitios logísticos tradicionales
2. **Interactividad significativa**: Cada animación tiene un propósito
3. **Storytelling visual**: El scroll cuenta la historia de VÍREMO
4. **Conversión natural**: CTAs integrados en el journey sin ser invasivos
5. **Mobile-first responsive**: Experiencia optimizada en todos los dispositivos

### Diferenciadores
- ✅ Quiz interactivo único en sector logístico
- ✅ Timeline circular en lugar de lista tradicional
- ✅ Mapa interactivo vs listado de servicios
- ✅ Hover reveals para humanizar el equipo
- ✅ Navegación lateral flotante para control total

---

## 📊 Performance

### Métricas Objetivo
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizaciones Implementadas
- ✅ Code splitting automático (Vite)
- ✅ Tree shaking para reducir bundle size
- ✅ Lazy loading de animaciones (IntersectionObserver)
- ✅ CSS-in-JS minimizado
- ✅ Imágenes optimizadas (WebP cuando sea posible)

---

## 🤝 Contribuir

Este es un proyecto privado para VÍREMO. Si necesitas hacer cambios:

1. Revisa la documentación en `docs/`
2. Crea una branch descriptiva
3. Implementa cambios con commits claros
4. Prueba exhaustivamente
5. Crea pull request con descripción detallada

---

## 📞 Contacto

**VÍREMO - Logística Especializada**
- 📧 Email: contacto@viremo.com
- 📱 Teléfono: +52 123 456 7890
- 📍 Ubicación: Puerto de Manzanillo, Colima

---

## 📄 Licencia

© 2025 VÍREMO. Todos los derechos reservados.

---

**Desarrollado con 💙 para revolucionar la logística especializada**
