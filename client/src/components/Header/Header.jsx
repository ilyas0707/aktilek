import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Styles from './Header.module.css'
import Logo from './../../assets/images/logo.png'

export const Header = () => {
    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }

    const links = [
        { label: 'О ШКОЛЕ', target: 'none', menu: [
            { name: 'История школы', url: '/schoolHistory' },
            { name: 'Прием оплаты', url: '/payment' },
            { name: 'Документы', url: '/documents' },
        ] },
        { label: 'О НАС', target: 'none', menu: [
            { name: 'Учителя', url: '/teachers' },
        ] },
        { label: 'ОБРАЗОВАНИЕ', target: 'none', menu: [
            { name: 'Расписание', url: '/timetable' },
            { name: 'Кружки и секции', url: '/courses' },
        ] },
        { label: 'ГАЛЕРЕЯ', target: '/gallery' },
        { label: 'НОВОСТИ', target: '/news' },
        { label: 'КОНТАКТЫ', target: '/contacts' },
    ]

    return (
        <header className={Styles.header}>
            <div className="container">
                <div className={Styles.main}>
                    <NavLink to="/" className={Styles.logo}>
                        <img src={Logo} alt="logo"/>
                    </NavLink>
                    <nav className={`${Styles.menu} ${open ? Styles.active : ''}`}>
                        <ul>
                            {
                                links.map(({ label, target, menu }, i) => {
                                    return (
                                        <li key={ i } className={Styles.item}>
                                            {
                                                target === 'none' ?
                                                <div className={Styles.submenu}>
                                                    <button className={Styles.link}>{ label }</button>
                                                    <ul>
                                                        {
															menu.map(({ name, url }, i) => {
																return (
																	<li key={ i } className={Styles.list}>
																		<NavLink to={ url }>{ name }</NavLink>
																	</li>
																)
															})
														}
                                                    </ul>
                                                </div> :
                                                <NavLink className={Styles.link} to={ target }>
                                                    { label }
                                                </NavLink>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className={`${Styles.hamburger} ${open ? Styles.active : ''}`} onClick={openMenu}>
                        <span className={Styles.line}></span>
                        <span className={Styles.line}></span>
                        <span className={Styles.line}></span>
                    </div>
                </div>
            </div>
        </header>
    )
}
