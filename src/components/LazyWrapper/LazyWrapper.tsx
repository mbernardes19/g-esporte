import React, { LazyExoticComponent, PropsWithChildren, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'

type LazyWrapperProps<T extends Record<string, unknown>> = {
    Component: LazyExoticComponent<React.ComponentType<T>>
    fallback: JSX.Element
    componentProps?: T
    className?: string
} & PropsWithChildren

export const LazyWrapper = <T extends Record<string, unknown>>({
    Component,
    fallback,
    componentProps,
    children,
    className
}: LazyWrapperProps<T>) => {
    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <div className={cn('w-full', className)} ref={ref}>
            {inView ? (
                <Suspense fallback={fallback}>
                    {/* @ts-expect-error Tipos não batem 100% mas não causa erros */}
                    <Component {...(componentProps ?? {})}>
                        {children}
                    </Component>
                </Suspense>
            ) : (
                fallback
            )}
        </div>
    )
}
