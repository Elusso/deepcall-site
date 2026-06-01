/* ═══════════════════════════════════════════
   🌊 DeepCall OCEAN — Live Background System
   Canvas waves · bubbles · sound bars · depth
═══════════════════════════════════════════ */

(function() {
  'use strict';

  // ═══ OCEAN CANVAS BACKGROUND ═══
  function initOcean() {
    const canvas = document.createElement('canvas');
    canvas.id = 'ocean-canvas';
    Object.assign(canvas.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '-2',
      pointerEvents: 'none'
    });
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let W, H, waves = [], bubbles = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Create wave layers
    const waveColors = [
      'rgba(0, 30, 60, 0.4)',
      'rgba(0, 60, 90, 0.3)',
      'rgba(0, 100, 120, 0.2)',
      'rgba(0, 180, 216, 0.08)',
      'rgba(0, 212, 255, 0.05)'
    ];

    for (let i = 0; i < 5; i++) {
      waves.push({
        y: H * (0.6 + i * 0.1),
        amplitude: 15 + i * 8,
        frequency: 0.008 + i * 0.003,
        speed: 0.01 + i * 0.005,
        offset: i * Math.PI / 3,
        color: waveColors[i]
      });
    }

    // Create bubbles
    for (let i = 0; i < 30; i++) {
      bubbles.push({
        x: Math.random() * W,
        y: H + Math.random() * 200,
        r: 2 + Math.random() * 6,
        speed: 0.3 + Math.random() * 1.2,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.02
      });
    }

    let time = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Deep ocean gradient background
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, '#000814');
      grad.addColorStop(0.3, '#001d3d');
      grad.addColorStop(0.6, '#003566');
      grad.addColorStop(1, '#001d3d');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Draw waves
      waves.forEach((wave, idx) => {
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 3) {
          const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      // Draw bubbles
      bubbles.forEach(b => {
        b.y -= b.speed;
        b.wobble += b.wobbleSpeed;
        const bx = b.x + Math.sin(b.wobble) * 20;

        if (b.y < -20) {
          b.y = H + 20;
          b.x = Math.random() * W;
        }

        // Bubble glow
        const bubbleGrad = ctx.createRadialGradient(bx - b.r*0.3, b.y - b.r*0.3, 0, bx, b.y, b.r);
        bubbleGrad.addColorStop(0, 'rgba(0, 212, 255, 0.6)');
        bubbleGrad.addColorStop(0.5, 'rgba(0, 180, 216, 0.2)');
        bubbleGrad.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.fillStyle = bubbleGrad;
        ctx.beginPath();
        ctx.arc(bx, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();

        // Highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(bx - b.r*0.3, b.y - b.r*0.3, b.r * 0.25, 0, Math.PI * 2);
        ctx.fill();
      });

      // Light rays from top
      const rayCount = 5;
      for (let i = 0; i < rayCount; i++) {
        const rayX = W * (0.1 + i * 0.2) + Math.sin(time * 0.005 + i) * 50;
        const rayGrad = ctx.createLinearGradient(rayX, 0, rayX + 30, H * 0.5);
        rayGrad.addColorStop(0, 'rgba(0, 212, 255, 0.03)');
        rayGrad.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(rayX - 20, 0);
        ctx.lineTo(rayX + 20, 0);
        ctx.lineTo(rayX + 60, H * 0.5);
        ctx.lineTo(rayX - 60, H * 0.5);
        ctx.closePath();
        ctx.fill();
      }

      time++;
      requestAnimationFrame(draw);
    }
    draw();
  }

  // ═══ VOICE WAVE BARS IN HERO ═══
  function initVoiceWaves() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Sound bars container
    const barsContainer = document.createElement('div');
    barsContainer.className = 'voice-wave-bars';
    Object.assign(barsContainer.style, {
      position: 'absolute',
      bottom: '15%',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'flex-end',
      gap: '3px',
      height: '60px',
      zIndex: '2',
      pointerEvents: 'none',
      opacity: '0.5'
    });

    const barCount = 40;
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      Object.assign(bar.style, {
        width: '3px',
        background: 'linear-gradient(to top, rgba(0,212,255,0.3), rgba(0,180,216,0.6))',
        borderRadius: '2px 2px 0 0',
        transition: 'height 0.1s ease',
        animation: `voiceBar ${0.5 + Math.random() * 0.8}s ease-in-out infinite alternate`,
        animationDelay: `${Math.random() * 2}s`
      });
      barsContainer.appendChild(bar);
    }
    hero.appendChild(barsContainer);

    // Add keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes voiceBar {
        0% { height: 5px; }
        100% { height: ${15 + Math.random() * 45}px; }
      }
    `;
    document.head.appendChild(style);
  }

  // ═══ PHONE TUBE DECORATIONS ═══
  function initPhoneTubes() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const tubesSVG = document.createElement('div');
    tubesSVG.innerHTML = `
      <svg class="phone-tubes" style="position:absolute; top:20%; right:5%; width:120px; height:200px; opacity:0.15; z-index:1; pointer-events:none;" viewBox="0 0 120 200">
        <!-- Receiver tube -->
        <path d="M40 20 Q30 50 35 80 Q40 110 35 140" stroke="url(#tubeGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
        <!-- Mouthpiece tube -->
        <path d="M80 160 Q90 130 85 100 Q80 70 85 40" stroke="url(#tubeGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
        <!-- Connection coil -->
        <path d="M35 140 Q20 150 30 160 Q40 170 35 180" stroke="url(#tubeGrad)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <defs>
          <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#003566;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
    `;
    hero.appendChild(tubesSVG);
  }

  // ═══ FLOATING PARTICLES ═══
  function initParticles() {
    const container = document.createElement('div');
    container.id = 'particles';
    Object.assign(container.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1',
      pointerEvents: 'none',
      overflow: 'hidden'
    });
    document.body.insertBefore(container, document.body.firstChild);

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      const size = 1 + Math.random() * 3;
      Object.assign(p.style, {
        position: 'absolute',
        width: size + 'px',
        height: size + 'px',
        background: 'rgba(0, 212, 255, ' + (0.1 + Math.random() * 0.3) + ')',
        borderRadius: '50%',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animation: `float ${10 + Math.random() * 20}s linear infinite`,
        animationDelay: `-${Math.random() * 20}s`
      });
      container.appendChild(p);
    }
  }

  // ═══ INIT ALL ═══
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initOcean();
      initVoiceWaves();
      initPhoneTubes();
      initParticles();
    });
  } else {
    initOcean();
    initVoiceWaves();
    initPhoneTubes();
    initParticles();
  }
})();
