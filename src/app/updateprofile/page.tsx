"use client";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "../api/auth/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Select from "react-select";

import Link from "next/link";
interface CountryOption {
  value: string;
  label: string;
}

export default function ProfilePage() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [country_code, setCountry_code] = useState<CountryOption | null>(null);
  const [verified, setVerified] = useState(false);
  const [zip,setZip] = useState("")
  const [address,setAddress] = useState("")
  const [city,setCity]= useState("")
  const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [profileExists, setProfileExists] = useState(false);
  const [cityOptions, setCityOptions] = useState<Option[]>([]);
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
    if (!country_code) return;

    const fetchCities = async () => {
      try {
        const res = await fetch(`https://countriesnow.space/api/v0.1/countries/cities/q?country=${country_code.label.split(" (")[0]}`);
        const data = await res.json();
        if (data.error) throw new Error(data.msg);

        const cityOptions = data.data.map((city: string) => ({
          value: city,
          label: city,
        }));

        setCityOptions(cityOptions);
      } catch (err) {
        console.error("Error fetching cities:", err);
        setCityOptions([]);
      }
    };

    fetchCities();
  }, [country_code]);

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
          setCountry_code(countryOptions.find((c) => c.value === profile.country_code) || null);
          // setCountry_code(profile.country_code)
          setVerified(profile.verified);
          setCity(profile.city);
          setZip(profile.zip)
          setAddress(profile.address)
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
            country_code: country_code?.value || "",
            verified,
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
            country_code: country_code?.value || "",
            verified,
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
      router.push("/profilepicture")
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 pt-20 text-[#A8955A]">
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
           
           {/* first name and last name */}
           <div className="flex flex-row space-x-2 justify-between">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Enter your First Name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
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
                    onChange={(e) => setLast_name(e.target.value)}
                    required
                  />
                </div>
              </div>


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
  <div className="flex">
    {/* Country Code Dropdown using react-select */}
    <Select
      options={countryOptions}
      value={country_code}
      onChange={(selected) => setCountry_code(selected)}
      className="w-1/3"
      placeholder="Code"
      isSearchable
    />

    {/* Phone Number Input Field */}
    <Input
      id="phone"
      type="text"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-2/3 rounded-l-none"
      required
      placeholder="Enter phone number"
    />
  </div>
</div>
              {/* City Selection */}
              <div className="flex flex-row space-x-2 justify-between">
            <div className="space-y-2 w-2/3">
              <Label>Select City</Label>
              <Select
                options={cityOptions}
                value={city}
                onChange={setCity}
                className="w-full"
                placeholder={country_code ? "Select City" : "Select a country first"}
                isSearchable
                isDisabled={!country_code}
              />
            </div>
            <div className="space-y-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input
                    id="zip"
                    type="text"
                    placeholder="Enter your Last Name"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                </div>
            </div>
            <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

{
  verified?
  <div className="text-center text-sm text-green-500">
              Your Identity Document is verified?
              <Link
                href="/document"
                className="text-primary-500 hover:text-primary-600 pl-2 font-medium"
              >
                Check It
              </Link>
            </div>:
            <div className="text-center text-sm text-red-500">
            Your Identity Document is not verified?
            <Link
              href="/document"
              className="text-primary-500 hover:text-primary-600 pl-2 font-medium"
            >
              Check It
            </Link>
          </div>
}
            

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
