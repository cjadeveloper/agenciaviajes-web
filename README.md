# Dockerizando un ejemplo Web de una Agencia de Viajes

## Tools usadas

- HTML y CSS: Básico!
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/): Como framework CSS
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript): Como lenguaje de programación
- [Node.js](https://nodejs.org/es/): Como entorno de ejecución.
- [Express](https://expressjs.com/es/): Como framework web liviano que usa Node.
- [Pug](https://pugjs.org/api/getting-started.html): Como lenguaje de plantillas para Express.
- [MySQL](https://www.mysql.com/): Como DB para el Backend.
- [Sequelize](https://sequelize.org/): Como ORM de Node nuestra DB MySQL (También soporta Postgres, SQLite, Microsoft SQL Server, y otros).
- [Docker-Compose](https://docs.docker.com/compose/): Para unir y simplificar los distintos servicios (contenedores [Docker](https://www.docker.com/)) relacionados: App de viajes en Node y su DB en MySQL.
- [Heroku](https://www.heroku.com/)

## Uso Básico Local

Para iniciar, se necesita tener instalado Docker, luego...

```sh
docker-compose up
```

Esto creará los contenedores, instalará y configurará todo los necesario. Luego que finalice, podremos ver la aplicación escribiendo en la barra de direcciones del navegador: `http://localhost:3000/`

Podemos parar los servicios mediante...

```sh
docker-compose stop
```

Y volverlos a arrancar mediante...

```sh
docker-compose start
```

Como también, detenerlos mediante...

```sh
docker-compose down
```

Ver su estado...

```sh
docker-compose ps
```

Ejecutar el contenedor individual de Node, el de la app, en modo interactivo, mediante...

```sh
$ docker exec -it agencia-viajes_web_1 bash
root@c5a2605be3fd:/#
```

Y ejecutar algún comando bash dentro de él...

```sh
root@c5a2605be3fd:/# ls -l
total 72
drwxr-xr-x   1 root root 4096 Jun 23 00:57 bin
drwxr-xr-x   2 root root 4096 Jul 10  2020 boot
drwxr-xr-x   3 root root 4096 Jul 14 18:45 code
drwxr-xr-x   5 root root  340 Jul 16 02:36 dev
drwxr-xr-x   1 root root 4096 Jul 14 18:45 etc
drwxr-xr-x   1 root root 4096 Jun 23 07:27 home
...
```

Ejecutar el contentedor MySQL solamente, en modo interactivo, mediante...

```sh
docker exec -it agencia-viajes_db_1 bash
root@29fab37b381c:/#
```

Y entrar al cliente mysql con...

```sh
root@29fab37b381c:/# mysql -u root -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 14
Server version: 8.0.25 MySQL Community Server - GPL

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

## Deployment en Heroku

Hay distintos métodos para hacer el deploy con Heroku: Heroku Git, Heroku GitHub y Container Registry.

Como queremos hacerlo desde un contenedor Docker, seguimos las [guía](https://devcenter.heroku.com/articles/local-development-with-docker-compose) de Heroku para hacer el deploy con [Heroku container registry](https://devcenter.heroku.com/articles/container-registry-and-runtime) desde nuestro archivo Docker-Compose.

> Importante 1: Nuestra aplicación de Node depende de un servicio con una base de datos MySQL, la cual no puede ser enviada a Heroku. En lugar de ello, debemos agregar el servicio como un agregado (add-on) en el mismo Heroku y configurarlo allí.
>
>Importante 2: Nuestro servicio de aplicación se debe llamar "web" en nuestro archivo docker-compose porque sino Heroku no lo podrá enlazar.

Loguearse en Container Registry

```console
heroku container:login
```

Crear la app (con nombre si se quiere)

```console
heroku create <app-name>
```

Para enviar una imagen a Heroku, como una extraída de Docker Hub, la etiquetamos y la empujamos de acuerdo con esta plantilla de nomenclatura:

```console
docker tag <image> registry.heroku.com/<app>/<process-type>
docker push registry.heroku.com/<app>/<process-type>
```

Para nuestro caso:

- image: agencia-viajes_web
- app: cjadeveloper-agencia-viajes
- process-type: web

Luego de eso, hacemos

```console
heroku container:release web -a cjadeveloper-agencia-viajes
```
