import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import Sidebar  from "@/components/partials/Sidebar";

export default function DashboardComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
