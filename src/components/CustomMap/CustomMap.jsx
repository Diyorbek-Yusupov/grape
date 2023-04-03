import React, { useEffect } from "react";

import L from "leaflet";

const CustomMap = () => {
  useEffect(() => {
    const myMap = L.map("mapid").setView([50.7940939, 41.1352718], 3);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(myMap);

    const marker1 = L.marker([41.299938, 69.2411461])
      .addTo(myMap)
      .bindPopup("Tashkent")
      .on("click", (e) => {
        e.target.openPopup();
        myMap.flyTo(e.target.getLatLng(), 13.86, { duration: 1 });
        myMap.on("popupopen", () => {});
      });

    const marker2 = L.marker([59.9326159, 30.3551544])
      .addTo(myMap)
      .bindPopup("Sankt Peterburg")
      .on("click", (e) => {
        // e.target.openPopup();
        myMap.flyTo(e.target.getLatLng(), 12.65, { duration: 1 });
        // myMap.on("popupopen", () => {

        // });
      });
  }, []);

  return (
    <div>
      <div id="mapid" style={{ height: "500px" }} />
    </div>
  );
};

export default CustomMap;
