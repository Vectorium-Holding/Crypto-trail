import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 bg-[#1B1C1D] min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row w-full gap-12 items-center">
        {/* Left - Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="/image.jpg"
            alt="Trading Illustration"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Content */}
        <div className="md:w-1/2 text-white flex flex-col justify-center space-y-6">
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "#e4d97c" }}
          >
            Seamless Trading for a Greener Future
          </h1>

          <div className="space-y-6">
            {/** Steps */}
            {[
              {
                title: "Register",
                desc: "Create your Vectorium account in minutes with our user-friendly interface.",
              },
              {
                title: "Fund",
                desc: "Deposit crypto or fiat currency to start trading immediately.",
              },
              {
                title: "Trade",
                desc: "Buy, sell, or hold VCCs with real-time market data and advanced trading tools.",
              },
              {
                title: "Impact",
                desc: "Track your contribution to global carbon reduction efforts in real-time.",
              },
            ].map((step, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
