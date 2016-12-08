---
layout: post
title:  Utilidad de traducción de textos a tengwar
author: José Miguel González Aguilera
date: 2016-12-08
lang: es
ref: tengwar-es
categories: [Tengwar, LaTeX, Gramaticas, Javascript]
tags: [Tengwar, LaTeX, Gramaticas, Javascript]
excerpt: Continuando con J.R.R. Tolkien, he desarrollado un traductor de textos al sistema de escritura tengwar. He implementado una gramática para el "modo español 2006" a fin de traducir textos españoles. Este "modo", que yo conociera, carecía de una implementación completa en Internet.
url-image: /images/tengwar-esp/un_anillo.png
---

  <img src="/images/tengwar-esp/un_anillo.png" style="display:block;margin-left:auto; margin-right:auto;" width="600px"/>


  <center>
  <a href="http://www.jmgaguilera.com/tengwar-esp/procesador/index.html">Enlace a la utilidad</a>
  <br/>
  <a href="http://github.com/jmgaguilera/tengwar-esp">Código fuente</a>
  <br/>
  </center>

Traductor de textos al sistema de escritura, inventado por J.R.R. Tolkien, tengwar. He implementado en javascript una gramática que aplica el "[modo español 2006](http://lambenor.free.fr/tengwar/espanol_2006.html)" para traducir textos españoles. Este "modo", que yo conociera, carecía de una implementación completa en Internet. La mía permite:

* Elegir entre los modos de vocales plenas y vocales tehtar.
* Aplicar a voluntad las reglas opcionales del modo español.
* Mostrar el resultado en dos fuentes de texto diferentes (una de ellas la utilizada en la célebre inscripción del anillo único).
* Mostrar el resultado en comandos del paquete [tengwarscript](https://www.ctan.org/pkg/tengwarscript?lang=en) de LaTeX, para facilitar su inclusión en documentos LaTeX sin necesidad de estudiar los comandos.


  
  
