export type navProps = {
  containerStyles?: React.CSSProperties | string;
  linkStyles?: React.CSSProperties | string;
  underlineStyles?: React.CSSProperties | string;
};

export interface AuthContextType {
  user: UserType | null;
  loading: boolean;
}

export interface LdrLight {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface DataPoint {
  current: number;
  energy: number;
  ldr_light: LdrLight;
  power: number;
  voltage: number;
}

export interface ApiData {
  data: {
    [timestamp: string]: DataPoint;
  };
}

export interface UserType {
  uid: string;
  name: string;
  email: string;
  phoneNumber: number | string;
  role: 'admin' | 'user';
  photoURL: string | null;
}

export interface AuthContextType {
  user: UserType | null;
  loading: boolean;
}