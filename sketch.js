var bgimg, bg;
var gameState = "wait"
var cheeseimg, breadimg, paproniimg, basilimg
var waterbuket, tomato, mushroom, lettuce, money, farm, carrot, basket
var girl, girlseed, girlwater
var storybutton, mutebutton, unmutebutton, nextbutton, playbutton
var ground, groundimg

function preload() {
    bgimg = loadImage("assets/splash.gif")
    groundimg = loadImage("lee-main/verticalground.jpg")
    // girlwater=loadImage("assets/girl_water-removebg-preview.png")
    // girlseed=loadImage("assets/girl_seed-removebg-preview.png")
    // girl=loadImage("assets/girl-removebg-preview.png")
    // lettuce=loadImage("assets/lettuce-removebg-preview.png")
    // mushroom=loadImage("assets/mushroom-removebg-preview.png")
    // tomato=loadImage("assets/tomato-removebg-preview.png")
    // waterbuket=loadImage("assets/waterbuket.png")
    // money=loadImage("assets/money-removebg-preview.png")
    // farm=loadImage("assets/farm.png")
    // carrot=loadImage("assets/carrot-removebg-preview.png")
    // basket=loadImage("assets/basket-removebg-preview(1).png")

}


function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("lee-main/play.png")
    playbutton.position(width - 150, height / 4 - 50)
    playbutton.size(100, 100)

    musicbutton = createImg("lee-main/music.png")
    musicbutton.position(width - 150, height - (height - 50))
    musicbutton.size(100, 100)

    nextbutton = createImg("lee-main/next.png")
    nextbutton.position(width - 600, height - (height / 3.3))
    nextbutton.size(100, 100)
    nextbutton.hide()

    backbutton = createImg("lee-main/back.png")
    backbutton.position(width - 1000, height - (height / 3.3))
    backbutton.size(100, 100)
    backbutton.hide()

    mutebutton = createImg("lee-main/nomusic.png")
    mutebutton.position(width - 150, height - (height - 50))
    mutebutton.size(100, 100)
    mutebutton.hide()

    ground = createSprite(width / 2, height / 2)
    ground.addImage(groundimg)
    ground.visible=false
    groundimg.resize(width,height)
    ground.velocityX=-3
    // ground.shapeColor="red"


}




function draw() {
    if (gameState === "wait") {
        background(bgimg)
    }


    playbutton.mousePressed(() => {
        gameState = "gamestory"
        playbutton.hide()
    })

    if (gameState === "gamestory") {
        background("#C89348")
        ground.visible <= true
        if(ground.x<=0){
            ground.x=width/2
        }
        ground.velocityX=-3
    }


    musicbutton.mousePressed(() => {
        // gameState="mute"
        musicbutton.hide()
        mutebutton.show()
    })

    mutebutton.mousePressed(() => {
        // gameState="mute"
        musicbutton.show()
        mutebutton.hide()
    })



    drawSprites()
}