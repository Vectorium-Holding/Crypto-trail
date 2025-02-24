import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useAuth } from "@/context/AuthContext";
 
const DropDown = () => {

    const router = useRouter();
    const { setIsLoggedIn } = useAuth();


    const handleDashboardRedirect = () => {  
        setIsLoggedIn(true);
        router.push('/Dashboard');
      };

    const handleLogout = () => {
      // Clear any stored authentication tokens/data

      localStorage.removeItem('token'); // Adjust based on your auth implementation
      setIsLoggedIn(false);
      router.push('/');
    };
  
    
    return (
        <div className="text-black">
            <Popover>
                <PopoverTrigger asChild>
                <Button className="rounded-full py-6 px-6 mt-4">
                    <Image 
                        src="/profile-pic.jpeg"
                        alt="Button icon"
                        width={70}
                        height={60}
                    />
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40 bg-[#1b1c1d] rounded-2xl">
                <div className="grid gap-2 text-[#A8955A]">
                    <Button className="space-y-2" onClick={handleDashboardRedirect}>
                        <h4 className="font-medium">Dashboard</h4>
                    </Button>

                    <div className="space-y-2 pl-2">
                        <Button className="font-medium" onClick={handleLogout}>Logout</Button>
                    </div>
                </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default DropDown