// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import { motion } from "framer-motion";
// import { supabase } from "../api/auth/supabaseClient";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Eye, EyeOff, Github, Mail } from "lucide-react";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// export default function SignUp() {
//   const [first_name, setfirst_name] = useState<string>("");
//   const [last_name, setlast_name] = useState<string>("");
//   const [dob, setdob] = useState<string>("");
//   const [phone, setphone] = useState<string>("");
//   const [cnic, setcnic] = useState<string>("");


//   const router = useRouter();



//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   const onsubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);
  
//     try {
//       const {
//         data: { user },
//         error: authError,
//       } = await supabase.auth.getUser();
  
//       if (authError || !user) {
//         setError("User not authenticated");
//         setLoading(false);
//         return;
//       }
  
//       const userId = user.id; // Authenticated user's ID
  
//       // Fetch existing profile
//       const { data: profile, error: fetchError } = await supabase
//         .from("profiles") // Your profile table name
//         .select("*")
//         .eq("userId", userId)
//         .single();
  
//       if (fetchError && fetchError.code !== "PGRST116") {
//         // Error other than 'no record found'
//         setError(fetchError.message);
//         setLoading(false);
//         return;
//       }
  
//       if (profile) {
//         // Update existing profile
//         const { error: updateError } = await supabase
//           .from("profiles")
//           .update({
//             first_name,
//             last_name,
//             dob,
//             phone,
//             cnic,
//             updated_at: new Date(),
//           })
//           .eq("userId", userId);
  
//         if (updateError) {
//           setError(updateError.message);
//         } else {
//           setSuccess("Profile updated successfully!");
//         }
//       } else {
//         // Insert new profile
//         const { error: insertError } = await supabase.from("profiles").insert([
//           {
//             userId,
//             first_name,
//             last_name,
//             dob,
//             phone,
//             cnic,
//             created_at: new Date(),
//           },
//         ]);
  
//         if (insertError) {
//           setError(insertError.message);
//         } else {
//           setSuccess("Profile created successfully!");
//         }
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <>
//       <Navbar />
//       <div
//         className="from-primary-50 to-primary-100 mt-10 flex min-h-screen items-center justify-center bg-[#1b1c1d] bg-gradient-to-br bg-cover pt-20 text-[#A8955A]"
//         style={{ backgroundImage: "url('/carbon-credit.png')" }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full max-w-md"
//         >
//           <div className="mb-10 space-y-6 rounded-2xl bg-[#211E1E] p-8 shadow-xl">
//             <div className="space-y-2 text-center">
//               <h1 className="text-3xl font-bold tracking-tighter">Profile</h1>
//               <p className="text-muted-foreground">
//                 Enter your credentials to create your account
//               </p>
//             </div>

//             <form onSubmit={onsubmit} className="space-y-4">
//               <div className="flex flex-row space-x-2 justify-between">
//               <div className="space-y-2">
//                 <Label htmlFor="first_name">First Name</Label>
//                 <Input
//                   id="first_name"
//                   type="text"
//                   placeholder="Enter your First Name"
//                   value={first_name}
//                   onChange={(e) => setfirst_name(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="last_name">Last Name</Label>
//                 <Input
//                   id="last_name"
//                   type="text"
//                   placeholder="Enter your Last Name"
//                   value={last_name}
//                   onChange={(e) => setlast_name(e.target.value)}
//                   required
//                 />
//               </div>
//               </div>
//               <div className="flex flex-row space-x-2 justify-between">
//               <div className="space-y-2">
//                 <Label htmlFor="dob">Date Of Birth</Label>
//                 <Input
//                   id="dob"
//                   type="date"
//                   placeholder="Enter your dob"
//                   value={dob}
//                   onChange={(e) => setdob(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone</Label>
//                   <Input
//                     id="phone"
//                     type="text"
//                     value={phone}
//                     onChange={(e) => {
//                       setphone(e.target.value);
//                     }}
//                     required
//                   />
//               </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="cnic">
//                   CNIC
//                 </Label>
//                 <div className="relative">
//                   <Input
//                     id="cnic"
//                     type="text"
//                     value={cnic}
//                     onChange={(e) => {
//                       setcnic(e.target.value);
//                     }}
//                     required
//                   />
//                 </div>
//               </div>


//               <div className="relative">
//                 <div className="absolute inset-0 mb-2 mt-1 flex items-center">
//                   <span className="w-full border-t" />
//                 </div>
//               </div>

//               <Button type="submit" className="w-full bg-[#A8955A] text-black">
//                 Create Account
//               </Button>
//             </form>
//             <div className="text-center text-sm">
//               Go To ?
//               <Link
//                 href="/dashboard"
//                 className="text-primary-500 hover:text-primary-600 pl-2 font-extrabold font-medium"
//               >
//                 Dashboard
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "../api/auth/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

export default function ProfilePage() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [profileExists, setProfileExists] = useState(false);

  const router = useRouter();

  // Fetch profile on page load
  useEffect(() => {
    const fetchProfile = async () => {
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

        // Fetch profile
        const { data: profile, error: fetchError } = await supabase
          .from("profile") // Your profile table name
          .select("*")
          .eq("userId", userId)
          .single();

        if (fetchError && fetchError.code !== "PGRST116") {
          setError(fetchError.message);
        } else if (profile) {
          // If profile exists, fill form fields
          setfirst_name(profile.first_name);
          setlast_name(profile.last_name);
          setDob(profile.dob);
          setPhone(profile.phone);
          setCnic(profile.cnic);
          setProfileExists(true);
        }
      } catch (err) {
        setError("Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle form submission
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      const userId = user.id;

      if (profileExists) {
        // Update existing profile
        const { error: updateError } = await supabase
          .from("profile")
          .update({
            first_name,
            last_name,
            dob,
            phone,
            cnic,

          })
          .eq("userId", userId);

        if (updateError) {
          setError(updateError.message);
        } else {
          setSuccess("Profile updated successfully!");
        }
      } else {
        // Insert new profile
        const { error: insertError } = await supabase.from("profile").insert([
          {
            userId,
            first_name,
            last_name,
            dob,
            phone,
            cnic,
          },
        ]);

        if (insertError) {
          setError(insertError.message);
        } else {
          setSuccess("Profile created successfully!");
          setProfileExists(true); // Mark as existing profile
        }
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
                {profileExists ? "Update Profile" : "Create Profile"}
              </h1>
              <p className="text-muted-foreground">
                {profileExists ? "Update your details below" : "Enter your details to create a profile"}
              </p>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="flex flex-row space-x-2 justify-between">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Enter your First Name"
                    value={first_name}
                    onChange={(e) => setfirst_name(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="text"
                    placeholder="Enter your Last Name"
                    value={last_name}
                    onChange={(e) => setlast_name(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-row space-x-2 justify-between">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date Of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cnic">CNIC</Label>
                <Input
                  id="cnic"
                  type="text"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#A8955A] text-black" disabled={loading}>
                {loading ? "Processing..." : profileExists ? "Update Profile" : "Create Profile"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}
