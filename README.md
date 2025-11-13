# 🎨 Mi Portfolio | Colección de Diseño Web

[![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)](https://react.dev/)  
[![Vite](https://img.shields.io/badge/Vite-4-brightgreen?logo=vite&logoColor=white)](https://vitejs.dev/)  
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)  
[![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)  

Una web creada con **React** y **Vite** para mostrar mis diseños web y documentar mi evolución como desarrolladora.

---

## 📂 Estructura del proyecto

```plaintext
portfolio-git/
│
├─ public/ # Archivos estáticos
├─ src/
│ ├─ assets/ # Imágenes, iconos, etc.
│ ├─ components/ # Footer, Header, Tarjetas, Layout, etc.
│ └─ pages/ # Páginas principales
├─ App.jsx # Componente raíz
├─ main.jsx # Punto de entrada
├─ index.html
├─ package.json
└─ README.md
```
---

## ✨ Funcionalidades Destacadas

<div style="display:flex; flex-direction: column; gap: 10px;">

**💻 Proyectos:**  
Tarjetas con título, descripción, tecnologías usadas y enlace al proyecto.

**📱 Responsive:**  
Diseño adaptable a móviles, tablets y escritorio.

**🌐 Navegación:**  
React Router para moverse entre páginas sin recargar.

**🖼 Layout consistente:**  
Header y Footer visibles en todas las páginas.

</div>

---

## 💻 Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/littlecorny/portfolio.git
cd portfolio-git
```

### 2️⃣ Instalar dependencias

```bash
npm install
```
Esto instalará todas las dependencias necesarias, incluyendo React, Vite, React Router y ESLint.

### 3️⃣ Configuración de React en Vite

Este proyecto usa Vite como bundler y servidor de desarrollo con Fast Refresh:

@vitejs/plugin-react
: Usa Babel para recarga rápida (Fast Refresh).

@vitejs/plugin-react-swc
: Usa SWC para recarga rápida y compilación más rápida.

⚠️ El React Compiler no está habilitado por defecto para no afectar el rendimiento.
Para habilitarlo, revisa la [documentación oficial](https://react.dev/learn/react-compiler/installation)


### 4️⃣ Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre http://localhost:5173 en tu navegador.


### 5️⃣ Compilar para producción
```bash
npm run build
```
Vite generará una versión optimizada del proyecto lista para deploy.

---

### 🌐 Deploy

- **Despliegue del proyecto en Vercel:** [🔗 https://portfolio-cpp.vercel.app/](#) 

---

### 📬 Contacto

📧 littlecorny | https://github.com/littlecorny
🌐 https://carlapajuelopaniag.wixsite.com/portfolio

Proyecto creado con fines educativos.


