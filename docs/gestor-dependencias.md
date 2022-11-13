# Gestor de dependencias
En este fichero se va a analizar cuales son los posibles gestores de dependencias que hay para TypeScript y cuál y porqué se ha elegido para este proyecto.

## NPM
El primer gestor de dependencias que vamos a ver es [NPM](https://www.npmjs.com/). Sus siglas corresponden con Node Package Manager y es el gestor de dependencias estandar para Node.js. Nos permite compartir e instalar paquetes para JavaScript y por lo tanto también para TypeScript. Su funcionamiento consiste en, a través de la terminal, ejecutar el comando `npm install` y se instalarán todas las dependencias que se encuentren en el fichero `package.json`. Este fichero se crea automáticamente cuando se ejecuta el comando `npm init` y se le van añadiendo las dependencias que se vayan instalando. También dispone del fichero `package-lock.json` donde se listan las versiones de las dependencias instaladas. El principal problema de NPM es su eficiencia. Cada vez que ejecutamos install se instalan todas las dependencias y esto hace que para proyectos grandes se convierta en un proceso muy lento.

## Yarn
El siguiente gestor de dependencias que vamos a ver es [Yarn](https://yarnpkg.com/). Es un gestor de dependencias basado en NPM pero enfocado en la seguridad y en la velocidad. La principales diferencias que tiene con NPM son que, utiliza un sistema de caché para la instalación de las dependencias, por lo que los paquetes ya instalados no los vuelve a descargar, y realiza la descarga de las dependencias en paralelo.

## Pnpm
El último gestor de dependencias que vamos a ver es [Pnpm](https://pnpm.io/). Al igual que Yarn, también está basado en NPM y usa un sistema parecido de caché. La diferencia con este último es que usa un sistema de almacenamiento compartido entre los diferentes proyectos, por lo que si en un proyecto se instala una dependencia, en otro proyecto que también la necesite, no se volverá a instalar, sino que se usará la misma que ya está instalada. En cuanto a eficiencia es el más rápido de los tres. Esta es una muy buena opción si se trabaja con varios proyectos que requieran las mismas dependencias.

## Elección
Como solo vamos a trabajar con un proyecto y la diferencia de eficiencia no es tan grande, he decidido usar Yarn como gestor de dependencias.