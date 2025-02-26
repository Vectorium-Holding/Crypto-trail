import { Copy, Cross, WalletMinimal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function ConnectWalletDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-2xl bg-black px-8 py-8 font-sans text-white"
        >
          <WalletMinimal />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-4xl border-white bg-gradient-to-br from-[#0b0b0b] via-[#212120] to-[#373636] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">Connect A Wallet</DialogTitle>
          <DialogDescription className="py-1 text-xs text-gray-500">
            You need to connect a Solana Wallet
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-10">
          <Button className="flex flex-col rounded-xl border border-gray-500 p-12">
            <img
              src="/phantom-logo.jpeg"
              alt="Phantom Wallet"
              style={{ objectFit: "contain", width: "50px", height: "50px" }}
            />
            <p className="text-white">Phantom</p>
          </Button>

          <Button className="flex flex-col rounded-xl border border-gray-500 p-12">
            <img
              src="/solflare-logo.png"
              alt="Phantom Wallet"
              style={{ objectFit: "contain", width: "50px", height: "50px" }}
            />
            <p className="text-white">Solflare</p>
          </Button>
        </div>

        <p className="pt-8 text-sm text-white underline">
          Can't find your wallet?
        </p>
        <p className="text-sm text-white">I don't have a wallet</p>
      </DialogContent>
    </Dialog>
  );
}
