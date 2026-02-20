import { RSVPForm } from "@/components/rsvp/rsvp-form"
import { CircleX } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf8f1]  grid place-items-center">
      <a href="/" className="absolute top-5 right-5">
        <CircleX strokeWidth={1} className="text-muted-foreground hover:text-[#232323]" />
      </a>
      {/* RSVP Form Section */}
      <div className="px-4 py-12 md:py-16">
        <RSVPForm />
      </div>
    </main>
  )
}
