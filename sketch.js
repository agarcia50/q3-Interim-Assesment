var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;
var numbers = [20, 25, 30, 35, 40]
var words = ["MR.","BUDI", "IS", "NOT","AWESOME", "SIKE", "NAH"];
var j  = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
        background(0);
    for(var andy = 0; andy <= 600; andy = andy + 50){
        fill(255,0,0);
        ellipse(andy, 100, 20, 20);
    }
    
    display();
    move();
    bounce();
    rowOfSquares();
    redCircle();
    
    fill(255, 0, 0);
        textSize(50);
        text(words[j], 250 ,150);
}
    function mousePressed(){
    j++;
    if(j==words.length){
        j=0;
    }
}

function display(){
        //display ball
    stroke(0);
    strokeWeight(4);
    fill(0,0,255);
    ellipse(x, y, 50, 50);
}

function move(){
    //make ball move
    y = y + speedy;
    x = x + speedx;
}

function bounce(){
       //ball changes direction when it hits wall
    if(x>600 || x<0){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }
}

function rowOfSquares(){
    fill(150, 22, 22);
    var x = 30;
    while(x <= 600){
        for(var i = 0; i < 4; i++){
        rect((i+1)*100,200,numbers[i],numbers[i])
        x = x + 120;   
        }
    }
}

function redCircle(){
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
}