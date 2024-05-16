import { createContext, useState } from "react"

export const XpContext = createContext({
    xp: 0,
    addXp: (xp) => {},
})

export function XpContextProvider({ children }) {
    const [xp, setXp] = useState(0)

    function addXp(xp) {
        setXp((currentXp) => currentXp + xp)
    }

    const value = {
        xp: xp,
        addXp,
    }

    return <XpContext.Provider value={value}>{children}</XpContext.Provider>
}

export default XpContextProvider
