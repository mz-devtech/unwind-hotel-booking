import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Booking from "./components/Booking";
import OurRooms from "./components/OurRooms";

export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <Services />
      <Booking/>
      <OurRooms/>


    </>
  );
}
