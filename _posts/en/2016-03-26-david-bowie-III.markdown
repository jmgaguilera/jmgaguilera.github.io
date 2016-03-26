---
layout: post
title: David Bowie Tribute (and III)
author: José Miguel González Aguilera
date: 2016-03-26
category: analysis
tags: [R, analysis, bowie]
lang: en
ref: david_bowie_3
excerpt: (Pending translation) Searching nearest neighbour and network of songs.
url-image: /images/david_bowie_3_files/figure-html/red_de_canciones.svg
---




En este artículo voy a concluir el breve análisis sobre las canciones de David Bowie 
disponiendo un modelo sobre el que se puedan buscar las canciones más cercanas a otra.

En el artículo anterior hice una exploración de las canciones a través de la generación
de clusteres y la visualización del árbol asociado. Ahora, se tratar de disponer de un
modelo práctico que permita consultar dinámicamente por las canciones más próximas a una
determinada.

## Los datos





Son las mismas 254 canciones de los 25
albumes que he utilizado en el primer análisis:





En este caso, para calcular la distancia entre canciones, voy a utilizar la 
*frecuencia de término – frecuencia inversa de documento* (tf-idf) de cada palabra, en lugar
de la frecuencia absoluta de aparición de cada palabra.

La ventaja de este algoritmo es que da más peso a las palabras que son muy frecuentes en algunos
documentos, pero en un número pequeño relativo de documentos del corpus. Es decir, hace que unas
palabras sean más significativas que otras. Con este sistema, la nube de palabras cambia algo: 


<img src="/images/david_bowie_3_files/figure-html/unnamed-chunk-4-1.svg" title="" alt="" width="672" />


# Canciones cercanas a una determinada

Utilizando la matriz de términos y frecuencias basada en tf-idf se puede determinar de forma sencilla qué canciones 
son las más cercanas a una dada, basándonos, como en el artículo anterior, en la distancia euclídea entre canciones, 
utilizando los valores del vector de palabras de cada canción. 

Este método, al utilizar tf-idf, da mejores resultados que la clasificación en árbol del artículo anterior, que se
basaba en las frecuencias absolutas. Basta utilizar td-idf en el artículo anterior para conseguir resultados similares.



|song                             |  distance|
|:--------------------------------|---------:|
|Lazarus                          | 0.0000000|
|Cygnet Committee                 | 0.6709544|
|Candidate                        | 0.7180088|
|You Feel So Lonely You Could Die | 0.7256923|
|We Are The Dead                  | 0.7280794|
|Shining Star (Makin\' My Love)   | 0.7353172|
|Somebody Up There Likes Me       | 0.7379833|
|Something In The Air             | 0.7549199|
|Ashes To Ashes                   | 0.7621797|
|Five Years                       | 0.7644335|


Veamos qué canciones son encuentra nuestro método que son las más parecidas a _Space Oddity_: 



|song                             |  distance|
|:--------------------------------|---------:|
|Space Oddity                     | 0.0000000|
|Ashes To Ashes                   | 0.8647541|
|Cygnet Committee                 | 0.9391786|
|Candidate                        | 0.9655204|
|You Feel So Lonely You Could Die | 0.9688882|
|We Are The Dead                  | 0.9700174|
|Shining Star (Makin\' My Love)   | 0.9855299|
|If You Can See Me                | 0.9894812|
|Somebody Up There Likes Me       | 0.9911007|
|Five Years                       | 1.0024585|


El algoritmo encuentra que la canción más parecida es _Ashes to Ashes_. Es decir, la canción en la que aparece
también el Major Tom. Esto es una mejora significativa con respecto al sistema basado en las frecuencias absolutas
del artículo anterior (Se puede buscar allí y se observará la diferencia).

Probemos una más, la canción _"Heroes"_
  


|song                             |  distance|
|:--------------------------------|---------:|
|"Heroes"                         | 0.0000000|
|Cygnet Committee                 | 0.7270792|
|You Feel So Lonely You Could Die | 0.7499512|
|Candidate                        | 0.7565930|
|We Are The Dead                  | 0.7641921|
|Shining Star (Makin\' My Love)   | 0.7683600|
|Somebody Up There Likes Me       | 0.7725134|
|If You Can See Me                | 0.7843719|
|When I Live My Dream             | 0.7858126|
|Something In The Air             | 0.8051492|

<br/>
<br/>

## Nube de canciones

Al tener las distancias entre las canciones, podemos visualizar estas relaciones entre ellas
mediante una red.

Si visualizásemos las distancias entre todas ellas, la red sería inmanejable, basta con incluir las relaciones
más significativas, Para tener una idea de lo que supone (en cualquier caso 254 canciones, crean una red muy compleja de visualizar).


<img src="/images/david_bowie_3_files/figure-html/red_de_canciones.svg" title="" alt="" width="768" />

Para poder hacer zoom _infinito_ en esta red, lo mejor es abrila directamente en su propia solapa del navegador siguiendo
este enlace: [red de canciones](/images/david_bowie_3_files/figure-html/red_de_canciones.svg). También cabe descargar la imagen y  mostrarla con un visor de documentos _svg_.

![zoom en la red de canciones](/images/david_bowie_3_files/figure-html/zoom_red_canciones.png)

En el centro del mismo se encuentran las canciones que tienen más relaciones. Las restantes, se disponen alrededor.

<br/>

# Referencias

El documento R (rmarkdown) para reproducir este análisis puede encontrarse en
 [este enlace](http://github.com/jmgaguilera/david_bowie)

