export const getWeather = async (search: string) => {
  const result = fetch(
    `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_WEATHER_APIKEY
    }&q=${search}&aqi=yes`
  )
    .then((result) => {
      const data = result.json();
      return data;
    })
    .catch((error) => {
      return new Error(error);
    });

  return result;
};
