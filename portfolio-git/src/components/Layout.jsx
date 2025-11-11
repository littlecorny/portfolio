import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Tarjetas from "./TarjetasContenedor";

            export default function Layout() {
              return (
                <>
                  <Header />
                  <main>
                    <Outlet />
                    <Tarjetas />
                  </main>
                  <Footer />
                </>

              );
            }

