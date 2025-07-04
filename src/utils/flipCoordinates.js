export const flipCoordinates = (coords) => {
  return coords.map(([lng, lat]) => [lat, lng]);
};
