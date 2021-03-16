

function preload() {
    bg = loadImage("images/bg1.jpg")
    wall1 = loadImage("images/wall1.png")
    wG = loadImage("images/watergirl.png")
    fB = loadImage("images/fireboy.png")
    lava = loadImage("images/lava.png")
    water = loadImage("images/water.png")
    bB = loadImage("images/blueButton.png")
    bTD = loadImage("images/blueTrapDoor.png")
    pB = loadImage("images/purpleButton.png")
    pGD = loadImage("images/purpleGameDoor.png")
    wall2 = loadImage("images/wall2.png")
    door1 = loadImage("images/blueDoor.png")
    door2 = loadImage("images/redDoor.png")

}

function setup() {
    canvas = createCanvas(1600, 1180);
    blueDoor= createSprite(80,160)
    blueDoor.addImage(door1)
    blueDoor.scale=0.7
    redDoor= createSprite(200,160)
    redDoor.addImage(door2)
    redDoor.scale = 0.7
    
    fireboy = createSprite(200, 150)
    fireboy.addImage(fB)
    fireboy.scale = 0.5
    watergirl = createSprite(800, 150)
    watergirl.addImage(wG)
    watergirl.scale = 0.9
   

    stonewall1 = createSprite(150, 280)
    stonewall1.addImage(wall2)
    stonewall1.scale=0.5
    // f1.addImage(wall1)
    f2 = createSprite(200, 350)
    f2.addImage(wall1)
    f3 = createSprite(700, 350)
    f3.addImage(wall1)
    f4 = createSprite(1200, 350)
    f4.addImage(wall1)
    f5 = createSprite(400, 600)
    f5.addImage(wall1)
    f6 = createSprite(900, 600)
    f6.addImage(wall1)
    f7 = createSprite(1400, 600)
    f7.addImage(wall1)
    f8 = createSprite(200, 900)
    f8.addImage(wall1)
    f9 = createSprite(480, 900)
    f9.addImage(wall1)
    f10 = createSprite(1200, 900)
    f10.addImage(wall1)
    f11 = createSprite(200, 1150)
    f11.addImage(wall1)
    f12 = createSprite(700, 1150)
    f12.addImage(wall1)
    f13 = createSprite(1150, 1150)
    f13.addImage(wall1)
    f14 = createSprite(1350, 1150)
    f14.addImage(wall1)

    lavapit1 = createSprite(300, 1115)
    lavapit1.addImage(lava)
    lavapit1.scale = 1.4
    waterpit1 = createSprite(900, 1143)
    waterpit1.addImage(water)
    waterpit1.scale = 1.4
    lavapit2 = createSprite(1200, 570)
    lavapit2.addImage(lava)
    lavapit2.scale = 1.0

    blueButton1 = createSprite(1000, 869)
    blueButton1.addImage(bB)
    blueBar = createSprite(845, 900)
    blueBar.addImage(bTD)
    blueBar.scale = 1.2

    purpleButton1 = createSprite(600, 570)
    purpleButton1.addImage(pB)
    purpleBar = createSprite(845, 480)
    purpleBar.addImage(pGD)
    purpleBar.scale = 1.0

}

function draw() {
    background(0)
    edges = createEdgeSprites()
    fireboy.bounceOff(edges)
    watergirl.bounceOff(edges)
    drawSprites()
    if (keyDown(UP_ARROW)) {
        fireboy.velocityY = -10
    }
    fireboy.velocityY += 0.5
    if (keyDown(RIGHT_ARROW)) {
        fireboy.x = fireboy.x + 5
    }
    if (keyDown(LEFT_ARROW)) {
        fireboy.x = fireboy.x - 5
    }
    //fireboy.collide(f1)
    fireboy.collide(f2)
    fireboy.collide(f3)
    fireboy.collide(f4)
    fireboy.collide(f5)
    fireboy.collide(f6)
    fireboy.collide(f7)
    fireboy.collide(f8)
    fireboy.collide(f9)
    fireboy.collide(f10)
    fireboy.collide(f11)
    fireboy.collide(f12)
    fireboy.collide(f13)
    fireboy.collide(f14)
    fireboy.collide(stonewall1)

    if (keyDown("W")) {
        watergirl.velocityY = -10
    }
    watergirl.velocityY += 0.5
    if (keyDown("D")) {
        watergirl.x = watergirl.x + 5
    }
    if (keyDown("A")) {
        watergirl.x = watergirl.x - 5
    }
    //watergirl.collide(f1)
    watergirl.collide(f2)
    watergirl.collide(f3)
    watergirl.collide(f4)
    watergirl.collide(f5)
    watergirl.collide(f6)
    watergirl.collide(f7)
    watergirl.collide(f8)
    watergirl.collide(f9)
    watergirl.collide(f10)
    watergirl.collide(f11)
    watergirl.collide(f12)
    watergirl.collide(f13)
    watergirl.collide(f14)
    watergirl.collide(stonewall1)
}