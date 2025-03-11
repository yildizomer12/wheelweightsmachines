'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Location = 'uk' | 'tr' | 'in';

interface LocationContextType {
  location: Location;
  setLocation: (loc: Location) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred_location';
const AVAILABLE_LOCATIONS: Location[] = ['uk', 'tr', 'in'];

const COUNTRY_CODES: { [key: string]: Location } = {
  GB: 'uk',
  UK: 'uk',
  TR: 'tr',
  IN: 'in'
};

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocationState] = useState<Location>(() => {
    if (typeof window !== 'undefined') {
      // Check for stored location preference
      const storedLocation = localStorage.getItem(STORAGE_KEY);
      if (storedLocation && AVAILABLE_LOCATIONS.includes(storedLocation as Location)) {
        return storedLocation as Location;
      }
    }
    return 'uk'; // Default to UK until we get the actual location
  });

  useEffect(() => {
    const detectUserLocation = async () => {
      try {
        // Only proceed if there's no stored preference
        if (!localStorage.getItem(STORAGE_KEY)) {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          const countryCode = data.country;
          
          if (countryCode && COUNTRY_CODES[countryCode]) {
            setLocationState(COUNTRY_CODES[countryCode]);
          }
        }
      } catch (error) {
        console.error('Error detecting location:', error);
      }
    };

    if (typeof window !== 'undefined') {
      detectUserLocation();
    }
  }, []);

  // Save location preference whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, location);
    }
  }, [location]);

  const setLocation = (loc: Location) => {
    setLocationState(loc);
  };

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
