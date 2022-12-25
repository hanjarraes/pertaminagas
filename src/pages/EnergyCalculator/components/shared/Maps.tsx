import React, { useEffect, useState } from 'react'
import { useJsApiLoader, GoogleMap, MarkerF, InfoWindowF, Autocomplete } from '@react-google-maps/api';
import { Gps } from 'iconsax-react';
import { useWatchLocation } from 'pages/EnergyCalculator/utils/useLocation';

const ZOOM = 15

const INITIAL_LAT_LNG: google.maps.LatLngLiteral = {
    // Monas
    lat: -6.173647786813953,
    lng: 106.8270216629055,
}

const options: google.maps.MapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false
}

type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];
const libraries: Libraries = ["places"]

type MapsProps = {
    selectedLocations?: {
        lat?: number;
        lng?: number;
        address?: string;
    },
    mapContainerStyle?: React.CSSProperties;
    description?: string
    onSelectLocation?: (payload: { lat?: number, lng?: number, address?: string }) => void
}

const Maps: React.FC<MapsProps> = ({
    selectedLocations,
    mapContainerStyle,
    description,
    onSelectLocation
}) => {
    const currentLocation = useWatchLocation()
    const [useInitialCenter, setUseInitialCenter] = useState<boolean>(true)
    const [map, setMap] = useState<google.maps.Map>()
    const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete>()
    const [selectedLatLng, setSelectedLatLng] = useState<google.maps.LatLngLiteral>(INITIAL_LAT_LNG)
    const [selectedAddress, setSelectedAddress] = useState<string>()

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '',
        libraries
    })

    useEffect(() => {
        if (selectedLocations?.lat && selectedLocations.lng) {
            setSelectedLatLng({
                lat: selectedLocations.lat,
                lng: selectedLocations.lng
            })
            setUseInitialCenter(false)
        }

        if (selectedLocations?.address) {
            setSelectedAddress(selectedLocations?.address)
        }
    }, [selectedLocations?.lat, selectedLocations?.lng, selectedLocations?.address])

    const onMapLoad = React.useCallback((map: google.maps.Map) => {
        setMap(map)
    }, [])

    const onMapUnmount = React.useCallback(() => {
        setMap(undefined)
    }, [])

    const onLoadAutoComplete = React.useCallback((autoComplete: google.maps.places.Autocomplete) => {
        setAutoComplete(autoComplete)
    }, [])

    const onCenteredMapToCurrentLocation = () => {
        if (!currentLocation?.error) {
            map?.panTo({
                lat: currentLocation!.latitude,
                lng: currentLocation!.longitude
            })
        }
    }

    const onAutoCompletePlaceChanged = () => {
        if (autoComplete) {
            const getPlace = autoComplete.getPlace()
            const lat = getPlace.geometry?.location?.lat()
            const lng = getPlace.geometry?.location?.lng()
            const address = getPlace.formatted_address;

            if (lat && lng && address) {
                map?.panTo({ lat, lng })
                setSelectedLatLng({ lat, lng })
                setSelectedAddress(address)
            }

            if (onSelectLocation) {
                onSelectLocation({ address, lat, lng })
            }
        } else {
            console.log('Autocomplete is not loaded yet!')
        }
    }

    if (currentLocation?.error) {
        return <p className='px-3 py-3 px-lg-7 py-lg-3 text-danger'>{currentLocation.error}</p>;
    }

    if (loadError) {
        return <p className='px-3 py-3 px-lg-7 py-lg-3 text-danger'>Error load google maps. Try again later</p>
    }

    if (!isLoaded) {
        return <p className='px-3 py-3 px-lg-7 py-lg-3'>Loading...</p>
    }

    const renderSearchBar = () => {
        return <div className='search-bar'>
            <Autocomplete
                onLoad={onLoadAutoComplete}
                onPlaceChanged={onAutoCompletePlaceChanged}
            >
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder='Search your location'
                />
            </Autocomplete>
        </div>
    }

    const renderCenterMapButton = () => {
        return <button
            type='button'
            className='icon-btn centered-map-btn'
            onClick={onCenteredMapToCurrentLocation}
        >
            <Gps />
        </button>
    }

    return (
        <>
            <div className='map-wrapper'>
                {renderSearchBar()}
                {renderCenterMapButton()}
                <GoogleMap
                    center={useInitialCenter ? INITIAL_LAT_LNG : selectedLatLng}
                    options={options}
                    clickableIcons={false}
                    zoom={ZOOM}
                    onLoad={onMapLoad}
                    onUnmount={onMapUnmount}
                    mapContainerStyle={mapContainerStyle}
                >
                    {!useInitialCenter && selectedLatLng ? <>
                        <InfoWindowF
                            position={selectedLatLng}
                            options={{ maxWidth: 300 }}
                        >
                            <p>{selectedAddress ?? '-'}</p>
                        </InfoWindowF>
                        <MarkerF
                            position={selectedLatLng}
                        />
                    </> : undefined}
                </GoogleMap>
            </div>
            <p className='body-s text-center mt-3'>{description}</p>
        </>
    )
}

export default Maps