# Gestor de dependencias

## NPM
El primer gestor de dependencias que vamos a ver es [NPM](https://www.npmjs.com/). Sus siglas corresponden con Node Package Manager y es el gestor de dependencias estandar para Node.js. Nos permite compartir e instalar paquetes para JavaScript y por lo tanto también para TypeScript. Al ser el gestor de dependencias estandar, tiene una gran comunidad detrás implementando plugins para su uso. Era el más lento de los gestores que vamos a ver pero después de la versión 5 ha mejorado mucho. Es sencillo de usar y la mayoría de la documentación de los paquetes usa NPM como ejemplo.

## Yarn
El siguiente gestor de dependencias que vamos a ver es [Yarn](https://yarnpkg.com/). Es un gestor de dependencias basado en NPM pero enfocado en la seguridad y en la velocidad. La principales diferencias que tiene con NPM son que, utiliza un sistema de caché para la instalación de las dependencias, por lo que los paquetes ya instalados no los vuelve a descargar, y realiza la descarga de las dependencias en paralelo.

## Pnpm
El último gestor de dependencias que vamos a ver es [Pnpm](https://pnpm.io/). Al igual que Yarn, también está basado en NPM y usa un sistema parecido de caché. La diferencia con este último es que usa un sistema de almacenamiento compartido entre los diferentes proyectos, por lo que si en un proyecto se instala una dependencia, en otro proyecto que también la necesite, no se volverá a instalar, sino que se usará la misma que ya está instalada. En cuanto a eficiencia es el más rápido de los tres. Esta es una muy buena opción si se trabaja con varios proyectos que requieran las mismas dependencias.

## Elección
Como solo vamos a trabajar con un proyecto y la diferencia de eficiencia no es tan grande, he decidido usar Yarn como gestor de dependencias.