




function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

class Block{
    constructor(x,y,x2,y2,speedX,speedY,clr1,clr2,clr3){
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.speedX = speedX;
    this.speedY = speedY;
    this.clr1 = clr1;
    this.clr2 = clr2;
    this.clr3 = clr3;
    }

display1(){
    fill(this.clr1,this.clr2,this.clr3);
    rect(this.x,this.y,20,20);
}

display2(){
    fill(this.clr1,this.clr2,this.clr3);
    line(this.x,this.y,this.x2,this.y2);
    stroke(9000);
}

move(){
    this.x = this.x + this.speedX
    this.y = this.y + this.speedY
    if(keyIsDown(37) || keyIsDown(65)) {
        this.speedX = - 5
}
        else{
this.speedX = 0
        }

        if(keyIsDown(39) || keyIsDown(68)){
            this.speedX = + 5
    }
   

    if(keyIsDown(38) || keyIsDown(87)){
        this.speedY = - 5
}
        else{
this.speedY = 0
        }

        if(keyIsDown(40) || keyIsDown(83)){
            this.speedY = + 5
    }

}



}


let Player = new Block(950,600,0,0,0,0,255,0,0)

let Border1 = new Block(0,0,950,0,0,0,255,255,255)
let Border2 = new Block(0,50,0,650,0,0,255,255,255)
let Border3 = new Block(0,650,1000,650,0,0,255,255,255)
let Border4 = new Block(1000,650,1000,0,0,0,255,255,255)

let Wall1 = new Block(920,650,920,500,0,0,255,255,255)
let Wall2 = new Block(1000,450,800,450,0,0,255,255,255)
let Wall3 = new Block(750,600,750,350,0,0,255,255,255)
let Wall4 = new Block(750,560,880,560,0,0,255,255,255)
let Wall5 = new Block(870,450,870,100,0,0,255,255,255)
let Wall6 = new Block(870,310,600,310,0,0,255,255,255)
let Wall7 = new Block(550,400,550,200,0,0,255,255,255)
let Wall8 = new Block(870,200,600,200,0,0,255,255,255)
let Wall9 = new Block(550,250,800,250,0,0,255,255,255)
let Wall10 = new Block(870,100,400,100,0,0,255,255,255)
let Wall11 = new Block(400,100,400,350,0,0,255,255,255)
let Wall12 = new Block(550,400,300,400,0,0,255,255,255)
let Wall13 = new Block(300,550,300,50,0,0,255,255,255)
let Wall14 = new Block(300,50,950,50,0,0,255,255,255)
let Wall15 = new Block(950,0,950,400,0,0,255,255,255)
let Wall16 = new Block(400,150,450,150,0,0,255,255,255)
let Wall17 = new Block(500,150,800,150,0,0,255,255,255)
let Wall18 = new Block(500,150,500,400,0,0,255,255,255)
let Wall19 = new Block(450,400,450,200,0,0,255,255,255)
let Wall20 = new Block(600,400,820,400,0,0,255,255,255)
let Wall21 = new Block(750,600,0,600,0,0,255,255,255)
let Wall22 = new Block(550,400,550,500,0,0,255,255,255)
let Wall23 = new Block(550,500,700,500,0,0,255,255,255)
let Wall24 = new Block(500,600,500,450,0,0,255,255,255)
let Wall25 = new Block(200,450,450,450,0,0,255,255,255)
let Wall26 = new Block(450,450,450,550,0,0,255,255,255)
let Wall27 = new Block(350,600,350,500,0,0,255,255,255)
let Wall28 = new Block(400,550,450,550,0,0,255,255,255)
let Wall29 = new Block(350,500,400,500,0,0,255,255,255)
let Wall30 = new Block(50,550,300,550,0,0,255,255,255)
let Wall31 = new Block(0,450,150,450,0,0,255,255,255)
let Wall32 = new Block(50,550,50,500,0,0,255,255,255)
let Wall33 = new Block(150,350,150,500,0,0,255,255,255)
let Wall34 = new Block(200,350,200,500,0,0,255,255,255)
let Wall35 = new Block(50,300,300,300,0,0,255,255,255)
let Wall36 = new Block(0,250,250,250,0,0,255,255,255)
let Wall37 = new Block(50,200,300,200,0,0,255,255,255)
let Wall38 = new Block(0,150,250,150,0,0,255,255,255)
let Wall39 = new Block(50,100,300,100,0,0,255,255,255)
let Wall40 = new Block(0,50,250,50,0,0,255,255,255)
let Wall41 = new Block(50,300,50,400,0,0,255,255,255)


function draw(){

background(0);
transition();

Player.display1();
Player.move();


Border1.display2();
Border2.display2();
Border3.display2();
Border4.display2();


Wall1.display2();
Wall2.display2();
Wall3.display2();
Wall4.display2();
Wall5.display2();
Wall6.display2();
Wall7.display2();
Wall8.display2();
Wall9.display2();
Wall10.display2();
Wall11.display2();
Wall12.display2();
Wall13.display2();
Wall14.display2();
Wall15.display2();
Wall16.display2();
Wall17.display2();
Wall18.display2();
Wall19.display2();
Wall20.display2();
Wall21.display2();
Wall22.display2();
Wall23.display2();
Wall24.display2();
Wall25.display2();
Wall26.display2();
Wall27.display2();
Wall28.display2();
Wall29.display2();
Wall30.display2();
Wall31.display2();
Wall32.display2();
Wall33.display2();
Wall34.display2();
Wall35.display2();
Wall36.display2();
Wall37.display2();
Wall38.display2();
Wall39.display2();
Wall40.display2();
Wall41.display2();



contact()



//Border Contact

if(Player.y < Border1.y & Player.x >= 0 & Player.x < 950 ){
Player.x = 950
Player.y = 600
}
if(Player.x < Border2.x & Player.y > 30 & Player.y < 650){
    Player.x = 950
    Player.y = 600
    }
    if(Player.y > (Border3.y-20)){
        Player.x = 950
        Player.y = 600
        }
        if(Player.x > (Border4.x-20)){
            Player.x = 950
            Player.y = 600
            }



}

