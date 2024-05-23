import Header from "@/components/partials/Header";
import { ThemeSwitch } from "@/components/partials/ThemeSwitcher";
import Footer from "@/components/partials/Footer";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
