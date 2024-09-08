import { stringify } from "querystring";
import * as data from "../lib/VICTORIAN_ROAD_CRASH_DATA_backup.json"

export function createPOIOld(locations) {
    const poiarray = [];
    for(let i=0;i<20;i++) {
        poiarray.push(locations[i*2])
    }
    return poiarray;
}
export function createPOIRd(locations) {
    const poiarray = [];

    for(let i=30;i<40;i++) {
        poiarray.push(locations[i])

    }
    return poiarray;

}
export function createPOIAt(locations) {
    const poiarray = [];

    for(let i=50;i<80;i++) {
        poiarray.push(locations[i+2])

    }
    return poiarray;

}

export function createPOI() {
    // {key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108  }},
	// "features" : [
	// 	{
	// 		"type" : "Feature",
	// 		"geometry" : {
	// 			"type" : "Point",
	// 			"coordinates" : [ 145.726709, -38.234957 ]
	// 		},
	// 		"properties" : {
	// 			"ACCIDENT_NO" : "T20120000009",

	// 			"LATITUDE" : -38.234957,
	// 			"LONGITUDE" : 145.726709,
	// 			"VICGRID_X" : 2563628.962,
	// 			"VICGRID_Y" : 2362700.434,
	// 			"TOTAL_PERSONS" : 2,

    class POI {
        key: string;
        location:object;
        type: string;
      }
      class Location {
        lat: number;
        lng: number;
      }
    const poiarray = [];
    for(let i=0;i<100;i++) {
    const poi = new POI();
    const location = new Location();
    poi.key = data.features[i].properties.ACCIDENT_NO;

    location.lat = data.features[i].properties.LATITUDE;
    location.lng = data.features[i].properties.LONGITUDE;
    poi.location = location;
    console.log("Value of Accident poi "+poi);
    poiarray.push(poi);
    }
    return poiarray;
}