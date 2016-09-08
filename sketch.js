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
    vertex(10,10);
    vertex(20,20);
    vertex(0,20);
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
