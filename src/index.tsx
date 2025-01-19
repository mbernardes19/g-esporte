import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ErrorBoundaryComponent } from './components/ErrorComponent/ErrorComponent'
import { ErrorBoundary } from 'react-error-boundary'
import { NavigationProvider } from '@lib/context/navigationContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <NavigationProvider>
                <App />
            </NavigationProvider>
        </ErrorBoundary>
    </React.StrictMode>
)
