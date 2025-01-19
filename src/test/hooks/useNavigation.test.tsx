import { renderHook } from '@testing-library/react'
import { useNavigation } from '@lib/hooks/useNavigation'
import { NavigationProvider } from '@lib/context/navigationContext'
import { act, FC, PropsWithChildren } from 'react'

let wrapper: FC<PropsWithChildren>

beforeEach(() => {
    Object.defineProperty(window, 'location', {
        value: {
            href: 'https://teste-url.com'
        }
    })

    wrapper = ({ children }) => (
        <NavigationProvider>{children}</NavigationProvider>
    )
})

test('Renderiza useNavigation com o path da página atual', () => {
    const { result } = renderHook(() => useNavigation(), { wrapper })

    expect(result.current.path).toBe('https://teste-url.com')
})

test('Faz push de path relativo ao URL atual', async () => {
    const { result } = renderHook(() => useNavigation(), { wrapper })

    await act(async () => {
        result.current.push('/novo-path')
    })

    expect(result.current.path).toBe('https://teste-url.com/novo-path')
})

test('Faz push de path absoluto ao URL atual', async () => {
    const { result } = renderHook(() => useNavigation(), { wrapper })

    await act(async () => {
        result.current.push('https://novo-url.com')
    })

    expect(result.current.path).toBe('https://novo-url.com')
})
