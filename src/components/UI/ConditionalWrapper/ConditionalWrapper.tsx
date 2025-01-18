interface ConditionalWrapper {
    condition?: boolean
    children: React.ReactNode
    wrapper: (children: React.ReactNode) => JSX.Element
}

const ConditionalWrapper = ({
    condition = false,
    wrapper,
    children
}: ConditionalWrapper): JSX.Element => {
    return condition ? wrapper(children) : <>{children}</>
}

export default ConditionalWrapper
