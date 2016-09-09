var x = 20

function setup() {
  createCanvas(900,500);


  for(var y = 0; y < 500; y += 10){
   for(var z = 0; z < 500; z += 10){
    fill(200,20,20,120)
    push();
    translate(y*4-5,z*4-5);
    rotate(50);
    beginShape();
    vertex(6,15);
    vertex(5,10);
    vertex(5,8);
    vertex(7,6);
    vertex(8,4);
    vertex(9,4);
    vertex(11,4);
    vertex(12,5);
    vertex(14,7);
    vertex(15,9);
    vertex(15,12);
    vertex(15,15);
    vertex(14,18);
    vertex(13,20);
    vertex(13,22);
    vertex(13,24);
    vertex(14,25);
    vertex(15,25);
    vertex(16,24);
    vertex(17,22);
    vertex(18,20);
    vertex(21,16);
    vertex(23,15);
    vertex(26,13);
    vertex(28,12);
    vertex(29,12);
    vertex(32,13);
    vertex(35,13);
    vertex(34,14);
    vertex(35,15);
    vertex(37,15);
    vertex(40,20);
    vertex(39,21);
    vertex(40,24);
    vertex(44,28);
    vertex(46,29);
    vertex(45,29);
    vertex(46,30);
    vertex(45,31);
    vertex(47,32);
    vertex(45,32);
    vertex(43,31);
    vertex(43,32);
    vertex(42,30);
    vertex(38,29);
    vertex(36,30);
    vertex(35,29);
    vertex(31,31);
    vertex(31,32);
    vertex(37,44);
    vertex(37,46);
    vertex(37,61);
    vertex(34,63);
    vertex(33,62);
    vertex(34,62);
    vertex(36,61);
    vertex(36,47);
    vertex(35,45);
    vertex(35,44);
    vertex(30,32);
    vertex(28,32);
    vertex(27,42);
    vertex(27,45);
    vertex(26,47);
    vertex(22,60);
    vertex(19,61);
    vertex(18,60);
    vertex(19,60);
    vertex(21,59);
    vertex(25,47);
    vertex(25,45);
    vertex(26,43);
    vertex(27,31);
    vertex(27,30);
    vertex(26,29);
    vertex(24,29);
    vertex(21,29);
    vertex(18,29);
    vertex(15,28);
    vertex(12,27);
    vertex(10,26);
    vertex(10,22);
    vertex(11,19);
    vertex(12,16);
    vertex(13,13);
    vertex(13,10);
    vertex(13,9);
    vertex(12,7);
    vertex(11,7);
    vertex(10,8);
    vertex(9,9);
    vertex(8,9);
    vertex(7,10);
    vertex(6,13);
    vertex(6,15);
    endShape();
    pop();
    }
  }


  for(var n = x; n < 779; n = n + 40) {
    fill(120,0,120,40);
    beginShape();
    vertex(n*4-3,2);
    vertex(n,n*4-3);
    vertex(10,n);
    vertex(x,n);
    endShape();
 }


  stroke(1);
  for(var y = 10; y < 500; y += 10){
   for(var z = 20; z < 500; z += 10){
    fill(0,120,120,100)
    ellipse(y,z,25,25);
    rotate(5);
   }
 }















}
