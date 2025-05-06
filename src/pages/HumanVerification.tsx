
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HumanVerificationLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
            Human Verification Service
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop fraud before it happens. BIDUA verifies your maids, drivers, tenants, or employees physically across India.
          </p>
          <Link href="/services/human-verification/book">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Now – ₹999 per Person <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Why This Matters */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Human Verification is Critical Today</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur border-green-600/20">
            <CardContent className="p-6 space-y-4">
              <AlertTriangle className="w-12 h-12 text-red-500" />
              <h3 className="text-xl font-semibold">Fraud Prevention</h3>
              <p>Thousands of fraud and theft cases by unknown domestic workers and tenants reported each year.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-green-600/20">
            <CardContent className="p-6 space-y-4">
              <Shield className="w-12 h-12 text-yellow-500" />
              <h3 className="text-xl font-semibold">Identity Protection</h3>
              <p>Fake IDs and unverifiable references are common in big cities and small towns alike.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-green-600/20">
            <CardContent className="p-6 space-y-4">
              <Users className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Risk Mitigation</h3>
              <p>Hiring blindly puts your family, property, and business at risk.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card/30 rounded-3xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, text: "Submit person's details" },
            { step: 2, text: "Make secure payment" },
            { step: 3, text: "Field executive visits" },
            { step: 4, text: "Video & photo proof" },
            { step: 5, text: "Get verification report" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <p className="font-medium">{item.text}</p>
              {index < 4 && <ArrowRight className="hidden md:block rotate-0 md:rotate-0 mt-2" />}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Who Should Use This Service?</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Families hiring maids, nannies, cooks",
            "Employers recruiting drivers, helpers",
            "Landlords renting properties",
            "Offices hiring contract or field staff"
          ].map((text, index) => (
            <Card key={index} className="bg-gradient-to-br from-green-600/10 to-transparent hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-medium">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              q: "Is this service available in my area?",
              a: "Yes! We cover all major cities, towns, and even remote locations across India."
            },
            {
              q: "How long does it take?",
              a: "Reports are typically ready within 24–48 hours."
            },
            {
              q: "Will I get photo or video?",
              a: "Yes. We share photos and a short video of the person at the address."
            },
            {
              q: "Can I verify multiple people?",
              a: "Yes, you can submit separate bookings for each individual."
            }
          ].map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* CTA Banner */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20"
      >
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Start Verifying with BIDUA Today</h2>
          <Link href="/services/human-verification/book">
            <Button size="lg" variant="secondary" className="text-green-700 hover:text-green-800 bg-white hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Verification Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
