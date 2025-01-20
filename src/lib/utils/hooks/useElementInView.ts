import { MutableRefObject, useEffect } from 'react'

export const useElementInView = (
    elementRefOrSelectors: (MutableRefObject<Element | null> | string)[],
    handler: (entries?: IntersectionObserverEntry) => void
): void => {
    const observersList: IntersectionObserver[] = []

    useEffect(() => {
        elementRefOrSelectors?.forEach((refOrSelector) => {
            if (typeof refOrSelector === 'string') {
                const elements = document.querySelectorAll(refOrSelector)

                elements.forEach((element) => {
                    if (!element) return
                    const observer = new IntersectionObserver(
                        (entries) => handler(entries[0]),
                        {
                            threshold: 0,
                            rootMargin: '114px 0px -50% 0px'
                        }
                    )
                    observer.observe(element)
                    observersList?.push(observer)
                })
            } else {
                const element = refOrSelector?.current
                if (!element) return
                const observer = new IntersectionObserver((entries) =>
                    handler(entries[0])
                )
                observer.observe(element)
                observersList?.push(observer)
            }
        })

        return () =>
            observersList &&
            observersList.forEach((observer) => observer.disconnect())
    }, [JSON.stringify(elementRefOrSelectors)])
}
