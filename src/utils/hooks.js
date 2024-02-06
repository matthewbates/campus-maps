import { useState, useEffect } from "react";

// handles click events outside of <Sidebar /> when the viewports > 768px
export const useClickOutside = (ref, callback) => {
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default function useGeolocation() {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentPosition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setCurrentPosition(currentPosition);
          },
          (error) => {
            console.log(error.message);
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Geolocation is not supported by this browser");
      const enableLocationServicesUrl =
        "https://www.example.com/location-services";
      const message = `Please enable location services by going to ${enableLocationServicesUrl} and allowing the browser to access your location`;
      alert(message);
    }
  }, []);

  return currentPosition;
}
