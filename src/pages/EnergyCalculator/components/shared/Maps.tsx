import React, { useEffect, useState } from 'react'
import { useJsApiLoader, GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { CloseCircle, Gps, Location } from 'iconsax-react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, ComboboxOptionText } from '@reach/combobox';
import "@reach/combobox/styles.css";

import { useWatchLocation } from 'pages/EnergyCalculator/utils/useLocation';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

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
    onSelectLocation?: (payload: { lat?: number, lng?: number, address?: string, city?: string }) => void
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
    const [selectedLatLng, setSelectedLatLng] = useState<google.maps.LatLngLiteral>(INITIAL_LAT_LNG)
    const [selectedAddress, setSelectedAddress] = useState<string>()

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '',
        libraries,
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

    const onCenteredMapToCurrentLocation = () => {
        if (!currentLocation?.error) {
            map?.panTo({
                lat: currentLocation!.latitude,
                lng: currentLocation!.longitude
            })
        }
    }

    const onAutoCompletePlaceChanged = ({ lat, lng, address, city }: OnSelectLocationPayload) => {
        map?.panTo({ lat, lng })
        setSelectedLatLng({ lat, lng })
        setSelectedAddress(address)

        if (onSelectLocation) {
            onSelectLocation({ address, lat, lng, city })
        }
    }

    if (currentLocation?.error) {
        console.error(currentLocation.error);
        return <p className='px-3 py-3 px-lg-7 py-lg-3 text-danger'>{currentLocation.error}</p>;
    }

    if (loadError) {
        console.error(loadError.message);
        return <p className='px-3 py-3 px-lg-7 py-lg-3 text-danger'>Error load map. Try again later</p>
    }

    if (!isLoaded) {
        return <p className='px-3 py-3 px-lg-7 py-lg-3'>Loading map...</p>
    }

    const renderSearchBar = () => {
        return <PlaceAutocomplete onSelectLocation={onAutoCompletePlaceChanged} />;
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
            <p className='body-s text-center mt-3 px-3'>{description}</p>
        </>
    )
}

type OnSelectLocationPayload = { lat: number; lng: number; address: string, city: string };
type PlaceAutocompleteProps = {
    onSelectLocation?: (payload: OnSelectLocationPayload) => void
}
const PlaceAutocomplete: React.FC<PlaceAutocompleteProps> = ({ onSelectLocation }) => {
    const {
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete({
        debounce: 300
    })

    const onClearValue = () => {
        setValue("")
        clearSuggestions()
    }

    const onSelect = async (value: string) => {
        setValue(value, false);
        clearSuggestions()

        const [result] = await getGeocode({ address: value })
        const { address_components } = result;
        const { lat, lng } = await getLatLng(result)
        const { long_name } = address_components.find(
            (item) => item.types.includes("administrative_area_level_2")
        ) ?? {}

        if (onSelectLocation) {
            onSelectLocation({
                lat,
                lng,
                address: value,
                city: long_name ?? ''
            })
        }
    }

    const renderSuggestions = () => {
        let message: string;
        switch (status) {
            case "OK":
                return <ComboboxList className='list-box'>
                    {data.map((item) => (
                        <ComboboxOption
                            key={item.place_id}
                            className='list-box-item'
                            value={item.description}
                        >
                            <div className='location-icon ml-2 mr-2'>
                                <Location />
                            </div>
                            <div className='location-description'>
                                <ComboboxOptionText />
                            </div>
                        </ComboboxOption>))}
                </ComboboxList>
            case "NOT_FOUND":
            case "ZERO_RESULTS":
                message = 'Location not found'
                break;
            default:
                message = ''
                break;
        }

        if (!message) {
            return <></>
        }

        return (
            <ComboboxList className='list-box'>
                <div className='list-box-item ml-2'>
                    <p className='mb-0'>{message}</p>
                </div>
            </ComboboxList>
        )
    }

    return <div className='position-relative'>
        <Combobox className='search-bar-container' onSelect={onSelect}>
            <div className={['search-bar', value?.length ? 'active' : ''].join(" ")} >
                <Location />
                <ComboboxInput
                    placeholder='Search your location'
                    autoFocus
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {value?.length ? <CloseCircle onClick={onClearValue} /> : undefined}
            </div>
            <ComboboxPopover portal={false} className="popover">
                {renderSuggestions()}
            </ComboboxPopover>
        </Combobox>
    </div>
}

export default Maps