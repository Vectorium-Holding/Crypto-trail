"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "../api/auth/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Select from "react-select";

interface CountryOption {
  value: string;
  label: string;
}

export default function ProfilePage() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState<CountryOption | null>(null);
  const [cnic, setCnic] = useState("");
  const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [profileExists, setProfileExists] = useState(false);

  const router = useRouter();

  // Fetch country codes dynamically
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        const options = data
          .map((country: any) => ({
            value: country.idd?.root + (country.idd?.suffixes?.[0] || ""),
            label: `${country.name.common} (${country.idd?.root}${country.idd?.suffixes?.[0] || ""})`,
          }))
          .filter((c: CountryOption) => c.value); // Filter out empty values
        setCountryOptions(options);
      } catch (err) {
        console.error("Error fetching country codes:", err);
      }
    };

    fetchCountries();
  }, []);

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

        const { data: profile, error: fetchError } = await supabase
          .from("profile")
          .select("*")
          .eq("userId", userId)
          .single();

        if (fetchError && fetchError.code !== "PGRST116") {
          setError(fetchError.message);
        } else if (profile) {
          setFirst_name(profile.first_name);
          setLast_name(profile.last_name);
          setDob(profile.dob);
          setPhone(profile.phone);
          setCountryCode(countryOptions.find((c) => c.value === profile.country_code) || null);
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
  }, [countryOptions]);

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
        const { error: updateError } = await supabase
          .from("profile")
          .update({
            first_name,
            last_name,
            dob,
            phone,
            country_code: countryCode?.value || "",
            cnic,
          })
          .eq("userId", userId);

        if (updateError) {
          setError(updateError.message);
        } else {
          setSuccess("Profile updated successfully!");
        }
      } else {
        const { error: insertError } = await supabase.from("profile").insert([
          {
            userId,
            first_name,
            last_name,
            dob,
            phone,
            country_code: countryCode?.value || "",
            cnic,
          },
        ]);

        if (insertError) {
          setError(insertError.message);
        } else {
          setSuccess("Profile created successfully!");
          setProfileExists(true);
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
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="flex">
                  <Select
                    options={countryOptions}
                    value={countryCode}
                    onChange={setCountryCode}
                    placeholder="Search country..."
                    className="w-1/3 text-black"
                  />
                  <Input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-2/3 rounded-l-none"
                    required
                  />
                </div>
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
