var circles = [];
var keyData = {
    a: {
        color: "red",
        sound: new Howl({
            src: ['sounds/bubbles.mp3']})
        },
    b: {
        color: "orange",
        sound: new Howl({src: ['sounds/clay.mp3']})
    },
    c: {
        color: "red",
        sound: new Howl({
            src: ['sounds/confetti.mp3']})
    },
    d: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/corona.mp3']})
    },
    e: {
        color: "green",
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']})
    },
    f: {
        color: "yellow",
        sound: new Howl({
            src: ['sounds/flash-1.mp3']})
    },
    g: {
        color: "blue",
        sound: new Howl({
            src: ['sounds/flash-2.mp3']})
    },
    h: {
        color: "orange",
        sound: new Howl({
            src: ['sounds/flash-3.mp3']})
    },
    i: {
        color: "pink",
        sound: new Howl({
            src: ['sounds/glimmer.mp3']})
    },
    j: {
        color: "indigo",
        sound: new Howl({
            src: ['sounds/moon.mp3']})
    },
    k: {
        color: "violet",
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']})
    },
    l: {
        color: "red",
        sound: new Howl({
            src: ['sounds/piston-1.mp3']})
    },
    m: {
        color: "red",
        sound: new Howl({
            src: ['sounds/piston-2.mp3']})
    },
    n: {
        color: "dodgerblue",
        sound: new Howl({
            src: ['sounds/piston-3.mp3']})
    },
    o: {
        color: "slateblue",
        sound: new Howl({
            src: ['sounds/prism-1.mp3']})
    },
    p: {
        color: "coral",
        sound: new Howl({
            src: ['sounds/prism-2.mp3']})
    },
    q: {
        color: "cornsilk",
        sound: new Howl({
            src: ['sounds/prism-3.mp3']})
    },
    r: {
        color: "cyan",
        sound: new Howl({
            src: ['sounds/splits.mp3']})
    },
    s: {
        color: "fuchsia",
        sound: new Howl({
            src: ['sounds/squiggle.mp3']})
    },
    t: {
        color: "greenyellow",
        sound: new Howl({
            src: ['sounds/strike.mp3']})
    },
    u: {
        color: "hotpink",
        sound: new Howl({
            src: ['sounds/suspension.mp3']})
    },
    v: {
        color: "lightcoral",
        sound: new Howl({
            src: ['sounds/timer.mp3']})
    },
    w: {
        color: "lightskyblue",
        sound: new Howl({
            src: ['sounds/ufo.mp3']})
    },
    x: {
        color: "maroon",
        sound: new Howl({
            src: ['sounds/veil.mp3']})
    },
    y: {
        color: "mediumblue",
        sound: new Howl({
            src: ['sounds/wipe.mp3']})
    },
    z: {
        color: "moccasin",
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']})
    }
};


function onKeyDown(event) {

    if (keyData[event.key]){
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        circles.push(newCircle);
    }
}

function onFrame(event) {
    for(var i=0; i < circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
    }
}
