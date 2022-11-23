# Gestor de dependencias
Tanto en JavaScript como en TypeScript, los paquetes de terceros (dependencias) se listan en el archivo `package.json`, introducido por npm que es el estándar de node.js. A la hora de la instalación/gestión de los mismos, es donde se diferencian los gestores de dependencias. 

- [npm](https://www.npmjs.com/) es muy sencillo de configurar y usar. Hasta la última versión no destacaba por su velocidad, pero con la versión 5 ha mejorado significativamente.
- [yarn](https://yarnpkg.com/) se centra en la seguridad y es más rápido que npm. Usa un sistema de caché para la instalación de las dependecias y además realiza la descarga de las mismas en paralelo de ahí que consiga esa velocidad. Sencillo de configurar y usar.
- [pnpm](https://pnpm.io/) usa un sistema de caché parecido al de Yarn. Usa un sistema de almacenamiento compartido entre los diferentes proyectos, evitando duplicidades y reduciendo la carga a la hora de instalar las dependencias. Es el más rápido y útil en proyectos grandes.

## Elección
El proyecto en el que vamos a trabajar no es muy grande por lo que a pnpm no le sacamos el máximo partido. He decidido usar Yarn ya que es sencillo de usar, eficiente y seguro. 