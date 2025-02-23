"use client"
import Navbar from "@/components/sections/Navbar";
import Sidebar from "@/components/Sidebar";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Dashboard = ()=> {

    const { isLoggedIn } = useAuth();
    const router = useRouter();

    return (
    <>
      <Navbar/>
      <Sidebar/>
    </>
  );
}

export default Dashboard
