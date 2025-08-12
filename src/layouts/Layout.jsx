import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow w-full" id="scroll-container">
        <div className="container m-0 max-w-[100%]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
