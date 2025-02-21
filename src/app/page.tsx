import Navbar from "@/components/Navbar";
import ForgotPassword from "./ForgotPassword/page";
import Login from "./Login/page";

import Image from "next/image";
// import ForgotPassword from "@/components/ForgotPassword/page";
// import Login from "@/components/Login/page";
// import SignUp from "@/components/SignUp/page";
// import SignUp from "./SignUp/page";
import HeroSection from "@/components/HeroSection";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section7 from "@/components/Section7";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section7/>
      <ForgotPassword/>
      <Login/>
    </div>
  );
}
