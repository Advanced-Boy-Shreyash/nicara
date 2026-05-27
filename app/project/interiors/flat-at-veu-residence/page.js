"use client";

import ProjectDetailLayout from "../ProjectDetailLayout";

const images = {
  cover: {
    src: "/p5/p_img1.png",
    alt: "Flat at Veu Residence",
    width: 1920,
    height: 1080,
  },
  gallery: [
    { src: "/p5/p_img2.png", alt: "Flat at Veu Residence living space", width: 1920, height: 1080 },
    { src: "/p5/p_img3.png", alt: "Flat at Veu Residence detail", width: 920, height: 580 },
    { src: "/p5/p_img4.png", alt: "Flat at Veu Residence detail", width: 920, height: 580 },
    { src: "/p5/p_img5.png", alt: "Flat at Veu Residence room detail", width: 920, height: 580 },
    { src: "/p5/p_img6.png", alt: "Flat at Veu Residence room detail", width: 920, height: 580 },
    { src: "/p5/p_img2.png", alt: "Flat at Veu Residence", width: 1920, height: 1080 },
    { src: "/p5/p_img8.png", alt: "Flat at Veu Residence detail", width: 920, height: 580 },
    { src: "/p5/p_img7.png", alt: "Flat at Veu Residence detail", width: 920, height: 580 },
  ],
};

const copy = {
  intro: [
    "A modern Indian home that blends tradition with contemporary design. From the handcrafted wooden ceiling and ikat-detailed columns to the forest-green bathroom vanity and travertine pooja niche \u2014 every space is designed with intention, warmth, and a deep respect for craft",
  ],
  afterFirstGallery: [],
  afterPair: [],
  closing: [],
};

export default function FlatAtVeuResidence() {
  return <ProjectDetailLayout title="Flat at Veu Residence" images={images} copy={copy} />;
}
