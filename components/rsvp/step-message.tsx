"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Heart, Loader2 } from "lucide-react"

interface StepMessageProps {
  onContinue: (message?: string) => void
  onSkip: () => void
  isSubmitting?: boolean
}

export function StepMessage({ onContinue, onSkip, isSubmitting }: StepMessageProps) {
  const [message, setMessage] = useState("")

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Heart className="h-6 w-6 text-primary" />
        </div>
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          A Note for the Couple
        </h2>
        <p className="text-muted-foreground">
          Share your warm wishes or a special message (optional)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Your Message
        </Label>
        <Textarea
          id="message"
          placeholder="Write your heartfelt message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-32 resize-none text-base"
          rows={5}
        />
        <p className="text-right text-xs text-muted-foreground">
          {message.length}/500 characters
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          onClick={() => onContinue(message || undefined)}
          disabled={message.length === 0 || isSubmitting}
          className="h-12 w-full text-base font-medium"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Continue"
          )}
        </Button>
        <Button
          variant="ghost"
          onClick={onSkip}
          disabled={isSubmitting}
          className="h-12 w-full text-base font-medium text-muted-foreground"
        >
          {isSubmitting ? "Please wait..." : "Skip this step"}
        </Button>
      </div>
    </div>
  )
}
