// src/pages/EmployerProfilePage.tsx
import { MapPin } from 'lucide-react'

export default function EmployerProfilePage() {
  return (
    <div className="w-full px-4 space-y-6">
      <div className="rounded-xl bg-primary/10 p-6 flex flex-col items-center space-y-3 mt-4">
        <img
          src="/cafe-placeholder.jpg"
          alt="cafe"
          className="w-32 h-32 rounded-lg object-cover"
        />
        <h1 className="text-2xl font-bold">Vivid Coffee</h1>
        <p className="text-center text-sm text-gray-700">
          Specialty coffee shop serving ethically sourced beans and fresh pastries. We
          focus on delivering friendly service and a warm community atmosphere.
        </p>
        <div className="flex items-center gap-1 text-primary text-sm">
          <MapPin className="w-4 h-4" />
          123 Collins St, Melbourne
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About Us</h2>
        <p>
          We have been part of the Melbourne coffee scene since 2015, recognised for our
          barista-led approach. Our team of 12 prides itself on quality, consistency, and
          creativity. Join us if you’re passionate about hospitality and great coffee!
        </p>
      </section>

      <button
        type="button"
        className="w-full py-2 rounded-lg bg-primary text-white font-semibold shadow"
      >
        Edit Shop Profile
      </button>
    </div>
  )
}
