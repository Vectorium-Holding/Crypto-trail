"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../api/auth/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const ProfilePage: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();
  const [userId, setUserId] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");

    if (!isLoggedIn || !storedUserId) {
      router.push("/Login");
    } else {
      setUserId(storedUserId);
      fetchUserProfile(storedUserId);
    }
  }, [isLoggedIn, router]);

  const fetchUserProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profile")
      .select("document,verified")
      .eq("userId", userId)
      .single();

    if (data) {
      setProfilePicture(data.document);
      setVerified(data.verified)
    } else {
      console.error("Fetch Profile Error:", error);
    }
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !userId) return;

    const filePath = `${userId}/${uuidv4()}-${file.name}`;
    const { data, error } = await supabase.storage.from("document").upload(filePath, file);

    if (data) {
      const imageUrl = `https://oekyzijvzufptqqklrab.supabase.co/storage/v1/object/public/document/${filePath}`;
      updateProfilePicture(imageUrl);
    } else {
      console.error("Upload Error:", error);
    }
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file); // Only store the file, don't upload yet
    }
  };

  const uploadImage2 = async () => {
    if (!selectedFile || !userId) return;
  
    const filePath = `${userId}/${uuidv4()}-${selectedFile.name}`;
    const { data, error } = await supabase.storage
      .from("document")
      .upload(filePath, selectedFile);
  
    if (data) {
      const imageUrl = `https://oekyzijvzufptqqklrab.supabase.co/storage/v1/object/public/document/${filePath}`;
      updateProfilePicture(imageUrl);
      alert("File Uploaded Successfuly")
    } else {
      console.error("Upload Error:", error);
    }
  };
  
  // Call `uploadImage` only when the submit button is clicked
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await uploadImage2();
  };

  const updateProfilePicture = async (imageUrl: string) => {
    const { error } = await supabase
      .from("profile")
      .update({ document: imageUrl })
      .eq("userId", userId);

    if (!error) {
      setProfilePicture(imageUrl);
    } else {
      console.error("Update Profile Error:", error);
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
                      {
                        profilePicture?
                        <div className="flex self-center items-center justify-center">
                          <img
                src={profilePicture}
                alt="Profile"
                className="w-40 h-40 object-cover rounded-full"
              />
                        </div>
                        :<></>
                      }
                      <form  onSubmit={submitHandler} className="space-y-4">
              <div className="flex flex-row space-x-2 justify-between">
                <div className="space-y-2 w-full">
                  <Label htmlFor="first_name">Upload Picture</Label>
                  <Input
                    id="first_name"
                    type="file"
                    placeholder="Upload the profile picture"
                    
                    onChange={handleFileChange}
                    required
                  />
                </div>
                </div>
                {
  verified?
  <div className="text-center text-sm text-green-500">
              Your Identity Document is verified?
              <Link
                href="/Profile"
                className="text-primary-500 hover:text-primary-600 pl-2 font-medium"
              >
                Back to Profile
              </Link>
            </div>:
            <div className="text-center text-sm text-red-500">
            Your Identity Document is not verified?
            <Link
              href="/Profile"
              className="text-primary-500 hover:text-primary-600 pl-2 font-medium"
            >
                Back to Profile
            </Link>
          </div>
}
                <Button type="submit" className="w-full bg-[#A8955A] text-black" >
                Upload
              </Button>
                </form>
                </div>
        </motion.div>
        </div>
        
    <div className="mt-5">
      {userId ? (
        <>
          <input type="file" onChange={uploadImage} accept="image/*" />
          <div className="mt-5">Profile Picture</div>
          <div>
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="w-40 h-40 object-cover rounded-full"
              />
            ) : (
              <p>No profile picture uploaded.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default ProfilePage;