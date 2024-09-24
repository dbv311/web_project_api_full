# Tripleten web_project_api_full

Se hace integracion en un mismo espacio del backend, frontend y en servidor funcionando permanentemente.

Registro:

Se crea usuario mediante correo electronico y contraseña, se utiliza bcrypt para obtener un hash de la contraseña y ofrecerle mayor seguridad al usuario.

Ingreso:

El usuario previamente registrado debe agregar su mail y password para ingresar a su sesión.

Jwt:

Se configura el token para que su duracion sea de 7 dias.

Funcionamiento:

Se crea una pagina del formato red social para cargar tarjetas con nombres, fotos, likes, dislikes y eliminarlas.

Errores:

Se crea middleware para poder tener un correcto manejo de errores.

Validaciones:

Se emplea Celebrate y Joi para que la base de datos funcione de mejor manera al recibir las peticiones.

Servidor, Certificados, Nginx:

Se implementa el uso de cerbot, para la seguridad de la pagina y la emision de certificados

Se escogió Google Cloud como servidor.

Para los redireccionamientos internos del puerto 3000 se usa Nginx.

Se utiliza pm2 para su ejecucion.

Link para ingreso: https://www.maxidanna.mooo.com

Creado por:
Daniela Bohorquez - Web Developer
