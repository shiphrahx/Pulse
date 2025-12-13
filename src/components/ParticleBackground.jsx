import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../context/ThemeContext';

let particleIdCounter = 0;

const ParticleBackground = ({ variant = 'light' }) => {
  const { theme } = useTheme();
  const [particleId] = useState(() => `tsparticles-${particleIdCounter++}`);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  // Determine colors based on variant and theme
  const isDark = theme === 'dark';
  const isLightSection = variant === 'light';

  // For dark theme:
  // - Darker sections (#111): use slightly lighter particles
  // - Lighter sections (#1a1a1a): use slightly darker particles
  // For light theme:
  // - White sections: use light gray particles
  // - Gray sections: use medium gray particles

  let particleColor, linkColor, particleOpacity, linkOpacity;

  if (isDark) {
    if (isLightSection) {
      // Darker background (#111) - use barely visible lighter particles
      particleColor = '#1f2937';
      linkColor = '#1f2937';
      particleOpacity = 0.15;
      linkOpacity = 0.1;
    } else {
      // Lighter background (#1a1a1a) - use barely visible darker particles
      particleColor = '#374151';
      linkColor = '#374151';
      particleOpacity = 0.2;
      linkOpacity = 0.15;
    }
  } else {
    if (isLightSection) {
      // White background - use very light gray particles
      particleColor = '#e2e8f0';
      linkColor = '#e2e8f0';
      particleOpacity = 0.3;
      linkOpacity = 0.2;
    } else {
      // Gray background (#f1f5f9) - use medium gray particles
      particleColor = '#cbd5e1';
      linkColor = '#cbd5e1';
      particleOpacity = 0.4;
      linkOpacity = 0.3;
    }
  }

  return (
    <div className="absolute inset-0" style={{ zIndex: 0, pointerEvents: 'all' }}>
      <Particles
        id={particleId}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: particleColor,
            },
            links: {
              color: linkColor,
              distance: 140,
              enable: true,
              opacity: linkOpacity,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              outModes: {
                default: 'bounce',
              },
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: particleOpacity,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
          interactivity: {
            detect_on: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: isDark ? 0.3 : 0.5,
                },
              },
            },
          },
        }}
        style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}
      />
    </div>
  );
};

export default ParticleBackground;
