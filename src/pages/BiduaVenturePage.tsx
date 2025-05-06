
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { 
  FaUserShield, FaCogs, FaShoppingCart, FaHotel, 
  FaHospital, FaLeaf, FaGraduationCap, FaBuilding, 
  FaCar, FaLightbulb 
} from "react-icons/fa";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function BiduaVenturesPage() {
  const categories = [
    { 
      title: "Safety & Verification",
      icon: <FaUserShield />,
      items: ["Human Verification (maids, tenants, employees)", "DNA-based Family Tracing", "Maid/Cook/Driver Services", "Mobile Anti-Theft App", "OBIDUA Authentication Code"]
    },
    {
      title: "Blockchain & Tech",
      icon: <FaCogs />,
      items: ["Peer-to-Peer Fundraising over Blockchain", "Crypto-based Lottery", "Tokenized Points & Crypto Exchange", "Hosting & Server Services", "Secure Gadget & File App"]
    },
    {
      title: "Retail & E-Commerce",
      icon: <FaShoppingCart />,
      items: ["B2B/B2C Portal", "Amazon/Flipkart Listings Support", "Grocery at Door", "Buy-Sell Portal (Saree, Cars, Gifts)", "Used Car Dealership", "Return Gift Listings"]
    },
    {
      title: "Hospitality & Lifestyle",
      icon: <FaHotel />,
      items: ["Sleeping Pod Chain Hotels", "Bed & Breakfast Pods", "Hotels on Lease", "Oxygen Bar", "Video Business Cards", "Transparent LED Visiting Card"]
    },
    {
      title: "Health & Wellness",
      icon: <FaHospital />,
      items: ["Old Age Homes", "Alzheimer Patient Care", "Bio Diesel", "Health, Obesity, Nutrition Services", "Elixir Crystal Water Bottles"]
    },
    {
      title: "Agri & Plantation",
      icon: <FaLeaf />,
      items: ["Vanilla, Mahogany, Neem, Sandalwood", "Aeroponic Farming", "Pyramid Energy Farms", "Kantola, Kalimirch Farming", "Veg Direct from Farm App"]
    },
    {
      title: "Education & Social",
      icon: <FaGraduationCap />,
      items: ["Rural Kids Parks", "Play School Chain", "NGO for Organ Donation", "Educational Access to Remote India"]
    },
    {
      title: "Engineering & Infrastructure",
      icon: <FaBuilding />,
      items: ["Vertical Farming, Eco-Friendly AC", "Silicon Bricks, Pyramid Structures", "Automatic Lehenga Folder", "Wall-Mounted Bicycle Stand", "Concrete Cressers, Tyre-Based Bricks"]
    },
    {
      title: "Mobility & Energy",
      icon: <FaCar />,
      items: ["Train-Based Electricity Systems", "Self-Rotating Magnetic Motor", "Wireless 5G Powerbank Dongles", "Chassis Number Engravers", "Recharge Portal, Smart Travel Devices"]
    },
    {
      title: "Miscellaneous & Future Planning",
      icon: <FaLightbulb />,
      items: ["Haunted Video App", "Cats Park Project", "Live QR Code Newspaper", "Wedding Planning App", "Digital Dermatology + Salon Tech"]
    }
  ];

  return (
    <main className="bg-gradient-to-br from-black to-green-900 text-white font-sans">
      <Helmet>
        <title>BIDUA Ventures - One Brand, Limitless Possibilities</title>
        <meta name="description" content="BIDUA Ventures - From Human Verification to Futuristic Energy, One Platform, One Mission: Empower India" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
        >
          <source src="/assets/bidua.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to BIDUA Ventures</h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-6">
            From Human Verification to Futuristic Energy – One Platform, One Mission: Empower India.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-xl">
            Explore All Ideas
          </Button>
        </div>
      </section>

      {/* Why BIDUA Section */}
      <section className="py-16 text-center bg-green-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why BIDUA?</h2>
          <p className="text-xl md:text-2xl font-semibold mb-4">"We don't just build businesses, we build ecosystems."</p>
          <p className="max-w-4xl mx-auto text-lg">
            BIDUA is more than a company — it's a visionary force spanning 100+ business models in innovation, inclusion, infrastructure, and impact.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Master Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, idx) => (
              <Card key={idx} className="bg-black/40 border-green-800">
                <CardContent className="p-6">
                  <div className="text-green-400 text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">{category.title}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm md:text-base opacity-90">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-t from-black to-green-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Journey</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Want to invest, collaborate, or join our mission?<br />
            Let's build a future together.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
              Contact Us
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
              Pitch Your Startup
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
              Partner with BIDUA
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
