import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as xml2js from 'xml2js';
import { WeatherDto } from './../../domain/stadistics/dto/weather.dto';

const API_KEY: string = '2240e6c4face0f3b865ddaabb2030fb4';
const BASE_URL: string = 'https://api.openweathermap.org/data/2.5/weather';

@Injectable()
export class WeatherProvider {
  async getWeather(): Promise<WeatherDto | null> {
    try {
      const response = await axios.get<string>(BASE_URL, {
        params: {
          q: 'Santiago, Puente Alto, CL',
          units: 'metric',
          mode: 'xml',
          appid: API_KEY,
        },
        responseType: 'text',
      });

      const parser = new xml2js.Parser({
        explicitArray: false,
        ignoreAttrs: false,
        charkey: 'value',
      });
      const result = await parser.parseStringPromise(response.data);

      const current = result.current;
      console.log('current:', JSON.stringify(current));

      const weatherDTO: WeatherDto = {
        temperature: parseFloat(current.temperature.$.value),
        temperatureMin: parseFloat(current.temperature.$.min),
        temperatureMax: parseFloat(current.temperature.$.max),
        humidity: parseFloat(current.humidity.$.value),
        weather: current.weather.$.value,
        precipitation: current.precipitation.$.mode,
      };

      return weatherDTO;
    } catch (error) {
      console.error('Error al obtener los datos del tiempo:', error);
      return null;
    }
  }
}
