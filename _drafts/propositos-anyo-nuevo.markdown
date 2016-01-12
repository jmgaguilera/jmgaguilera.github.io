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

lorem ipsum

## El juego de la vida de Conway

****************************

Ejemplo de un still life

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

lorem ipsum
