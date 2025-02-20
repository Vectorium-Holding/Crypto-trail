import Section4 from "@/components/Section4";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Section4/>
// import ForgotPassword from "@/components/ForgotPassword/page";
// import Login from "@/components/Login/page";
// import SignUp from "@/components/SignUp/page";
import SignUp from "./SignUp/page";
import Login from "./Login/page";
import ForgotPassword from "./ForgotPassword/page";
export default function Home() {
  return (
    <div>
      {/* <ForgotPassword/> */}
      <Login/>
      <ForgotPassword/>

import Section5 from "@/components/Section5";
import Section7 from "@/components/Section7";

import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <HeroSection/>
    </div>
  );
}