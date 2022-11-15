import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(props.lng);
  const [lat] = useState(props.lat);
  const [zoom] = useState(14);
  const [API_KEY] = useState('j9AwHDdQ0HNEQu0ibncQ');

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({ color: "#D8D8D8" })
      .setLngLat([lng, lat])
      .addTo(map.current);
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

