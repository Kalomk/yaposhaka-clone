import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks';
import { useState } from 'react';

const mapOptions = {
  zoom: 10,
  center: {
    lat: 49.98595,
    lng: 36.27354,
  },
};

const GoogleMap = () => {
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  return (
    <GoogleMapsProvider
      googleMapsAPIKey="AIzaSyBtybppc3llAVprU6zIIiU-4o0qTH8J5mM"
      mapOptions={mapOptions}
      mapContainer={mapContainer}
    >
      <div
        ref={(node) => setMapContainer(node)}
        style={{ height: 515 }}
        className="map-content"
      ></div>
    </GoogleMapsProvider>
  );
};

export default GoogleMap;
