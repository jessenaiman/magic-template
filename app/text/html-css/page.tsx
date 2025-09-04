'use client';

import { PreviewTile } from "@/components/preview-tile";
import { mergeWithBaseOptions } from "@/components/preview-controls/base-category-options";
import { usePreviewContext } from "@/components/preview-controls/preview-context";



export default function HtmlCssTextPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">HTML/CSS Text Components</h2>
        <p className="text-muted-foreground">
          Pure HTML and CSS text styling and animations. These examples demonstrate fundamental web technologies
          without JavaScript dependencies.
        </p>
      </div>


      <div className="grid grid-cols-1 gap-6">
        {/* Blur Text Animation */}
        <PreviewTile
          title="Blur Text Animation"
          description="Pure CSS text blur effect that reveals text with a smooth transition using CSS filters and transitions."
          componentName="BlurTextCSS"
          category="text"
          designSystem="html-css"
          initialCustomization={{
            backgroundColor: '#170D27',
            textColor: '#ffffff',
            borderRadius: 12,
            padding: 24,
            fontSize: 18
          }}
        >
          <div className="css-blur-text">
            <span>Pure CSS Blur Effect</span>
          </div>
        </PreviewTile>

        {/* Gradient Text Animation */}
        <PreviewTile
          title="Animated Gradient Text"
          description="CSS-only animated gradient text using background-clip and keyframe animations for smooth color transitions."
          componentName="GradientTextCSS"
          category="text"
          designSystem="html-css"
          initialCustomization={{
            backgroundColor: '#0a0a0a',
            textColor: '#ffffff',
            borderRadius: 20,
            padding: 24,
            fontSize: 24
          }}
        >
          <div className="css-gradient-text">
            CSS Gradient Magic
          </div>
        </PreviewTile>

        {/* Shiny Text Animation */}
        <PreviewTile
          title="Shiny Text Animation"
          description="Pure CSS shine effect that moves across text using linear gradients and background animations."
          componentName="ShinyTextCSS"
          category="text"
          designSystem="html-css"
          initialCustomization={{
            backgroundColor: '#1a1a1a',
            textColor: '#b5b5b5',
            borderRadius: 8,
            padding: 24,
            fontSize: 32
          }}
        >
          <div className="css-shiny-text">
            Shiny Effect
          </div>
        </PreviewTile>

        {/* Glitch Text Effect */}
        <PreviewTile
          title="CSS Glitch Text"
          description="Pure CSS glitch effect using pseudo-elements, clip-path, and animation delays for a digital distortion look."
          componentName="GlitchTextCSS"
          category="text"
          designSystem="html-css"
          initialCustomization={{
            backgroundColor: '#060010',
            textColor: '#ffffff',
            borderRadius: 8,
            padding: 32,
            fontSize: 48
          }}
        >
          <div className="css-glitch-text" data-text="GLITCH EFFECT">
            GLITCH EFFECT
          </div>
        </PreviewTile>

        {/* Typewriter Effect */}
        <PreviewTile
          title="Typewriter Animation"
          description="Classic typewriter effect using CSS animations, steps() timing function, and border blinking cursor."
          componentName="TypewriterCSS"
          category="text"
          designSystem="html-css"
          initialCustomization={{
            backgroundColor: '#1a1a1a',
            textColor: '#00ff00',
            borderRadius: 8,
            padding: 24,
            fontSize: 18
          }}
        >
          <div className="css-typewriter">
            <h1>Hello, World!</h1>
          </div>
        </PreviewTile>

        {/* Text Shadow Animation */}
        <PreviewTile
          title="Animated Text Shadow"
          description="Dynamic text shadow effects using CSS animations with multiple shadow layers and color transitions."
          componentName="TextShadowCSS"
          category="text"
          designSystem="html-css"
          initialCustomization={{
            backgroundColor: '#000000',
            textColor: '#ffffff',
            borderRadius: 12,
            padding: 32,
            fontSize: 36
          }}
        >
          <div className="css-text-shadow">
            Shadow Magic
          </div>
        </PreviewTile>
      </div>

      <style jsx>{`
        .css-blur-text {
          text-align: center;
        }
        
        .css-blur-text span {
          font-size: 2rem;
          font-weight: 600;
          filter: blur(8px);
          opacity: 0;
          animation: blurReveal 2s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        .css-blur-text[data-speed="fast"] span {
          animation-duration: 1s;
        }
        
        @keyframes blurReveal {
          0% {
            filter: blur(8px);
            opacity: 0;
          }
          100% {
            filter: blur(0px);
            opacity: 1;
          }
        }
        
        .css-gradient-text {
          font-size: 2rem;
          font-weight: 600;
          background: linear-gradient(45deg, #ffaa40, #9c40ff, #ff6b6b, #4ecdc4, #ffaa40);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientShift 8s ease infinite;
        }
        
        .css-gradient-text[data-speed="fast"] {
          animation-duration: 4s;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .css-shiny-text {
          font-size: 3rem;
          font-weight: 700;
          color: #b5b5b5a4;
          background-image: linear-gradient(120deg, 
            rgba(255, 255, 255, 0) 40%, 
            rgba(255, 255, 255, 0.8) 50%, 
            rgba(255, 255, 255, 0) 60%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          animation: shine 5s linear infinite;
        }
        
        .css-shiny-text[data-speed="fast"] {
          animation-duration: 2s;
        }
        
        @keyframes shine {
          0% { background-position: 100%; }
          100% { background-position: -100%; }
        }
        
        .css-glitch-text {
          font-size: 4rem;
          font-weight: 900;
          color: white;
          position: relative;
          text-align: center;
        }
        
        .css-glitch-text::before,
        .css-glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        .css-glitch-text::before {
          animation: glitch-animation-1 2s infinite linear alternate-reverse;
          left: 2px;
          text-shadow: -2px 0 red;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        }
        
        .css-glitch-text::after {
          animation: glitch-animation-2 3s infinite linear alternate-reverse;
          left: -2px;
          text-shadow: 2px 0 blue;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        }
        
        @keyframes glitch-animation-1 {
          0% { clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%); }
          20% { clip-path: polygon(0 15%, 100% 15%, 100% 50%, 0 50%); }
          40% { clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%); }
          60% { clip-path: polygon(0 45%, 100% 45%, 100% 80%, 0 80%); }
          80% { clip-path: polygon(0 60%, 100% 60%, 100% 95%, 0 95%); }
          100% { clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%); }
        }
        
        @keyframes glitch-animation-2 {
          0% { clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%); }
          20% { clip-path: polygon(0 50%, 100% 50%, 100% 85%, 0 85%); }
          40% { clip-path: polygon(0 35%, 100% 35%, 100% 70%, 0 70%); }
          60% { clip-path: polygon(0 20%, 100% 20%, 100% 55%, 0 55%); }
          80% { clip-path: polygon(0 5%, 100% 5%, 100% 40%, 0 40%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 25%, 0 25%); }
        }
        
        .css-typewriter h1 {
          font-family: monospace;
          overflow: hidden;
          border-right: 0.15em solid #00ff00;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #00ff00; }
        }
        
        .css-text-shadow {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #ff00de,
            0 0 30px #ff00de,
            0 0 40px #ff00de;
          animation: pulsate 2s infinite alternate;
        }
        
        @keyframes pulsate {
          0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00de, 0 0 20px #ff00de; }
          100% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de; }
        }
      `}</style>
    </div>
  );
}