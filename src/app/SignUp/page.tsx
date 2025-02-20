"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { supabase } from "../api/auth/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import Link from "next/link";
export default function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const router = useRouter();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle signup logic
  //   console.log("Signing up with", { email, password, confirmPassword });
  // };

  // async function handleSubmit(email: string, password: string) {
  //   console.log(email,password)
  //   const { user, error } = await supabase.auth.signUp({ email, password });
  //   if (error) console.error(error);
  //   return user;
  // }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("one")
    // if (password !== confirmPassword) {
    //   setError("Passwords do not match!");
    //   return;
    // }

    setLoading(true);
    setError(null);
    setSuccess(null);

    supabase.auth
      .signUp({ email, password })
      .then(({ data, error }) => {
        if (error) {
          console.log("Error")
          setError(error.message);
        } else {
          setSuccess("Signup successful! Check your email for verification.");
          console.log("Succefful")
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      })
      .catch((err) => {
        console.log("Catchh")
        setError("An unexpected error occurred.");
      })
      .finally(() => {
        console.log("Finall")
        setLoading(false);
      });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br bg-cover bg-[#1b1c1d] text-[#A8955A] from-primary-50 to-primary-100 flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/carbon-credit.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#211E1E] rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Sign Up</h1>
            <p className="text-muted-foreground">
              Enter your credentials to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="text-center text-sm  flex flex-row justify-center space-x-3">
              <p>Forgot Your password </p>

              <Link
                href="/ForgotPassword"
                className="text-primary-500 hover:text-primary-600 font-bold"
              >
                Recover
              </Link>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="mb-2 mt-1 absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#A8955A] text-black">
              Create Account
            </Button>
          </form>
          <div className="text-center text-sm">
            Already Registered
            <Link
              href="/Login"
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              Ligin
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
