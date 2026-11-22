---
layout: post
title:  "Resolutions for 2016"
date:   2016-01-12
lang: en
ref: propositos_2016
category: estrategia
tags: [tic, javascript, programación]
excerpt: One resolution for every day.
url-image: /images/propositos_anyo_nuevo/game_of_life.png
---

   <script src="/js/game_of_life/game_of_life.js"></script>

   <script type="text/javascript">
      'use strict';

      var board1;
      var drawing1;
      var btnStart1;
      var btnStop1;
      var btnReset1;
      var board2;
      var drawing2;
      var btnStart2;
      var btnStop2;
      var btnReset2;
      var board3;
      var drawing3;
      var btnStart3;
      var btnStop3;
      var btnReset3;
      var board4;
      var drawing4;
      var btnStart4;
      var btnStop4;
      var btnReset4;
      var board5;
      var drawing5;
      var btnStart5;
      var btnStop5;
      var btnReset5;

      function runNextGen(board, drawing) {
        board.calculateNextGen();
        board.establishGen();
        board.toHTMLCanvas(drawing);
      }

      function reset1() {
        board1 = new Board(20);
        board1.addCells([[5,5],[5,6],[6,5], [6,6], [15,10], [14,11], [16,11], [14,12], [16,12], [15,13]]);
        board1.establishGen();
        board1.toHTMLCanvas(drawing1);
        window.clearTimeout(btnStop1.timer);
        btnStart1.style.display='inline';
        btnStop1.style.display='none';
      }

      function reset2() {
        board2 = new Board(20);
        board2.addCells([[5,5],[5,6],[5,7], [6,5], [4,5]]);
        board2.establishGen();
        board2.toHTMLCanvas(drawing2);
        window.clearTimeout(btnStop2.timer);
        btnStart2.style.display='inline';
        btnStop2.style.display='none';
      }

      function reset3() {
        board3 = new Board(20);
        board3.addCells([[3,3],[3,4], [3,5], [2,5],[1,4]]);
        board3.establishGen();
        board3.toHTMLCanvas(drawing3);
        window.clearTimeout(btnStop3.timer);
        btnStart3.style.display='inline';
        btnStop3.style.display='none';
      }

      function reset4() {
        board4 = new Board(20);
        board4.addCells([[3,3],[3,4], [3,5], [2,5],[1,4], [15,10], [14,11], [16,11], [14,12], [16,12], [15,13]]);
        board4.establishGen();
        board4.toHTMLCanvas(drawing4);
        window.clearTimeout(btnStop4.timer);
        btnStart4.style.display='inline';
        btnStop4.style.display='none';
      }

      function reset5() {
        board5 = new Board(20);
        board5.addCells([[3,3],[3,4], [3,5], [2,5],[1,4], [15,11], [14,12], [16,12], [14,13], [16,13], [15,14]]);
        board5.establishGen();
        board5.toHTMLCanvas(drawing5);
        window.clearTimeout(btnStop5.timer);
        btnStart5.style.display='inline';
        btnStop5.style.display='none';
      }

      function init() {
        // elements and events
        drawing1 = document.getElementById('drawing1');
        btnStart1 = document.getElementById('btnStart1');
        btnStop1 = document.getElementById('btnStop1');
        btnReset1 = document.getElementById('btnReset1');
        drawing2 = document.getElementById('drawing2');
        btnStart2 = document.getElementById('btnStart2');
        btnStop2 = document.getElementById('btnStop2');
        btnReset2 = document.getElementById('btnReset2');
        drawing3 = document.getElementById('drawing3');
        btnStart3 = document.getElementById('btnStart3');
        btnStop3 = document.getElementById('btnStop3');
        btnReset3 = document.getElementById('btnReset3');
        drawing4 = document.getElementById('drawing4');
        btnStart4 = document.getElementById('btnStart4');
        btnStop4 = document.getElementById('btnStop4');
        btnReset4 = document.getElementById('btnReset4');
        drawing5 = document.getElementById('drawing5');
        btnStart5 = document.getElementById('btnStart5');
        btnStop5 = document.getElementById('btnStop5');
        btnReset5 = document.getElementById('btnReset5');
        // board
        reset1();
        reset2();
        reset3();
        reset4();
        reset5();

        // events
        btnStart1.addEventListener('click',
                function() {
                  btnStop1.timer = window.setInterval(
                                        function() {runNextGen(board1, drawing1)},
                                        500);
                  btnStart1.style.display='none';
                  btnStop1.style.display='inline';
                  }
                );
        btnStop1.addEventListener('click',
                function() {
                  window.clearTimeout(btnStop1.timer);
                  btnStart1.style.display='inline';
                  btnStop1.style.display='none';
                });
        btnReset1.addEventListener('click', reset1);

        btnStart2.addEventListener('click',
                function() {
                  btnStop2.timer = window.setInterval(
                                        function() {runNextGen(board2, drawing2)},
                                        500);
                  btnStart2.style.display='none';
                  btnStop2.style.display='inline';
                  }
                );
        btnStop2.addEventListener('click',
                function() {
                  window.clearTimeout(btnStop2.timer);
                  btnStart2.style.display='inline';
                  btnStop2.style.display='none';
                });
        btnReset2.addEventListener('click', reset2);

        btnStart3.addEventListener('click',
                function() {
                  btnStop3.timer = window.setInterval(
                                        function() {runNextGen(board3, drawing3)},
                                        500);
                  btnStart3.style.display='none';
                  btnStop3.style.display='inline';
                  }
                );
        btnStop3.addEventListener('click',
                function() {
                  window.clearTimeout(btnStop3.timer);
                  btnStart3.style.display='inline';
                  btnStop3.style.display='none';
                });
        btnReset3.addEventListener('click', reset3);

        btnStart4.addEventListener('click',
                function() {
                  btnStop4.timer = window.setInterval(
                                        function() {runNextGen(board4, drawing4)},
                                        500);
                  btnStart4.style.display='none';
                  btnStop4.style.display='inline';
                  }
                );
        btnStop4.addEventListener('click',
                function() {
                  window.clearTimeout(btnStop4.timer);
                  btnStart4.style.display='inline';
                  btnStop4.style.display='none';
                });
        btnReset4.addEventListener('click', reset4);

        btnStart5.addEventListener('click',
                function() {
                  btnStop5.timer = window.setInterval(
                                        function() {runNextGen(board5, drawing5)},
                                        500);
                  btnStart5.style.display='none';
                  btnStop5.style.display='inline';
                  }
                );
        btnStop5.addEventListener('click',
                function() {
                  window.clearTimeout(btnStop5.timer);
                  btnStart5.style.display='inline';
                  btnStop5.style.display='none';
                });
        btnReset5.addEventListener('click', reset5);
      }

      window.addEventListener('DOMContentLoaded', init, { once: true });

    </script>

