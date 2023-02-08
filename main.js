let video;
function setup() {
  video = createCapture(VIDEO);
  video.size(500, 500);
}

let poseNet;
function modelLoaded() {
  console.log('Model Loaded!');
}

function setup() {
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
  }
}
