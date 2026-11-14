const CITY_DATA = [
  ['damascus', 'دمشق', 33.5138, 36.2765, 'كراج القابون الدولي'],
  ['aleppo', 'حلب', 36.2021, 37.1343, 'كراج الراموسة'],
  ['homs', 'حمص', 34.7324, 36.7137, 'كراج البولمان الشمالي'],
  ['hama', 'حماة', 35.1318, 36.7578, 'كراج البولمان المركزي'],
  ['latakia', 'اللاذقية', 35.5317, 35.7901, 'كراج البولمان الجديد'],
  ['tartus', 'طرطوس', 34.8959, 35.8866, 'كراج طرطوس للبولمان'],
  ['idlib', 'إدلب', 35.9306, 36.6339, 'كراج الانطلاق المركزي'],
  ['deir', 'دير الزور', 35.3359, 40.1408, 'كراج البولمان العام'],
  ['raqqa', 'الرقة', 35.95, 39.0167, 'كراج الرقة المركزي'],
  ['hasakah', 'الحسكة', 36.5024, 40.7477, 'كراج الحسكة للبولمان'],
  ['daraa', 'درعا', 32.6189, 36.1021, 'كراج درعا العام'],
  ['sweida', 'السويداء', 32.7081, 36.5695, 'كراج السويداء الجنوبي'],
  ['quneitra', 'القنيطرة', 33.1265, 35.8246, 'محطة انطلاق القنيطرة'],
  ['rif-damascus', 'ريف دمشق', 33.63, 36.46, 'كراج السومرية'],
];

export const CITIES = CITY_DATA.map(([id, name, lat, lng, terminal]) => ({
  id,
  name,
  lat,
  lng,
  terminal,
}));

export function getCityById(id) {
  return (
    CITIES.find(
      (city) =>
        String(city.id) === String(id) ||
        city.name === id ||
        city.slug === id
    ) || CITIES[0]
  );
}

export function calculateApproxDistance(originCity, destinationCity) {
  const latDist = (originCity.lat - destinationCity.lat) * 110;
  const lonDist = (originCity.lng - destinationCity.lng) * 88;
  return Math.max(75, Math.round(Math.hypot(latDist, lonDist) * 1.2));
}
