let player;

function loadPlayerAnimations() {
  const idle = loadAni("image/player_stand.png");

  const walk = loadAni("image/player_walk1.png", "image/player_walk2.png");
  walk.frameDelay = 15;

  const jump = loadAni("image/player_jump.png");

  player.addAni("idle", idle);
  player.addAni("walk", walk);
  player.addAni("jump", jump);

  player.changeAni("idle");
}

let jumpSound;
let overSound;
let winSound;

function preload() {
  soundFormats("wav", "ogg");
  jumpSound = loadSound("assets/jump.wav");
  overSound = loadSound("assets/game-over.wav");
  winSound = loadSound("assets/well-done.ogg");
}

function setup() {
  new Canvas(1200, 700);
  background("white");

  // BG FEATS

  const bg = new Sprite();
  bg.x = 600;
  bg.y = 350;
  bg.w = 1200;
  bg.h = 700;

  bg.image = "image/bg_final_final.png";
  bg.image.scale = 0.335;
  bg.collider = "none";

  // TUNNEL FEATS

  tunnel = new Sprite();
  tunnel.width = 421;
  tunnel.height = 20;
  tunnel.x = 0;
  tunnel.y = 689;
  tunnel.visible = false;
  tunnel.debug = false;

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

  // MUSHROOM PLATFORM FEATS

  champi1 = new Sprite();
  champi1.image = "./image/champi1.png";
  champi1.scale = 0.3;
  champi1.x = 600;
  champi1.y = 440;
  champi1.image.offset.y = 418;
  // champi1.debug = false;
  champi1.w = 210;
  champi1.h = 15;

  champi2 = new Sprite();
  champi2.image = "./image/champi2.png";
  champi2.scale = 0.33;
  champi2.x = 880;
  champi2.y = 228;
  champi2.image.offset.y = -700;
  champi2.debug = false;
  champi2.w = 210;
  champi2.h = 15;

  champi3 = new Sprite();
  champi3.image = "./image/champi3.png";
  champi3.scale = 0.16;
  champi3.x = 1120;
  champi3.y = 558;
  champi3.image.offset.y = 400;
  // champi3.debug = false;
  champi3.w = 110;
  champi3.h = 15;

  // STAIRS FEATS

  // esc1
  esc1 = new Sprite();
  esc1.image = "./image/esc1.png";
  esc1.x = 191;
  esc1.y = 630;
  esc1.scale = 0.5;
  esc1.image.offset.y = 8;
  esc1.debug = false;
  esc1.w = 50;
  esc1.h = 10;

  // esc2
  esc2 = new Sprite();
  esc2.image = "./image/esc2.png";
  esc2.x = 106;
  esc2.y = 578;
  esc2.scale = 0.5;
  esc2.image.offset.y = 8;
  esc2.debug = false;
  esc2.w = 50;
  esc2.h = 10;

  // esc6
  esc4 = new Sprite();
  esc4.image = "./image/esc2.png";
  esc4.x = 106;
  esc4.y = 353;
  esc4.scale = 0.5;
  esc4.image.offset.y = 8;
  esc4.debug = false;
  esc4.w = 50;
  esc4.h = 10;

  // esc3
  esc5 = new Sprite();
  esc5.image = "./image/esc1.png";
  esc5.x = 191;
  esc5.y = 520;
  esc5.scale = 0.5;
  esc5.image.offset.y = 8;
  esc5.debug = false;
  esc5.w = 50;
  esc5.h = 10;

  // esc4
  esc6 = new Sprite();
  esc6.image = "./image/esc2.png";
  esc6.x = 106;
  esc6.y = 461;
  esc6.scale = 0.5;
  esc6.image.offset.y = 8;
  esc6.debug = false;
  esc6.w = 50;
  esc6.h = 10;

  // esc4
  esc7 = new Sprite();
  esc7.image = "./image/esc1.png";
  esc7.x = 191;
  esc7.y = 410;
  esc7.scale = 0.5;
  esc7.offset.y = 8;
  esc7.debug = false;
  esc7.w = 50;
  esc7.h = 10;

  // DECORATION FEATS

  bush = new Sprite();
  bush.image = "./image/bush.png";
  bush.x = 100;
  bush.y = 671;
  bush.scale = 0.25;
  bush.collider = "s";
  bush.image.offset.y = 8;
  bush.debug = false;
  bush.w = 50;
  bush.h = 10;

  reward1 = new Sprite();
  reward1.image = "./image/reward1.png";
  reward1.x = 100;
  reward1.y = 225;
  reward1.scale = 0.5;
  reward1.collider = "s";

  reward2 = new Sprite();
  reward2.image = "./image/reward2.png";
  reward2.x = 325;
  reward2.y = 125;
  reward2.scale = 0.5;
  reward2.collider = "s";

  reward3 = new Sprite();
  reward3.image = "./image/reward3.png";
  reward3.x = 180;
  reward3.y = 394;
  reward3.scale = 0.5;
  reward3.collider = "s";

  reward4 = new Sprite();
  reward4.image = "./image/reward4.png";
  reward4.x = 602;
  reward4.y = 402;
  reward4.scale = 0.87;
  reward4.collider = "k";

  coin = new Sprite();
  coin.image = "./image/coin.png";
  coin.x = 600;
  coin.y = 352;
  coin.scale = 0.22;
  coin.collider = "k";

  coin1 = new Sprite();
  coin1.image = "./image/coin.png";
  coin1.x = 555;
  coin1.y = 368;
  coin1.scale = 0.22;
  coin1.collider = "k";

  coin2 = new Sprite();
  coin2.image = "./image/coin.png";
  coin2.x = 650;
  coin2.y = 368;
  coin2.scale = 0.22;
  coin2.collider = "k";

  coin3 = new Sprite();
  coin3.image = "./image/coin.png";
  coin3.x = 670;
  coin3.y = 410;
  coin3.scale = 0.22;
  coin3.collider = "k";

  coin4 = new Sprite();
  coin4.image = "./image/coin.png";
  coin4.x = 530;
  coin4.y = 410;
  coin4.scale = 0.22;
  coin4.collider = "k";

  gem1 = new Sprite();
  gem1.image = "./image/diamond.png";
  gem1.x = 950;
  gem1.y = 200;
  gem1.scale = 0.22;
  gem1.collider = "k";

  gem2 = new Sprite();
  gem2.image = "./image/diamond.png";
  gem2.x = 815;
  gem2.y = 200;
  gem2.scale = 0.22;
  gem2.collider = "k";

  gem3 = new Sprite();
  gem3.image = "./image/diamond.png";
  gem3.x = 880;
  gem3.y = 170;
  gem3.scale = 0.22;
  gem3.collider = "k";

  gem4 = new Sprite();
  gem4.image = "./image/diamond.png";
  gem4.x = 170;
  gem4.y = 30;
  gem4.scale = 0.22;
  gem4.collider = "k";

  gem5 = new Sprite();
  gem5.image = "./image/diamond.png";
  gem5.x = 445;
  gem5.y = 50;
  gem5.scale = 0.22;
  gem5.collider = "k";

  pan_exit = new Sprite();
  pan_exit.image = "./image/pan_exit.png";
  pan_exit.x = 1170;
  pan_exit.y = 528;
  pan_exit.scale = 0.1;
  pan_exit.collider = "s";
  pan_exit.debug = false;

  pan_up = new Sprite();
  pan_up.image = "./image/pan_up.png";
  pan_up.x = 1000;
  pan_up.y = 228;
  pan_up.scale = 0.1;
  pan_up.collider = "k";

  pan_right = new Sprite();
  pan_right.image = "./image/pan_right.png";
  pan_right.x = 500;
  pan_right.y = 418;
  pan_right.scale = 0.13;
  pan_right.collider = "k";

  // GAME OVER FEATS

  dead = new Sprite();
  dead.image = "./image/paint_drips_a.png";
  dead.x = 445;
  dead.y = 10;
  dead.scale = 0.22;
  dead.collider = "s";

  dead1 = new Sprite();
  dead1.image = "./image/paint_drips_a.png";
  dead1.x = 190;
  dead1.y = 10;
  dead1.scale = 0.22;
  dead1.collider = "s";

  dead = new Sprite();
  dead.image = "./image/paint_drips_a.png";
  dead.x = 145;
  dead.y = 10;
  dead.scale = 0.22;
  dead.collider = "s";

  // ENNEMI

  ennemi = new Sprite();
  ennemi.image = "./image/ennemi.png";
  ennemi.x = 1090;
  ennemi.y = 528;
  ennemi.scale = 0.13;
  ennemi.collider = "k";

  ennemi2 = new Sprite();
  ennemi2.image = "./image/ennemi.png";
  ennemi2.x = 170;
  ennemi2.y = 220;
  ennemi2.scale = 0.1;
  ennemi2.collider = "k";

  //MESSAGES

  messageW = new Sprite();
  messageW.textSize = 40;
  messageW.text = "CONGRATS! YOU DID IT!";
  messageW.collider = "s";
  messageW.visible = false;
  messageW.w = 0;
  messageW.h = 0;

  messageL = new Sprite();
  messageL.textSize = 40;
  messageL.text = "OW OW! TRY AGAIN!";
  messageL.collider = "s";
  messageL.visible = false;
  messageL.w = 0;
  messageL.h = 0;

  // COLLIDERS

  tunnel.collider = "static";
  tunnel2.collider = "static";
  tunnel3.collider = "static";
  tunnel4.collider = "static";
  tunnel5.collider = "static";
  tunnel6.collider = "static";
  tunnel7.collider = "static";
  tunnel8.collider = "static";
  tunnel9.collider = "static";

  champi1.collider = "k";
  champi2.collider = "k";
  champi3.collider = "static";

  esc1.collider = "static";
  esc2.collider = "static";
  esc4.collider = "static";
  esc5.collider = "static";
  esc6.collider = "static";
  esc7.collider = "static";

  // PLAYER FEATS

  player = new Sprite(29, 645, 33, 33);
  player.x = 20;
  player.y = 600;
  player.w = 70;
  player.h = 90;
  player.offset.y = -10;
  world.gravity.y = 20;
  player.scale = 0.2;
  player.rotationLock = true;
  player.debug = false;

  loadPlayerAnimations();
}

