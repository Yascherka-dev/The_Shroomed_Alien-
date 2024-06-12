function setup() {
  new Canvas(1200, 700);
  background("white");

  const bg = new Sprite();
  bg.x = 600;
  bg.y = 350;
  bg.w = 1200;
  bg.h = 700;

  bg.image = "image/bg_final_final.png";
  bg.image.scale = 0.335;
  bg.collider = "none";

  tunnel = new Sprite();
  tunnel.width = 421;
  tunnel.height = 20;
  tunnel.x = 0;
  tunnel.y = 689;
  tunnel.visible = false;

  tunnel2 = new Sprite();
  tunnel2.width = 7;
  tunnel2.height = 465;
  tunnel2.x = 215;
  tunnel2.y = 506;
  tunnel2.visible = false;

  tunnel3 = new Sprite();
  tunnel3.width = 148;
  tunnel3.height = 260;
  tunnel3.x = 0;
  tunnel3.y = 467;
  tunnel3.visible = false;

  tunnel4 = new Sprite();
  tunnel4.width = 135;
  tunnel4.height = 37;
  tunnel4.x = 150;
  tunnel4.y = 260;
  tunnel4.visible = false;

  tunnel5 = new Sprite();
  tunnel5.width = 232;
  tunnel5.height = 300;
  tunnel5.x = 0;
  tunnel5.y = 0;
  tunnel5.visible = false;

  tunnel6 = new Sprite();
  tunnel6.width = 200;
  tunnel6.height = 194;
  tunnel6.x = 322;
  tunnel6.y = 4;
  tunnel6.visible = false;

  tunnel7 = new Sprite();
  tunnel7.width = 200;
  tunnel7.height = 104;
  tunnel7.x = 322;
  tunnel7.y = 198;
  tunnel7.visible = false;

  tunnel8 = new Sprite();
  tunnel8.width = 110;
  tunnel8.height = 36;
  tunnel8.x = 477;
  tunnel8.y = 271;
  tunnel8.visible = false;

  tunnel9 = new Sprite();
  tunnel9.width = 63;
  tunnel9.height = 238;
  tunnel9.x = 501;
  tunnel9.y = 95;
  tunnel9.visible = false;

  champi1 = new Sprite();
  champi1.image = "./image/champi1.png";
  champi1.scale = 0.3;
  champi1.x = 600;
  champi1.y = 440;
  champi1.image.offset.y = 425;
  champi1.debug = true;
  champi1.w = 210;
  champi1.h = 15;
  champi1.mass = 0;

  champi2 = new Sprite();
  champi2.image = "./image/champi2.png";
  champi2.scale = 0.11;
  champi2.x = 880;
  champi2.y = 228;
  champi2.image.offset.y = -900;
  champi2.debug = true;
  champi2.w = 210;
  champi2.h = 15;

  champi3 = new Sprite();
  champi3.image = "./image/champi3.png";
  champi3.scale = 0.16;
  champi3.x = 1120;
  champi3.y = 558;
  champi3.image.offset.y = 400;
  champi3.debug = true;
  champi3.w = 110;
  champi3.h = 15;

  player1 = new Sprite();
  player1.scale = 0.5;
  player1.x = 29;
  player1.y = 645;
  world.gravity.y = 10;
  player1.mass = 0;

  // esc1
  esc1 = new Sprite();
  esc1.image = "./image/esc1.png";
  esc1.x = 191;
  esc1.y = 630;
  esc1.scale = 0.5;

  // esc2
  esc2 = new Sprite();
  esc2.image = "./image/esc2.png";
  esc2.x = 106;
  esc2.y = 578;
  esc2.scale = 0.5;

  // esc6
  esc4 = new Sprite();
  esc4.image = "./image/esc2.png";
  esc4.x = 106;
  esc4.y = 353;
  esc4.scale = 0.5;

  // esc3
  esc5 = new Sprite();
  esc5.image = "./image/esc1.png";
  esc5.x = 191;
  esc5.y = 520;
  esc5.scale = 0.5;

  // esc4
  esc6 = new Sprite();
  esc6.image = "./image/esc2.png";
  esc6.x = 106;
  esc6.y = 461;
  esc6.scale = 0.5;

  // esc4
  esc7 = new Sprite();
  esc7.image = "./image/esc1.png";
  esc7.x = 191;
  esc7.y = 410;
  esc7.scale = 0.5;

  tunnel.collider = "static";
  tunnel2.collider = "static";
  tunnel3.collider = "static";
  tunnel4.collider = "static";
  tunnel5.collider = "static";
  tunnel6.collider = "static";
  tunnel7.collider = "static";
  tunnel8.collider = "static";
  tunnel9.collider = "static";
  champi1.collider = "";
  champi3.collider = "static";

  esc1.collider = "static";
  esc2.collider = "static";
  esc4.collider = "static";
  esc5.collider = "static";
  esc6.collider = "static";
  esc7.collider = "static";
}

function draw() {
  // Votre code de dessin ici
  clear();

  if (kb.pressing("left")) player1.vel.x = -3;
  else if (kb.pressing("right")) player1.vel.x = 3;
  //  else player1.vel.x = 0;
  if (kb.pressing("space") && player1.vel.y <= 0.2) {
    player1.vel.y = -3;
  }
  champi1.vel.x = cos(frameCount) * 2;
  champi2.vel.y = cos(frameCount) * 7;
}
