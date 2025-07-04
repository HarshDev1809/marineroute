export default function formatCoordinates(lat, lng) {
  const formattedLng = `${Math.abs(lng).toFixed(4)}° ${lng < 0 ? 'W' : 'E'}`;
  const formattedLat = `${Math.abs(lat).toFixed(4)}° ${lat < 0 ? 'S' : 'N'}`;
  return [formattedLng, formattedLat];
}
