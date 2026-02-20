"use client"

import { Button } from "@/components/ui/button"
import type { RSVPData } from "@/lib/types"
import { CheckCircle2, Calendar, MapPin, Clock } from "lucide-react"

interface StepSuccessProps {
  rsvpData: RSVPData
  onBackToHome: () => void
}

export function StepSuccess({ rsvpData, onBackToHome }: StepSuccessProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <div className="space-y-2">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Thank You, {rsvpData.guestName.split(" ")[0]}!
          </h2>
          <p className="text-muted-foreground">
            {rsvpData.attending
              ? "We are thrilled that you will be joining us on our special day."
              : "We're sorry you won't be able to make it. You'll be missed!"}
          </p>
        </div>
      </div>

      {rsvpData.attending && (
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-4 font-serif text-lg font-medium text-foreground">
            Event Details
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Wednesday, April 1, 2026</p>
                {/* <p className="text-sm text-muted-foreground">Save the date</p> */}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">4:00 PM - 10:00 PM</p>
                {/* <p className="text-sm text-muted-foreground">Ceremony begins at 4:30 PM</p> */}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Farm Hills Garden</p>
                <p className="text-sm text-muted-foreground">
                  Farm Hills Garden, Brgy. Ulat, Silang, 4118 Cavite
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-lg border bg-accent/10 p-4">
        <h4 className="mb-2 text-sm font-medium text-foreground">RSVP Summary</h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>Name: {rsvpData.guestName}</li>
          <li>Status: {rsvpData.attending ? "Attending" : "Not Attending"}</li>
          {rsvpData.plusOneName && <li>Guest: {rsvpData.plusOneName}</li>}

        </ul>
      </div>

      <a
        href="/"
        className="h-12 w-full text-base font-medium bg-primary text-white rounded-md grid place-items-center"
      >
        Back to Homepage
      </a>
    </div>
  )
}
