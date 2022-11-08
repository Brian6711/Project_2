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


let Player = new Block(50,600,0,0,0,0,255,0,0)

let Border1 = new Block(50,0,1000,0,0,0,255,255,255)
let Border2 = new Block(0,0,0,650,0,0,255,255,255)
let Border3 = new Block(0,650,1000,650,0,0,255,255,255)
let Border4 = new Block(1000,650,1000,50,0,0,255,255,255)

let Wall1 = new Block(100,650,100,400,0,0,255,255,255)
let Wall2 = new Block(100,400,550,400,0,0,255,255,255)
let Wall3 = new Block(0,350,550,350,0,0,255,255,255)
let Wall4 = new Block(600,0,600,550,0,0,255,255,255)
let Wall5 = new Block(600,450,150,450,0,0,255,255,255)
let Wall6 = new Block(100,500,550,500,0,0,255,255,255)
let Wall7 = new Block(600,550,150,550,0,0,255,255,255)
let Wall8 = new Block(150,550,150,600,0,0,255,255,255)
let Wall9 = new Block(200,650,200,600,0,0,255,255,255)
let Wall10 = new Block(250,550,250,600,0,0,255,255,255)
let Wall11 = new Block(300,650,300,600,0,0,255,255,255)
let Wall12 = new Block(350,550,350,600,0,0,255,255,255)
let Wall13 = new Block(400,650,400,600,0,0,255,255,255)
let Wall14 = new Block(450,550,450,600,0,0,255,255,255)
let Wall15 = new Block(500,650,500,600,0,0,255,255,255)
let Wall16 = new Block(550,550,550,600,0,0,255,255,255)
let Wall17 = new Block(600,650,600,600,0,0,255,255,255)
let Wall18 = new Block(650,650,650,50,0,0,255,255,255)
let Wall19 = new Block(650,50,900,50,0,0,255,255,255)
let Wall20 = new Block(950,0,950,600,0,0,255,255,255)
let Wall21 = new Block(950,100,700,100,0,0,255,255,255)
let Wall22 = new Block(700,100,700,600,0,0,255,255,255)
let Wall23 = new Block(750,150,750,650,0,0,255,255,255)
let Wall24 = new Block(750,150,900,150,0,0,255,255,255)
let Wall25 = new Block(950,200,800,200,0,0,255,255,255)
let Wall26 = new Block(800,200,800,600,0,0,255,255,255)
let Wall27 = new Block(850,650,850,250,0,0,255,255,255)
let Wall28 = new Block(850,250,900,250,0,0,255,255,255)
let Wall29 = new Block(950,300,900,300,0,0,255,255,255)
let Wall30 = new Block(850,350,900,350,0,0,255,255,255)
let Wall31 = new Block(950,400,900,400,0,0,255,255,255)
let Wall32 = new Block(850,450,900,450,0,0,255,255,255)
let Wall33 = new Block(950,500,900,500,0,0,255,255,255)
let Wall34 = new Block(850,550,900,550,0,0,255,255,255)
let Wall35 = new Block(950,600,900,600,0,0,255,255,255)
let Wall36 = new Block(550,350,550,50,0,0,255,255,255)
let Wall37 = new Block(50,0,50,300,0,0,255,255,255)
let Wall38 = new Block(50,300,500,300,0,0,255,255,255)
let Wall39 = new Block(550,250,100,250,0,0,255,255,255)
let Wall40 = new Block(100,250,100,50,0,0,255,255,255)
let Wall41 = new Block(100,50,450,50,0,0,255,255,255)
let Wall42 = new Block(500,0,500,200,0,0,255,255,255)
let Wall43 = new Block(500,100,150,100,0,0,255,255,255)
let Wall44 = new Block(100,150,450,150,0,0,255,255,255)
let Wall45 = new Block(500,200,150,200,0,0,255,255,255)

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
    Wall42.display2();
    Wall43.display2();
    Wall44.display2();
    Wall45.display2();


contact()




    if(Player.y < Border1.y & Player.x >= 50 & Player.x < 1000){
        Player.x = 50
        Player.y = 600
        }
        if(Player.x < Border2.x){
            Player.x = 50
            Player.y = 600
            }
            if(Player.y > (Border3.y-20)){
                Player.x = 50
                Player.y = 600
                }
                if(Player.x > (Border4.x-20) & Player.y >= 30 & Player.y <= 670){
                    Player.x = 50
                    Player.y = 600
                    }

}

