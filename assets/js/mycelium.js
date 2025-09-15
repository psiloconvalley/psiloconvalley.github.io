document.addEventListener('DOMContentLoaded', function() {

  // This wrapper tells the script to wait until the whole page is loaded before running.
  // This solves the "Aborted" error and race condition.

  // --- p5.js sketch for the generative mycelium network ---

  let particles = [];
  const numParticles = window.innerWidth > 768 ? 100 : 40;
  const connectDistance = 120;
  
  // We define p5.js in "instance mode" to make it work inside the wrapper.
  const sketch = (p) => {
    
    p.setup = function() {
      let canvas = p.createCanvas(p.windowWidth, 400);
      canvas.parent('mycelium-visual'); // Attach to our div

      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(p));
      }
    };

    p.draw = function() {
      p.clear(); // Use clear() for a transparent background

      for (let particle of particles) {
        particle.update();
        particle.display();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let p1 = particles[i];
          let p2 = particles[j];
          let d = p.dist(p1.x, p1.y, p2.x, p2.y);

          if (d < connectDistance) {
            let alpha = p.map(d, 0, connectDistance, 200, 0);
            let weight = p.map(d, 0, connectDistance, 1.5, 0.5);
            p.stroke(190, 190, 190, alpha);
            p.strokeWeight(weight);
            p.line(p1.x, p1.y, p2.x, p2.y);
          }
        }
      }
    };

    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, 400);
    };
  };

  new p5(sketch); // Create a new p5 instance with our sketch, which starts the animation.

  // --- Particle Class ---
  class Particle {
    constructor(p) {
      this.p = p; // Store the p5 instance to access its functions
      this.x = this.p.random(this.p.width);
      this.y = this.p.random(this.p.height);
      this.vx = this.p.random(-0.5, 0.5);
      this.vy = this.p.random(-0.5, 0.5);
      this.radius = 3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > this.p.width) {
        this.vx *= -1;
      }
      if (this.y < 0 || this.y > this.p.height) {
        this.vy *= -1;
      }
    }

    display() {
      this.p.noStroke();
      this.p.fill(150, 150, 150);
      this.p.ellipse(this.x, this.y, this.radius * 2);
    }
  }

});
