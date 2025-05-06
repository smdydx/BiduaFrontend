
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Camera,
  FileText,
  IndianRupee,
  CheckCircle,
  Send
} from "lucide-react";

export default function HumanVerificationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    personToVerify: "",
    address: "",
  });

  const [formStep, setFormStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2); // Move to payment step
  };

  const handlePayment = () => {
    // Mock payment success
    setFormStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background pt-20">
      <Helmet>
        <title>Book Human Verification - BIDUA Verification Services</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {formStep === 1 && (
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <Shield className="w-12 h-12 mx-auto text-green-500 mb-2" />
                <h1 className="text-2xl font-bold mb-2">Book Verification</h1>
                <p className="text-muted-foreground">Fill in the details to proceed with verification</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <Input
                  placeholder="Person to Verify (Full Name)"
                  value={formData.personToVerify}
                  onChange={(e) => setFormData({...formData, personToVerify: e.target.value})}
                  required
                />
                <Input
                  placeholder="Complete Address for Verification"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <IndianRupee className="w-4 h-4 mr-2" /> Proceed to Payment - ₹999
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {formStep === 2 && (
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Payment</h2>
              <p className="mb-6">Total Amount: ₹999</p>
              <Button onClick={handlePayment} className="bg-green-600 hover:bg-green-700 text-white">
                Pay Now
              </Button>
            </CardContent>
          </Card>
        )}

        {formStep === 3 && (
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold">Verification Request Received!</h2>
              <div className="space-y-2 text-left">
                <p className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-green-500" />
                  Our agent will visit for physical verification
                </p>
                <p className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-green-500" />
                  You'll receive the verification report within 48 hours
                </p>
                <p className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-green-500" />
                  Report link will be sent to your email
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
