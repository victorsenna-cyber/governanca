(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileQuery = window.matchMedia("(max-width: 700px)");
  const TAU = Math.PI * 2;

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function createSprite(radius, color, blur) {
    const size = Math.ceil((radius + blur) * 2.4);
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    const center = size / 2;
    const gradient = context.createRadialGradient(center, center, 0, center, center, center);
    gradient.addColorStop(0, "rgba(255,255,255,.96)");
    gradient.addColorStop(0.16, color);
    gradient.addColorStop(0.46, color.replace(/[\d.]+\)$/, "0.34)"));
    gradient.addColorStop(1, "rgba(214,161,71,0)");

    context.fillStyle = gradient;
    context.beginPath();
    context.arc(center, center, center, 0, TAU);
    context.fill();

    return canvas;
  }

  class LuminousField {
    constructor(canvas, options) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d", { alpha: true });
      this.options = options;
      this.particles = [];
      this.sprites = [
        createSprite(2, "rgba(255,218,133,.74)", 2),
        createSprite(5, "rgba(255,199,92,.72)", 7),
        createSprite(13, "rgba(255,219,141,.58)", 18),
        createSprite(7, "rgba(255,246,209,.84)", 6)
      ];
      this.width = 0;
      this.height = 0;
      this.dpr = 1;
      this.running = false;
      this.visible = true;
      this.lastTime = performance.now();
      this.lastDraw = 0;
      this.frameInterval = 1000 / 24;
      this.frame = this.frame.bind(this);
      this.resize = this.resize.bind(this);
      this.handleMotionPreference = this.handleMotionPreference.bind(this);

      this.resizeObserver = new ResizeObserver(this.resize);
      this.resizeObserver.observe(canvas);
      this.visibilityObserver = new IntersectionObserver(
        (entries) => {
          this.visible = entries[0].isIntersecting;
          if (this.visible && !this.running && !reduceMotion.matches) {
            this.running = true;
            this.lastTime = performance.now();
            requestAnimationFrame(this.frame);
          }
        },
        { rootMargin: "120px" }
      );
      this.visibilityObserver.observe(canvas);
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden && this.visible && !this.running && !reduceMotion.matches) {
          this.running = true;
          this.lastTime = performance.now();
          requestAnimationFrame(this.frame);
        }
      });
      reduceMotion.addEventListener("change", this.handleMotionPreference);

      this.resize();
      this.drawStatic();
      if (!reduceMotion.matches) {
        this.running = true;
        requestAnimationFrame(this.frame);
      }
    }

    getCenter() {
      if (this.options.center === "closing") {
        return { x: this.width * 0.5, y: this.height * 0.5 };
      }
      return mobileQuery.matches
        ? { x: this.width * 0.5, y: this.height * 0.28 }
        : { x: this.width * 0.69, y: this.height * 0.48 };
    }

    getCount() {
      const base = mobileQuery.matches ? this.options.mobileCount : this.options.desktopCount;
      const areaFactor = Math.min(1.25, Math.max(0.72, (this.width * this.height) / 1400000));
      return Math.round(base * areaFactor);
    }

    resize() {
      const rect = this.canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        return;
      }

      this.dpr = Math.min(window.devicePixelRatio || 1, 1.2);
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = Math.round(rect.width * this.dpr);
      this.canvas.height = Math.round(rect.height * this.dpr);
      this.context.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

      const count = this.getCount();
      this.particles = Array.from({ length: count }, (_, index) => this.createParticle(index))
        .sort((a, b) => a.layer - b.layer);
      this.drawStatic();
    }

    createParticle(index) {
      const center = this.getCenter();
      const ratio = index / Math.max(this.getCount(), 1);
      const wideField = this.options.center === "hero" && index % 3 === 0;
      let layer = 0;
      if (ratio > 0.66) layer = 1;
      if (ratio > 0.9) layer = 2;
      if (index % 5 === 0) layer = 3;

      const angle = random(-Math.PI * 0.97, Math.PI * 0.05);
      const radius = random(22, Math.min(this.width, this.height) * 0.45);
      const spread = layer === 2 ? 1.35 : layer === 1 ? 1 : 0.72;
      const speed = random(0.018, 0.075) * (layer === 2 ? 2.3 : layer === 1 ? 1.35 : 0.62);

      return {
        x: wideField ? random(this.width * 0.02, this.width * 0.98) : center.x + Math.cos(angle) * radius * spread,
        y: wideField ? random(this.height * 0.08, this.height * 0.9) : center.y + Math.sin(angle) * radius * 0.8,
        vx: wideField ? random(-0.018, 0.018) : Math.cos(angle) * speed,
        vy: wideField ? random(-0.045, -0.012) : Math.sin(angle) * speed - speed * random(0.5, 1.45),
        layer,
        origin: wideField ? "field" : "core",
        life: random(0.25, 1),
        decay: random(0.000018, 0.00006),
        phase: random(0, TAU),
        frequency: random(0.00045, 0.0012),
        drift: random(-0.012, 0.012),
        rotation: random(0, TAU)
      };
    }

    resetParticle(particle) {
      const replacement = this.createParticle(Math.floor(Math.random() * this.getCount()));
      Object.assign(particle, replacement, { life: random(0.7, 1) });
    }

    update(delta) {
      const center = this.getCenter();
      this.particles.forEach((particle) => {
        particle.phase += delta * particle.frequency;
        particle.x += (particle.vx + Math.sin(particle.phase) * particle.drift) * delta;
        particle.y += particle.vy * delta;
        particle.life -= particle.decay * delta;

        const distance = Math.hypot(particle.x - center.x, particle.y - center.y);
        const outside =
          particle.x < -100 ||
          particle.x > this.width + 100 ||
          particle.y < -100 ||
          particle.y > this.height + 100 ||
          (particle.origin === "core" && distance > Math.max(this.width, this.height) * 0.9);

        if (particle.life <= 0 || outside) {
          this.resetParticle(particle);
        }
      });
    }

    draw(time) {
      const context = this.context;
      context.clearRect(0, 0, this.width, this.height);
      context.globalCompositeOperation = "source-over";

      this.particles.forEach((particle) => {
        if (particle.layer !== 3) return;
        const glint = 0.38 + (Math.sin(time * particle.frequency + particle.phase) + 1) * 0.24;
        context.globalAlpha = Math.max(0, particle.life * glint * 0.42);
        context.fillStyle = "rgba(126,75,9,.72)";
        context.beginPath();
        context.arc(particle.x, particle.y, 1.5, 0, TAU);
        context.fill();
      });

      context.globalCompositeOperation = "lighter";

      this.particles.forEach((particle) => {
          const twinkle = 0.5 + (Math.sin(time * particle.frequency + particle.phase) + 1) * 0.34;
          const alpha = Math.max(0, Math.min(1, particle.life * twinkle));
          const sprite = this.sprites[particle.layer];
          const base =
            particle.layer === 0 ? 2.8 :
            particle.layer === 1 ? 8 :
            particle.layer === 2 ? 28 : 12;
          const pulse = particle.layer === 3 ? 0.65 + Math.abs(Math.sin(particle.phase * 1.8)) * 1.2 : 1;
          const size = base * pulse;

          context.globalAlpha = alpha * (particle.layer === 2 ? 0.52 : particle.layer === 3 ? 0.94 : 0.82);
          context.drawImage(sprite, particle.x - size, particle.y - size, size * 2, size * 2);

          if (particle.layer === 3 && alpha > 0.42) {
            context.save();
            context.translate(particle.x, particle.y);
            context.rotate(particle.rotation);
            context.strokeStyle = `rgba(255,247,211,${alpha * 0.86})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(-size * 1.7, 0);
            context.lineTo(size * 1.7, 0);
            context.moveTo(0, -size * 1.7);
            context.lineTo(0, size * 1.7);
            context.stroke();
            context.restore();
          }
        });

      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
    }

    drawStatic() {
      this.draw(1600);
    }

    handleMotionPreference() {
      if (reduceMotion.matches) {
        this.running = false;
        this.drawStatic();
        return;
      }

      if (this.visible && !this.running) {
        this.running = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.frame);
      }
    }

    frame(time) {
      if (!this.running) return;
      if (!this.visible || document.hidden || reduceMotion.matches) {
        this.running = false;
        return;
      }

      if (time - this.lastDraw < this.frameInterval) {
        requestAnimationFrame(this.frame);
        return;
      }

      const delta = Math.min(34, time - this.lastTime);
      this.lastTime = time;
      this.lastDraw = time;
      this.update(delta);
      this.draw(time);
      requestAnimationFrame(this.frame);
    }
  }

  function start() {
    const hero = document.getElementById("hero-particles");
    const closing = document.getElementById("closing-particles");

    if (hero) {
      new LuminousField(hero, {
        center: "hero",
        desktopCount: 148,
        mobileCount: 78
      });
    }

    if (closing) {
      const createClosingField = () => {
        new LuminousField(closing, {
          center: "closing",
          desktopCount: 24,
          mobileCount: 18
        });
      };

      if ("IntersectionObserver" in window) {
        const closingObserver = new IntersectionObserver(
          (entries, observer) => {
            if (!entries[0].isIntersecting) return;
            observer.disconnect();
            createClosingField();
          },
          { rootMargin: "300px" }
        );
        closingObserver.observe(closing);
      } else {
        createClosingField();
      }
    }
  }

  function initialize() {
    document.documentElement.classList.add("motion-awake");
    start();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
