import Image from "next/image";
import logo from '@/app/icon.png'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FeaturesListicle from "@/components/FeaturesListicle";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ButtonLead from "@/components/ButtonLead";
import ContactUs from "@/components/ContactUs";
export default function Page() {
  return (
    <>
    {/* NAV */}
    <Header></Header>
    {/* Body */}
    <CTA></CTA>
    {/* <Hero></Hero> */}
    <FeaturesListicle/>
    <Pricing></Pricing>
    <FAQ></FAQ>
    <ContactUs></ContactUs>


    <Footer></Footer>

    
    </>
    
  );
}
