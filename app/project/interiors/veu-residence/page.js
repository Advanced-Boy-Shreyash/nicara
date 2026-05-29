"use client";

import ProjectDetailLayout from "../ProjectDetailLayout";

const images = {
  cover: {
    src: "/p4/p_img1.png",
    alt: "Veu Residence",
    width: 1920,
    height: 1080,
  },
  gallery: [
    { src: "/p4/p_img2.png", alt: "Veu Residence bathroom", width: 1400, height: 1000 },
    { src: "/p4/p_img3.png", alt: "Veu Residence pooja room", width: 1100, height: 1400 },
    { src: "/p4/p_img4.png", alt: "Veu Residence kitchen", width: 1600, height: 1000 },
    { src: "/p4/p_img5.png", alt: "Veu Residence kids room", width: 1100, height: 1400 },
    { src: "/p4/p_img6.png", alt: "Veu Residence kids room", width: 1400, height: 1000 },
    { src: "/p4/p_img3.png", alt: "Veu Residence detail", width: 1600, height: 1000 },
    { src: "/p4/p_img7.png", alt: "Veu Residence kids room detail", width: 1100, height: 1400 },
    { src: "/p4/p_img1.png", alt: "Veu Residence kids room detail", width: 1400, height: 1000 },
  ],
};

const copy = {
  intro: [
    "The client wanted to show off their nice crockery instead of hiding it in closed cabinets so we built two glowing glass shelves on either side with a big round mirror in the middle that makes the whole setup look really elegant.",
  ],
  afterFirstGallery: [
    "From the first sketch to the final nail, we pulled this whole look together in just few days clean wall panelling, bold artwork, plush seating, and a cosy bedroom setup that feels like it took weeks to plan but came to life in no time.",
  ],
  afterPair: [
    "Both bedrooms were designed to feel calm and restful , soft colours, cosy beds, pretty artwork on the walls, and just enough warmth to make you never want to leave.",
  ],
};

export default function ApartmentAtVeuResidenceTwo() {
  return <ProjectDetailLayout title="Veu Residence" images={images} copy={copy} />;
}
