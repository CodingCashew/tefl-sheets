import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { Sheet, ShoppingCartContextType, ShoppingCartProviderProps } from "../../shared/interfaces";



const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [sheetsInCart, setSheetsInCart] = useState<Sheet[]>([]);

  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data !== "undefined" && data !== null) {
      // console.log("data: ", data);
      setSheetsInCart(JSON.parse(data!));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(sheetsInCart));
  }, [sheetsInCart]);

  function addSheet(newSheet: Sheet) {
    setSheetsInCart((currentSheets: any) => {
      if (currentSheets.find((currentSheet: any) => currentSheet.id === newSheet.id) == null) {
        return [...currentSheets, newSheet];
      } else return currentSheets;
    });
  }

  function removeSheet(id: number) {
    setSheetsInCart((currentSheets) => {
      return currentSheets.filter((sheet) => sheet.id !== id);
    });
  }

  function resetCart() {
    setSheetsInCart(() => {
      return [] as Sheet[];
    });
  }

  const numOfSheets = () => {
    return sheetsInCart.length
  };

  const subtotal = (): number => {
    let currentTotal = 0;
    if (!sheetsInCart.length) return 0;
    for (let sheet of sheetsInCart) {
      currentTotal += Number(sheet.price);
    }
    return currentTotal;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        sheetsInCart,
        setSheetsInCart,
        addSheet,
        removeSheet,
        resetCart,
        numOfSheets,
        subtotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}