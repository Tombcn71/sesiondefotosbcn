import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CookieConsent } from "@/components/CookieConsent";

const CrispWithNoSSR = dynamic(() => import("@/components/crisp"));

export const metadata = {
  title: "Retratos profesionales con IA | Sesiondefotos.ai",
  description:
    "Olvídate de los estudios y las sesiones de fotos. Fácilmente desde casa o trabajo. Ahorra tiempo y dinero.",
};

export default function RootLayout({ children }: any) {
  return (
    <html className="scroll-smooth" lang="en">
      {" "}
      <GoogleAnalytics gaId="G-RDJTQ9X4WR" />
      <body className="min-h-screen flex flex-col">
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }>
            <Navbar />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics /> <CrispWithNoSSR />
        <CookieConsent />
      </body>
    </html>
  );
}
