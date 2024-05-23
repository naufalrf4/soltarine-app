export interface BatteryData {
    charging_time: number;
    percentage: number;
    remaining: number;
    used_percentage: number;
  }
  
  export interface CurrentData {
    ampere: number;
    voltage: number;
  }
  
  export interface ApiData {
    battery: BatteryData;
    current: CurrentData;
    efficiency: number;
    energy_production: number;
    temperature: number;
  }
  
  export async function fetchData(): Promise<ApiData> {
    const API_URL = 'http://localhost:3001/api/data';
    const BEARER_TOKEN = 'soltarine-tek59';
  
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return response.json();
  }
  