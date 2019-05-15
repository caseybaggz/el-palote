// @flow

import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import useWindowWidth from "../hooks/useWindowWidth"

const styles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
]

type Props = {}

function Map(props: Props): React.Node {
  const width: number = useWindowWidth()
  const isMobile: boolean = React.useMemo(() => width <= 600, [width]);
  const center: {
    lat: number,
    lng: number,
  } = {
    lat: 32.7559865,
    lng: -96.6856557,
  }
  const containerStyle: {
    height: string,
    width: string,
  } = {
    height: isMobile ? "400px" : "100vh",
    width,
  }
  const options = { styles }
  const zoom: number = 16

  return (
    <LoadScript googleMapsApiKey="AIzaSyDW88USokSv-S20TTTCNG6geJajoaQJffg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={zoom}
        center={center}
        options={options}
      >
        <Marker
          position={{
            lat: 32.7559865,
            lng: -96.683467,
          }}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
