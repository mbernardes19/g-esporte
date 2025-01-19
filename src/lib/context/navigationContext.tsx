import {
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
    useState
} from 'react'

export type NavigationContextType = {
    path: string
    push: (url: string) => void
}

export const NavigationContext = createContext<NavigationContextType>({
    path: '',
    push: () => ''
})

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
    const [path, setPath] = useState(window.location.href)

    const push = (newPath: string) => {
        const isRelative = newPath.startsWith('/')
        setPath(isRelative ? `${path}${newPath}` : newPath)
    }

    useEffect(() => {
        window.location.href = path
    }, [path])

    return (
        <NavigationContext.Provider value={{ path, push }}>
            {children}
        </NavigationContext.Provider>
    )
}
