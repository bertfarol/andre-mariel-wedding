"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { Guest } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Check, X, UserPlus, Loader2 } from "lucide-react"
import clsx from "clsx"

interface StepAttendanceProps {
  guest: Guest
  onContinue: (attending: boolean, plusOneName?: string) => void
  isSubmitting?: boolean
}

export function StepAttendance({ guest, onContinue, isSubmitting }: StepAttendanceProps) {
  const [attending, setAttending] = useState<string | null>(null)
  const [plusOneName, setPlusOneName] = useState("")
  const [plusOneError, setPlusOneError] = useState(false)
  const [showPlusOneInput, setShowPlusOneInput] = useState(false)

  const handleContinue = () => {
    if (attending === null) return

    if (!plusOneName?.trim() && showPlusOneInput) {
      console.log("Please enter your guest's full name.");
      setPlusOneError(true)
      return;
    }

    const isAttending = attending === "accept"
    onContinue(isAttending, isAttending && showPlusOneInput ? plusOneName : undefined)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Will You Attend?
        </h2>
        <p className="text-muted-foreground">
          Dear {guest.name}, we would be honored by your presence
        </p>
      </div>

      <RadioGroup
        value={attending || ""}
        onValueChange={(value) => {
          setPlusOneError(false)
          setAttending(value)
        }}
        className="grid gap-4"
      >
        <Label
          htmlFor="accept"
          className={cn(
            "flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all",
            attending === "accept"
              ? "border-primary"         
              : "border-border hover:border-primary/50"
          )}
        >
          <RadioGroupItem value="accept" id="accept" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
            <Check className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="font-medium text-foreground">Accept</p>
            <p className="text-sm text-muted-foreground">I will attend the celebration</p>
          </div>
        </Label>

        <Label
          htmlFor="decline"
          className={cn(
            "flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all",
            attending === "decline"
              ? "border-primary"
              : "border-border hover:border-primary/50"
          )}
        >
          <RadioGroupItem value="decline" id="decline" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
            <X className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <p className="font-medium text-foreground">Decline</p>
            <p className="text-sm text-muted-foreground">I will not be able to attend</p>
          </div>
        </Label>
      </RadioGroup>

      {attending === "accept" && guest.hasPlusOne && (
        <div className="space-y-4 rounded-lg border bg-accent/30 p-4">
          <div className="flex items-center gap-3">
            <UserPlus className="h-5 w-5 text-primary" />
            <p className="font-medium text-foreground">Bringing a Guest?</p>
          </div>
          
          <div className="flex gap-3">
            <Button
              type="button"
              variant={showPlusOneInput ? "default" : "outline"}
              size="sm"
              onClick={() => setShowPlusOneInput(true)}
            >
              Yes
            </Button>
            <Button
              type="button"
              variant={!showPlusOneInput ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setShowPlusOneInput(false)
                setPlusOneName("")
                setPlusOneError(false)
              }}
            >
              No, just me
            </Button>
          </div>

          {showPlusOneInput && (
            <div className="space-y-2">
              <Label htmlFor="plusOneName" className="text-sm text-muted-foreground">
                Guest Full Name<span className="text-red-500">*</span>
              </Label>
              <Input
                id="plusOneName"
                type="text"
                placeholder="Enter your guest's full name"
                value={plusOneName}
                onChange={(e) => { 
                  setPlusOneError(false)
                  setPlusOneName(e.target.value)
                }}
                className={clsx(
                  "h-11 bg-white",
                  plusOneError && "border border-red-500/60"
                )}
              />
              {plusOneError && <span className="text-red-500/70 text-sm">Guest full name is required.</span>}              
            </div>
          )}
        </div>
      )}

      <Button
        onClick={handleContinue}
        disabled={attending === null || isSubmitting}
        className="h-12 w-full text-base font-medium"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit RSVP"
        )}
      </Button>
    </div>
  )
}
