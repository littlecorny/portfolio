import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/next"
import Footer from "./Footer";
import Header from "./Header";
import Tarjetas from "./TarjetasContenedor";
import "./Layout.css"

            export default function Layout() {
              return (
                <>
                  <Header />
                  <main>
                    <Outlet />
                    <Tarjetas />
                    <Analytics />
                  </main>
                  <Footer />
                </>

              );
            }

