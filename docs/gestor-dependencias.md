# Gestor de dependencias
A la hora de elegir un gestor de dependencias, hay ciertos aspectos que debemos tener en cuenta. Estos son eficiencia, mantenimiento, seguridad y, por supuesto, que siga los estándares que hay en el lenguaje, cosa que cumplen todos los gestores que vamos a ver.

- [npm](https://www.npmjs.com/) no destaca por su eficiencia, aunque en la última versión ha mejorado bastante. Está en constante desarrollo y mejora y en cuanto a seguridad no tiene problemas. 
- [yarn](https://yarnpkg.com/) es más rápido que npm debido que usa un sitema de caché para la instalación de las dependencias además de realizar la descarga de las mismas en paralelo. Es un proyecto consolidado que está en constante mantenimiento. Está centrado en la seguridad.
- [pnpm](https://pnpm.io/) usa un sistema de caché parecido al de Yarn. Usa un sistema de almacenamiento compartido entre los diferentes proyectos, evitando duplicidades y reduciendo la carga a la hora de instalar las dependencias. Es el más rápido y útil en proyectos grandes. Está creciendo por lo que está en continuo mantenimiento. Usa checksums para la seguridad.

## Elección
El proyecto en el que vamos a trabajar no es muy grande por lo que a pnpm no le sacamos el máximo partido, así que elegimos Yarn por todo lo nombrado anteriormente. 