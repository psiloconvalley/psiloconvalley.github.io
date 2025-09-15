// --- p5.js sketch for the generative mycelium network ---

let particles = [];
const numParticles = window.innerWidth > 768 ? 100 : 40; // Fewer particles on mobile
const connectDistance = 120;

function setup() {
  let canvas = createCanvas(windowWidth, 400); // Create a canvas of 400px height
  canvas.parent('mycelium-visual'); // Attach the canvas to our div

  // Create the particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  clear(); // Use clear() instead of background() for transparency

  // Update and display particles
  for (let p of particles) {
    p.update();
    p.display();
  }

  // Check for connections between particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let p1 = particles[i];
      let p2 = particles[j];
      let d = dist(p1.x, p1.y, p2.x, p2.y);

      if (d < connectDistance) {
        // As they get closer, make the line thicker and more opaque
        let alpha = map(d, 0, connectDistance, 200, 0);
        let weight = map(d, 0, connectDistance, 1.5, 0.5);
        stroke(190, 190, 190, alpha); // A light grey color
        strokeWeight(weight);
        line(p1.x, p1.y, p2.x, p2.y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 400);
}

// --- Particle Class ---
class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-0.5, 0.5); // Velocity x
    this.vy = random(-0.5, 0.5); // Velocity y
    this.radius = 3;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
  }

  display() {
    noStroke();
    fill(150, 150, 150); // Grey color for the nodes
    ellipse(this.x, this.y, this.radius * 2);
  }
}
