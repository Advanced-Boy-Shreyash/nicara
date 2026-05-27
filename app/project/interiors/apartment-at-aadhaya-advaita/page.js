"use client";

import ProjectDetailLayout from "../ProjectDetailLayout";

const images = {
  cover: {
    src: "/p3/p_img1.png",
    alt: "Villa at Aadhya Advaita",
    width: 1920,
    height: 1080,
  },
  gallery: [
    { src: "/p3/p_img2.png", alt: "Villa at Aadhya Advaita dining room", width: 1920, height: 1080 },
    { src: "/p3/p_img3.png", alt: "Villa at Aadhya Advaita detail", width: 920, height: 580 },
    { src: "/p3/p_img4.png", alt: "Villa at Aadhya Advaita detail", width: 920, height: 580 },
    { src: "/p3/p_img5.png", alt: "Villa at Aadhya Advaita kitchen", width: 920, height: 580 },
    { src: "/p3/p_img6.png", alt: "Villa at Aadhya Advaita bedroom", width: 920, height: 580 },
    { src: "/p3/p_img7.png", alt: "Villa at Aadhya Advaita", width: 1920, height: 1080 },
    { src: "/p3/p_img8.png", alt: "Villa at Aadhya Advaita dining detail", width: 920, height: 580 },
    { src: "/p3/p_img9.png", alt: "Villa at Aadhya Advaita kitchen detail", width: 920, height: 580 },
  ],
};

const copy = {
  intro: [
    "Some homes are built. Villa at Aadhya Advaita was crafted.",
  ],
  afterFirstGallery: [
    "And so we did. The dining room stops you in your tracks. Copper inlays cut across concrete walls like brushstrokes \u2014 sharp, geometric, confident. The solid wood table beneath it feels like it's been there forever. This is a room that says we enjoy good food and even better company.",
  ],
  afterPair: [
    "The kitchen doesn't just function \u2014 it performs. Glossy cabinets, black marble counters, pendant lights that hang just right. There's even a breakfast counter for those mornings when you just want a quiet coffee before the day begins.",
    "The bedrooms each tell their own story. One is sharp and dramatic \u2014 geometric lighting, dark tones, a motorbike print on the wall for the one who doesn't do ordinary. Another is soft and easy \u2014 white linen, warm wood, curtains that let the morning in gently.",
  ],
  closing: [
    "And running through every room \u2014 warm wood, punchy moments of colour, and light that knows exactly where to land.",
    "Villa at Aadhya Advaita isn't just a home. It's a reflection of the people who live in it.",
  ],
};

export default function VillaAtAadhyaAdvaita() {
  return <ProjectDetailLayout title="Villa at Aadhya Advaita" images={images} copy={copy} />;
}