The year 2016 is beginning, and as every year, many people are making New Year's resolutions to improve themselves. According to [The Guardian](https://www.theguardian.com/news/datablog/2015/dec/31/how-long-do-people-keep-their-new-year-resolutions), more than 32% of Britons plan to make a New Year's resolution.

In my personal life and at work, I have never been one for making resolutions on a particular date. I prefer to make a list of long-term goals I can revisit from time to time and keep track of the next action that will move each of my projects forward. It is much in the spirit of [Getting Things Done](https://gettingthingsdone.com/).

Still, I want to use the beginning of 2016 to renew a lasting commitment at a time when so many people are talking about **change**.

- In information and communications technology, Gartner forecasts [ten strategic technology trends for 2016](http://www.forbes.com/sites/sap/2015/12/10/gartners-top-10-strategic-technology-trends-for-2016/).
- Looking at society, the economy and politics, El País describes [a crisis that leaves us disoriented](http://cultura.elpais.com/cultura/2016/01/06/babelia/1452083099_537296.html) and makes it hard to set goals.

There is plenty online about why we should embrace change. I want to propose **a commitment to keep moving**.

> Traveller, there is no path. You make the path by walking.
>
> — Antonio Machado

Change takes us from A to B, where we can rest once we arrive. That would be ideal in a closed world where nothing changes. But life is never like that. Things happen on the way from A to B, many of them beyond our control. Once we get there, we will have to move again, to C, and we will feel frustrated.

So I suggest being as flexible as a reed. Think of pursuing a goal as taking a walk whose course you can adjust as circumstances change.

> I prefer the trapeze. I can see things coming while I'm in motion.
>
> — Manolo García

Change happens around us, as it always has. By keeping ourselves in motion, we can prepare for it and use it to reach our goals.

So here is my resolution for 2016: keep moving, whatever changes and surprises come our way.

## A metaphor: Conway's Game of Life
{: id="una-metáfora-el-juego-de-la-vida-de-conway"}

When I discovered computing in the 1980s on a Sinclair ZX Spectrum, one of the demonstration *games* was [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). Its beauty lies in its simplicity:

- A two-dimensional board of any size.
- Cells that are born, reproduce and die.
- A cell is born in an empty square with exactly three living neighbours.
- A cell dies with four or more neighbours (overcrowding) or with one or none (loneliness).

That simplicity makes the game a useful metaphor for motion and change.

---

## Still lifes
{: id="vidas-estáticas"}

Imagine a completely static world. Its inhabitants do not move. They have reached a stable arrangement together, and nothing changes. Is it a utopia or a dystopia?

<div class="life-demo">
  <div>
    <canvas id="drawing1" width="400" height="400">
    </canvas>
  </div>
  <div>
  <button id="btnStart1">Start</button>
  <button id="btnStop1">Stop</button>
  <button id="btnReset1">Reset</button>
  </div>
</div>

---

How boring. Who would want to live in a world like that?

---

### Oscillators
{: id="vidas-oscilantes"}

Sometimes life seems to be moving, but is it really?

Perhaps the changes are just for the sake of changing. What matters is what we are trying to achieve.

<div class="life-demo">
  <div>
    <canvas id="drawing2" width="400" height="400">
    </canvas>
  </div>
  <div>
  <button id="btnStart2">Start</button>
  <button id="btnStop2">Stop</button>
  <button id="btnReset2">Reset</button>
  </div>
</div>

---

In the Game of Life, an oscillator is always changing, but it repeats itself forever.

---

### The glider
{: id="el-planeador"}

The glider is a traveller heading towards a goal. It discovers new horizons in the space it can explore.

<div class="life-demo">
  <div>
    <canvas id="drawing3" width="400" height="400">
    </canvas>
  </div>
  <div>
  <button id="btnStart3">Start</button>
  <button id="btnStop3">Stop</button>
  <button id="btnReset3">Reset</button>
  </div>
</div>

---

It changes so it can take new paths without turning back.

---

### A glider and still lifes (1 of 2)
{: id="planeador-y-vidas-estáticas-1-de-2"}

Still lifes can survive in a closed world. Sometimes, when something from outside disturbs them, they recover and bring the newcomer to a standstill too.

<div class="life-demo">
  <div>
    <canvas id="drawing4" width="400" height="400">
    </canvas>
  </div>
  <div>
  <button id="btnStart4">Start</button>
  <button id="btnStop4">Stop</button>
  <button id="btnReset4">Reset</button>
  </div>
</div>

---

Before long, life becomes monotonous again. But it is a little different from how it was before the encounter.

---

### A glider and still lifes (2 of 2)
{: id="planeador-y-vidas-estáticas-2-de-2"}

At other times, the disturbance sets the still lifes in motion. They survive by adapting to their surroundings and evolving continually.

<div class="life-demo">
  <div>
    <canvas id="drawing5" width="400" height="400">
    </canvas>
  </div>
  <div>
  <button id="btnStart5">Start</button>
  <button id="btnStop5">Stop</button>
  <button id="btnReset5">Reset</button>
  </div>
</div>

---

A rich and varied new world emerges.

## Epilogue
{: id="epílogo"}

**What kind of Game of Life world do we want to create?**

In 2016, let us resolve to keep moving so we can use the changes we encounter to pursue our personal and professional goals.

<blockquote><p>

Strange fascination, fascinating me
/ Changes are taking the pace
/ I'm going through
(David Bowie)

</p></blockquote>

## References
{: id="referencias"}

The JavaScript code for the Game of Life is available in [this GitHub repository](https://github.com/jmgaguilera/game_of_life).
