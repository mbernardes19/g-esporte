// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

jest.mock('@lib/env', () => ({
    env: {
        apiEndpoint: '/teste-url',
        debug: 'false'
    }
}))

global.IntersectionObserver = class IntersectionObserver {
    constructor(callback, options) {
        this.callback = callback
        this.options = options
    }
    observe = jest.fn()
    unobserve = jest.fn()
    disconnect = jest.fn()
    takeRecords = jest.fn()
    triggerIntersection = (entries) => {
        this.callback(entries, this)
    }
}
