"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Guest } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Search, User, Loader2 } from "lucide-react"

interface StepGuestSearchProps {
  onContinue: (guest: Guest) => void
}

export function StepGuestSearch({ onContinue }: StepGuestSearchProps) {
  const [query, setQuery] = useState("")
  const [allGuests, setAllGuests] = useState<Guest[]>([])
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const results = useMemo(() => {
    if (query.length === 0) return []
    const lowerQuery = query.toLowerCase()
    return allGuests.filter((guest) =>
      guest.name.toLowerCase().includes(lowerQuery)
    )
  }, [query, allGuests])

  // Fetch all guests on mount
  useEffect(() => {
    const fetchAllGuests = async () => {
      try {
        const response = await fetch("/api/guests")
        const data = await response.json()
        setAllGuests(data)
      } catch (error) {
        console.error("Error fetching guests:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAllGuests()
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (guest: Guest) => {
    setSelectedGuest(guest)
    setQuery(guest.name)
    setIsOpen(false)
  }

  const handleInputChange = (value: string) => {
    setQuery(value)
    setIsOpen(value.length > 0)
    if (selectedGuest && value !== selectedGuest.name) {
      setSelectedGuest(null)
    }
  }

  return (
    <div className="space-y-8 relative">

      {isLoading && (
        <div className="absolute top-0 left-0 z-10 bg-white/85 w-full h-full grid place-items-center">
          <div className="flex gap-1 items-center">
            <span><Loader2 className="h-5 w-5 animate-spin" /></span>
            <span>Loading...</span>
          </div>
        </div>
      )}


      <div className="space-y-3 text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Andre &amp; Mariel&apos;s Wedding
        </h2>
        <p className="text-muted-foreground">
          Please search for your name to begin the RSVP process
        </p>
      </div>

      <div ref={wrapperRef} className="relative">
        <div className="relative">
          {isLoading ? (
            <Loader2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground animate-spin" />
          ) : (
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          )}
          <Input
            placeholder="Type your name..."
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onFocus={() => query.length > 0 && results.length > 0 && setIsOpen(true)}
            className="px-9 bg-white h-12 text-base md:text-lg"
          />
        </div>

        {isOpen && results.length > 0 && (
          <div className="absolute z-10 mt-2 w-full rounded-lg border bg-card shadow-lg">
            <ul className="max-h-60 overflow-auto py-2">
              {results.map((guest) => (
                <li key={guest.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(guest)}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-accent",
                      selectedGuest?.id === guest.id && "bg-accent"
                    )}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{guest.name}</p>
                      {/* {guest.hasPlusOne && (
                        <p className="text-xs text-muted-foreground">+1 Guest Allowed</p>
                      )} */}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!isLoading && query.length >= 3 && results.length === 0 && !selectedGuest && (
          <p className="mt-3 text-base text-primary/80 bg-primary/5 text-center leading-[1.3] px-1 py-1.5 rounded-[6px]">
            Please try typing the first letter of your name.<br/> or contact the couple.
          </p>
        )}
      </div>

      {selectedGuest && (
        <div className="rounded-lg border bg-accent/30 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">{selectedGuest.name}</p>
              {selectedGuest.hasPlusOne && (
                <p className="text-sm text-muted-foreground">You may bring a guest</p>
              )}
            </div>
          </div>
        </div>
      )}

      <Button
        onClick={() => selectedGuest && onContinue(selectedGuest)}
        disabled={!selectedGuest}
        className="h-12 w-full text-base font-medium"
      >
        Continue
      </Button>
    </div>
  )
}
