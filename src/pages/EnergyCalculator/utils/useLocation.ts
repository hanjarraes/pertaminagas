import { useEffect, useState } from 'react'

const DEFAULT_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
}

type Location = {
  latitude: number
  longitude: number
}

type LocationResult = Location & {
  error?: string
}

export function useWatchLocation(
  options: PositionOptions = DEFAULT_OPTIONS
): LocationResult | undefined {
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  })

  const [error, setError] = useState<string | undefined>(undefined)

  let successCalback: PositionCallback = ({ coords }) => {
    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }

  let errorCallback: PositionErrorCallback = (error) => {
    let errorMessage = 'Unknown location error'
    switch (error.code) {
      case 1:
        errorMessage = 'Your location permission is denied'
        break
      case 2:
        errorMessage = 'Your location position is unavailable'
        break
      case 3:
        errorMessage = 'Your location is timeout. Try again later'
        break
    }

    setError(errorMessage)
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      const watchID = navigator.geolocation.watchPosition(
        successCalback,
        errorCallback,
        options
      )

      return () => {
        navigator.geolocation.clearWatch(watchID)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.enableHighAccuracy, options.maximumAge, options.timeout])

  return {
    ...location,
    error,
  }
}
