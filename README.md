# W3-Challenge Servicio GET

Esta es mi resolucion del Desafío Técnico NodeJs:


## Installation

Usar el package manager [npm](https://docs.npmjs.com/).

```bash
npm install
```
## Migrations

En estre proyecto utilice las migraciones de [Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/).

Primero hay que configurar la conexión con una Base de Datos MySQL:

Agregar un archivo .env en el proyecto

```bash
DB_USER=
DB_PASS=
DB_PORT=
DB_DATABASE=
DB_HOTS=
```

Por ultimo, ejecutar:

```bash
npx sequelize-cli db:migrate
```

## Seed de Datos
Para poblar la Base de Datos, ejecutar:

```bash
npx sequelize-cli db:seed:all
```

## Usage

Por ultimo, para montar el servicio ejecuta:
```bash
npm run start
```
