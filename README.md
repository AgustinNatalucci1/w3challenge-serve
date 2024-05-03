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

*Ejemplo:*
```bash
DB_USER=root
DB_PASS=12345
DB_PORT=3306
DB_NAME=test_db
DB_HOTS=localhost
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
