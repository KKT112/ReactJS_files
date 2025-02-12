import { createContext, useContext, useState } from "react";
interface GlobalContent {
  copy: string;
  setCopy: (c: string) => void;
}
export const MyGlobalContext = createContext<GlobalContent>({
  copy: "Hello World", // set a default value
  setCopy: () => {},
});

export const MyGlobalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [copy, setCopy] = useState<string>("admin");

  return (
    <MyGlobalContext.Provider value={{ copy, setCopy }}>
      {children}
    </MyGlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(MyGlobalContext);