function contact(){

    if((Player.x == Wall1.x || Player.x == (Wall1.x - 20)) & Player.y >= 380 & Player.y <= 650){
        Player.x = 50
        Player.y = 600
}

if((Player.y == Wall2.y || Player.y == (Wall2.y-20)) & Player.x >= 80 & Player.x <= 550){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall3.y || Player.y == (Wall3.y-20)) & Player.x >= -20 & Player.x <= 550){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall4.x || Player.x == (Wall4.x - 20)) & Player.y >= -20 & Player.y <= 550){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall5.y || Player.y == (Wall5.y-20)) & Player.x >= 130 & Player.x <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall6.y || Player.y == (Wall6.y-20)) & Player.x >= 80 & Player.x <= 550){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall7.y || Player.y == (Wall7.y-20)) & Player.x >= 130 & Player.x <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall8.x || Player.x == (Wall8.x - 20)) & Player.y >= 530 & Player.y <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall9.x || Player.x == (Wall9.x - 20)) & Player.y >= 580 & Player.y <= 650){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall10.x || Player.x == (Wall10.x - 20)) & Player.y >= 530 & Player.y <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall11.x || Player.x == (Wall11.x - 20)) & Player.y >= 580 & Player.y <= 650){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall12.x || Player.x == (Wall12.x - 20)) & Player.y >= 530 & Player.y <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall13.x || Player.x == (Wall13.x - 20)) & Player.y >= 580 & Player.y <= 650){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall14.x || Player.x == (Wall14.x - 20)) & Player.y >= 530 & Player.y <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall15.x || Player.x == (Wall15.x - 20)) & Player.y >= 580 & Player.y <= 650){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall16.x || Player.x == (Wall16.x - 20)) & Player.y >= 530 & Player.y <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall17.x || Player.x == (Wall17.x - 20)) & Player.y >= 580 & Player.y <= 650){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall18.x || Player.x == (Wall18.x - 20)) & Player.y >= 30 & Player.y <= 650){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall19.y || Player.y == (Wall19.y-20)) & Player.x >= 630 & Player.x <= 900){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall20.x || Player.x == (Wall20.x - 20)) & Player.y >= -20 & Player.y <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall21.y || Player.y == (Wall21.y-20)) & Player.x >= 680 & Player.x <= 950){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall22.x || Player.x == (Wall22.x - 20)) & Player.y >= 80 & Player.y <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall23.x || Player.x == (Wall23.x - 20)) & Player.y >= 130 & Player.y <= 650){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall24.y || Player.y == (Wall24.y-20)) & Player.x >= 730 & Player.x <= 900){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall25.y || Player.y == (Wall25.y-20)) & Player.x >= 780 & Player.x <= 950){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall26.x || Player.x == (Wall26.x - 20)) & Player.y >= 180 & Player.y <= 600){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall27.x || Player.x == (Wall27.x - 20)) & Player.y >= 230 & Player.y <= 650){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall28.y || Player.y == (Wall28.y-20)) & Player.x >= 830 & Player.x <= 900){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall29.y || Player.y == (Wall29.y-20)) & Player.x >= 880 & Player.x <= 950){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall30.y || Player.y == (Wall30.y-20)) & Player.x >= 830 & Player.x <= 900){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall31.y || Player.y == (Wall31.y-20)) & Player.x >= 880 & Player.x <= 950){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall32.y || Player.y == (Wall32.y-20)) & Player.x >= 830 & Player.x <= 900){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall33.y || Player.y == (Wall33.y-20)) & Player.x >= 880 & Player.x <= 950){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall34.y || Player.y == (Wall34.y-20)) & Player.x >= 830 & Player.x <= 900){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall35.y || Player.y == (Wall35.y-20)) & Player.x >= 880 & Player.x <= 950){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall36.x || Player.x == (Wall36.x - 20)) & Player.y >= 30 & Player.y <= 350){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall37.x || Player.x == (Wall37.x - 20)) & Player.y >= -20 & Player.y <= 300){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall38.y || Player.y == (Wall38.y-20)) & Player.x >= 30 & Player.x <= 500){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall39.y || Player.y == (Wall39.y-20)) & Player.x >= 80 & Player.x <= 550){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall40.x || Player.x == (Wall40.x - 20)) & Player.y >= 30 & Player.y <= 250){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall41.y || Player.y == (Wall41.y-20)) & Player.x >= 80 & Player.x <= 450){
    Player.x = 50
    Player.y = 600
}

if((Player.x == Wall42.x || Player.x == (Wall42.x - 20)) & Player.y >= -20 & Player.y <= 200){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall43.y || Player.y == (Wall43.y-20)) & Player.x >= 130 & Player.x <= 500){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall44.y || Player.y == (Wall44.y-20)) & Player.x >= 80 & Player.x <= 450){
    Player.x = 50
    Player.y = 600
}

if((Player.y == Wall45.y || Player.y == (Wall45.y-20)) & Player.x >= 130 & Player.x <= 500){
    Player.x = 50
    Player.y = 600
}

}




function transition(){
    if(Player.x > 0 & Player.x < 50 & Player.y < 0){
        window.location.href = "Ending3.html";
    }

    if(Player.x > 980 & Player.y >= 0 & Player.y < 50){
        window.location.href = "Ending4.html";
    }
}