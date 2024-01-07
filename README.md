<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Logo de Nest" /></a>
</p>

<p align="center">
  <strong>Aplicación de Gestión de Turnos para Comunidades</strong><br>
  Construida con el framework progresivo <a href="http://nodejs.org" target="_blank">Node.js</a> <strong>NestJS</strong>.
</p>

## Descripción

Este proyecto es una aplicación de gestión de turnos diseñada para mejorar la organización y administración en comunidades de vecinos. Utiliza [Nest](https://github.com/nestjs/nest), un framework TypeScript progresivo para Node.js, que permite construir aplicaciones del lado del servidor de manera eficiente y escalable.

Características principales:

- Registro y autenticación de usuarios.
- Roles diferenciados para vecinos y administradores.
- Gestión de turnos para el cierre de portones.
- Visualización y notificaciones de turnos asignados.

## Preinstalación de PNPM

Antes de instalar las dependencias y ejecutar la aplicación, es crucial tener instalado [PNPM](https://pnpm.io/), un gestor de paquetes rápido, eficiente y que ahorra espacio en disco comparado con `npm`.

### ¿Por qué PNPM?

- **Eficiencia en el Espacio:** PNPM crea un almacén único para todos los módulos y enlaza los módulos necesarios en el `node_modules` de tu proyecto. Esto significa que se duplican menos archivos y se ahorra espacio en disco.
- **Rapidez:** Al utilizar enlaces simbólicos y evitar redundancias, PNPM puede instalar paquetes mucho más rápido que `npm`.
- **Seguridad:** PNPM mantiene la estructura de dependencias plana, lo que evita la sobrecarga de paquetes no deseados y mejora la seguridad del proyecto.

### Instalación de PNPM

Para instalar PNPM, puedes usar el siguiente comando:

```bash
$ npm install -g pnpm
```

## Instalación

```bash
$ pnpm install
```

## Ejecutando la Aplicación

```bash
# Desarrollo
$ pnpm run start

# Modo observación
$ pnpm run start:dev

# Modo producción
$ pnpm run start:prod
```

## Documentación de la API con Swagger

La documentación y pruebas de la API están disponibles a través de Swagger, una interfaz de usuario web interactiva que proporciona una visión detallada de todos los endpoints de la API, sus parámetros, y respuestas.

### Acceso a Swagger

Para acceder a la documentación de Swagger:

1. Asegúrate de que el backend esté ejecutándose. Si no es así, inicia la aplicación con `pnpm run start`, `pnpm run start:dev`, o `pnpm run start:prod`, dependiendo de tu entorno de ejecución.
2. Abre tu navegador y visita la siguiente URL: `http://localhost:3047/api/doc`.
