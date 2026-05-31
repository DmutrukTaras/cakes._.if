import { Outlet } from "react-router-dom";
import { ContactModalProvider } from "./ContactModal";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <ContactModalProvider>
      <div className="min-h-screen overflow-hidden">
        <Header />
        <main className="pt-24 sm:pt-28">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
