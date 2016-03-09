---
layout: post
title: Homenaje a David Bowie
author: José Miguel González Aguilera
date: 2016-01-24
lang: es
category: análisis
tags: [R, análisis, bowie]
excerpt: Somero análisis de datos sobre el texto de sus temas.
url-image: /images/david_bowie_files/figure-html/unnamed-chunk-4-1.png
---




Ahora que todo el mundo habla parabienes de David Bowie tengo que decir que en mis tiempos de
juventud no me gustaba especialmente. Lo redescubrí hace pocos años en su disco _The Next Day_
que acabé adquiriendo en vinilo, lo que, en una época en la que ya no compro Compact Disc,
es un honor reservado a aquellos discos que superan la escucha en streaming.

Después de escuchar _Lazarus_ unos días antes de su muerte, la noticia no me sorprendió y las
estrofas de la canción adquirieron todo su sentido.

|     Look up here, I’m in heaven
|     I’ve got scars that can’t be seen
|     I’ve got drama, can’t be stolen
|     Everybody knows me now
|     
|     Look up here, man, I’m in danger
|     I’ve got nothing left to lose
|     I’m so high it makes my brain whirl
|     Dropped my cell phone down below
|     
|


Este fin de semana, mientras escuchaba el disco _Blackstar_ he querido hacer mi pequeño 
homenaje con este breve análisis de sus letras.

# Los datos





He desarrollado un script en Python que accede a [AZLyrics](http://azlyrics.com), y con él he recopilado 
las letras de las 
254
canciones de los
25
albumes:



|album                 |year |
|:---------------------|:----|
|David Bowie           |1967 |
|Space Oddity          |1969 |
|The Man Who...        |1970 |
|Hunky Dory            |1971 |
|The Rise And Fall...  |1972 |
|Pin Ups               |1973 |
|Aladdin Sane          |1973 |
|Diamond Dogs          |1974 |
|Young Americans       |1975 |
|Station To Station    |1976 |
|"Heroes"              |1977 |
|Low                   |1977 |
|Lodger                |1979 |
|Scary Monsters        |1980 |
|Let\'s Dance          |1983 |
|Tonight               |1984 |
|Never Let Me Down     |1987 |
|Black Tie White Noise |1993 |
|Outside               |1995 |
|Earthling             |1997 |
|Hours...              |1999 |
|Heathen               |2002 |
|Reality               |2003 |
|The Next Day          |2013 |
|Blackstar             |2016 |

# De qué van sus canciones

Esta es la nube de palabras de toda su carrera musical:


<img src="/images/david_bowie_files/figure-html/unnamed-chunk-4-1.png" title="" alt="" width="672" />


A modo de ejemplo, esta sería la de su disco *Space Oddity*:


<img src="/images/david_bowie_files/figure-html/unnamed-chunk-5-1.png" title="" alt="" width="672" />


¿Veis al Mayor Tom llamando al control de tierra?

|    Am I sitting in a tin can
|    Far above the world
|    Planet Earth is blue
|    And there's nothing I can do
|                    *Space Oddity*
|

Y esta la de su último disco *Blackstar*:


<img src="/images/david_bowie_files/figure-html/unnamed-chunk-6-1.png" title="" alt="" width="672" />

|    Something happened on the day he died
|    Spirit rose a metre and stepped aside
|    Somebody else took his place, and bravely cried
|    (I’m a blackstar, I’m a blackstar)
|                                     *Blackstar*
|

# Las palabras a través de los años

Voy a mostrar ahora algunas palabras importantes en sus letras y 
su frecuencia a lo largo de los años: god, love, time, star, live & die

## God & Love

|     Check ignition and may God’s love be with you — *Space Oddity* 
|


<img src="/images/david_bowie_files/figure-html/unnamed-chunk-7-1.png" title="" alt="" width="768" />


## Time & Star

|    Time, he's waiting in the wings
|    He speaks of senseless things
|    His script is you and me, boys
|                              *Time*
|
|    There's a starman waiting in the sky
|    He's told us not to blow it
|    'Cause he knows it's all worthwhile
|                                  *Starman*
|

<img src="/images/david_bowie_files/figure-html/unnamed-chunk-8-1.png" title="" alt="" width="768" />




## Die & Live

En los dos últimos discos *die* aparece más que en los anteriores...


|    Here I am
|    Not quite dying
|    My body left to rot in a hollow tree
|    Its branches throwing shadows
|    On the gallows for me
|    And the next day
|    And the next
|    And another day
|                   *The next day*
|


<img src="/images/david_bowie_files/figure-html/unnamed-chunk-9-1.png" title="" alt="" width="768" />


# Epílogo

|    This chaos is killing me
|    This chaos is killing me
|
|    Yeah bye, bye love
|    Bye, bye love
|    Eternal
|    Sweet, sweet love
|    Bye bye space boy
|    Bye, bye love
|
|    Moon dust will cover you
|    Moon dust will cover you
|    Moon dust will cover you
|    Moon dust will cover you
|    Moon dust will cover you
|                    *Hallo spaceboy*



# Referencias

El documento R (rmarkdown) para reproducir este análisis puede encontrarse en [este enlace](http://github.com/jmgaguilera/david_bowie)