//Wall Contact
function contact(){
    if((Player.x == Wall1.x || Player.x == (Wall1.x - 20)) & Player.y >= 480 & Player.y <= 650){
        Player.x = 950
        Player.y = 600
}

if((Player.y == Wall2.y || Player.y == (Wall2.y-20)) & Player.x >= 780 & Player.x <= 1000){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall3.x || Player.x == (Wall3.x - 20)) & Player.y <= 600 & Player.y >= 330){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall4.y || Player.y == (Wall4.y-20)) & Player.x >= 730 & Player.x <= 880){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall5.x || Player.x == (Wall5.x - 20)) & Player.y >= 80 & Player.y <= 450){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall6.y || Player.y == (Wall6.y-20)) & Player.x >= 580 & Player.x <= 870){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall7.x || Player.x == (Wall7.x - 20)) & Player.y >= 180 & Player.y <= 400){
    Player.x = 950
    Player.y = 600

}

if((Player.y == Wall8.y || Player.y == (Wall8.y-20)) & Player.x >= 580 & Player.x <= 870){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall9.y || Player.y == (Wall9.y-20)) & Player.x >= 530 & Player.x <= 800){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall10.y || Player.y == (Wall10.y-20)) & Player.x >= 380 & Player.x <= 870){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall11.x || Player.x == (Wall11.x - 20)) & Player.y >= 80 & Player.y <= 350){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall12.y || Player.y == (Wall12.y-20)) & Player.x >= 280 & Player.x <= 550){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall13.x || Player.x == (Wall13.x - 20)) & Player.y >= 30 & Player.y <= 550){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall14.y || Player.y == (Wall14.y-20)) & Player.x >= 280 & Player.x <= 950){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall15.x || Player.x == (Wall15.x - 20)) & Player.y >= -20 & Player.y <= 400){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall16.y || Player.y == (Wall16.y-20)) & Player.x >= 380 & Player.x <= 450){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall17.y || Player.y == (Wall17.y-20)) & Player.x >= 480 & Player.x <= 800){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall18.x || Player.x == (Wall18.x - 20)) & Player.y >= 130 & Player.y <= 400){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall19.x || Player.x == (Wall19.x - 20)) & Player.y >= 180 & Player.y <= 400){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall20.y || Player.y == (Wall20.y-20)) & Player.x >= 580 & Player.x <= 820){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall21.y || Player.y == (Wall21.y-20)) & Player.x >= -20 & Player.x <= 750){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall22.x || Player.x == (Wall22.x - 20)) & Player.y >= 380 & Player.y <= 500){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall23.y || Player.y == (Wall23.y-20)) & Player.x >= 530 & Player.x <= 700){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall24.x || Player.x == (Wall24.x - 20)) & Player.y >= 430 & Player.y <= 600){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall25.y || Player.y == (Wall25.y-20)) & Player.x >= 180 & Player.x <= 450){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall26.x || Player.x == (Wall26.x - 20)) & Player.y >= 430 & Player.y <= 550){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall27.x || Player.x == (Wall27.x - 20)) & Player.y >= 480 & Player.y <= 600){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall28.y || Player.y == (Wall28.y-20)) & Player.x >= 380 & Player.x <= 450){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall29.y || Player.y == (Wall29.y-20)) & Player.x >= 330 & Player.x <= 400){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall30.y || Player.y == (Wall30.y-20)) & Player.x >= 30 & Player.x <= 300){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall31.y || Player.y == (Wall31.y-20)) & Player.x >= -20 & Player.x <= 150){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall32.x || Player.x == (Wall32.x - 20)) & Player.y >= 480 & Player.y <= 550){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall33.x || Player.x == (Wall33.x - 20)) & Player.y >= 330 & Player.y <= 500){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall34.x || Player.x == (Wall34.x - 20)) & Player.y >= 330 & Player.y <= 500){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall35.y || Player.y == (Wall35.y-20)) & Player.x >= 30 & Player.x <= 300){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall36.y || Player.y == (Wall36.y-20)) & Player.x >= -20 & Player.x <= 250){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall37.y || Player.y == (Wall37.y-20)) & Player.x >= 30 & Player.x <= 300){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall38.y || Player.y == (Wall38.y-20)) & Player.x >= -20 & Player.x <= 250){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall39.y || Player.y == (Wall39.y-20)) & Player.x >= 30 & Player.x <= 300){
    Player.x = 950
    Player.y = 600
}

if((Player.y == Wall40.y || Player.y == (Wall40.y-20)) & Player.x >= -20 & Player.x <= 250){
    Player.x = 950
    Player.y = 600
}

if((Player.x == Wall41.x || Player.x == (Wall41.x - 20)) & Player.y >= 280 & Player.y <= 400){
    Player.x = 950
    Player.y = 600
}

}

//For x and y, smaller value = -20

function transition(){
    if(Player.y < Border1.y & Player.x > 950 & Player.x < 1000){
        window.location.href = "Room3.html";
    }

    if(Player.x < 0 & Player.y > 0 & Player.y < 50){
        window.location.href = "Room2.html";
    }
}


// if player.x == the walls x @@ player.y == (range of the lines y's){
    //do this
//}

//To transition
/*function transition(){
    window.location.href = "www.google.com";
}
*/


