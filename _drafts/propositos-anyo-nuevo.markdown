---
layout: post
title:  "Propósitos para el año 2016"
category: estrategia
tags: [tic, javascript, programación]
---

   <script src="/js/game_of_life/game_of_life.js"></script>

   <script type="text/javascript">
      'use strict';

      var board1;
      var drawing1;
      var btnNextGen1;
      var btnReset1;
      var board2;
      var drawing2;
      var btnNextGen2;
      var btnReset2;
      var board3;
      var drawing3;
      var btnNextGen3;
      var btnReset3;
      var board4;
      var drawing4;
      var btnNextGen4;
      var btnReset4;
      var board5;
      var drawing5;
      var btnNextGen5;
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

      window.onload = init;

    </script>

Comienza el año 2016 y, como todos los años, muchas personas hacen sus propósitos de año nuevo para mejorar. Según [The Guardian](http://www.theguardian.com/news/datablog/2015/dec/31/how-long-do-people-keep-their-new-year-resolutions), más del 32% de los británicos planean propósitos de año nuevo.

Tanto en lo personal como en lo laboral, nunca he sido amigo de hacer
propósitos a una fecha dada, tiendo más a tener una lista de objetivos a
largo plazo, revisables cada cierto tiempo, y a mantener una lista de los
siguiente que tengo que hacer para avanzar en cada uno de mis proyectos,
personales o laborales. Muy en la línea del método [GTD](http://gettingthingsdone.com/).

En cualquier caso sí que quiero aprovechar el comienzo de 2016 para renovar un compromiso permanente en estos tiempos en los que se habla tanto de **cambio**.

- La consultora Gartner, en relación a las Tecnologías de la
Información y de las Comunicaciones, prevee las [10 tendencias estratégicas en tecnología de 2016](http://www.forbes.com/sites/sap/2015/12/10/gartners-top-10-strategic-technology-trends-for-2016/).
- El País, en relación a la sociedad, la economía y la política
identifica un estado de [crisis que lleva a la desorientación](http://cultura.elpais.com/cultura/2016/01/06/babelia/1452083099_537296.html), en el que es difícil establecer objetivos.

No voy a profundizar en la idea de que hay que aceptar los cambios en
lugar de rechazarlos. En Internet hay infinitas fuentes a las que
acudir. Simplemente **quiero proponer, no el cambio, sino el
movimiento**.

<blockquote><p>
Caminante, no hay camino, se hace camino al andar.
(Antonio Machado)
</p></blockquote>

Propongo que nuestro propósito sea movernos a la consecución de
un objetivo que es móvil ya que las circunstancias externas lo
son. Lo que nos obligará a mantenernos siempre en movimiento.

El cambio, como tal, supone movernos de A a B, y una vez allí,
relajarnos. En un mundo cerrado, en el que nada cambia, esta situación
es ideal. Pero la vida no es así, en el camino de A a B, nos pasarán
cosas, muchas llegarán del exterior, por lo que, cuando estemos en B,
tendremos que volver a movernos a otro lugar, a C... y nos frustraremos.

Por lo tanto, propongo ser flexible como un junco. Concebir nuestros
objetivos, no como un cambio, sino como un paseo, que podremos guiar y
modificar según las circunstancias cambien.

<blockquote><p>
Prefiero el trapecio, para verlas venir en movimiento. (Manolo García)
</p></blockquote>

El cambio, así, pasa a ser externo, lo que siempre ha sido. Y nuestro movimiento lo usaremos para
prepararnos para él y aprovecharlo para lograr nuestros objetivos


## El juego de la vida de Conway

Cuando descubrí la informática, allá por los años 80, con un Sinclair ZX
Spectrum, uno de los *juegos* de demostración era el [juego de la vida de
Conway](https://es.wikipedia.org/wiki/Juego_de_la_vida). Un juego cuya belleza reside en su simplicidad:

- Un tablero de dos dimensiones del tamaño que se desee.
- unas células que nacen, se reproducen y mueren.
- Nacen en las celdas del tablero que están rodeadas por otras tres
células.
- Mueren cuando están rodeadas

Sirva esa simplicidad como metáfora del movimiento y del cambio.



****************************

### Game of life: still life

<div style="margin:auto">
  <div>
    <canvas id="drawing1" width="400" height="400" style="border:2px solid #000000;">
    </canvas>
  </div>
  <div>
  <button id="btnStart1">Start</button>
  <button id="btnStop1">Stop</button>
  <button id="btnReset1">Reset</button>
  </div>
</div>

****************************

lorem ipsum

****************************

Ejemplo de un oscilador

### Game of life: oscilator

<div style="margin:auto">
  <div>
    <canvas id="drawing2" width="400" height="400" style="border:2px solid #000000;">
    </canvas>
  </div>
  <div>
  <button id="btnStart2">Start</button>
  <button id="btnStop2">Stop</button>
  <button id="btnReset2">Reset</button>
  </div>
</div>

****************************

lorem ipsum....

****************************


Ejemplo de un caminador

### Game of life: glider

<div style="margin:auto">
  <div>
    <canvas id="drawing3" width="400" height="400" style="border:2px solid #000000;">
    </canvas>
  </div>
  <div>
  <button id="btnStart3">Start</button>
  <button id="btnStop3">Stop</button>
  <button id="btnReset3">Reset</button>
  </div>
</div>
****************************

lorem ipsum

****************************

Ejemplo de un glider y un still que colisionan

### Game of life: glider and still life

<div style="margin:auto">
  <div>
    <canvas id="drawing4" width="400" height="400" style="border:2px solid #000000;">
    </canvas>
  </div>
  <div>
  <button id="btnStart4">Start</button>
  <button id="btnStop4">Stop</button>
  <button id="btnReset4">Reset</button>
  </div>
</div>

****************************

lorem ipsum

****************************

Ejemplo de un glider y un still que colisionan

### Game of life: glider and still life

<div style="margin:auto">
  <div>
    <canvas id="drawing5" width="400" height="400" style="border:2px solid #000000;">
    </canvas>
  </div>
  <div>
  <button id="btnStart5">Start</button>
  <button id="btnStop5">Stop</button>
  <button id="btnReset5">Reset</button>
  </div>
</div>

****************************

## Referencias

El código javascript del juego de la vida se puede encontrar en este
[respositorio de github](http://github.com/jmgaguilera/game_of_life)

