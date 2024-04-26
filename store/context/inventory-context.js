import { createContext, useState } from "react";

export const InventoryContext = createContext({
    inventory: [],
    addInventory: (id) => {},
    removeInventory: (id) => {},
})

export function InventoryContextProvider({ children }) {
    const [inventoryIds, setInventoryIds] = useState([])

    function addInventory(id) {
        setInventoryIds((currentIds) => [...currentIds, id])
    }

    function removeInventory(id) {
        setInventoryIds((currentIds) => {
            return currentIds.filter((inventoryId) => inventoryId !== id)
        })
    }

    const value = {
        inventory: inventoryIds,
        addInventory,
        removeInventory,
    }

    return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>
}

export default InventoryContextProvider
