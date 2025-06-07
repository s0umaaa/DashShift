// src/pages/MapPage.tsx
import { useNavigate } from 'react-router-dom'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { useState, useCallback, useEffect, useRef } from 'react'
import { addDays, format } from 'date-fns'
import { toast } from 'react-toastify'
import { LocateFixed } from 'lucide-react'

import JobPinMarker from '@/components/JobPinMarker'
import UserLocationMarker from '@/components/UserLocationMarker'
import DateTabs from '@/components/DateTabs'
import SearchBar from '@/components/SearchBar'
import { Job } from '@/types/job'
import { MOCK_JOBS } from '@/mocks/jobs'

const MAP_CENTER = { lat: -37.812, lng: 144.964 }

export default function MapPage() {
  const navigate = useNavigate()

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    language: 'en',
    region: 'AU'
  })

  /* ─────────────── state ─────────────── */
  const [selectedDateIdx, setSelectedDateIdx] = useState(0)
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS)
  const [mapCenter, setMapCenter] = useState(MAP_CENTER)
  const [userPos, setUserPos] = useState<google.maps.LatLngLiteral | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false) // 新しい状態を追加
  const mapRef = useRef<google.maps.Map | null>(null)

  /* ─────────────── helpers ─────────────── */
  const dateStr = (idx: number) => format(addDays(new Date(), idx), 'yyyy-MM-dd')

  /* ─────────────── job fetch ─────────────── */
  const fetchJobs = useCallback(async (idx: number) => {
    try {
      const res = await fetch(`https://backend-mtisslsng-somas-projects-8022b24c.vercel.app/jobs?date=${dateStr(idx)}`)
      if (!res.ok) throw new Error('backend error')
      const data = (await res.json()) as Job[]
      setJobs(data.length ? data : MOCK_JOBS)
    } catch (error) {
      console.error('Error fetching jobs:', error)
      setJobs(MOCK_JOBS)
    }
  }, [])

  useEffect(() => {
    fetchJobs(selectedDateIdx)
  }, [selectedDateIdx, fetchJobs])

  /* ─────────────── geolocation ─────────────── */
  const requestLocate = useCallback(() => {
    if (!('geolocation' in navigator)) {
      toast.error('Geolocation not supported in this browser.')
      return
    }
    
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const pos = { lat: coords.latitude, lng: coords.longitude }
        setUserPos(pos)
        
        // マップが読み込まれている場合のみマップの中心を変更
        if (mapLoaded && mapRef.current) {
          setMapCenter(pos)
          mapRef.current.panTo(pos)
        }
      },
      (error) => {
        console.error('Geolocation error:', error)
        toast.error('Unable to retrieve location information.')
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    )
  }, [mapLoaded])

  /* マップロード後に位置情報を取得 */
  useEffect(() => {
    if (mapLoaded) {
      requestLocate()
    }
  }, [mapLoaded, requestLocate])

  /* ─────────────── render ─────────────── */
  return (
    <div className="flex flex-col items-center px-4 space-y-4 pt-4">
      <SearchBar />
      <DateTabs value={selectedDateIdx} onChange={setSelectedDateIdx} />

      {/* Map height limited to 70 vh so content below remains visible */}
      <div className="relative w-full h-[70vh] overflow-hidden rounded-lg shadow">
        {isLoaded && !loadError ? (
          <>
            <GoogleMap
              mapContainerClassName="w-full h-full"
              center={mapCenter}
              zoom={13}
              onLoad={(map: google.maps.Map): void => {
                mapRef.current = map
                setMapLoaded(true) // マップ読み込み完了のフラグを設定
              }}
              options={{
                disableDefaultUI: true,
                clickableIcons: false,
                gestureHandling: 'greedy'
              }}
            >
              {/* マップとマーカーが両方読み込まれている場合のみマーカーを表示 */}
              {mapLoaded && userPos && <UserLocationMarker position={userPos} />}

              {mapLoaded && jobs.map((job) => (
                <JobPinMarker
                  key={job.id}
                  job={job}
                  onClick={(id) => navigate(`/jobs/${id}`)}
                />
              ))}
            </GoogleMap>

            {/* Current-location floating action button */}
            <button
              type="button"
              aria-label="Locate me"
              onClick={requestLocate}
              className="absolute bottom-3 right-3 rounded-full bg-white shadow-md p-3 hover:bg-primary/10"
            >
              <LocateFixed className="w-6 h-6 text-primary" />
            </button>
          </>
        ) : (
          <p className="flex h-full items-center justify-center">
            {loadError ? 'Error loading map.' : 'Loading Map…'}
          </p>
        )}
      </div>
    </div>
  )
}