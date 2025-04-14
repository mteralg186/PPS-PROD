:slightly_smiling_face:
### **CASUAL FRYDAYS**

![](https://i.imgur.com/2iJH0rG.png)

**Release 001 disponible en**
****https://github.com/mteralg186/PPS23-24/releases/tag/Version001

VideoDemo [![](https://i.imgur.com/nDFC66C.png)](https://www.youtube.com/watch?v=XwmCFWEHQwY)


------------


### **Instrucciones para ejecutar el proyecto**

**1º En primer lugar necesitamos la base de datos**
Se encuentra el script de la BD en el proyecto en formato .sql

**2º Clonar el repositorio Ejemplo4 en local**
*git clone https://github.com/ProfeMiguelTernero/Ejemplo4*

**3º Abrir con visual estudio code y descargar los modulos**
*npm install*

**4º Ejecutar el proyecto**
*node --watch ./src/server.js*

**5º Si fallara al ejecutar el servidor por faltar alguna libreria**, como por ejemplo express, instalar con: *npm install express*

![](https://i.imgur.com/eN9mLl4.png)

**6ºSi falla al conectarse a la BBDD**, tengase en cuenta deben coincidir host, puerto, usuario, contraseña y basedatos tal como tenemos especificados en /src/conexion.js

![](https://i.imgur.com/ctLAUfh.png)

------------


**EDR actualizado a 14/03/2025**
![](https://i.imgur.com/MhYiCwx.png)


------------


### **Historico de cambios:**

**24/02/2025**

- MERGE DE CODIGO
- NUEVAS FUNCIONES
- LIKES
- COMENTARIOS OPERATIVOS
- ACERCA DE
- TERMINOS Y COMUNICACIONES
- MEJORAS Y ARREGLOS VARIOS
- SANITIZACION DE "ELEMENTOS GUARDADOS" PARA PONERLO "AL NIVEL DE LOS LIKES

**14/03/2025 (desde 03/03/2025 a 14/03/2025)**


- COMPROBACION DE EDAD EN REGISTRO
- VERIFICACION NUMEROS TLF EN REGISTRO
- REDISEÑO VISUAL PARA QUE QUEDE MAS CLARO
- MODO NOCHE/DIA

- ELEMENTOS GUARDADOS
- BOTON SEGUIR
- RELLENO DE LA BBDD
- ARREGLO DE BUGS

- BOTÓN ÚNICO PARA GUARDAR LOS CAMBIOS SE GUARDA TANTO LA DESCRIPCIÓN COMO LAS REDES SOCIALES Y LA INFORMACIÓN PERSONAL
- METER ÚNICAMENTE TU NOMBRE DE USUARIO PARA VINCULARLO A OTRA RED SOCIALSIN NECESIDAD DE INSERTAR UNA URL 
- ALERTA DE ÉXITO/FALLO AL GUARDAR LOS CAMBIOS
- CREAR PUBLICACIONES
- ELIMINAR PUBLICACIONES
- VER TUS PROPIAS PUBLICACIONES




------------



NOTAS PARA EL USO DE GIT CON VSTUDIO CODE

MERGE CON GITHUB PARA FUSIONAR DOS BRANCHES

*Tenemos que estar con un archivo en el que queramos traer el contenido del otro abierto. Una vez esto, le damos a los 3 puntitos, branches y merge. Escogemos el branch que queremos unir al que ya tenemos y nos aparecerá si hay algún código que colapse en las mismas líneas, desde ahi se puede editar para arreglas esa compatibilidad y cuando se arregle, lo subimos finalmente al brach inicial A tener en cuenta que debemos tener cuenta en github, git instalado en el pc y las credenciales*