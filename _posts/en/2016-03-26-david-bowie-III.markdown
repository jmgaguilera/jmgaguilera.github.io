---
layout: post
title: David Bowie Tribute (and III)
author: José Miguel González Aguilera
date: 2016-03-26
category: analysis
tags: [R, analysis, bowie]
lang: en
ref: david_bowie_3
excerpt: Searching nearest neighbour and network of songs.
url-image: /images/david_bowie_3_files/figure-html/red_de_canciones.svg
---

In the previous article I clusterized the songs and did a tree anlysis. Now, I will try a
practical model to dynamically look for the nearest songs to a given one.

## Los datos


Again, There are 254 songs in 25 albums.

In this case, to calculate the distance between songs, I will use the
*Term frequency - inverse document frequency* (tf-idf) for each word in songs, instead
of the absolute frequency of occurrence of each word.

The advantage of this algorithm is that it gives more weight to words that are very common in some
documents, but doesn't appears in a many documents in the corpus. That is, it makes some words more significant than others.
With this system, the word cloud change a bit:

<img src="/images/david_bowie_3_files/figure-html/unnamed-chunk-4-1.svg" title="" alt="" width="672" />


## Nearest song to a given one

With the matrix of terms and using  tf-idf frequencies we can easily determine which songs
are the closest to a given one, based, as in the previous article, in the Euclidean distance between songs.

This method gives better results than the previous classification tree, in last article, which
It was based on the absolute frequencies.

Let's search the nearest songs to _Lazarus_:

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


Now, let's see the nearest songs to _Space Oditty_:


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


The algorithm finds that the nearest song is Ashes to Ashes_. That is, the song in which appears
also _Major Tom_. This is a significant improvement over the system based on the absolute frequencies
in the previous article (You can look for this song there and observe the difference).

Let's try one more song _ "Heroes" _:
  

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

## Network of songs

With the distances between songs, we can visualize the relationships between them
through a network.

With the distances between all of them, the network would be unmanageable. We include just the most important relationships 
to have an idea of what is the result (in any case 254 songs, create a very complex network).

<img src="/images/david_bowie_3_files/figure-html/red_de_canciones.svg" title="" alt="" width="768" />

You can do _infinite_ zoom in this network if you open this image in its own tab following this 
link: [network of songs](/images/david_bowie_3_files/figure-html/red_de_canciones.svg). 
Also you can download the image and open it with a _svg_ viewer.

![zoom en la red de canciones](/images/david_bowie_3_files/figure-html/zoom_red_canciones.png)

In the center of the image we find the songs who have more relationships. The other songs can be found around these.

<br/>

# References

The R document (rmarkdown) to reproduce this analysis can be found following [this link](http://github.com/jmgaguilera/david_bowie)

