"use client"

import { useState } from "react"
import { StepIndicator } from "./step-indicator"
import { StepGuestSearch } from "./step-guest-search"
import { StepAttendance } from "./step-attendance"
import { StepSuccess } from "./step-success"
import type { Guest, RSVPData } from "@/lib/types"

const TOTAL_STEPS = 3

export function RSVPForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null)
  const [rsvpData, setRsvpData] = useState<RSVPData | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleGuestSelect = (guest: Guest) => {
    setSelectedGuest(guest)
    setCurrentStep(2)
  }

  const submitRSVP = async (finalData: RSVPData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestId: finalData.guestId,
          attending: finalData.attending,
          plusOneName: finalData.plusOneName,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit RSVP")
      }

      return true
    } catch (error) {
      console.error("Error submitting RSVP:", error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAttendance = async (attending: boolean, plusOneName?: string) => {
    if (!selectedGuest) return
    const finalData: RSVPData = {
      guestId: selectedGuest.id,
      guestName: selectedGuest.name,
      attending,
      plusOneName,
    }
    setRsvpData(finalData)

    const success = await submitRSVP(finalData)
    if (success) {
      setCurrentStep(3)
    }
  }

  const handleBackToHome = () => {
    setCurrentStep(1)
    setSelectedGuest(null)
    setRsvpData(null)
  }

  return (
    <div className="mx-auto w-full max-w-md">
      {currentStep < 3 && (
        <div className="mb-8">
          <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        </div>
      )}

      <div className="rounded-2xl bg-card p-6 md:p-8 shadow-lg">
        {currentStep === 1 && <StepGuestSearch onContinue={handleGuestSelect} />}

        {currentStep === 2 && selectedGuest && (
          <StepAttendance
            guest={selectedGuest}
            onContinue={handleAttendance}
            isSubmitting={isSubmitting}
          />
        )}

        {currentStep === 3 && rsvpData && (
          <StepSuccess rsvpData={rsvpData} onBackToHome={handleBackToHome} />
        )}
      </div>
    </div>
  )
}
