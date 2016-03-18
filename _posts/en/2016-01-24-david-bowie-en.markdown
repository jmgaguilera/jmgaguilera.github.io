---
layout: post
title:  David Bowie Tribute
author: José Miguel González Aguilera
date: 2016-01-24
lang: en
ref: bowie
category: analysis
tags: [R, analysis, bowie]
excerpt: Short analysis on the text of his lyrics.
url-image: /images/david_bowie_files/figure-html/unnamed-chunk-4-1.png
---



Now that everyone is talking nice things about David Bowie, I have to say that 
I did not like him very much when I was young.
I rediscovered him a few years ago with album _The Next Day_
I ended up buying the vinyl, at a time when I no longer buy Compact Disc,
It is something I reserve for those albums that exceed my expectations when listening on streaming.

After listening to _Lazarus_ few days before his death, the news did not surprise me and
verses of the song took on its full meaning.


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

This weekend, listening to the album _Blackstar_, I wanted to do my little
tribute with this brief analysis of his lyrics.

# The Data





I have developed a Python script that accesses [AZLyrics](http://azlyrics.com), and, with it, I have compiled
the lyrics of
254
songs and
25
albums:


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

#  What about his songs

This is the wordcloud of his entire career:

<img src="/images/david_bowie_files/figure-html/unnamed-chunk-4-1.png" title="" alt="" width="672" />


Amd this of the album *Space Oddity*:


<img src="/images/david_bowie_files/figure-html/unnamed-chunk-5-1.png" title="" alt="" width="672" />


Do you see Major Tom to Ground Control calling?

|    Am I sitting in a tin can
|    Far above the world
|    Planet Earth is blue
|    And there's nothing I can do
|                    *Space Oddity*
|

And this of his latest album *Blackstar*:


<img src="/images/david_bowie_files/figure-html/unnamed-chunk-6-1.png" title="" alt="" width="672" />

|    Something happened on the day he died
|    Spirit rose a metre and stepped aside
|    Somebody else took his place, and bravely cried
|    (I’m a blackstar, I’m a blackstar)
|                                     *Blackstar*
|

# Words through the years

I will now show some important words in their lyrics and
their frequency over the years: god, love, time, star, live & die

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

In the two last albums *die* appears more than before...


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


# Epilogue

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



# References

Document in R (rmarkdown) to reproduce this analysis can be found following [this link](http://github.com/jmgaguilera/david_bowie)



