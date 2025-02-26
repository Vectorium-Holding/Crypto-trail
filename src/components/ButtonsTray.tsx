import Image from "next/image";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";
import { ConnectWalletDialog } from "./ConnectWalletDialog";

interface ButtonsTrayProps {
  isNFTFlag: boolean;
  setIsNFTFlag: Dispatch<SetStateAction<boolean>>;
}

const ButtonsTray = ({ isNFTFlag, setIsNFTFlag }: ButtonsTrayProps) => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] py-6">
      <div className="flex">
        <Image
          src="/Vectorium-pic.jpg"
          alt="Vectorium-Logo"
          width={250}
          height={100}
          className="px-6"
        />
        <div className="flex flex-col pl-8">
          <h1 className="bg-gradient-to-br from-[#0b0b0b] via-[#212120] to-[#373636] bg-clip-text pb-4 font-serif text-4xl">
            Carbon Credits Market Place
          </h1>
          {["Collections", "Sell Items"].map((buttonText, index) => (
            <Button
              key={index}
              variant="outline"
              className="mb-4 rounded-xl bg-black p-6 font-sans text-white"
              onClick={() => {
                if (buttonText === "Collections") {
                  setIsNFTFlag(!isNFTFlag);
                } else {
                  setIsNFTFlag(false);
                }
              }}
            >
              {buttonText}
            </Button>
          ))}
        </div>

        <div className="mx-16 py-8">
          <ConnectWalletDialog />
        </div>
      </div>
    </div>
  );
};

export default ButtonsTray;
