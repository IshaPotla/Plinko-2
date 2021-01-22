const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;

var score = 0;

function setup() {

    createCanvas(480, 750);

    engine = Engine.create();
    world = engine.world;


    border1 = new Ground(240, 748, 480, 15);
    border2 = new Ground(2, 375, 15, 750);
    border3 = new Ground(478, 375, 15, 750);

    for (var i = 0; i <= 480; i = i + 80) {
        divisions.push(new Bar(i, 750 - 300 / 2, 10, 300));
    }
   
    for (var k = 0; k <= 480; k = k + 80) {
        plinkos.push(new Plinko(k, 75));
    }

    for (var k = 0; k <= 480; k = k + 80) {
        plinkos.push(new Plinko(k, 175));
    }

    for (var k = 0; k <= 480; k = k + 80) {
        plinkos.push(new Plinko(k, 275));
    }

    for (var k = 0; k <= 480; k = k + 80) {
        plinkos.push(new Plinko(k, 375));
    }

}

function draw() {
    background(0);
    Engine.update(engine);

    textSize(35);
    text("score: ",+score, 20, 40);

    border1.display();
    border2.display();
    border3.display();

    text("500",5,550);
    text("100",80,550);
    text("300",160,550);
    text("400",240,550);
    text("500",320,550);
    text("200",400,550);
    
    

    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 11));
    }
    for (var a = 0; a < particles.length; a++) {
        particles[a].display();
    }

    for (var y = 0; y < plinkos.length; y++) {
        plinkos[y].display();
    }

    for (var n = 0; n < divisions.length; n++) {
        divisions[n].display();
    }

}