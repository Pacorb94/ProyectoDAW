## Objetivo
Consolidar los conocimientos del Grado Superior DAW y aportar mis conomientos propios
al proyecto.

## Descripción
Es un blog de noticias referentes al sector de la programación.

Puedes ver los diagramas [aquí](https://github.com/Pacorb94/ProyectoDAW/blob/master/Diagramas/).

## Tecnologías usadas:
* Nginx 
* MySQL
* PHP 8 (puedes probar tu versión)
* Composer 2
* Angular 12 (puedes probar tu versión a partir de la 9)

## Despliegue:
* Si usas Docker Compose:
 1. En la carpeta Docker crea los contenedores `docker-compose up -d --build`
 2. Ve al contenedor de mysql `docker-compose exec mysql mysql -uroot -p1`
      
    1. Copia, pega y ejecuta App/Elrincondelaprogramacion-API/database/database.sql en la consola de mysql
    2. Sal de la consola de mysql con `exit;` (opcional)
    3. Sal del contenedor de mysql con `exit` (opcional)

 3. En el navegador `https://elrincondelaprogramacion:8081`

* Si no usas Docker:
 1. Importa App/Elrincondelaprogramacion-API/database/database.sql a un gestor de bbdd
 2. Instala dependencias `npm i` `composer install`
 3. Crea host virtual para el backend en tu servidor web y en /etc/hosts poner un dominio para el frontend y el backend que apunten a 127.0.0.1. Si el dominio del frontend de /etc/hosts es diferente a https://elrincondelaprogramacion.com debes cambiar la propiedad url de los archivos de [esta](https://github.com/Pacorb94/ProyectoDAW/blob/master/App/Elrincondelaprogramacion/src/environments/) carpeta
 
    1. Pon certificado SSL al frontend (en angular.json) y al backend (en el host virtual) 
    
 4. En App/Elrincondelaprogramacion-API/config/jwt genera una clave para que se firme el token 

        openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096

    1. Ponemos la clave que hicimos en el paso anterior 
    
       openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout

    2. En "JWT_PASSPHRASE" del archivo .env pon la clave del paso anterior
 5. Pasa el backend a producción en el archivo .env cambiar APP_ENV a prod
 6. Pasa el frontend a producción  `ng b`

## Licencia
MIT