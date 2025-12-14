import { useEffect, useState, useMemo, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// Global initialization - only run once across all instances
let engineInitialized = false;
let engineInitPromise = null;

// Global state to track which particle instance is currently active
let activeInstanceId = null;
const instanceCallbacks = new Map();

const ParticleBackground = ({ showInDark = true }) => {
  const { theme } = useTheme();
  const [init, setInit] = useState(engineInitialized);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  const particleIdRef = useRef(`particles-${Math.random().toString(36).substr(2, 9)}`);

  const isDark = theme === 'dark';
  const shouldShow = (showInDark && isDark) || (!showInDark && !isDark);

  // Initialize particles engine once globally
  useEffect(() => {
    if (engineInitialized) {
      setInit(true);
      return;
    }

    if (!engineInitPromise) {
      engineInitPromise = initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        engineInitialized = true;
        setInit(true);
      });
    } else {
      engineInitPromise.then(() => setInit(true));
    }
  }, []);

  // Intersection Observer to detect visibility
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting && entry.intersectionRatio > 0.5;

          // Register callback for global singleton management
          if (visible) {
            instanceCallbacks.set(particleIdRef.current, () => setIsActive(true));

            // Deactivate previous instance immediately
            if (activeInstanceId && activeInstanceId !== particleIdRef.current) {
              const prevCallback = instanceCallbacks.get(activeInstanceId);
              if (prevCallback) prevCallback(false);
            }

            // Activate this instance
            activeInstanceId = particleIdRef.current;
            setIsActive(true);
          } else {
            instanceCallbacks.delete(particleIdRef.current);
            if (activeInstanceId === particleIdRef.current) {
              activeInstanceId = null;
            }
            setIsActive(false);
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '0px'
      }
    );

    observer.observe(containerRef.current);
    return () => {
      instanceCallbacks.delete(particleIdRef.current);
      if (activeInstanceId === particleIdRef.current) {
        activeInstanceId = null;
      }
      observer.disconnect();
    };
  }, []);

  const particleColor = isDark ? '#64748b' : '#94a3b8';
  const lineColor = isDark ? '#64748b' : '#94a3b8';

  // Memoize options to prevent recreation
  const options = useMemo(() => ({
    fullScreen: {
      enable: false
    },
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 30,
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: false
        },
        onClick: {
          enable: false
        },
        resize: {
          enable: true,
          delay: 0.5
        }
      }
    },
    particles: {
      color: {
        value: particleColor
      },
      links: {
        color: lineColor,
        distance: 100,
        enable: true,
        opacity: 0.45,
        width: 1,
        triangles: {
          enable: false
        }
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'bounce'
        },
        attract: {
          enable: false
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 160
      },
      opacity: {
        value: 0.6,
        animation: {
          enable: false
        }
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 0.4, max: 1.2 },
        animation: {
          enable: false
        }
      },
      collisions: {
        enable: false
      }
    },
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    smooth: true
  }), [particleColor, lineColor]);

  if (!shouldShow || !init) {
    return <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />;
  }

  // Only render particles if this is the active instance
  if (!isActive) {
    return <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <Particles
        id={particleIdRef.current}
        options={options}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default ParticleBackground;
