import Sidebar from "@/components/partials/Sidebar";
import DashboardNavbar from "@/components/partials/DashboardNav";
import ProtectedRoute from "@/components/ProtectedRoutes";

export default function DashboardComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <div className="flex flex-col h-screen">
        <DashboardNavbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-background overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
