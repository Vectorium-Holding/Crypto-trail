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
    </div>
  );
}