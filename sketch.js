
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    cat_sit=loadAnimation("images/cat1.png")
    cat_walk=loadAnimation("images/cat2.png","images/cat3.png")
    cat_fun=loadAnimation("images/cat4.png")

    mouse_1=loadAnimation("images/mouse1.png")
    mouse_2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse_3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800, 650, 40,30)
    cat.scale=0.2
    cat.addAnimation("sitting",cat_sit)
    
    mouse=createSprite(300,670, 20,30)
    mouse.scale=0.1
    mouse.addAnimation("standing",mouse_1)

    cat.debug=true
    mouse.debug=true
    cat.setCollider("rectangle", 0,0, 700, cat.height)
    mouse.setCollider("rectangle",0,0, 300, 100)
    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    if(mouse.isTouching(cat)){
        cat.velocityX=0
        cat.addAnimation("surprised",cat_fun)
        cat.changeAnimation("surprised")
        mouse.addAnimation("happy",mouse_3)
        mouse.changeAnimation("happy")
    }
}


function keyPressed(){

  //For moving and changing animation write code here
  cat.addAnimation("walking" ,cat_walk)
  cat.changeAnimation("walking")
  cat.velocityX=-2
  mouse.addAnimation("teasing",mouse_2)
  mouse.changeAnimation("teasing")


}
