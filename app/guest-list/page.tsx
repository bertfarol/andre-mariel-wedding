"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { Check, ChevronUp, LoaderCircle, Search, UserRound, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface Rsvp {
  id: string;
  attending: boolean;
  plusOneName: string | null;
  email: string | null;
  message: string | null;
}

interface Guest {
  id: string;
  name: string;
  hasPlusOne: boolean;
  createdAt: string;
  rsvp: Rsvp | null;
}

export default function GuestListPage() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [isVisible, setIsVisible] = useState(false);

  const fetchGuests = async () => {
    try {
      const response = await fetch("/api/admin/guests");
      if (!response.ok) {
        console.error("Error fetching guests: Response not ok");
        return;
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        // Sort alphabetically by name
        const sortedData = [...data].sort((a, b) => 
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        setGuests(sortedData);
      }
    } catch (error) {
      console.error("Error fetching guests:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  const filteredGuests = useMemo(() => {
    return guests.filter((guest) => {
      const nameMatch = guest.name.toLowerCase().includes(searchQuery.toLowerCase());
      const plusOneMatch = guest.rsvp?.plusOneName?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSearch = nameMatch || plusOneMatch;

      let matchesStatus = true;
      if (filterStatus === "attending") matchesStatus = guest.rsvp?.attending === true;
      else if (filterStatus === "decline") matchesStatus = guest.rsvp?.attending === false;
      else if (filterStatus === "pending") matchesStatus = guest.rsvp === null;

      return matchesSearch && matchesStatus;
    });
  }, [guests, searchQuery, filterStatus]);

  const attendingGuests = guests.filter((g) => g.rsvp?.attending);
  const attendingWithPlusOne = attendingGuests.filter(
    (g) => g.hasPlusOne && g.rsvp?.plusOneName
  );

  const stats = {
    total: guests.length,
    responded: guests.filter((g) => g.rsvp).length,
    attending: attendingGuests.length + attendingWithPlusOne.length,
    declined: guests.filter((g) => g.rsvp && !g.rsvp.attending).length,
    withPlusOne: guests.filter((g) => g.hasPlusOne).length,
    pending: guests.filter((g) => g.rsvp === null).length,
    confirmedPlusOnes: attendingWithPlusOne.length,
  };

  // Show button when page is scrolled down to 1000px
  const toggleVisibility = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0, make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  return (
    <div>
      <div className="max-w-3xl mx-auto my-3 px-4">
        <h1 className="font-serif text-base font-semibold text-primary mb-2">
          Guest List
        </h1>

        <div className="grid grid-cols-3 text-center py-4">
          <div>
            <p className="text-sm text-primary/80">Total Guest</p> 
            <p className="text-2xl font-semibold">{guests.length}</p> 
          </div>
          <div>
            <p className="text-sm text-primary/80">Attending</p> 
            <p className="text-2xl font-semibold">{stats.attending}</p> 
          </div>
          <div>
            <p className="text-sm text-primary/80">Declined</p> 
            <p className="text-2xl font-semibold">{stats.declined}</p> 
          </div>
        </div>
      </div>


      <main className="max-w-3xl mx-auto mt-3 mb-10 px-4">
        {/* Search  */}
        <div className="relative w-full mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search guest..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-9 bg-white h-12 shadow-none rounded-full w-full md:text-lg"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: "all", label: "All" },
            { id: "attending", label: "Attending" },
            { id: "decline", label: "Declined" },
            { id: "pending", label: "Pending", count: stats.pending },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setFilterStatus(filter.id)}
              className={clsx(
                "shadow rounded-full py-1 px-3 text-sm flex items-center gap-1",
                filterStatus === filter.id ? "bg-primary text-white" : "bg-white"
              )}
            >
              {filter.label}
              {filter.count && (
                <span className={clsx(
                  "leading-none grid place-items-center h-4 px-1.5 rounded-full text-xs",
                  filterStatus === filter.id ? "bg-white/90 text-primary" : "bg-primary/50 text-white"
                )}>
                  {filter.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="mt-4 grid place-content-center">
            <div className="flex gap-1.5 items-center text-primary/70">
              <LoaderCircle className="w-4 h-4 animate-spin"/>
              <span>Loading guest list... </span>
            </div>
          </div>
        )}
        {!isLoading && (
          <div className="space-y-2">
            {filteredGuests.map(guest => (
                 <div key={guest.id} className="py-3 pl-3 pr-6 shadow bg-white rounded-full flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2.5">                    
                      <div 
                        className={clsx(
                          "flex h-8 w-8 items-center justify-center rounded-full",
                          guest.rsvp?.attending ? "bg-green-500/10" : "bg-primary/5"
                        )}
                      >
                        <UserRound className={clsx(
                          "h-4 w-4",                 
                          guest.rsvp?.attending ? "text-green-700" : "text-primary/70"
                        )} />
                      </div>
                      <div>
                        <p className="font-medium">{guest.name}</p>
                        {guest.rsvp?.plusOneName && (
                          <p className="text-sm text-primary/70">+1: {guest.rsvp.plusOneName}</p>
                        )}
                      </div>               
                    </div>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">    
                    {guest.rsvp ? (
                      guest.rsvp.attending ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <Badge variant="outline" className="text-gray-500">Pending</Badge>
                    )}
                  </span>
                </div>
              ))}
            {guests.length === 0 && <p>No guests found for this filter.</p>}
          </div>
        )}
      </main>

      <div className="fixed bottom-8 right-8 z-50">
        <button
          type="button"
          onClick={scrollToTop}
          className={`
            p-3 rounded-full bg-primary/85 text-white shadow-lg transition-opacity duration-300
            ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
            hover:bg-blue-700 focus:outline-none focus:ring-2
          `}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </div>
  )
}