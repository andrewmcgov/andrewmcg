import {useEffect, useRef} from 'react';
import {SVG} from '@svgdotjs/svg.js';
import {gsap} from 'gsap';
import {random} from '@georgedoescode/generative-utils';

function generate() {
  const svg = SVG('.canvas') as any;

  const colors = ['#06b6d4', '#be185d', '#7c3aed'];

  // Referencing https://georgefrancis.dev/writing/a-generative-svg-starter-kit/
  // Great article! check it out to learn about generative art with SVG

  for (let step = 0; step < 15; step++) {
    const color = colors[random(0, 2, true)];
    const circle = svg.circle(25).cx(100).cy(100).fill(color).node;

    gsap.to(circle, {
      x: 'random(-75, 75, true)',
      y: 'random(-75, 75, true)',
      scale: 'random(0.25, 1, true)',
      ease: 'elastic.out(1, 0.5)',
      duration: 2,
      delay: 'random(0, 0.2, true)',
      attr: {
        fill: () => colors[random(0, 2, true)],
      },
      repeat: -1,
      repeatDelay: 3,
      repeatRefresh: true,
    });
  }
}

export function GenerativeCanvas() {
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) return;
    rendered.current = true;
    generate();
  }, []);

  return <svg className="canvas" viewBox="0 0 200 200"></svg>;
}
