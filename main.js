function setup(){
    canvas= createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 450);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposses);


}

function modelloaded() {
    console.log("MODEL HAS LOADED !!!");
}

function draw() {
    background("#4287f5");
    
}

function gotposses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
    




