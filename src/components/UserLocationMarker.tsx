// src/components/UserLocationMarker.tsx
import { Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

export default function UserLocationMarker({
  position,
  size = 20
}: {
  position: google.maps.LatLngLiteral
  size?: number
}) {
  const [ready, setReady] = useState(false)
  
  useEffect(() => {
    // Google Maps APIが完全に読み込まれたことを確認
    if (position && google.maps && google.maps.SymbolPath) {
      setReady(true)
    }
  }, [position])

  if (!ready) return null

  const icon: google.maps.Symbol = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: '#4285F4',
    fillOpacity: 1,
    strokeColor: '#ffffff',
    strokeWeight: 2,
    scale: size / 2 // Google uses radius in px
  }
  
  return <Marker position={position} icon={icon} clickable={false} zIndex={9999} />
}