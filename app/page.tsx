import Image from "next/image";
import logo from '@/app/icon.png'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
  <Header></Header>
  <Hero></Hero>
  <Hero reversed={true}></Hero>
  
  <Footer></Footer>
    </>
  );
}
