import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">AI-Powered Travel Planning</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Plan Your Perfect Journey
            <span className="block mt-2 bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              with Intelligent AI
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Experience seamless multi-modal travel planning across Air, Rail, and Bus. 
            Get personalized itineraries optimized for your budget and preferences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/plan">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
            {[
              { value: "100K+", label: "Trips Planned" },
              { value: "50+", label: "Cities Connected" },
              { value: "4.9/5", label: "User Rating" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
