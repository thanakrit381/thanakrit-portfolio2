import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-card min-h-screen flex items-center justify-center">
      <div className="section-container text-center">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-primary mb-2">Let's Connect</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, 
            or how I can contribute to your team.
          </p>
        </div>

        {/* Centered Contact Info */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-12">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <p className="text-base text-muted-foreground">Email</p>
              <p className="font-medium text-foreground break-words text-center">
                thanakrit.ultra@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <p className="text-base text-muted-foreground">Phone</p>
              <p className="font-medium text-foreground text-center">092-271-4226</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <p className="text-base text-muted-foreground">Location</p>
              <p className="font-medium text-foreground text-center">Nonthaburi, Thailand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
