import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Send, Sparkles, Plane, Train, Bus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Plan = () => {
  const [date, setDate] = useState<Date>();
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([]);
  const { toast } = useToast();

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { role: "user", content: chatMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        {
          role: "assistant",
          content: "I'm analyzing the best routes for your journey. I'll search across trains, buses, and flights to find optimal options that match your preferences.",
        },
      ]);
    }, 1000);

    setChatMessage("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Planning your trip! ✈️",
      description: "AI is analyzing the best routes for you...",
    });
  };

  const suggestedQueries = [
    "Find cheapest route from Mumbai to Delhi",
    "I want to reach Bangalore by tomorrow evening",
    "Show me direct trains to Pune",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Plan Your Journey
          </h1>
          <p className="text-muted-foreground">
            Use our smart form or chat with AI to plan your perfect trip
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {/* Trip Planning Form */}
          <Card className="lg:col-span-2 p-6 bg-card border-border shadow-soft">
            <h2 className="text-xl font-semibold text-card-foreground mb-6">Trip Details</h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* From */}
              <div>
                <Label htmlFor="from" className="text-sm font-medium">From</Label>
                <Input
                  id="from"
                  placeholder="Enter starting location"
                  className="mt-1.5"
                />
              </div>

              {/* To */}
              <div>
                <Label htmlFor="to" className="text-sm font-medium">To</Label>
                <Input
                  id="to"
                  placeholder="Enter destination"
                  className="mt-1.5"
                />
              </div>

              {/* Date */}
              <div>
                <Label className="text-sm font-medium">Travel Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full mt-1.5 justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Passengers */}
              <div>
                <Label htmlFor="passengers" className="text-sm font-medium">Passengers</Label>
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="mt-1.5"
                />
              </div>

              {/* Preferences */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Transport Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="train" defaultChecked />
                    <label htmlFor="train" className="text-sm flex items-center gap-2 cursor-pointer">
                      <Train className="h-4 w-4 text-primary" />
                      Train
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bus" defaultChecked />
                    <label htmlFor="bus" className="text-sm flex items-center gap-2 cursor-pointer">
                      <Bus className="h-4 w-4 text-secondary" />
                      Bus
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="flight" defaultChecked />
                    <label htmlFor="flight" className="text-sm flex items-center gap-2 cursor-pointer">
                      <Plane className="h-4 w-4 text-accent" />
                      Flight
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="direct" />
                  <label htmlFor="direct" className="text-sm cursor-pointer">
                    Direct routes only
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="budget" />
                  <label htmlFor="budget" className="text-sm cursor-pointer">
                    Budget travel (cheapest options)
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Sparkles className="mr-2 h-4 w-4" />
                Plan My Trip
              </Button>
            </form>
          </Card>

          {/* AI Chat Interface */}
          <Card className="lg:col-span-3 p-6 bg-card border-border shadow-soft flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="rounded-lg bg-primary/10 p-2">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-card-foreground">AI Travel Assistant</h2>
            </div>

            {/* Chat History */}
            <div className="flex-1 mb-4 space-y-4 overflow-y-auto min-h-[300px] max-h-[400px]">
              {chatHistory.length === 0 ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Ask me anything about your journey!
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-card-foreground mb-2">Try these:</p>
                    {suggestedQueries.map((query, idx) => (
                      <button
                        key={idx}
                        onClick={() => setChatMessage(query)}
                        className="block w-full text-left px-4 py-2 text-sm bg-muted/50 hover:bg-muted rounded-lg transition-colors"
                      >
                        {query}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                chatHistory.map((msg, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "flex gap-3 animate-fade-in",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-3",
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-card-foreground"
                      )}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Describe your journey or ask a question..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Plan;
