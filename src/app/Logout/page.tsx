"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

// import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { supabase } from "../api/auth/supabaseClient";
import Navbar from "@/components/Navbar";
// import { useAuth } from "../../context/AuthContext";


export default function Login() {
  const [isLoggedIn,setIsLoggedIn] = useState()
  const router = useRouter();


  // const { logout } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/Login");
  };
  
  return (
    <>
      <Navbar />
      <div
        className="from-primary-50 to-primary-100 mt-10 flex min-h-screen items-center justify-center bg-[#1b1c1d] bg-gradient-to-br bg-cover pt-20 text-[#A8955A]"
        style={{ backgroundImage: "url('/carbon-credit.png')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-10 space-y-6 rounded-2xl bg-[#211E1E] p-8 shadow-xl">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter">
                Logout
              </h1>
              <p className="text-muted-foreground">
                Are You Sure about to Logout.
              </p>
            </div>

            <form onSubmit={handleLogout} className="space-y-4">
              

              

              <Button type="submit" className="w-full bg-[#A8955A] text-black">
                Log Out
              </Button>
            </form>


        


           
          </div>
        </motion.div>
      </div>
    </>
  );
}
