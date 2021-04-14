import React from 'react'
import { useImport } from '../../hooks/import.hook'
import Styles from './Footer.module.css'

import Logo from './../../assets/images/logo_white.png'

export const Footer = () => {
    const { importAll } = useImport()
    const icons = importAll(require.context('./../../assets/icons/footer', false, /\.(png|jpe?g|svg)$/))

    return (
        <footer className={Styles.footer}>
            <div className="container">
                <div className={Styles.block}>
                    <div className={Styles.left}>
                        <img src={ Logo } alt="logo"/>
                        <div className={Styles.contacts}>
                            <p>Наши контакты</p>
                            <ul className={Styles.list}>
                                <li className={Styles.item}>
                                    <span><img src={ icons[1].default } alt="icon1"/></span>
                                    г. Бишкек <br/> ул.Малдыбаева, 54
                                </li>
                                <li className={Styles.item}>
                                    <span><img src={ icons[2].default } alt="icon2"/></span>
                                    <div className={Styles.links}>
                                        <a href="tel:+996773696513">0773-696-513</a>
                                        <a href="tel:+996700455123">0700-455-123</a>
                                        <a href="tel:+996550455123">0550-455-123</a>
                                    </div>
                                </li>
                                <li className={Styles.item}>
                                    <span><img src={ icons[3].default } alt="icon3"/></span>
                                    <a href="mailto:aktilekschool@gmail.com">aktilekschool@gmail.com</a>
                                </li>
                            </ul>
                            <ul className={Styles.social}>
                                <li className={Styles.item}><a href="/"><img src={ icons[4].default } alt="icon4"/></a></li>
                                <li className={Styles.item}><a href="/"><img src={ icons[5].default } alt="icon5"/></a></li>
                                <li className={Styles.item}><a href="/"><img src={ icons[0].default } alt="icon6"/></a></li>
                            </ul>
                        </div>
                        <div className={Styles.about}>
                            <p>О нас</p>
                            <ul>
                                <li className={Styles.item}><a href="/">Наша миссия</a></li>
                                <li className={Styles.item}><a href="/">Наша команда</a></li>
                                <li className={Styles.item}><a href="/">Новости</a></li>
                                <li className={Styles.item}><a href="/">Галлерея</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.right}>
                        <div className={Styles.map}>
                            <p>Мы на карте</p>
                            <div id="map" className="map" style={{width: '100%', height: '275px'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
