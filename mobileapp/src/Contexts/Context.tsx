import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type Context = {
  index: number;
  setContext: Dispatch<SetStateAction<Context>>;
};

const initialContext: Context = {
  index: 4,
  setContext: (): void => {
    throw new Error('setContext function must be overridden');
  },
};

export const AppContext = createContext<Context>(initialContext);

type Props = {
  children?: ReactNode | undefined;
};

export function AppProvider({children}: Props) {
  const [index, setContext] = useState<Context>(initialContext);

  useEffect(() => {}, [index]);

  return (
    <AppContext.Provider value={{...index, setContext}}>
      {children}
    </AppContext.Provider>
  );
}
