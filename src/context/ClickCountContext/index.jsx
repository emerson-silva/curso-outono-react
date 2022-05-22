import { createContext, useContext, useState } from "react";

const ClickCountContext = createContext();
ClickCountContext.displayName = "ClickCountContextInHook";

export default function ClickCountContextProvider(/*props*/ { children }) {
    //const { children } = { props };
    const [clickCount, setCount] = useState(0);

    const incrementCount = function () {
        setCount(clickCount + 1);
    }

    return (
        <ClickCountContext.Provider value={{ clickCount, incrementCount }}>
            {/* <ClickCountContext.Provider value={{count: count, incrementCount: incrementCount}}> */}
            {children}
        </ClickCountContext.Provider>
    );
}

export function useClickCount() {
    const context = useContext(ClickCountContext);
    if (!context) {
        throw new Error("useClickCount must be used within a ClickCountContextProvider");
    }
    const { clickCount, incrementCount } = context;
    return { clickCount, incrementCount };
}