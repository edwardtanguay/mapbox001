import { useRef, useEffect } from 'react';
import { initMap } from './utils/initMap';

export const MapView = () => {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (mapRef.current) {
			initMap(mapRef.current, [13.3777,52.5163]);
		}
	}, []);

	return <div ref={mapRef} className="map" />;
};
