x = 9; // ini tidak dianggap error karena tidak kena mode Strict
showAngka(); // ini tidak dianggap error karena tidak kena mode Strict

function showAngka() {
  "use strict";
  x = 9; // ini akan dianggap error karena variabel belum dideklarasikan
  alert(x);
}
