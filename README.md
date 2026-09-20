# Labora - Plataforma de Matrícula de Laboratorios

**LAB_03_PE** es una aplicación web tipo SPA para gestionar la oferta académica y la matrícula de laboratorios universitarios. Permite a los estudiantes consultar horarios, revisar cupos, matricularse, cancelar inscripciones y descargar un comprobante en PDF. También ofrece un panel administrativo para controlar laboratorios, aforos, horarios y métricas de ocupación.

La aplicación funciona actualmente sin backend: utiliza `localStorage` como almacenamiento local para facilitar la demostración, las pruebas y una futura integración con una API REST.

## Tabla de contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Descargar desde GitHub](#descargar-desde-github)
- [Instalar y ejecutar](#instalar-y-ejecutar)
- [Cómo utilizar la aplicación](#cómo-utilizar-la-aplicación)
- [Vistas disponibles](#vistas-disponibles)
- [Reglas de negocio](#reglas-de-negocio)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Datos y persistencia](#datos-y-persistencia)
- [Compilar para producción](#compilar-para-producción)
- [Solución de problemas](#solución-de-problemas)

## Características

### Para estudiantes

- Catálogo de laboratorios con búsqueda y filtro de disponibilidad.
- Consulta de horarios, ubicación, aforo y cupos libres.
- Matrícula en un laboratorio activo.
- Validación inmediata de cupos agotados.
- Bloqueo de matrículas duplicadas.
- Bloqueo de cruces de horario.
- Consulta de matrículas registradas.
- Cancelación mediante formulario con motivo y comentario.
- Restauración automática del cupo al cancelar.
- Descarga de las matrículas en un archivo PDF.

### Para administradores

- Dashboard con métricas de matrículas, cupos y ocupación promedio.
- Gráfica de ocupación por laboratorio.
- Gráfica de demanda por día de la semana.
- Creación de laboratorios mediante formulario.
- Edición de nombre, código, ubicación, aforo, horario y estado.
- Eliminación de laboratorios y sus matrículas asociadas.
- Visualización del estado de cada laboratorio: activo, pocos cupos, lleno o inactivo.

## Tecnologías

- HTML5.
- CSS3 con variables, Grid, Flexbox, responsive design y animaciones.
- JavaScript ES Modules.
- Vite 6 como herramienta de desarrollo y compilación.
- `jsPDF` para generar comprobantes descargables.
- `localStorage` para persistencia local.

## Requisitos

Antes de comenzar, instala:

- [Node.js](https://nodejs.org/) versión 18 o superior.
- npm, incluido normalmente con Node.js.
- Git, si vas a clonar el repositorio desde la terminal.

Comprueba las instalaciones:

```bash
node --version
npm --version
git --version
```

## Descargar desde GitHub

### Opción 1: clonar con Git

En GitHub, abre el repositorio `klismannSis/LAB_03_PE`, pulsa el botón **Code**, copia la URL HTTPS y ejecuta:

```bash
git clone https://github.com/klismannSis/LAB_03_PE.git
cd LAB_03_PE
```

Si la URL del repositorio cambia, copia siempre la dirección mostrada actualmente en el botón **Code** de GitHub.

### Opción 2: descargar como ZIP

1. Abre el repositorio en GitHub.
2. Pulsa **Code**.
3. Selecciona **Download ZIP**.
4. Extrae el archivo en tu equipo.
5. Abre una terminal dentro de la carpeta extraída, la que contiene `package.json`.

## Instalar y ejecutar

Desde la raíz del proyecto, ejecuta:

```bash
npm install
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abre esa dirección en el navegador. El servidor se actualiza automáticamente cuando modificas el código.

Para detenerlo, vuelve a la terminal y pulsa `Ctrl + C`.

## Cómo utilizar la aplicación

### Flujo del estudiante

1. Abre la aplicación. La sesión inicia como estudiante.
2. Entra en **Catálogo** para revisar los laboratorios disponibles.
3. Usa el buscador o el filtro para localizar una opción.
4. Pulsa **Inscribirme** en el laboratorio deseado.
5. Selecciona el bloque horario.
6. Pulsa **Confirmar matrícula**.
7. Consulta tus registros en **Mis matrículas**.
8. Desde esa vista puedes:
	- Descargar un PDF con tus matrículas.
	- Cancelar una matrícula mediante el formulario.
	- Indicar un motivo y un comentario opcional.

### Flujo del administrador

1. Pulsa el botón de cambio de rol `⇄` en la barra superior.
2. Selecciona **Dashboard** para revisar las métricas y gráficas.
3. Selecciona **Gestión** para administrar la oferta académica.
4. Pulsa **Nuevo laboratorio** para abrir el formulario de creación.
5. Completa nombre, código, ubicación, aforo, estado y horario.
6. Usa el botón de edición para modificar un laboratorio existente.
7. Usa el botón de eliminación para retirar un laboratorio y sus matrículas relacionadas.
8. Regresa a **Catálogo** para comprobar los cambios.

> El cambio de rol es una simulación local para fines académicos. No representa un sistema real de autenticación ni autorización.

## Vistas disponibles

| Ruta | Vista | Descripción |
| --- | --- | --- |
| `#/catalog` | Catálogo | Laboratorios, horarios, aforo y cupos. |
| `#/enrollment` | Matrícula | Formulario de inscripción con validaciones. |
| `#/my-enrollments` | Mis matrículas | Registros del estudiante, PDF y cancelación. |
| `#/admin-dashboard` | Dashboard | KPIs, ocupación y demanda por día. |
| `#/admin-management` | Gestión | CRUD de laboratorios y horarios. |

Las rutas se gestionan mediante el hash del navegador, por lo que no requieren configuración de servidor para navegar entre vistas.

## Reglas de negocio

- Solo se puede matricular un laboratorio con estado activo.
- No se permite superar la capacidad máxima del bloque horario.
- No se permiten matrículas duplicadas para el mismo estudiante, laboratorio y horario.
- No se permiten cruces entre horarios del mismo estudiante.
- Una cancelación elimina el registro y libera el cupo automáticamente.
- La información se actualiza sin recargar la página.

## Estructura del proyecto

```text
LAB_03_PE/
├── .github/workflows/       # Configuración futura de despliegue
├── public/                  # Recursos públicos
├── src/
│   ├── assets/styles/        # Estilos base, componentes y vistas
│   ├── components/           # Componentes reutilizables
│   ├── data/                 # Datos iniciales de demostración
│   ├── logic/                # Validaciones de matrícula
│   ├── models/               # Modelos del dominio
│   ├── router/               # Navegación SPA
│   ├── services/             # Sesión y almacenamiento local
│   ├── utils/                # Utilidades
│   ├── views/                # Vistas de la aplicación
│   └── main.js               # Punto de entrada y renderizado
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Datos y persistencia

Los datos iniciales se encuentran en `src/data/seedData.js`. Al utilizar la aplicación, el estado se guarda en el navegador con estas claves:

- `labora-state-v1`: estudiantes, laboratorios y matrículas.
- `labora-session-v1`: rol y estudiante de la sesión simulada.

Para limpiar los datos manualmente, abre las herramientas de desarrollador del navegador, entra en **Application/Storage > Local Storage**, selecciona el dominio local y elimina esas claves. Al recargar, la aplicación volverá a utilizar los datos semilla.

Los datos no se sincronizan entre navegadores ni equipos porque todavía no existe un backend.

## Compilar para producción

Genera la versión optimizada con:

```bash
npm run build
```

El resultado se crea en la carpeta `dist/`. Para probar esa versión localmente:

```bash
npm run preview
```

## Solución de problemas

### `npm` no encuentra `package.json`

Asegúrate de estar dentro de la carpeta que contiene el archivo:

```bash
cd LAB_03_PE
npm install
```

### El puerto 5173 está ocupado

Vite propondrá otro puerto automáticamente. También puedes iniciar el servidor con un puerto específico:

```bash
npm run dev -- --port 4173
```

### No aparecen los cambios guardados

El navegador puede estar mostrando información previa de `localStorage`. Elimina `labora-state-v1` desde las herramientas de desarrollador y recarga la página.

### El PDF no se descarga

Comprueba que hayas ejecutado `npm install` y que la dependencia `jspdf` aparezca en `package.json`. Después reinicia el servidor de Vite.

## Estado del proyecto

Proyecto académico funcional, preparado para evolucionar hacia una arquitectura con backend, autenticación real y API REST. La persistencia local permite demostrar el flujo completo sin configurar una base de datos.
