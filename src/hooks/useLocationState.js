import { useState, useEffect, useMemo } from "react";

import * as locationService from "../services/countriesService";

const useLocationState = (locationId) => {
  const [location, setLocation] = useState({});

  const controller = useMemo(() => {
    const controller = new AbortController();

    return controller;
  }, []);

  useEffect(() => {
    locationService.getOne(locationId).then((locationResult) => {
      setLocation(locationResult);
    });

    return () => {
      controller.abort();
    };
  }, [locationId, controller]);

  return [location, setLocation];
};

export default useLocationState;
