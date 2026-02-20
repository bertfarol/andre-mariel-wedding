"use client"

import { cn } from "@/lib/utils"

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            step === currentStep
              ? "w-8 bg-primary"
              : step < currentStep
                ? "w-1.5 bg-primary/60"
                : "w-1.5 bg-border"
          )}
        />
      ))}
    </div>
  )
}
