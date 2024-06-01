import { db } from '@/utils/firebase';
import { ref, onValue } from 'firebase/database';
import { SetStateAction } from 'react';

interface LdrLightData {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

interface FirebaseData {
  current: number;
  energy: number;
  ldr_light: LdrLightData;
  power: number;
  voltage: number;
}

interface ApiData {
  latestTimestamp: SetStateAction<number>;
  data: {
    [timestamp: string]: FirebaseData;
  };
}

export function fetchDataRealTime(callback: (data: ApiData) => void) {
  const dbRef = ref(db, 'data');
  onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
      const data: ApiData = {
        data: snapshot.val(),
        latestTimestamp: 0
      };
      callback(data);
    } else {
      console.error('No data available');
    }
  }, (error) => {
    console.error('Error fetching real-time data:', error);
  });
}
