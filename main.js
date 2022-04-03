function start() {
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LFzq9q7ds/model.json", modelLoaded);
}

function modelLoaded() {
    console.log("Model is loaded!");
}