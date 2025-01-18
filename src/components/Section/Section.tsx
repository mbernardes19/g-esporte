import { FC, PropsWithChildren } from 'react'
import s from './Section.module.scss'
import cn from 'classnames'

export type SectionProps = {
    titulo: string | JSX.Element
    className?: string
} & PropsWithChildren

export const Section: FC<SectionProps> = ({ titulo, className, children }) => {
    return (
        <section className={cn(s['container'], className)}>
            <h2 className={s['titulo']}>{titulo}</h2>
            <div className={s['content']}>{children}</div>
        </section>
    )
}
