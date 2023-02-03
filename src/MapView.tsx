import { useRef, useEffect } from 'react';
import { initMap } from './utils/initMap';
import { Map } from 'mapbox-gl';
import { generateNewMarker } from './utils/generateNewMarker';

export const MapView = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInitRef = useRef<Map | null>(null);

	useEffect(() => {
		if (mapRef.current) {
			mapInitRef.current = initMap(mapRef.current, [13.3777, 52.5163]);
		}
	}, []);

	useEffect(() => {
		mapInitRef.current &&
			mapInitRef.current.on('dblclick', ({ lngLat }) =>
				generateNewMarker({ map: mapInitRef.current!, ...lngLat })
			);

		return () => {
			mapInitRef.current?.off('dblclick', generateNewMarker);
		};
	}, []);

	return <div ref={mapRef} className="map" />;
};
