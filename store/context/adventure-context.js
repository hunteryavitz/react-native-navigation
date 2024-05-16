import { createContext, useState } from "react"

export const AdventureContext = createContext({
    currentAdventure: null,
    setAdventure: (id) => {},
    clearAdventure: () => {},
})

export function AdventureContextProvider({ children }) {
    const [currentAdventureId, setCurrentAdventureId] = useState(null)

    function setAdventure(id) {
        console.log('setAdventure: ' + id)
        setCurrentAdventureId(id)
    }

    function clearAdventure() {
        setCurrentAdventureId(null)
    }

    const value = {
        currentAdventureId: currentAdventureId,
        setAdventure,
        clearAdventure,
    }

    return <AdventureContext.Provider value={value}>{children}</AdventureContext.Provider>
}

export default AdventureContextProvider
