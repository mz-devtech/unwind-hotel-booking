import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Booking from "./components/Booking";
import OurRooms from "./components/OurRooms";
import Tour from "./components/Tour";
import RestoandBar from "./components/RestoandBar";
import Testimonial from "./components/Testimonial";
import Counter from "./components/Counter";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <Services />
      <Booking />
      <OurRooms />
      <Tour />
      <RestoandBar />
      <Testimonial />
      <Counter />
      <Blogs/>

    </>
  );
}
