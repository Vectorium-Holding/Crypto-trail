import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CarbonCreditsPage = () => {
  const router = useRouter();

  const collections = [
    {
      id: 1,
      name: "NFT #31",
      price: 0.09,
      imageUrl: "/carbon-credit-pic.jpg",
    },
    {
      id: 2,
      name: "NFT #238",
      price: 0.1,
      imageUrl: "/crypto-collection-image.jpg",
    },
    {
      id: 3,
      name: "NFT #223",
      price: 0.12,
      imageUrl: "/carbon-credit-pic.jpg",
    },
    {
      id: 4,
      name: "NFT #31",
      price: 0.09,
      imageUrl: "/crypto-collection-image.jpg",
    },
    {
      id: 5,
      name: "NFT #238",
      price: 0.1,
      imageUrl: "/carbon-credit-pic.jpg",
    },
    {
      id: 6,
      name: "NFT #223",
      price: 0.12,
      imageUrl: "/crypto-collection-image.jpg",
    },
    {
      id: 7,
      name: "NFT #31",
      price: 0.09,
      imageUrl: "/crypto-collection-image.jpg",
    },
    {
      id: 8,
      name: "NFT #238",
      price: 0.1,
      imageUrl: "/carbon-credit-pic.jpg",
    },
    {
      id: 9,
      name: "NFT #223",
      price: 0.12,
      imageUrl: "/crypto-collection-image.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-10 py-16">
        {collections.map((elem, index) => (
          <Card
            key={index}
            className="rounded-2xl border-none bg-transparent shadow-lg shadow-slate-400"
          >
            <div className="flex items-center justify-center">
              <Image
                src={elem.imageUrl}
                alt="Carbon Credit NFT"
                width={325}
                height={0}
                className="rounded-lg object-fill shadow-lg"
              />
            </div>
            <CardContent className="flex flex-col bg-yellow-50">
              <div className="text-md pl-2 pt-2 font-raleway text-gray-500">
                {elem.name}
              </div>

              <div className="flex space-x-4 font-raleway text-lg font-semibold text-gray-500">
                <Image
                  src="/solana-logo.png"
                  alt="Solana Logo"
                  width={30}
                  height={30}
                />
                {elem.price}
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 pt-2">
                <Link
                  href={`/market-place/${elem.id}/details`}
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl bg-black px-32 py-4 font-sans text-white"
                  >
                    Details
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="rounded-2xl bg-black px-32 py-4 font-sans text-white"
                >
                  Buy/Sell
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CarbonCreditsPage;
