
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">Get in touch with the team behind Nostalgic Memories</p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-1 space-y-6">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-fade-in">
            <CardHeader>
              <CardTitle className="text-sakura-700 dark:text-sakura-300">Contact Information</CardTitle>
              <CardDescription>Reach out to us with any questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-sakura-600 dark:text-sakura-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">hello@nostalgicmemories.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-sakura-600 dark:text-sakura-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sakura-100 to-sakura-50 dark:from-gray-800 dark:to-gray-900 shadow-sm animate-fade-in">
            <CardHeader>
              <CardTitle className="text-sakura-700 dark:text-sakura-300">Follow Our Journey</CardTitle>
              <CardDescription>Join our community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Subscribe to our newsletter to stay updated with new additions to our gallery and upcoming events.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/90 dark:bg-gray-700/90"
                />
                <Button size="sm" className="bg-sakura-600 hover:bg-sakura-700 text-white">
                  Join
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="md:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="text-sakura-700 dark:text-sakura-300">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-white dark:bg-gray-800"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-white dark:bg-gray-800"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="bg-white dark:bg-gray-800"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you're thinking about..."
                  rows={6}
                  required
                  className="resize-none bg-white dark:bg-gray-800"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-sakura-600 hover:bg-sakura-700 text-white dark:bg-sakura-500 dark:hover:bg-sakura-600 w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
