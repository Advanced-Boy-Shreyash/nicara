"use client";

import ProjectDetailLayout from "../ProjectDetailLayout";

const images = {
  cover: {
    src: "/p4/p_img1.png",
    alt: "Apartment at Veu Residence",
    width: 1920,
    height: 1080,
  },
  gallery: [
    { src: "/p4/p_img2.png", alt: "Apartment at Veu Residence bathroom", width: 1400, height: 1000 },
    { src: "/p4/p_img3.png", alt: "Apartment at Veu Residence pooja room", width: 1100, height: 1400 },
    { src: "/p4/p_img4.png", alt: "Apartment at Veu Residence kitchen", width: 1600, height: 1000 },
    { src: "/p4/p_img5.png", alt: "Apartment at Veu Residence kids room", width: 1100, height: 1400 },
    { src: "/p4/p_img6.png", alt: "Apartment at Veu Residence kids room", width: 1400, height: 1000 },
    { src: "/p4/p_img3.png", alt: "Apartment at Veu Residence detail", width: 1600, height: 1000 },
    { src: "/p4/p_img7.png", alt: "Apartment at Veu Residence kids room detail", width: 1100, height: 1400 },
    { src: "/p4/p_img1.png", alt: "Apartment at Veu Residence kids room detail", width: 1400, height: 1000 },
  ],
};

const copy = {
  intro: [
    "The Vue Residences is what happens when a home is designed for the whole family not just the living room.",
  ],
  afterFirstGallery: [
    "The bathroom feels like a mini spa with its green floating vanity, glowing mirror and gold taps. The pooja room sits proudly at the heart of the home, beautifully framed and warmly lit, because faith deserves a beautiful space too. The kitchen has a cosy wooden breakfast nook just a counter and a stool  perfect for that first quiet cup of chai.",
  ],
  afterPair: [
    "And then there are the kids' rooms, honestly the best part of the whole home. One has a magical bunk bed with a loft, soft pink touches and warm wood that makes bedtime feel like an adventure. The other has a giant bunny on the wall, a cloud-shaped bed and golden stars the kind of room kids never want to leave. From the parents' spaces to the little ones' corners, every single room in The Vue Residences was thought through, cared for and designed with love.",
  ],
  closing: [
    "Because a happy home takes care of everyone in it.",
  ],
};

export default function ApartmentAtVeuResidenceTwo() {
  return <ProjectDetailLayout title="Apartment at Veu Residence" images={images} copy={copy} />;
}
