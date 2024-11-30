import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Section_1 from "@/components/Section_1";
import Section_2 from "@/components/section_2";
import Section_3 from "@/components/Section_3";
import Section_5 from "@/components/Section_5";
import Section_6 from "@/components/Section_6";
import Section_7 from "@/components/Section_7";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Footer />
    </div>
  );
}
