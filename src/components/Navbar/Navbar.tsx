import { ListaPartida } from '@customTypes/api'
import { FC, useState } from 'react'
import { PartidaLink } from '@components/PartidaLink/PartidaLink'
import s from './Navbar.module.scss'
import cn from 'classnames'

type NavbarProps = {
    items: ListaPartida[]
}

export const Navbar: FC<NavbarProps> = ({ items }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className={s['nav-container']}>
            <div className={cn(s['mobile-nav-container'])}>
                <button
                    className={s['mobile-nav-toggle']}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div />
                    <div />
                    <div />
                </button>
            </div>
            <nav
                className={cn(s['nav-links'], {
                    [s['expanded']]: isExpanded
                })}
            >
                <ul>
                    {items.map((item, idx) => (
                        <li key={idx}>
                            <PartidaLink
                                texto={item.Texto}
                                codigo={item.Codigo}
                                isSelected={item.Selected}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