function draw() {
  // Votre code de dessin ici

  if (kb.pressing("left")) {
    player.vel.x = -2.5;
    player.changeAni("walk");
    player.mirror.x = true;
  } else if (kb.pressing("right")) {
    player.vel.x = 3.3;
    player.changeAni("walk");
    player.mirror.x = false;
  }

  if (kb.presses("space")) {
    player.vel.y = -7;
    player.changeAni("jump");
    player.mirror.x = false;
    jumpSound.play();
  }

  if (!kb.pressing("left") && !kb.pressing("right") && !kb.pressing("space")) {
    player.changeAni("idle");
  }

  champi1.vel.x = cos(frameCount) * 1;
  reward4.vel.x = cos(frameCount) * 1;

  coin.vel.x = cos(frameCount) * 1;
  coin1.vel.x = cos(frameCount) * 1;
  coin2.vel.x = cos(frameCount) * 1;
  coin3.vel.x = cos(frameCount) * 1;
  coin4.vel.x = cos(frameCount) * 1;

  gem1.vel.y = cos(frameCount) * 3.8;
  gem2.vel.y = cos(frameCount) * 3.8;
  gem3.vel.y = cos(frameCount) * 3.8;

  champi2.vel.y = cos(frameCount) * 3.8;
  pan_up.vel.y = cos(frameCount) * 3.8;
  pan_right.vel.x = cos(frameCount) * 1;
  ennemi.vel.x = cos(frameCount * 2) * 0.5;
  ennemi2.vel.x = cos(frameCount * 2) * 1;

  if (player.overlaps(reward1)) {
    reward1.remove();
  }

  if (player.overlaps(reward2)) {
    reward2.remove();
  }

  if (player.overlaps(reward3)) {
    reward3.remove();
  }

  if (player.overlaps(reward4)) {
    reward4.remove();
  }

  if (player.overlaps(coin)) {
    coin.remove();
  }

  if (player.overlaps(coin1)) {
    coin1.remove();
  }

  if (player.overlaps(coin2)) {
    coin2.remove();
  }

  if (player.overlaps(coin3)) {
    coin3.remove();
  }

  if (player.overlaps(coin4)) {
    coin4.remove();
  }

  if (player.overlaps(gem1)) {
    gem1.remove();
  }

  if (player.overlaps(gem2)) {
    gem2.remove();
  }

  if (player.overlaps(gem3)) {
    gem3.remove();
  }

  if (player.overlaps(gem4)) {
    gem4.remove();
  }

  if (player.overlaps(gem5)) {
    gem5.remove();
  }

  if (player.overlaps(pan_exit)) {
    messageW.visible = true;
    player.visible = false;
    winSound.play();
  }

  if (player.overlaps(ennemi)) {
    messageL.visible = true;
    player.visible = false;
    overSound.play();
  }

  if (player.overlaps(ennemi2)) {
    messageL.visible = true;
    player.visible = false;
    overSound.play();
  }

  if (player.overlaps(bush)) {
    messageL.visible = true;
    player.visible = false;
    overSound.play();
  }

  // && = et
  // || = ou
  if (player.x < 0 || player.y < 0) {
    messageL.visible = true;
    player.visible = false;
    overSound.play();
  }

  if (kb.pressed("r")) {
    window.location.reload();
  }
}
