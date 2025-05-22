// src/pages/WorkerProfilePage.tsx
import BadgeIcon from '@/components/BadgeIcon'

export default function WorkerProfilePage() {
  return (
    <div className="w-full px-4 space-y-6">
      <div className="mt-4 flex flex-col items-center space-y-3 rounded-xl bg-primary/10 p-6">
        <img
          src="/avatar-placeholder.png"
          alt="avatar"
          className="h-24 w-24 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold">Michael</h1>

        <div className="grid w-full grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold">$1,200</div>
            <div className="text-sm text-primary">earned</div>
          </div>
          <div>
            <div className="text-3xl font-bold">94%</div>
            <div className="text-sm text-primary">rate</div>
          </div>
        </div>
      </div>

      {/* Badges ― 立体メダル風に表示 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex justify-around">
          <BadgeIcon badge="waiter" count={12} variant="gradient" />
          <BadgeIcon badge="cook" count={7} variant="gradient" />
          <BadgeIcon badge="dishwasher" count={2} variant="gradient" />
        </div>
      </section>

      <button
        type="button"
        className="w-full rounded-lg bg-primary py-2 font-semibold text-white shadow"
      >
        Edit Profile
      </button>
    </div>
  )
}
