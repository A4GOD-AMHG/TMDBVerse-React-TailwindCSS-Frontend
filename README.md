# TMDBVerse React TailwindCSS Frontend

Aplicación web desarrollada por **Alexis Manuel Hurtado Garcia** para descubrir películas usando los datos de [The Movie Database (TMDB)](https://www.themoviedb.org/). Construida con **React**, **Vite** y **Tailwind CSS**, muestra las películas populares, las tendencias según las búsquedas de los usuarios, un buscador con *debounce* y una página de detalles para cada película. Consume la API del backend hermano [TMDBVerse-Go-Fiber-Redis-Backend](https://github.com/A4GOD-AMHG/TMDBVerse-Go-Fiber-Redis-Backend).

## Tech Stack

<div style="display: flex; align-items: center;">
  <img src="https://raw.githubusercontent.com/A4GOD-AMHG/Utils-for-repos/refs/heads/main/icons/react/react-original.svg" alt="react" width="65" height="65" />
  <img src="https://raw.githubusercontent.com/A4GOD-AMHG/Utils-for-repos/refs/heads/main/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss" width="65" height="65" />
  <img src="https://raw.githubusercontent.com/A4GOD-AMHG/Utils-for-repos/refs/heads/main/icons/js/javascript-original.svg" alt="javascript" width="65" height="65" />
  <img src="https://raw.githubusercontent.com/A4GOD-AMHG/Utils-for-repos/refs/heads/main/icons/docker/docker-original.svg" alt="docker" width="65" height="65" />
</div>

## Características

- **Hero con populares**: las 3 películas más populares del momento en un abanico de pósters.
- **Tendencias**: top 5 de películas más buscadas, calculado por el backend con Redis.
- **Búsqueda en tiempo real**: búsqueda por título con *debounce* y descarte de respuestas obsoletas.
- **Detalles de película**: fondo con *backdrop*, póster, valoración, duración, géneros, idioma y sinopsis.
- **Estados de carga, vacío y error** claros en todas las vistas.
- **Diseño oscuro y responsive** con animaciones sutiles (respeta `prefers-reduced-motion`).
- **Navegación** entre páginas con **React Router**.
- **Docker** para levantar el entorno de desarrollo.

## Dependencias

### Dependencias Principales

- `react` / `react-dom`: librería de interfaz.
- `react-router-dom`: rutas `/` y `/movies/:id`.
- `axios`: cliente HTTP para el backend.
- `react-use`: hook `useDebounce` del buscador.
- `tailwindcss` / `@tailwindcss/vite`: estilos con Tailwind CSS v4.

### Dependencias de Desarrollo

- `vite` / `@vitejs/plugin-react`: servidor de desarrollo y build.
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`: linting.
- `@types/react` / `@types/react-dom`: tipos para el editor.

## Cómo usar

1. **Clona el repositorio**:

```bash
git clone https://github.com/A4GOD-AMHG/TMDBVerse-React-TailwindCSS-Frontend.git
cd TMDBVerse-React-TailwindCSS-Frontend
```

2. **Levanta el backend** siguiendo las instrucciones de [TMDBVerse-Go-Fiber-Redis-Backend](https://github.com/A4GOD-AMHG/TMDBVerse-Go-Fiber-Redis-Backend).

3. **Configura las variables de entorno** copiando `example.env` a `.env`:

```bash
cp example.env .env
```

```bash
VITE_GO_FIBER_BACKEND=http://localhost:8080
```

4. **Instala y ejecuta en desarrollo**:

```bash
npm install
npm run dev
```

5. **Build de producción**:

```bash
npm run build
npm run preview
```

6. **O con Docker Compose**:

```bash
docker compose up --build
```

La aplicación queda disponible en `http://localhost:5173`.

## Estructura del Proyecto

```
TMDBVerse-React-TailwindCSS-Frontend/
├── public/                      # Iconos, favicon e imagen por defecto (no-movie.png)
├── screenshots/                 # Capturas usadas en este README
├── src/
│   ├── components/
│   │   ├── Footer.jsx           # Pie con redes sociales
│   │   ├── Hero.jsx             # Abanico con las 3 películas populares
│   │   ├── MovieCard.jsx        # Tarjeta de película
│   │   ├── MovieDetails.jsx     # Página de detalles
│   │   ├── Search.jsx           # Buscador
│   │   ├── Spinner.jsx          # Indicador de carga
│   │   └── StatusMessage.jsx    # Mensajes de vacío y error
│   ├── hooks/
│   │   ├── useFetch.js          # Hook genérico de peticiones (carga, error, cancelación)
│   │   ├── useMovies.js         # /discover
│   │   ├── usePopularMovies.js  # /popular
│   │   ├── useSearchMovies.js   # /search
│   │   ├── useTrendingMovies.js # /trending
│   │   └── useMovieDetails.js   # /movies/:id
│   ├── routes/
│   │   └── Router.jsx           # Definición de rutas
│   ├── services/
│   │   └── api.js               # Cliente axios y helper de URLs de pósters
│   ├── App.jsx                  # Página principal
│   ├── index.css                # Tema y estilos de Tailwind
│   └── main.jsx                 # Punto de entrada
├── docker-compose.yml
├── Dockerfile
├── example.env
├── index.html
├── package.json
└── vite.config.js
```

## Capturas de Pantalla

<div align="center" style="display: flex; flex-wrap: wrap; justify-content: center;">
  <img src="./screenshots/desktop.png" style="width: 250px; margin: 10px;"/>
  <img src="./screenshots/desktop2.png" style="width: 250px; margin: 10px;"/>
  <img src="./screenshots/details-desktop.png" style="width: 250px; margin: 10px;"/>
  <img src="./screenshots/ipad.png" style="width: 250px; margin: 10px;"/>
  <img src="./screenshots/details-ipad.png" style="width: 250px; margin: 10px;"/>
  <img src="./screenshots/mobile.png" style="width: 250px; margin: 10px;"/>
  <img src="./screenshots/search-mobile.png" style="width: 250px; margin: 10px;"/>
  <img src="./screenshots/details-mobile.png" style="width: 250px; margin: 10px;"/>
</div>

## Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

## Autor

**Alexis Manuel Hurtado Garcia** - [GitHub](https://github.com/A4GOD-AMHG)
