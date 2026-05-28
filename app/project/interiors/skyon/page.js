"use client";

import ProjectDetailLayout from "../ProjectDetailLayout";

const images = {
  cover: {
    src: "/p2/p_img1.png",
    alt: "Skyon",
    width: 1920,
    height: 1080,
  },
  gallery: [
    { src: "/p2/p_img2.png", alt: "Skyon living room", width: 1920, height: 1080 },
    { src: "/p2/p_img3.png", alt: "Skyon artwork", width: 920, height: 580 },
    { src: "/p2/p_img4.png", alt: "Skyon detail", width: 920, height: 580 },
    { src: "/p2/p_img5.png", alt: "Skyon bedroom", width: 920, height: 580 },
    { src: "/p2/p_img6.png", alt: "Skyon wardrobe", width: 920, height: 580 },
    { src: "/p2/p_img9.png", alt: "Skyon", width: 1920, height: 1080 },
    { src: "/p2/p_img8.png", alt: "Skyon vanity", width: 920, height: 580 },
    { src: "/p2/p_img7.png", alt: "Skyon wardrobe detail", width: 920, height: 580 },
  ],
};

const copy = {
  intro: [
    "Skyon feels like a home you naturally want to stay in, where every corner is designed to make daily life feel calmer and more beautiful.",
  ],
  afterFirstGallery: [
    "The living room carries a soft, welcoming warmth with its neutral palette, gentle lighting, and striking artwork.",
  ],
  afterPair: [
    "The bedroom offers a quiet sense of comfort with its clean, restful simplicity, the wardrobe brings both style and practicality through its illuminated, well-organized design, and the vanity adds a spa-like touch with warm light, a round mirror, and subtle gold details.",
  ],
  closing: [
    "Every corner is designed to make daily life feel calmer and more beautiful, with subtle gold details that make the space feel refined and personal.",
  ],
};

export default function ApartmentAtSkyon() {
  return <ProjectDetailLayout title="Skyon" images={images} copy={copy} />;
}
