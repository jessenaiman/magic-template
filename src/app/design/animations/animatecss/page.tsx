// Animate.css Animation Demo Page
'use client';
import { PreviewTile } from '@/components/preview/preview-tile';

const animations = [
  {
    title: 'Fade In',
    className: 'animate__animated animate__fadeIn',
    description: 'Element fades in',
    code: `<div className="animate__animated animate__fadeIn">Fade In</div>`,
    label: 'Fade In',
  },
  {
    title: 'Bounce',
    className: 'animate__animated animate__bounce',
    description: 'Element bounces',
    code: `<div className="animate__animated animate__bounce">Bounce</div>`,
    label: 'Bounce',
  },
  {
    title: 'Pulse',
    className: 'animate__animated animate__pulse',
    description: 'Element pulses',
    code: `<div className="animate__animated animate__pulse">Pulse</div>`,
    label: 'Pulse',
  },
  {
    title: 'Slide In Up',
    className: 'animate__animated animate__slideInUp',
    description: 'Element slides in from below',
    code: `<div className="animate__animated animate__slideInUp">Slide In Up</div>`,
    label: 'Slide In Up',
  },
  {
    title: 'Zoom In',
    className: 'animate__animated animate__zoomIn',
    description: 'Element zooms in',
    code: `<div className="animate__animated animate__zoomIn">Zoom In</div>`,
    label: 'Zoom In',
  },
  {
    title: 'Rubber Band',
    className: 'animate__animated animate__rubberBand',
    description: 'Element stretches and snaps',
    code: `<div className="animate__animated animate__rubberBand">Rubber Band</div>`,
    label: 'Rubber Band',
  },
];

export default function Page() {
  return (
    <>
      {animations.map(anim => (
        <PreviewTile
          key={anim.title}
          title={anim.title}
          description={anim.description}
          componentName={anim.title.toLowerCase().replace(/ /g, '-')}
          code={anim.code}
        >
          {() => (
            <div
              className={`${anim.className} text-lg font-semibold p-8 bg-white rounded shadow text-center`}
              style={{ minHeight: 60, minWidth: 180 }}
            >
              {anim.label}
            </div>
          )}
        </PreviewTile>
      ))}
    </>
  );
}
