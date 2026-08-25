// Work projects data
export const workProjects = [
  {
    slug: "cibotica",
    title: "Cibotica",
    type: "Brand, Product & Web",
    website: "https://cibotica.com",
    image:
      "https://framerusercontent.com/images/lVzCHBkR5r86RREQZbkTaDEirow.jpg",
    images: [
      "https://framerusercontent.com/images/dLjpwlV4gvdW5hsmEIvM8FRCOk.jpg",
      "https://framerusercontent.com/images/AB8e68mTpFobDnav05XSIsHSav8.jpg",
      "https://framerusercontent.com/images/LfHPuzC59FsLuzQCgQ8jiympzE.jpg",
      "https://framerusercontent.com/images/UnYiM4e9WTqorgKcQC4b57KWPc.jpg",
      "https://framerusercontent.com/images/HO2wDnhp1MCWxKyR7UZR1zZ2A.jpg",
      "https://framerusercontent.com/images/Pw1pxR0RSRzeRoW5NVq3kuJaY.jpg",
      "https://framerusercontent.com/images/oIYE9jLww1OhGntEBe8hXnvtaE.jpg",
      "https://framerusercontent.com/images/5sFXU0nZBBmfX5FdPImlonp1TiY.jpg",
      "https://framerusercontent.com/images/ULoTtSpX35Pd4t5buK4T0Szzw.jpg",
      "https://framerusercontent.com/images/mgMaBEGtyAQ5KyoW3ZqIpMlZY.jpg",
      "https://framerusercontent.com/images/pHhg580bsvb7ltec2gdqxcLmDkg.jpg",
      "https://framerusercontent.com/images/exfyPzWN2PCQ93WG7bLXaauLpU.jpg",
    ],
    hoverColor: "#F2F2F2",
    hoverTitle: "Cibotica",
    hoverDescription:
      "Building a brand and product for a new way to experience cannabis.",
    disciplines: [
      "Product (UX, IA, UI)",
      "Brand (Evolution, Art Direction)",
      "Website (Design, Development, Copywriting)",
      "Pitch deck (Strategy, Design, Copywriting)",
    ],
    description: [
      "Cibotica, a Canadian food robotics startup, makes Remy, a high-tech kitchen robot that can produce 300 bowls per hour using AI to ensure perfect portions, which helps cut food waste by half.",
      "Eager to dive in and help pioneer the food automation revoluton, we partnered with Cibotica to create a brand identity that underscores efficiency and quality. We designed a sleek, user-friendly website to showcase Remy's capabilities and developed strategic pitch decks to attract investors and partners.",
      "Our team also advised on business development and PR strategies, providing Cibotica with a comprehensive toolkit for growth. This collaboration laid the groundwork for a strong partnership that continues to drive Cibotica's success.",
    ],
  },
];

// Helper function to get next project
export const getNextProject = (currentSlug) => {
  const currentIndex = workProjects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % workProjects.length;
  return workProjects[nextIndex];
};
