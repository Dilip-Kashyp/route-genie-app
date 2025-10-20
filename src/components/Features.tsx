import { Card } from "@/components/ui/card";
import { Brain, Zap, DollarSign, Globe, Calendar, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Advanced algorithms analyze thousands of routes to find the perfect match for your journey.",
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Multi-Modal Travel",
      description: "Seamlessly combine Air, Rail, and Bus options for the most efficient travel experience.",
      color: "text-secondary",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Smart pricing analysis ensures you get the best value for your money on every trip.",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Real-time Availability",
      description: "Instant access to live seat availability and booking status across all transport modes.",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Find options that fit your timeline with intelligent departure and arrival suggestions.",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security and trusted partnerships ensure your bookings are always protected.",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose TripMate?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intelligent features designed to make your travel planning effortless and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4`}>
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
