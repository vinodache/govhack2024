'use client'
import {useEffect, useState, useRef, useCallback} from 'react';
import {APIProvider, Map, AdvancedMarker, MapCameraChangedEvent, useMap, Pin} from '@vis.gl/react-google-maps';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import type {Marker} from '@googlemaps/markerclusterer';
import {DropDown1,DropDown2, DropDown3}  from './DropDown';
import {createPOI, createPOIOld, createPOIRd, createPOIAt} from '../lib/utils'

type Poi ={ key: string, location: google.maps.LatLngLiteral }
const locations: Poi[] = createPOI();
const locationsOld: Poi[] = createPOIOld(locations);
const locationsRd: Poi[] = createPOIRd(locations);
const locationsAt: Poi[] = createPOIAt(locations);


const PoiMarkers = (props: {pois: Poi[]}) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
  const clusterer = useRef<MarkerClusterer | null>(null);
  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;
  
    setMarkers(prev => {
      if (marker) {
        return {...prev, [key]: marker};
      } else {
        const newMarkers = {...prev};
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({map});
    }
  }, [map]);
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}
            ref={marker => setMarkerRef(marker, poi.key)}
            >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>
        ))}
      </>
    );
  };

export default function Page(){
  const [locations1, setLocations1] = useState(locations);
  const setLocationValue = (event) => {
    console.log(event);
    console.log(event.target.value);

    switch(event.target.value) {
      case 'all':
        setLocations1(locations);
        break;
      case 'old':
        setLocations1(locationsOld);
        break;
      case 'atmosphere':
        setLocations1(locationsRd);
        break;
      default:
        setLocations1(locationsAt);
    }
  }
  return (
  <APIProvider apiKey={'GIVE API KEY IN HERE'} onLoad={() => console.log('Maps API has loaded.')}>
    <div style={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'flex-end' }}>
    <Map
      defaultZoom={7}
      defaultCenter={ { lat: -37.8136, lng: 144.9631 } }
      mapId='64a9216e7bd28cec'
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
      <PoiMarkers pois={locations1} />
    </Map>
    <div style={{flexDirection: 'column', backgroundColor: '#0072A0'}}>
    <DropDown1 style1={{ display:'flex', flexDirection: 'column',  alignItems: 'flexend', width: '100%', height: '30px', padding: '30px'}} callback={setLocationValue} />
    <DropDown2 style1={{ display:'flex', flexDirection: 'column',  alignItems: 'flexend', width: '80%', height: '30px', padding: '30px'}} callback={setLocationValue} />
    <DropDown3 style1={{ display:'flex', flexDirection: 'column',  alignItems: 'flexend', width: '60%', height: '30px', padding: '30px'}} callback={setLocationValue} />
    </div>
    </div>
  </APIProvider>
 );
}