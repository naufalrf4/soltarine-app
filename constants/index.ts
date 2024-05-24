const navLinks = [
  { title: "Beranda", path: "/" },
  { title: "Tentang", path: "/about" },
  { title: "Artikel", path: "/blogs" },
  { title: "Galeri", path: "/gallery" },
  { title: "Kontak", path: "/contact" },
];

const dashboardLinks = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Data Baterai", path: "/batterydata" },
  { title: "Data Cahaya", path: "/lightdata" },
];

const galleryImages = [
  {
    src: "https://source.unsplash.com/random/300x300",
    alt: "Gambar 1",
  },
  {
    src: "https://source.unsplash.com/random/300x301",
    alt: "Gambar 2",
  },
  {
    src: "https://source.unsplash.com/random/300x302",
    alt: "Gambar 3",
  },
  {
    src: "https://source.unsplash.com/random/300x303",
    alt: "Gambar 4",
  },
];

const heroSection = {
  title: "Soltarine.........",
  description:
    "Website ini..............",
  button: {
    label: "Lihat Data",
    path: "/dashboard",
    label1: "Tentang Kami",
    path1: "/about",
  },
  image: {
    src: "/images/hero-image.png",
    alt: "hero",
  },
  };

export { navLinks, heroSection, dashboardLinks, galleryImages };