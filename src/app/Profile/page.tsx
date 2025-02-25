"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext"; // Import the AuthContext

import { supabase } from "../api/auth/supabaseClient";
const ProfilePage = () => {

    const { isLoggedIn } = useAuth();
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [profile, setProfile] = useState({
        "first_name":"Hasnat",
        "last_name":"Anwar",
        "cnic":"1234567890",
        "phone":"1234567890",
        "dob":"2024-11-01"
    });
  const router = useRouter();
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedToken = localStorage.getItem("token");

    if (!isLoggedIn || !storedUserId || !storedToken) {
      router.push("/Login");
    } else {
      setToken(storedToken);
      setUserId(storedUserId);
      fetchUserProfile(storedUserId);
    }
  }, [isLoggedIn, router]);

  // Fetch profile data from Supabase
  const fetchUserProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profile") // Change 'profiles' to your actual table name
      .select("*")
      .eq("userId", userId) // Fetch the row where userId (FK) matches
      .single();

    if (error) {
      console.error("Error fetching profile:", error.message);
      router.push("/editprofile")
    } else {
      setProfile(data);
      console.log("data"+data.first_name)
    }
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
            <div className="space-y-2 text-center flex items-center self-center justify-center -mt-20">
              <div className="h-36 w-36 bg-yellow-600 rounded-full flex justify-center items-center">
                <img
                  className="h-32 w-32 rounded-full"
                  src="https://codehim.com/wp-content/uploads/2023/11/User-Profile-Page-Template-in-HTML-CSS.png"
                  alt="User Profile"
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tighter">{profile.first_name + "  "+profile.last_name}</h1>

            <div>
              <div className="my-2 space-x-3">
                <p className="text-lg font-bold">CNIC</p>
                <p>{profile.cnic}</p>
              </div>
              <div className="my-2 space-x-3">
                <p className="text-lg font-bold">Phone Number</p>
                <p>{profile.phone}</p>
              </div>
              <div className="my-2 space-x-3">
                <p className="text-lg font-bold">Date of Birth</p>
                <p>{profile.dob}</p>
              </div>

              

              <div className="w-full flex justify-end">
                <Button className="bg-[#A8955A] text-black hover:border border-yellow hover:text-yellow-600">
                  <Link href="/editprofile">Edit Profile</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProfilePage;
