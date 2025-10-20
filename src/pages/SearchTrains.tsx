import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Search, Train } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const SearchTrains = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Searching trains... 🚂",
      description: "Finding available trains for your journey",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Train className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Search Trains
            </h1>
            <p className="text-muted-foreground">
              Find direct train routes and check real-time availability
            </p>
          </div>

          {/* Search Form */}
          <Card className="p-6 md:p-8 bg-card border-border shadow-medium">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* From Station */}
                <div>
                  <Label htmlFor="from-station" className="text-sm font-medium">
                    From Station
                  </Label>
                  <Input
                    id="from-station"
                    placeholder="Enter station code or name"
                    className="mt-1.5"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    e.g., NDLS (New Delhi) or Mumbai Central
                  </p>
                </div>

                {/* To Station */}
                <div>
                  <Label htmlFor="to-station" className="text-sm font-medium">
                    To Station
                  </Label>
                  <Input
                    id="to-station"
                    placeholder="Enter station code or name"
                    className="mt-1.5"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    e.g., BLR (Bangalore) or Chennai Central
                  </p>
                </div>
              </div>

              {/* Journey Date */}
              <div>
                <Label className="text-sm font-medium">Journey Date</Label>
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
                      {date ? format(date, "PPP") : "Select travel date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Class Selection */}
              <div>
                <Label htmlFor="class" className="text-sm font-medium">
                  Preferred Class
                </Label>
                <select
                  id="class"
                  className="w-full mt-1.5 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="all">All Classes</option>
                  <option value="1A">First AC (1A)</option>
                  <option value="2A">Second AC (2A)</option>
                  <option value="3A">Third AC (3A)</option>
                  <option value="SL">Sleeper (SL)</option>
                  <option value="2S">Second Sitting (2S)</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Search className="mr-2 h-4 w-4" />
                Search Trains
              </Button>
            </form>
          </Card>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Real-time Data",
                description: "Live availability updates",
              },
              {
                title: "All Train Types",
                description: "Express, Mail, Passenger trains",
              },
              {
                title: "Multiple Classes",
                description: "1A, 2A, 3A, SL, 2S options",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-4 text-center bg-muted/30 border-border">
                <h3 className="font-semibold text-card-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchTrains;
