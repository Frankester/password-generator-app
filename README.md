# Password Generator App
Generador de contraseñas seguras y personalizables, desarrollado con HTML, CSS y JavaScript. Este proyecto fue creado como parte del desafío de [Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh).

## 🚀 Demo
Puedes ver la aplicación en funcionamiento haciendo [aca](https://password-generator-app-virid-two.vercel.app/)

## 🧩 Características
- Generación de contraseñas aleatorias con opciones personalizables:

  - Longitud de la contraseña

  - Inclusión de letras mayúsculas

  - Inclusión de letras minúsculas

  - Inclusión de números

  - Inclusión de símbolos

  - Indicador visual de la fortaleza de la contraseña generada

- Copiar la contraseña al portapapeles con un solo clic

- Diseño responsive y accesible

## 📦 Instalación
1. Clona el repositorio:


```bash
git clone https://github.com/Frankester/password-generator-app.git
```
2. Navega al directorio del proyecto:

```bash
cd password-generator-app
```
3. instala las dependencias del proyecto
```bash
npm i
```
4. ejecuta el proyecto de forma local
```bash
npm run dev
```

5. abrelo en tu navegador favorito: http://localhost:5173/

## 🛠️ Tecnologías utilizadas
- HTML5

- CSS3

- Typescript (5.7+)

- React

- React-Hook-Forms

- Zod

## 📁 Estructura del proyecto
```psql
password-generator-app/
├── index.html
├── [archivos de configuración]
├── src/
│   └── components/
│     └── Button/
│     └── Input/
│     └── PasswordResult/
│     └── RangeBar/
│     └── Strength/
│     └── Tooltip/
│     └── index.ts
│   └── models/
│     └── index.ts
│     └── passwordSettingsModel.ts
│   └── services/
│     └── index.ts
│     └── passwordGeneratorService.ts
│   └── utils/
│     └── constants.ts
│   └── App.css
│   └── App.tsx
│   └── index.css
│   └── main.tsx
└── public/
    └── [imágenes y otros recursos]
```