const navLinks = [
  { title: "Beranda", path: "/" },
  { title: "Artikel", path: "/blogs" },
  { title: "Tentang", path: "/about" },
  { title: "Galeri", path: "/gallery" },
  { title: "Kontak", path: "/contact" },
  { title: "Data", path: "/dashboard"},
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