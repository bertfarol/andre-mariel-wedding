"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail } from "lucide-react"

interface StepEmailProps {
  onContinue: (email: string, sendConfirmation: boolean) => void
}

export function StepEmail({ onContinue }: StepEmailProps) {
  const [email, setEmail] = useState("")
  const [sendConfirmation, setSendConfirmation] = useState(true)

  const isValidEmail = email.length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleContinue = () => {
    onContinue(email, sendConfirmation)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Stay Connected
        </h2>
        <p className="text-muted-foreground">
          Enter your email to receive confirmation and updates
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 pl-10 text-base"
              aria-invalid={!isValidEmail}
            />
          </div>
          {!isValidEmail && (
            <p className="text-sm text-destructive">Please enter a valid email address</p>
          )}
        </div>

        <div className="flex items-start gap-3 rounded-lg border bg-accent/30 p-4">
          <Checkbox
            id="sendConfirmation"
            checked={sendConfirmation}
            onCheckedChange={(checked) => setSendConfirmation(checked as boolean)}
            className="mt-0.5"
          />
          <Label
            htmlFor="sendConfirmation"
            className="cursor-pointer text-sm leading-relaxed text-foreground"
          >
            Send me an RSVP confirmation by email
          </Label>
        </div>
      </div>

      <Button
        onClick={handleContinue}
        disabled={!isValidEmail}
        className="h-12 w-full text-base font-medium"
      >
        Send RSVP
      </Button>
    </div>
  )
}
