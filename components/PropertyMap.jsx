"use client";
import React, { useRef, useEffect} from "react";
import opencage from "opencage-api-client";
import "leaflet/dist/leaflet.css";
import shadow from "leaflet/dist/images/marker-shadow.png";
import pin from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const PropertyMap = ({ property }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const getCoords = () => {
      opencage
        .geocode({
          q: `${property.location.street}, ${property.location.city}, ${property.location.state}`,
          key: "ccdd6b244d094a429ef46847e815f8c2",
        })
        .then((data) => {
          if (data.results.length > 0) {
            const place = data.results[0];
            console.log(place)
          } else {
            console.log("status", data.status.message);
            console.log("total_results", data.total_results);
          }
  
          if (map.current) return;
  
          map.current = new L.Map(mapContainer.current, {
            center: L.latLng(
              data.results[0].geometry.lat,
              data.results[0].geometry.lng
            ),
            zoom: 12,
          });
  
          const mtLayer = new MaptilerLayer({
            apiKey: "VIMwqiLjE3iRfbZFlmz2",
          }).addTo(map.current);

          const icon = new L.Icon({
            iconUrl: pin.src,
            shadowUrl: shadow.src,
            iconSize: [35, 50],
            shadowSize: [80, 54],
            shadowAnchor: [25, 40],
          });

          L.marker(
            [data.results[0].geometry.lat, data.results[0].geometry.lng],
            {
              icon,
            }
          ).addTo(map.current);
        });
    }

    getCoords();
      
    }, []);

  return (
    <div className="relative w-full h-[400px]">
      <div ref={mapContainer} className="absolute w-full h-[400px]" />
    </div>
  )
};

export default PropertyMap;