import { useEffect, useState, useRef } from 'react';
import Button from '../atoms/Button';
import styles from './styles/Hero.module.css';
import { ChevronDown } from 'lucide-react';
import { useTranslation, Trans } from "react-i18next";

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
          const alpha = (1 - dist / CONNECT_DIST) * 0.9;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(79,110,247,${alpha})`;
          ctx.lineWidth = 1;
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
  const { t } = useTranslation();

  useEffect(() => {
    if (canvasRef.current) return initCanvas(canvasRef.current);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span><Trans i18nKey="hero.label" /></span>
        </div>

        <h1 className={styles.heading}>
          <Trans i18nKey="hero.greetings" />
        </h1>

        <p className={styles.role}>
          <Trans i18nKey="hero.role" />
        </p>

        <p className={styles.tagline}>
          <Trans i18nKey="hero.description.p1" />
          <br />
          <Trans i18nKey="hero.description.p2" />
        </p>

        <div className={styles.cta}>
          <Button href="/projects" variant="primary">View Projects</Button>
          <Button href="https://www.linkedin.com/in/emilio-luna-backend/" variant="primary">
            <p/> LinkedIn
          </Button>
          <Button href="https://github.com/lumini-statio" variant="secondary">
            <p/> GitHub
          </Button>

          <Button href="/cv-en.pdf" variant='secondary' target="_blank">
            CV-en
          </Button>
          <Button href="/cv-es.pdf" variant='secondary' target="_blank">
            CV-es
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
