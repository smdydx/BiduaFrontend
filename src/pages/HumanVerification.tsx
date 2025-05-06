import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  UserCheck, 
  Shield, 
  Clock, 
  MapPin, 
  Camera, 
  FileText,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Home,
  Briefcase
} from "lucide-react";

export default function HumanVerificationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
      <Helmet>
        <title>Human Verification Service - BIDUA Industries</title>
        <meta name="description" content="Professional verification services for maids, drivers, tenants, and employees across India" />
      </Helmet>

      {/* Hero Section with Trust Indicators */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center space-y-8">
          <div className="flex justify-center gap-2 items-center mb-6">
            <Shield className="w-8 h-8 text-green-500" />
            <span className="text-sm font-medium text-green-500">Trusted by 10,000+ Families</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
            Professional Human Verification Service
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop fraud before it happens. We verify your maids, drivers, tenants, or employees physically across India.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full">
              Book Verification Now – ₹999
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full">
              Watch How It Works
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Service Categories */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Home, title: "Domestic Staff", desc: "Maids, Cooks, Nannies" },
            { icon: Building, title: "Property", desc: "Tenants, Maintenance Staff" },
            { icon: Briefcase, title: "Business", desc: "Employees, Contractors" },
            { icon: Users, title: "Organizations", desc: "NGOs, Institutions" }
          ].map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <category.icon className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Verification Process */}
      <motion.section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple 5-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: UserCheck, text: "Submit Details" },
              { icon: Shield, text: "Secure Payment" },
              { icon: MapPin, text: "Field Visit" },
              { icon: Camera, text: "Video Proof" },
              { icon: FileText, text: "Get Report" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-green-600" />
                </div>
                <p className="font-medium">{step.text}</p>
                {index < 4 && <div className="hidden md:block w-full h-0.5 bg-green-200 mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trust Features */}
      <motion.section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Turnaround",
                points: ["24-48 hour verification", "Real-time updates", "Instant digital report"]
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                points: ["Licensed investigators", "Data protection", "Confidential process"]
              },
              {
                icon: MapPin,
                title: "Pan India Coverage",
                points: ["All major cities", "Remote locations", "No area restrictions"]
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-16 px-4 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Don't Risk Your Safety</h2>
          <p className="text-lg mb-8">Verify before you hire. Professional verification at affordable prices.</p>
          <Button size="lg" variant="secondary" className="text-green-700 bg-white hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
            Book Verification Now – ₹999
          </Button>
        </div>
      </motion.section>
    </div>
  );
}