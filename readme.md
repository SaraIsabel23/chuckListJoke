# Chuck Norris ha venido para quedarse en tu LocalStorage

Este es un ejercicio que utiliza la API de Chuck Norris para obtener chistes y permite a los usuarios almacenar y eliminar chistes en la interfaz de usuario.


## Funcionalidades

Tenemos un botón `obtener chiste` en el que al clickar traeremos un chiste de chuck norris. Eso lo guardaremos en un listado de chistes en el DOM y se guardará en el LocalStorage. Si recargamos la página se tienen que mantener los últimos chistes traidos (guardados en el LocalStorage). y podremos traer más y se seguirán añadiendo. 

Si da tiempo podremos también hacer un botón que borre todos los items, o también un botón por cada item y se elimine individualmente. Todo esto deberá desaparecer del DOM y del LocalStorage

- **Obtener Chiste de Chuck Norris:** Al hacer clic en el botón "Obtener Chiste", se realiza una solicitud a la API de Chuck Norris para obtener un chiste aleatorio. El chiste se agrega a la lista y se guarda en el almacenamiento local `localStorage`.

- **Cargar Chistes Almacenados:** Al cargar la página, se recuperan los chistes almacenados en el almacenamiento local y se muestran en la lista.

- **Eliminar Chiste:** Cada chiste en la lista tiene un botón "Eliminar". Al hacer clic en este botón, se elimina el chiste de la lista y se actualiza el almacenamiento local.

Podrías ser algo como esto:
![chuck](./img/chuck.png)


## Estructura del Código

- 📄 **index.html**: Contiene la estructura HTML básica.
- 📁 **css**: Hoja de estilo básica para dar estilo a la interfaz.
- 📁 **js**: Código JavaScript que maneja la lógica de obtener, mostrar y eliminar chistes.



## BONUS
Como BONUS crear un botón para eliminar todos los elementos a la vez y/o un botón para eliminar uno a uno el elemento seleccionado 
- Manejador de click en los botones de eliminación (se eliminará desde el local storage como del DOM)

## API Utilizada

- [Chuck Norris API](https://api.chucknorris.io/jokes/random)