interface CityXML {
  country: string[];
  timezone: string[];
  sun: [{ $: { rise: string; set: string } }];
}

interface TemperatureXML {
  $: {
    value: string;
    min: string;
    max: string;
  };
}

interface FeelsLikeXML {
  $: {
    value: string;
  };
}

interface HumidityXML {
  $: {
    value: string;
  };
}

interface PressureXML {
  $: {
    value: string;
  };
}

interface SpeedXML {
  $: {
    value: string;
    name: string;
  };
}

interface DirectionXML {
  $: {
    value: string;
    code: string;
    name: string;
  };
}

interface CloudsXML {
  $: {
    value: string;
    name: string;
  };
}

interface WeatherXML {
  $: {
    number: string;
    value: string;
    icon: string;
  };
}

export interface WeatherXMLResponse {
  current: {
    city: CityXML[];
    temperature: TemperatureXML[];
    feels_like: FeelsLikeXML[];
    humidity: HumidityXML[];
    pressure: PressureXML[];
    wind: {
      speed: SpeedXML[];
      direction: DirectionXML[];
    }[];
    clouds: CloudsXML[];
    weather: WeatherXML[];
    lastupdate: [{ $: { value: string } }];
  };
}
