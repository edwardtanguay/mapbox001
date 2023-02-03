import { Map } from 'mapbox-gl';

export const initMap = (container: HTMLDivElement, coords: [number, number]) => {

	return new Map({
		container,
        style: 'mapbox://styles/mapbox/streets-v11',
        // style: 'mapbox://styles/mapbox/satellite-v9',
        pitchWithRotate: false,
        center: coords,
        zoom: 10,
        accessToken: import.meta.env.VITE_ACCESS_TOKEN as string,
        doubleClickZoom: false
	});
}
