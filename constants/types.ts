import { User } from "firebase/auth";

export type navProps = {
  containerStyles?: React.CSSProperties | string;
  linkStyles?: React.CSSProperties | string;
  underlineStyles?: React.CSSProperties | string;
};

export interface AuthContextType {
  user: User | null;
  loading: boolean;
}
