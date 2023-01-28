import * as React from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../utils/fire";

export const FirebaseAuthContext = React.createContext<{
  user: User | null;
  authenticated: boolean | undefined;
}>({ user: null, authenticated: false });

export type Props = {};

export const FirebaseAuthProvider = (props: React.PropsWithChildren<Props>) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAuthenticated(true);
      }
    });

    return unsub;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ user, authenticated }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  );
};
