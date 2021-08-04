1. Crear una carpeta para los certificados, por ej apache/conf/certificates/Proyecto/front y apache/conf/certificates/Proyecto/back

2. En httpd-vhost.conf crear un host virtual que redireccione http a https y otro que sea el de https, por ej el backend

```
<VirtualHost elrincondelaprogramacion.api:80>
    ServerName elrincondelaprogramacion.api
    Redirect / https://elrincondelaprogramacion.api/
</VirtualHost>

<VirtualHost elrincondelaprogramacion.api:443>
    DocumentRoot "C:/xampp/htdocs/Proyecto/Elrincondelaprogramacion-API/public"
    ServerName elrincondelaprogramacion.api
    SSLEngine on
    SSLCertificateFile "C:/xampp/apache/conf/certificates/Proyecto/back/elrincondelaprogramacion.api.crt"
    SSLCertificateKeyFile "C:/xampp/apache/conf/certificates/Proyecto/back/elrincondelaprogramacion.api.key"
    <Directory "C:/xampp/htdocs/Proyecto/Elrincondelaprogramacion-API/public">
        Options Indexes FollowSymLinks     
        AllowOverride All
        Order Deny,Allow
        Allow from all     
    </Directory> 
</VirtualHost>
```
3. Añade los siguientes dns (puedes usar tus dns) en etc/hosts, si lo haces debes cambiar la propiedad url que está en este [archivo](https://github.com/Pacorb94/ProyectoDAW/blob/master/Elrincondelaprogramacion/src/app/services/User.service.ts)

```
127.0.0.1 elrincondelaprogramacion.com
127.0.0.1 elrincondelaprogramacion.api
```

4. Crear 2 archivos certificate.cnf uno para el frontend y otro para el backend y añadirle lo siguiente a cada uno

```
[req]
default_bits = 2048
prompt = no
default_md = sha256
x509_extensions = v3_req
distinguished_name = dn

[dn]
C = SP
ST = Spain
L = Spain
O = My Organisation
OU = My Organisational Unit
emailAddress = email@domain.com
CN = dominio o ip del frontend o del backend

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost 
```

5. Creamos los archivos .key y .crt por ej en apache/conf/certificates/Proyecto/front y apache/conf/certificates/Proyecto/back
openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout ./nombre.key -days 3560 -out ./nombre.crt -config ./certificate.cnf

6. En cada carpeta (por ej front y back) ejecutamos nombre.crt>siguiente>elegimos la segunda opción>examinar>entidades de certificación raíz de confianza>aceptar>siguiente>finalizar>instalamos el certificado

7. Para no escribir tanto en ng s vamos a angular.json en la clave "configurations" de la clave "serve" añadir la ruta del certificado y la clave, por ej
```
"ssl":true,
"sslCert":"C:/xampp/apache/conf/certificates/Proyecto/front/elrincondelaprogramacion.com.crt",
"sslKey":"C:/xampp/apache/conf/certificates/Proyecto/front/elrincondelaprogramacion.com.key"
```