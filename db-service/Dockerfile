FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD root@1234  
ENV MYSQL_DATABASE agenciaviajes  
ENV MYSQL_USER user_service
ENV MYSQL_PASSWORD user@1234

ADD setup.sql /docker-entrypoint-initdb.d