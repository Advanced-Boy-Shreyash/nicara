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
    "We kept the style classy and approachable soft cream sofas with detailed panelling, a gorgeous mountain painting on the back wall, warm brown curtains, a unique curvy gold light on the ceiling, and a pretty archway leading into the next room everything just flows together really nicely.",
  ],
  afterFirstGallery: [
    "The client wanted every corner of their home to feel special and well thought out so right from the entrance with the gold mirror and marble table, to the living room seating and TV wall, we made sure every single spot had its own charm.",
  ],
  afterPair: [
    "At the end of the day, this home has everything the client dreamed of a stylish bar unit to entertain guests, cozy seating to relax in, and big windows that bring the outside in, making the whole space feel alive and personal.",
  ],
};

export default function ApartmentAtSkyon() {
  return <ProjectDetailLayout title="Skyon" images={images} copy={copy} />;
}
