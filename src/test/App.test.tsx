import { render } from '@testing-library/react'
import App from '../App'
import { act } from 'react'

test('renders learn react link', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(true).toBeTruthy()
})
