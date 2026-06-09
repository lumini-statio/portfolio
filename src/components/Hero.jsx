import { useEffect, useRef } from 'react';
import Button from '../atoms/Button';
import styles from './styles/Hero.module.css';
import { ChevronDown } from 'lucide-react';

/* ── Constellation animation ── */
function initCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const DOTS = 60;
  const CONNECT_DIST = 140;

  let W, H, dots;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeDots() {
    dots = Array.from({ length: DOTS }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // lines
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(79,110,247,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }

    // dots
    dots.forEach((d) => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,255,0.6)';
      ctx.fill();

      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > W) d.vx *= -1;
      if (d.y < 0 || d.y > H) d.vy *= -1;
    });
  }

  let raf;
  function loop() { draw(); raf = requestAnimationFrame(loop); }

  resize();
  makeDots();
  loop();

  const ro = new ResizeObserver(() => { resize(); makeDots(); });
  ro.observe(canvas);

  return () => { cancelAnimationFrame(raf); ro.disconnect(); };
}

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) return initCanvas(canvasRef.current);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>Available for new opportunities</span>
        </div>

        <h1 className={styles.heading}>
          Hi, I'm{' '}
          <span className={styles.name}>Emilio Luna</span>
        </h1>

        <p className={styles.role}>
          Backend Developer &amp;{' '}
          <span className={styles.roleAccent}>Tech Leader</span>{' '}
          at Airport Security Police
        </p>

        <p className={styles.tagline}>
          I like to build &amp; participate on projects that help people.<br />
          I design &amp; build apps I imagine.
        </p>

        <div className={styles.cta}>
          <Button href="#projects" variant="primary">View Projects</Button>
          <Button href="https://www.linkedin.com/in/emilio-luna-backend/" variant="primary">
            <p/> LinkedIn
          </Button>
          <Button href="https://github.com/lumini-statio" variant="secondary">
            <p/> GitHub
          </Button>
        </div>
      </div>

      <a href="#about" className={styles.scroll} aria-label="Scroll down">
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
