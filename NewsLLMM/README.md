# Proyecto Final (1er LLMM)

## Idea inicial

 Mi idea inicial fue enfocar la web a Blog, para mantener la web ordenada a la par que simple.
 
 Todo el proyecto se ha desarrollado mediante Bootstrap 3.3.7.

[![Bootstrap](http://www.ironsummitmedia.com/blog/wp-content/uploads/2013/08/bootstrap.jpg)](http://getbootstrap.com/)

Los aspectos que quise implementar como primeras ideas fueron:

```

 1. Un header algo llamativo, pero coherente con la tematica de la web
     
 2. Una barra de navegacion simple para aplicar los conocimientos y a la vez implementar el acceso a las tres primeras noticias
 
 3. El blog en si, que seria un container donde se auto generarian las noticias, con estilo single-card. 
 
 4. Footer donde poner el acceso a las redes sociales, copyright y autor.

```

-------

### Desktop

-----------
Pense en un estilo blog por la tematica que tenia que tener la web, estos fueron los primeros bocetos:

![preview-desktop1](https://github.com/Dualvic/Lenguaje-de-Marcas/blob/master/NewsLLMM/data/desktop-preview1.png?raw=true)

Y para enseñar bien la idea del footer, lo dibuje aparte:

![preview-desktop2](https://github.com/Dualvic/Lenguaje-de-Marcas/blob/master/NewsLLMM/data/desktop-preview2.png?raw=true)

Esta era la idea principal para el tamaño en pantallas grandes, me parecio que asi podria abarcar todas las ideas de forma mas que decente.

Para el header encontré por internet que el propio Bootstrap traía consigo un header predefinido que tu podías modificar llamado **Jumbotron**, con varias modificaciones conseguí algo parecido a lo que tenia en mente. 

``` 
Nota
Esto me ayudo a entender que Bootstrap traía 
consigo clases predefinidas que te facilitan muchísimo el trabajo
```
Primer vistazo a la web:

![enter image description here](https://github.com/Dualvic/Lenguaje-de-Marcas/blob/master/NewsLLMM/data/first-look.png?raw=true)

Acoge varios templates adaptados que dejare en el apartado @Herramientas utilizadas.


-------

### Móvil

-----------

Sin muchas variaciones ya que bootstrap lo redimensiona todo prácticamente, solo algunas variaciones en la publicidad y la barra de navegación.

![mobile-preview](https://github.com/Dualvic/Lenguaje-de-Marcas/blob/master/NewsLLMM/data/mobile-preview.jpg?raw=true)


### Anuncio

![addpreview](https://github.com/Dualvic/Lenguaje-de-Marcas/blob/master/NewsLLMM/data/add-preview.gif?raw=true)

> Se que el anuncio tenia unas medida des especificas, pero en el mismo documento decía que podíamos cambiarlo siempre y cuando fuera justificado, tuve esta idea de anuncio en scroll visitando otras paginas de éxito y me pareció un buen motivo para hacer el cambio, en vez de un anuncio fijo, un anuncio "interactivo" fijo, pero que se de desplaza si haces scroll.  También  añadí en el JS un hide on click, para desvanecer en anuncio en caso de que queramos hacerlo, sin modificar la estructura responsive.

### Herramientas utilizadas:

 * [Bootsnipp](https://bootsnipp.com/) Ayuda con la implementacion de algunas ideas
 * [W3School](https://www.w3schools.com/) Para aclarar conceptos
 * [JavaScript](https://www.javascript.com/) Basico
 * [Intell IJ IDEA](https://www.jetbrains.com/idea/) Como IDE de desarrollo