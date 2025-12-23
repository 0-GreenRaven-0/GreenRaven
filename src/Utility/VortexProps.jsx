import { cn } from "../lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

export const Vortex = (props) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameId = useRef();
  
  // Detect mobile devices
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  // Adjust settings based on device
  const particleCount = isMobile 
    ? (props.mobileParticleCount || 200)  // Reduced for mobile
    : (props.particleCount || 700);       // Full for desktop
  
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  
  // Mobile-optimized settings
  const rangeY = props.rangeY || 100;
  const baseTTL = isMobile ? 30 : 50;
  const rangeTTL = isMobile ? 80 : 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = isMobile ? 0.8 : (props.rangeSpeed || 1.5);
  const baseRadius = isMobile ? 0.8 : (props.baseRadius || 1);
  const rangeRadius = isMobile ? 1 : (props.rangeRadius || 2);
  const baseHue = props.baseHue || 120;
  const rangeHue = 60;
  
  // Reduce noise complexity on mobile
  const noiseSteps = isMobile ? 2 : 3;
  const xOff = isMobile ? 0.002 : 0.00125;
  const yOff = isMobile ? 0.002 : 0.00125;
  const zOff = isMobile ? 0.001 : 0.0005;
  
  // Reduce glow/blur intensity on mobile
  const blurAmount = isMobile ? 4 : 8;
  const secondaryBlur = isMobile ? 2 : 4;
  
  const backgroundColor = props.backgroundColor || "#000000";
  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  // Frame rate limiting for mobile
  const targetFPS = isMobile ? 30 : 60;
  const frameInterval = 1000 / targetFPS;
  let lastFrameTime = 0;

  const HALF_PI = 0.5 * Math.PI;
  const TAU = 2 * Math.PI;
  const TO_RAD = Math.PI / 180;
  const rand = n => n * Math.random();
  const randRange = n => n - rand(2 * n);
  const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Optimize canvas for mobile
        if (isMobile) {
          canvas.style.willChange = 'transform';
          canvas.style.imageRendering = 'optimizeSpeed';
        }
        
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x, y, vx, vy, life, ttl, speed, radius, hue;

    x = rand(canvas.width);
    y = center[1] + randRange(rangeY);
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    radius = baseRadius + rand(rangeRadius);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas, ctx) => {
    const now = Date.now();
    const elapsed = now - lastFrameTime;
    
    // Frame rate limiting
    if (elapsed > frameInterval) {
      lastFrameTime = now - (elapsed % frameInterval);
      
      tick++;

      // Use lighter clear method on mobile
      if (isMobile) {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      drawParticles(ctx);
      
      // Reduce glow passes on mobile
      if (isMobile) {
        renderGlow(canvas, ctx, blurAmount);
      } else {
        renderGlow(canvas, ctx, blurAmount);
        renderGlow(canvas, ctx, secondaryBlur);
      }
      
      renderToScreen(canvas, ctx);
    }

    animationFrameId.current = window.requestAnimationFrame(() =>
      draw(canvas, ctx));
  };

  const drawParticles = (ctx) => {
    // Batch particle drawing for better performance
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i, ctx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i;
    let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

    x = particleProps[i];
    y = particleProps[i2];
    n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    vx = lerp(particleProps[i3], Math.cos(n), 0.5);
    vy = lerp(particleProps[i4], Math.sin(n), 0.5);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    radius = particleProps[i8];
    hue = particleProps[i9];

    // Skip drawing some particles on mobile for extra performance
    if (!isMobile || life % 2 === 0) {
      drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
    }

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
  };

  const drawParticle = (
    x,
    y,
    x2,
    y2,
    life,
    ttl,
    radius,
    hue,
    ctx,
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    // Slightly reduced opacity on mobile
    const opacity = isMobile ? fadeInOut(life, ttl) * 0.8 : fadeInOut(life, ttl);
    ctx.strokeStyle = `hsla(${hue},100%,${isMobile ? '50%' : '60%'},${opacity})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (x, y, canvas) => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0;
  };

  const resize = (
    canvas,
    ctx,
  ) => {
    const { innerWidth, innerHeight } = window;

    // Reduce resolution on mobile for better performance
    if (isMobile) {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = innerWidth * Math.min(pixelRatio, 1);
      canvas.height = innerHeight * Math.min(pixelRatio, 1);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
    } else {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    }

    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const renderGlow = (
    canvas,
    ctx,
    blurValue,
  ) => {
    ctx.save();
    ctx.filter = `blur(${blurValue}px) brightness(${isMobile ? '150%' : '200%'})`;
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (
    canvas,
    ctx,
  ) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      resize(canvas, ctx);
    }
  };

  // Pause animation when tab is not visible (mobile optimization)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      } else if (!document.hidden && !animationFrameId.current) {
        setup();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    setup();
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMobile]); // Re-run effect when device type changes

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent">
        <canvas 
          ref={canvasRef}
          className={isMobile ? "mobile-optimized-canvas" : ""}
        ></canvas>
      </motion.div>
      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};