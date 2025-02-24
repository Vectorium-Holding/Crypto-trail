"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Resetting password for", { email });
  };

  return (
    <>
      <Navbar />
      <div
        className="from-primary-50 to-primary-100 mt-10 flex min-h-screen items-center justify-center bg-[#1b1c1d] bg-gradient-to-br bg-cover p-20 text-[#A8955A]"
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
                Forgot Your Password?
              </h1>
              <p className="text-muted-foreground">
                Enter your email address to reset your password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>

              <Button
                type="submit"
                className="mt-4 w-full bg-[#A8955A] text-black"
              >
                Reset Password
              </Button>
            </form>

            <div className="flex justify-center">
              <Button variant="outline" className="bg-[#A8955A] text-black">
                <ArrowBigLeft className="mr-1 h-10 w-10" />
                <Link href="/Login">Back To Login</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
