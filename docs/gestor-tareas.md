# Gestor de tareas
En este fichero se va a analizar cuales son los posibles gestores de tareas que hay para TypeScript y cuál y porqué se ha elegido para este proyecto.

## Grunt
El primer gestor de tareas que vamos a ver es [Grunt](https://gruntjs.com/). Es un gestor de tareas que nos permite automatizar tareas como compilación, ejecución de test, comprobación del código, etc, y que funciona sobre Node.js. Las tareas se definen en un fichero `Gruntfile.js` y se ejecutan a través de la terminal con el comando `grunt <nombre-tarea>`. Grunt dispone de una gran cantidad de plugins ya que ha sido durante mucho tiempo la opción más popular. No es la opción más rápida de las que vamos a ver aunque la diferencia es muy pequeña.

## Gulp
El segundo gestor de tareas que vamos a ver es [Gulp](https://gulpjs.com/). Tiene el mismo propósito que Grunt, automatizar tareas. Su uso es muy similar, lo único que cambia es el fichero donde se definen las tareas. La configuración de las tareas es algo más compleja que en Grunt pero también es más potente. Hace uso de streams para la ejecución de las tareas, lo que hace que sea más rápido. Tiene menos cantidad de plugins que Grunt aunque los más importantes están disponibles.

## Elección
He decidido usar Grunt como gestor de tareas ya que tiene una amplia comunidad y es una herramienta que está muy asentada. La diferencia de eficiencia no es muy relevante ya que la mejora es mínima. La configuración de ambos resulta compleja al principio pero la de Grunt es más corta. 