function setup() {
  new Canvas( 1200, 700);
   background ('white');

  tunnel = new Sprite();
	tunnel.width = 421;
	tunnel.height = 20;
    tunnel.x = 0;
    tunnel.y = 689;


tunnel2 = new Sprite();
	tunnel2.width = 7;
	tunnel2.height = 465;
    tunnel2.x = 215;
    tunnel2.y = 506;

    tunnel3 = new Sprite();
	tunnel3.width = 131;
	tunnel3.height = 260;
    tunnel3.x = 0;
    tunnel3.y = 477;

 tunnel4 = new Sprite();
	tunnel4.width = 114;
	tunnel4.height = 42;
    tunnel4.x = 161;
    tunnel4.y = 251;
    

     tunnel5 = new Sprite();
	tunnel5.width = 224;
	tunnel5.height = 255;
    tunnel5.x = 0;
    tunnel5.y = 0;

       tunnel6 = new Sprite();
	tunnel6.width = 218;
	tunnel6.height = 194;
    tunnel6.x = 328;
    tunnel6.y = 2;

       tunnel7 = new Sprite();
	tunnel7.width = 218; 
	tunnel7.height = 104; 
    tunnel7.x =  328;
    tunnel7.y = 194;

    tunnel8 = new Sprite();
    tunnel8.width =63; 
    tunnel8.height = 36; 
    tunnel8.x =  471;
    tunnel8.y = 261 ;

    champi1 = new Sprite();
    champi1.img = "./img/champi1.png";
    champi1.scale = 0.3;
    champi1.x = 600;
    champi1.y = 567 ;

     champi2 = new Sprite();
    champi2.img = "./img/champi2.png";
    champi2.scale = 0.12;
    champi2.x = 880;
    champi2.y = 142 ;

        champi3 = new Sprite();
    champi3.img = "./img/champi3.png";
    champi3.scale = 0.16;
    champi3.x = 1120;
    champi3.y = 625 ;

    tunnel9 = new Sprite();
    tunnel9.width =63; 
    tunnel9.height = 228; 
    tunnel9.x =  501;
    tunnel9.y = 95;

player1 = new Sprite();
player1.x = 29;
player1.y = 645;
world.gravity.y = 10;

esc1 = new Sprite();
esc1.img = "./img/esc1.png";
 esc1.x = 181;
esc1.y = 600 ;
esc1.scale = 0.5;

esc2 = new Sprite();
esc2.img = "./img/esc2.png";
 esc2.x = 96;
esc2.y = 548 ;
esc2.scale = 0.5;

esc3= new Sprite();
esc3.img = "./img/esc1.png";
 esc3.x = 181;
esc3.y = 300;
esc3.scale = 0.5;

esc4 = new Sprite();
esc4.img = "./img/esc2.png";
 esc4.x = 96;
esc4y = 200 ;
esc4.scale = 0.5;

esc5 = new Sprite();
esc5.img = "./img/esc1.png";
 esc5.x = 181;
esc5.y = 500 ;
esc5.scale = 0.5;

esc6 = new Sprite();
esc6.img = "./img/esc2.png";
 esc6.x = 96;
esc6.y = 441;
esc6.scale = 0.5;


esc7 = new Sprite();
esc7.img = "./img/esc1.png";
 esc7.x = 181;
esc7.y = 411 ;
esc7.scale = 0.5;



tunnel.collider = 'static';
tunnel2.collider = 'static';
tunnel3.collider = 'static';
tunnel4.collider = 'static';
tunnel5.collider = 'static';
tunnel6.collider = 'static';
tunnel7.collider = 'static';
tunnel8.collider = 'static';
tunnel9.collider = 'static';
champi3.collider ='static';
esc1.collider = 'static';
esc2.collider = 'static';
esc3.collider = 'static';
esc4.collider = 'static';
esc5.collider = 'static';
esc6.collider = 'static';
esc7.collider = 'static';


champi1.collider ='kinematic';
champi2.collider ='kinematic';

}



function draw() {
  // Votre code de dessin ici
       background ('white');

   if (kb.pressing('left')) player1.vel.x = -3;
    else if (kb.pressing('right')) player1.vel.x = 3;
    else player1.vel.x = 0;
    if (kb.pressing('space') && player1.vel.y <= 0.2) {
    player1.vel.y = -3;

}

}


