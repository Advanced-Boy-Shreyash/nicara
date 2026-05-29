"use client";

import ProjectDetailLayout from "../ProjectDetailLayout";

const images = {
  cover: {
    src: "/p5/p_img1.png",
    alt: "Veu Residence",
    width: 1920,
    height: 1080,
  },
  gallery: [
    { src: "/p5/p_img2.png", alt: "Veu Residence living space", width: 1920, height: 1080 },
    { src: "/p5/p_img3.png", alt: "Veu Residence detail", width: 920, height: 580 },
    { src: "/p5/p_img4.png", alt: "Veu Residence detail", width: 920, height: 580 },
    { src: "/p5/p_img5.png", alt: "Veu Residence room detail", width: 920, height: 580 },
    { src: "/p5/p_img6.png", alt: "Veu Residence room detail", width: 920, height: 580 },
    { src: "/p5/p_img2.png", alt: "Veu Residence", width: 1920, height: 1080 },
    { src: "/p5/p_img8.png", alt: "Veu Residence detail", width: 920, height: 580 },
    { src: "/p5/p_img7.png", alt: "Veu Residence detail", width: 920, height: 580 },
  ],
};

const copy = {
  intro: [
    "Every kid dreams of having their own little world to sleep, play and hide in ,so we built exactly that, a snug bunk setup with a glowing nook, a fun upper hideout, and soft warm colours that make this room every child's dream come true.",
  ],
  afterFirstGallery: [
    "The client just wanted a home that looks good without being too over the top inviting enough to feel homely, stylish enough to impress guests, and each room having its own little something special, whether it's the dining area, the living room, or the bedroom."
  ],
  afterPair: [
    "From the kitchen to the bedroom, we made sure nothing was left as an afterthought clean cabinets with wood touches in the kitchen, and a full wall wardrobe with neat panelling in the bedroom, because every room deserves to look just as good as the next."
  ],
  closing: [],
};

export default function ApartmentAtVeuResidence() {
  return <ProjectDetailLayout title="Veu Residence" images={images} copy={copy} />;
}
