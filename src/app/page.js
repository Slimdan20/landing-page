import Navbar from "@/Components/Navbar";
import Homepage from "@/Components/Homepage";
import Interact from "@/Components/Interact";
import Discover from "@/Components/Discover";
import Download from "@/Components/Download";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <main>
      <div className=' bg-[url("/images/header.png")] h-screen w-full bg-no-repeat bg-center bg-cover'>
      <Navbar/>
      <Homepage/>
      </div>
      <Interact />
      <Discover />
      <Download />
      <Contact/>
      <Footer/>

    </main>
  );
}
