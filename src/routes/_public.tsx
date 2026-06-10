import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/_public")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </div>
  );
}
