import { getContext, setContext } from "svelte"

const CONTEXT_KEY = Symbol('selected-tab')

export function createContext() {
    const context = $state({ value: undefined })
    return setContext(CONTEXT_KEY, context)
}

export function useContext(callback) {
    const context = getContext(CONTEXT_KEY) ?? createContext()
    $effect(() => {
        if (context.value !== undefined) return callback(context.value)
    })
    return (isOpen, value) => setSelected(context, isOpen, value)
}

function setSelected(context, isOpen, value) {
    if (isOpen) {
        context.value = value
    } else if (context.value === value) {
        context.value = undefined
    }
    return context
}