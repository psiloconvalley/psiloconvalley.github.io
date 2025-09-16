// --- Interactive Spore Field Sketch (High Contrast Version) ---
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('mycelium-visual');
  if (!container) return;

  const sketch = (p) => {
    let particles = [];
    const numParticles = window.innerWidth > 768 ? 150 : 70;
    const connectDistance = 120;
    const connectDistanceMouse = 150; // A larger radius for the mouse

    p.setup = function() {
      let canvas = p.createCanvas(container.offsetWidth, 400);
      canvas.parent(container);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(p));
      }
    };

    p.draw = function() {
      p.background(30, 30, 35); // A nice dark background for contrast

      for (let particle of particles) {
        particle.update();
        particle.display();
      }

      for (let i = 0; i < particles.length; i++) {
        let p1 = particles[i];
        
        let dMouse = p.dist(p1.pos.x, p1.pos.y, p.mouseX, p.mouseY);
        if (dMouse < connectDistanceMouse) {
          p.stroke(255, 255, 255, p.map(dMouse, 0, connectDistanceMouse, 120, 0));
          p.strokeWeight(1.5);
          p.line(p1.pos.x, p1.pos.y, p.mouseX, p.mouseY);
        }

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let d = p.dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);

          if (d < connectDistance) {
            p.stroke(100, 100, 100, p.map(d, 0, connectDistance, 50, 0));
            p.strokeWeight(0.5);
            p.line(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);
          }
        }
      }
    };
    
    p.windowResized = function() {
        p.resizeCanvas(container.offsetWidth, 400);
    };
  };
  new p5(sketch);

  class Particle {
    constructor(p) {
      this.p = p;
      this.pos = this.p.createVector(this.p.random(this.p.width), this.p.random(this.p.height));
      this.vel = p5.Vector.random2D().mult(this.p.random(0.2, 0.5));
    }
    update() {
      this.pos.add(this.vel);
      if (this.pos.x < 0 || this.pos.x > this.p.width) { this.vel.x *= -1; }
      if (this.pos.y < 0 || this.pos.y > this.p.height) { this.vel.y *= -1; }
    }
    display() {
      this.p.noStroke();
      this.p.fill(200, 200, 200, 150); // Glowing spores
      this.p.ellipse(this.pos.x, this.pos.y, 3);
    }
  }
});
