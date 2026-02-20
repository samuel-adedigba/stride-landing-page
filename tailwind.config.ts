import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Custom breakpoints for better responsive control
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Custom breakpoints
      'mobile': { 'max': '767px' },
      'tablet': { 'min': '768px', 'max': '1023px' },
      'desktop': { 'min': '1024px' },
      // Landscape orientation
      'landscape': { 'raw': '(orientation: landscape)' },
      // High DPI screens
      'retina': { 'raw': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)' },
    },

    extend: {
      // Enhanced color system
      colors: {
        // Primary brand colors - Lemon Green
        primary: {
          50: '#F8FFE5',
          100: '#EFFFCC',
          200: '#DFFF99',
          300: '#CFFF66',
          400: '#C3FF33',
          500: '#B6FF1A', // Main Lemon Green
          600: '#A2E617',
          700: '#8FCC14',
          800: '#7BB311',
          900: '#689A0E',
        },

        // Accent colors - Using Soft White / Dark Gray variations
        accent: {
          50: '#FDFDFD',
          100: '#F9F9F9',
          200: '#F2F2F2', // Soft White
          300: '#E5E5E5',
          400: '#D4D4D4',
          500: '#2A2D30', // Dark Gray
          600: '#232629',
          700: '#1C1E21',
          800: '#151719',
          900: '#0F1113', // Matte Black
        },

        // Neutral grays aligned with brand
        gray: {
          50: '#F9FAFB',
          100: '#F2F2F2',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#2A2D30',
          900: '#1F2937',
          950: '#0F1113',
        },

        // Brand Palette Shortcuts
        brand: {
          black: '#0F1113',
          lemon: '#B6FF1A',
          white: '#F2F2F2',
          gray: '#2A2D30',
        },

        // Background colors
        background: '#0F1113',
        backgroundSecondary: '#2A2D30',
        surface: '#151719',
        surfaceDark: '#0F1113',

        // Text colors
        textPrimary: '#F2F2F2',
        textSecondary: '#AAAAAA',
        textTertiary: '#777777',
        textInverse: '#0F1113',

        // Border and divider colors
        border: 'rgba(255, 255, 255, 0.1)',
        borderDark: 'rgba(255, 255, 255, 0.05)',
        divider: 'rgba(255, 255, 255, 0.1)',
        dividerDark: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },

      // Responsive typography system
      fontSize: {
        // Display sizes (hero text)
        'display-2xl': ['clamp(48px, 10vw, 144px)', { lineHeight: '1', fontWeight: '700' }],
        'display-xl': ['clamp(40px, 8vw, 120px)', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['clamp(36px, 7vw, 96px)', { lineHeight: '1.1', fontWeight: '600' }],
        'display-md': ['clamp(32px, 6vw, 72px)', { lineHeight: '1.1', fontWeight: '600' }],
        'display-sm': ['clamp(28px, 5vw, 60px)', { lineHeight: '1.2', fontWeight: '600' }],

        // Heading sizes
        'h1': ['clamp(28px, 5vw, 48px)', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['clamp(24px, 4vw, 36px)', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['clamp(20px, 3.5vw, 30px)', { lineHeight: '1.3', fontWeight: '500' }],
        'h4': ['clamp(18px, 3vw, 24px)', { lineHeight: '1.4', fontWeight: '500' }],
        'h5': ['clamp(16px, 2.5vw, 20px)', { lineHeight: '1.4', fontWeight: '500' }],
        'h6': ['clamp(14px, 2vw, 18px)', { lineHeight: '1.5', fontWeight: '500' }],

        // Body text
        'body-xl': ['clamp(18px, 2.5vw, 22px)', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['clamp(16px, 2.2vw, 20px)', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['clamp(14px, 2vw, 18px)', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['clamp(13px, 1.8vw, 16px)', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['clamp(12px, 1.6vw, 14px)', { lineHeight: '1.5', fontWeight: '400' }],

        // Caption and small text
        'caption': ['clamp(11px, 1.4vw, 13px)', { lineHeight: '1.4', fontWeight: '400' }],
        'overline': ['clamp(10px, 1.2vw, 12px)', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.1em' }],
      },

      // Enhanced font weights
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      // Responsive spacing scale
      spacing: {
        // Micro spacing
        '0.5': '2px',
        '1.5': '6px',
        '2.5': '10px',
        '3.5': '14px',

        // Responsive spacing using clamp
        'xs': 'clamp(4px, 1vw, 8px)',
        'sm': 'clamp(8px, 2vw, 16px)',
        'md': 'clamp(16px, 3vw, 24px)',
        'lg': 'clamp(24px, 4vw, 32px)',
        'xl': 'clamp(32px, 5vw, 48px)',
        '2xl': 'clamp(48px, 6vw, 64px)',
        '3xl': 'clamp(64px, 8vw, 96px)',
        '4xl': 'clamp(96px, 10vw, 128px)',
        '5xl': 'clamp(128px, 12vw, 160px)',

        // Section spacing
        'section-sm': 'clamp(40px, 6vw, 60px)',
        'section': 'clamp(60px, 8vw, 80px)',
        'section-lg': 'clamp(80px, 10vw, 120px)',
        'section-xl': 'clamp(120px, 12vw, 160px)',

        // Container spacing
        'container-sm': 'clamp(16px, 4vw, 24px)',
        'container': 'clamp(24px, 5vw, 32px)',
        'container-lg': 'clamp(32px, 6vw, 48px)',
      },

      // Enhanced border radius
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'btn': '4px',
        'card': '8px',
        'input': '6px',
        'modal': '12px',
      },

      // Container max widths
      maxWidth: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1728px',
        '4xl': '1920px',
        'container-sm': '640px',
        'container': '1024px',
        'container-lg': '1280px',
        'prose': '65ch',
      },

      // Enhanced animations
      animation: {
        // Fade animations
        'fadeIn': 'fadeIn 0.4s ease-out forwards',
        'fadeOut': 'fadeOut 0.4s ease-out forwards',
        'fadeDown': 'fadeDown 0.6s ease-out forwards',
        'fadeUp': 'fadeUp 0.6s ease-out forwards',
        'fadeLeft': 'fadeLeft 0.6s ease-out forwards',
        'fadeRight': 'fadeRight 0.6s ease-out forwards',

        // Scale animations
        'scaleIn': 'scaleIn 0.4s ease-out forwards',
        'scaleOut': 'scaleOut 0.4s ease-out forwards',
        'scaleY': 'scaleY 1s ease-out forwards',

        // Slide animations
        'slideDown': 'slideDown 0.4s ease-out forwards',
        'slideUp': 'slideUp 0.4s ease-out forwards',
        'slideLeft': 'slideLeft 0.4s ease-out forwards',
        'slideRight': 'slideRight 0.4s ease-out forwards',

        // Bounce and elastic
        'bounceIn': 'bounceIn 0.6s ease-out forwards',
        'elastic': 'elastic 0.8s ease-out forwards',

        // Loading animations
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',

        // Hover animations
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },

      // Enhanced keyframes
      keyframes: {
        // Fade keyframes
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        fadeOut: {
          'from': { opacity: '1' },
          'to': { opacity: '0' }
        },
        fadeDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeLeft: {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeRight: {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },

        // Scale keyframes
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' }
        },
        scaleOut: {
          'from': { opacity: '1', transform: 'scale(1)' },
          'to': { opacity: '0', transform: 'scale(0.9)' }
        },
        scaleY: {
          'from': { transform: 'scaleY(0)' },
          'to': { transform: 'scaleY(1)' }
        },

        // Slide keyframes
        slideDown: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' }
        },
        slideUp: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' }
        },
        slideLeft: {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(0)' }
        },
        slideRight: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(0)' }
        },

        // Special effects
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        elastic: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.25)' },
          '75%': { transform: 'scale(0.85)' },
          '100%': { transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },

      // Enhanced shadows with responsive scaling
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'glow': '0 0 20px rgb(59 130 246 / 0.5)',
        'glow-lg': '0 0 40px rgb(59 130 246 / 0.3)',
      },

      // Z-index scale
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },

      // Aspect ratios
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'photo': '4 / 3',
        'golden': '1.618 / 1',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
};

export default config;


// <!-- Responsive typography -->
// <h1 class="text-h1">Responsive Heading</h1>
// <p class="text-body">Responsive body text</p>

// <!-- Responsive containers -->
// <div class="container">Auto-responsive container</div>

// <!-- Responsive buttons -->
// <button class="button-primary">Primary Button</button>
// <button class="button-primary button-sm">Small Button</button>

// <!-- Responsive layouts -->
// <div class="grid-responsive">Responsive grid</div>
// <div class="flex-responsive">Responsive flex</div>

// <!-- Responsive spacing -->
// <div class="p-container">Responsive padding</div>
// <section class="section">Responsive section spacing</section>