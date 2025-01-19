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
    lastSegment: string
}

export const NavigationContext = createContext<NavigationContextType>({
    path: '',
    push: () => '',
    lastSegment: ''
})

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
    const [path, setPath] = useState(window.location.href)
    const [lastSegment, setLastSegment] = useState(
        window.location.href.split('/').pop() ?? ''
    )

    const push = (newPath: string) => {
        const isRelative = newPath.startsWith('/')
        setPath(isRelative ? `${window.location.origin}${newPath}` : newPath)
    }

    useEffect(() => {
        if (path !== window.location.href) {
            window.location.href = path
        }
        setLastSegment(path.split('/').pop() ?? '')
    }, [path])

    return (
        <NavigationContext.Provider value={{ path, push, lastSegment }}>
            {children}
        </NavigationContext.Provider>
    )
}
