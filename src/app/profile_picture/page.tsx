"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "../api/auth/supabaseClient";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

export default function ProfilePicturePage() {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProfilePicture = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
          setError("User not authenticated");
          setLoading(false);
          return;
        }
        const userId = user.id;
        const { data, error } = await supabase
          .from("profile")
          .select("profile_picture")
          .eq("userId", userId)
          .single();
        if (error) setError(error.message);
        else setProfilePicture(data.profile_picture);
      } catch (err) {
        setError("Failed to fetch profile picture.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfilePicture();
  }, []);

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an image");
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }
      const userId = user.id;
      const fileName = `${userId}-${Date.now()}`;
      const { data, error: uploadError } = await supabase.storage
        .from("profile_picture")
        .upload(fileName, file, { upsert: true });
      if (uploadError) {
        setError(uploadError.message);
      } else {
        const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/profile_pictures/${data.path}`;
        await supabase.from("profile").update({ profile_picture: imageUrl }).eq("userId", userId);
        setProfilePicture(imageUrl);
        setSuccess("Profile picture updated successfully!");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="from-primary-50 to-primary-100 mt-10 flex min-h-screen items-center justify-center bg-[#1b1c1d] bg-gradient-to-br bg-cover pt-20 text-[#A8955A]" style={{ backgroundImage: "url('/carbon-credit.png')" }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
          <div className="mb-10 space-y-6 rounded-2xl bg-[#211E1E] p-8 shadow-xl">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter">Upload Profile Picture</h1>
              <p className="text-muted-foreground">Choose an image and update your profile picture</p>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
            <div className="flex flex-col items-center space-y-4">
              {profilePicture && <img src={profilePicture} alt="Profile" className="h-32 w-32 rounded-full object-cover" />}
              <Label htmlFor="profile_picture" className="text-lg">Choose Image</Label>
              <input type="file" id="profile_picture" accept="image/*" className="text-white" onChange={(e) => setFile(e.target.files?.[0] || null)} />
              <Button onClick={handleUpload} className="w-full bg-[#A8955A] text-black" disabled={loading}>{loading ? "Uploading..." : "Upload"}</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
