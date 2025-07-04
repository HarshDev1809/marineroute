import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="grow  mt-15">{children}</main>
      <Footer />
    </>
  );
}
