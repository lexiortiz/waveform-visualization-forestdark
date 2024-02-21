let sound;
let fft;

// Load sound file before setup() function runs
function preload() {
  // Load the sound file
  sound = loadSound('forestdark-compressed.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Loop sound file
  sound.loop();
  // Create a new instance of p5.FFT() object
  fft = new p5.FFT();

  noStroke();
}

function draw() {
  background("rgba(18, 19, 23, 0.15)");
  const pigment_green = color(11, 173, 68);
  const malachite = color(15, 230, 90);
  const powder = color(253, 255, 250);

  // waveform() method returns an array of amplitude values (between -1 and 1) that represent a snapshot of amplitude readings in a single buffer
  let waveformVis = fft.waveform();

  // Loop through waveform array to draw a circle per time segment
  for (let i = 0; i < waveformVis.length; i++) {
    // Map x location using index number of waveform array
    let x = map(i, 0, waveformVis.length, 0, width);
    // May y location using the amplitude value for the specific time segment
    let y = map(waveformVis[i], -1, 1, height, 0);

    fill(powder);
    circle(x, y, 3);
  }
}
