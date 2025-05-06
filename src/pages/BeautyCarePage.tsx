import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import {
  Check,
  ShieldCheck,
  Star,
  Leaf,
  Heart,
  Award,
  Sparkles,
  Droplet,
  Sun,
  AlarmClock,
  ShieldPlus,
  HeartHandshake,
  ShoppingBag,
  ArrowRight
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BeautyCarePage() {
  return (
    <>
      <Helmet>
        <title>BIDUA Beauty Care – Premium Skincare Solutions | BIDUA Industries</title>
        <meta name="description" content="Premium skincare products designed to deliver visible results safely and gently. Our Dark Circle & Dark Spot Removal Cream helps fade imperfections and illuminate your natural tone." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Skincare
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-green-600">BIDUA Beauty Care</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 font-light">
                Natural Beauty, Enhanced Confidence
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Experience the perfect blend of nature and science in our premium skincare solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Shop Now <ShoppingBag className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80" 
                alt="BIDUA Beauty Care Premium Products" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose BIDUA Beauty?</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8 text-green-600" />,
                title: "Natural Ingredients",
                description: "100% natural and organic ingredients sourced responsibly"
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
                title: "Dermatologist Tested",
                description: "Clinically proven formulas safe for all skin types"
              },
              {
                icon: <Heart className="h-8 w-8 text-green-600" />,
                title: "Cruelty Free",
                description: "Never tested on animals, always ethically made"
              },
              {
                icon: <Award className="h-8 w-8 text-green-600" />,
                title: "Premium Quality",
                description: "Highest grade ingredients and formulations"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gradient-to-b from-background to-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="h-6 w-6 text-green-600" />,
                title: "Deep Hydration",
                description: "Provides 24-hour moisture retention"
              },
              {
                icon: <Sun className="h-6 w-6 text-green-600" />,
                title: "Dark Spot Reduction",
                description: "Visibly reduces dark spots and pigmentation"
              },
              {
                icon: <AlarmClock className="h-6 w-6 text-green-600" />,
                title: "Quick Results",
                description: "See visible results in just 2 weeks"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How long until I see results?</AccordionTrigger>
                <AccordionContent>
                  Most users report visible improvements within 2-4 weeks of consistent use. For best results, use the product twice daily as directed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it suitable for sensitive skin?</AccordionTrigger>
                <AccordionContent>
                  Yes, our products are dermatologically tested and suitable for all skin types, including sensitive skin. However, we recommend doing a patch test before first use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are your products cruelty-free?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! We never test on animals and are committed to ethical beauty practices. All our products are 100% cruelty-free.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What's your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day satisfaction guarantee. If you're not completely satisfied, contact our customer service for a full refund.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Beauty Journey Today</h2>
            <p className="text-xl mb-8">Experience the BIDUA difference with our premium skincare solutions</p>
            <Button size="lg" variant="secondary" className="text-green-600">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}