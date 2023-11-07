import { FormEvent, useState } from 'react';

import { getImage } from './api/getImage';

import { WeatherProps } from './types/weather.type';

import backgroundDefault from './assets/img/bluesky.jpg';

import './App.scss';
import { getWeather } from './api/getWeather';

function App() {
  const [weather, setWeather] = useState<WeatherProps | null>();
  const [backgroundImage, setBackgroundImage] = useState(backgroundDefault);

  const searchWeather = async (local: FormEvent<HTMLFormElement>) => {
    local.preventDefault();
    const formData = new FormData(local.target as HTMLFormElement);
    const search = formData.get('q')?.toString() || '';

    const response = await getWeather(search);

    if (response.error) {
      setWeather(null);
      setBackgroundImage(backgroundDefault);
      return null;
    }

    setWeather(response);

    const photo = await getImage(`${search}`);
    photo && setBackgroundImage(photo);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="info">
        <form onSubmit={(local) => searchWeather(local)}>
          <input
            type="search"
            placeholder="Find your location"
            name="q"
            autoComplete="off"
            id="q"
            required
          />
          <input type="submit" value="Search" />
          {weather === null && <span>Location not found</span>}
        </form>

        {weather && (
          <div className="result">
            <p className="name">{weather.location.name}</p>
            <p className="region">{weather.location.region}</p>

            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
              className="condition"
            />
            <p className="temperature">{weather.current.temp_c}°c</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
