// src/pages/JobPostPage.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BADGE_META } from '@/mocks/badges'

export default function JobPostPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    start: '',
    end: '',
    wage: '',
    wageType: 'hour',
    street: '',
    badge: 'waiter'
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // ここでは単にアラート後に Hire ページへ遷移
    alert('Job posted!')
    navigate('/hire')
  }

  return (
    <div className="w-full px-4 space-y-6 pt-4">
      <h1 className="text-2xl font-bold">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            value={form.street}
            name="street"
            placeholder="Street"
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="time"
            name="start"
            value={form.start}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="time"
            name="end"
            value={form.end}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            name="wage"
            placeholder="Wage"
            value={form.wage}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <select name="wageType" value={form.wageType} onChange={handleChange} className="border rounded px-3 py-2">
            <option value="hour">per hour</option>
            <option value="day">per day</option>
          </select>
        </div>
        <select name="badge" value={form.badge} onChange={handleChange} className="w-full border rounded px-3 py-2">
          {Object.keys(BADGE_META).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>

        <button type="submit" className="w-full py-2 rounded-lg bg-primary text-white font-semibold shadow">
          Post Job
        </button>
      </form>
    </div>
  )
}
