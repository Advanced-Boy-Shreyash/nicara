"use client";

import ProjectDetailLayout from "../ProjectDetailLayout";

const images = {
  cover: {
    src: "/p3/p_img1.png",
    alt: "Aadhya Advaita",
    width: 1920,
    height: 1080,
  },
  gallery: [
    { src: "/p3/p_img2.png", alt: "Aadhya Advaita dining room", width: 1920, height: 1080 },
    { src: "/p3/p_img3.png", alt: "Aadhya Advaita detail", width: 920, height: 580 },
    { src: "/p3/p_img4.png", alt: "Aadhya Advaita detail", width: 920, height: 580 },
    { src: "/p3/p_img5.png", alt: "Aadhya Advaita kitchen", width: 920, height: 580 },
    { src: "/p3/p_img6.png", alt: "Aadhya Advaita bedroom", width: 920, height: 580 },
    { src: "/p3/p_img7.png", alt: "Aadhya Advaita", width: 1920, height: 1080 },
    { src: "/p3/p_img8.png", alt: "Aadhya Advaita dining detail", width: 920, height: 580 },
    { src: "/p3/p_img9.png", alt: "Aadhya Advaita kitchen detail", width: 920, height: 580 },
  ],
};

const copy = {
  intro: [
    "The client wanted their dining area to feel warm and inviting, so we used a solid wood table, a cool metal divider to separate the spaces, and some nice wall detailing that makes the whole room feel cozy and put together.",
  ],
  afterFirstGallery: [
    "Texture and contrast add drama throughout the space: raw concrete wall with copper inlay, metal grid partition, hidden lighting, handleless grey cabinets, warm timber shelves, layered materials and sculptural detailing.",
  ],
  afterPair: [
    "Simple, clean, and homely this space uses soft colours, comfy seating, and natural wood to bring the whole home together in the most effortless way.",
  ],
};

export default function VillaAtAadhyaAdvaita() {
  return <ProjectDetailLayout title="Aadhya Advaita" images={images} copy={copy} />;
}
