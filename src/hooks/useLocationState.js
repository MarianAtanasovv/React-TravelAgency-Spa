import { useState, useEffect, useMemo } from "react";

import * as locationService from "../services/locationService";

const useLocationState = (locationId) => {
  const [location, setLocation] = useState({});

  const controller = useMemo(() => {
    const controller = new AbortController();

    return controller;
  }, []);

  useEffect(() => {
    locationService.getOne(locationId, controller.signal).then((res) => {
      setLocation(res);
    });

    return () => {
      controller.abort();
    };
  }, [locationId, controller]);

  return [location, setLocation];
};

export default useLocationState;
