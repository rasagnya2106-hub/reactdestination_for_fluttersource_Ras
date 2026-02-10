// AuthContext.jsx
import { createContext } from 'react';

/*
Context value shape:
{
  isAuthenticated: boolean,
  login: () => void,
  logout: () => void
}
*/

const AuthContext = createContext(null);

export default AuthContext;