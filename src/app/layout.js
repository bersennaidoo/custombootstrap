import { Inter } from "next/font/google";
import "@/styles/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core"; 
//import "./custom.css";
import "./globals.css";

config.autoAddCss = false;

import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <header>
            <TopNav />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
          <BootstrapClient />
        </div>
      </body>
    </html>
  );
}
