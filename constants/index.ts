const navLinks = [
  { title: "Beranda", path: "/" },
  { title: "Tentang", path: "/about" },
  { title: "Artikel", path: "/blogs" },
  { title: "Galeri", path: "/gallery" },
  { title: "Kontak", path: "/contact" },
];

const dashboardLinks = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Data", path: "/data" },
  { title: "Pengguna", path: "/users" },
  { title: "Pengaturan", path: "/settings" },
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

export { navLinks, heroSection, dashboardLinks };