function preload(){}
function setup(){
    canvas = create.canvas(500,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
   
}
function draw(){
    image(video, 0, 0, 500, 40)
    rect(100, 100, 350,250);

    circle()
}