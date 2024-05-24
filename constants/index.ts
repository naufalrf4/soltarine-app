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
    src: "/videos/vid_prog.mp4",
    alt: "Video 1",
    type: "video",
    autoplay: true,
  },
  {
    src: "/videos/vid_prog.mp4",
    alt: "Video",
    type: "video",
  },
  {
    src: "https://source.unsplash.com/random/300x302",
    alt: "Gambar 3",
    type: "image",
  },
  {
    src: "https://source.unsplash.com/random/300x303",
    alt: "Gambar 4",
    type: "image",
  },
];

const heroSection = {
  title: "Soltarine.........",
  description: "Website ini..............",
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
