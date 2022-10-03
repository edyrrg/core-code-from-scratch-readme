# From JSON to REST

## What is HTTP?

Es un protocolo que permite realizar un peticion de datos y recursos, basado en el modelo de cliente-servidor.

## What is JSON?

JSON es un formato que almacena información estructurada y se utiliza principalmente para transferir datos entre un servidor y un cliente.

### Is JSON the same as a plain Javascript object?

No, JSON es una notation de objeto, se trata de un formato para guardar e intercambiar información que cualquier persona pueda leer.

## What is REST?

Es una interfaz para conectar varios sistemas basados en el protocolo HTTP (uno de los protocolos más antiguos) y nos sirve para obtener y generar datos y operaciones, devolviendo esos datos en formatos muy específicos, como XML y JSON.

## Is REST a programming language, framework, technology, or architecture pattern?

Es una tecnologia. Es el hermano buena onda de SOAP.

## What is a Resource in REST?

Un recurso se puede definir como un elemento vital al que se hace referencia dentro de un sistema cliente-servidor.

### What is a resource identifier?

Es un ID que obtiene el Resource por medio de URI (Uniform Resource Identifier).

## What is an HTTP method?

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.

### What HTTP methods does REST use within its architecture rules?

Estos métodos también los conocemos como los verbos del HTTP y son los siguientes:

GET: Para operaciones de consulta de datos.

POST: Operaciones de inserción.

PUT: Para realizar modificaciones.

PATCH: Para realizar modificaciones parciales en un recurso.

DELETE: Para eliminar un recurso dado.

### Why do we use HTTP methods in REST and how do they relate to resources?

Porque REST utiliza el modelos cliente-servidor, basicamente el cliente manda una peticion y recibe en este caso un Resource, por lo tanto REST es stateless (no guarda informacion).

## Is REST the same as HTTP?

No es lo mismo, pero utilizan el mismo modelo, en este caso REST se apoya de HTTP.

[Regresar](../README.md)
