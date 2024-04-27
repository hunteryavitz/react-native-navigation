import { createContext, useState } from "react"

export const XpContext = createContext({
    xp: 0,
    addXp: (xp) => {},
    // removeXp: (xp) => {},
})

export function XpContextProvider({ children }) {
    const [xp, setXp] = useState(0)

    function addXp(xp) {
        setXp((currentXp) => currentXp + xp)
    }

    // function removeXp(xp) {
    //     setXp((currentXp) => {
    //         return currentXp.filter((xp) => xp !== xp)
    //     })
    // }

    const value = {
        xp: xp,
        addXp,
        // removeXp,
    }

    return <XpContext.Provider value={value}>{children}</XpContext.Provider>
}

export default XpContextProvider
