import React from 'react'
import Styles from './Stats.module.css'
import { useImport } from './../../hooks/import.hook'

export const Stats = () => {
    const { importAll } = useImport()
    const icons = importAll(require.context('./../../assets/icons/stats', false, /\.(png|jpe?g|svg)$/))

    const stats = [
        { icon: icons[0].default, value: '100%', text: 'поступление в университет' },
        { icon: icons[1].default, value: '37', text: 'сотрудников' },
        { icon: icons[2].default, value: '136', text: 'учеников' },
        { icon: icons[3].default, value: '5', text: 'лет опыта работы' },
    ]

    return (
        <div className={Styles.stats}>
            <div className="container">
                <h3 className={Styles.heading}>В чем наша уникальность?</h3>
                <div className={Styles.block}>
                    {
                        stats.map(({ icon, value, text }, i) => {
                            return (
                                <div key={ i } className={Styles.item}>
                                    <div className={Styles.icon}><img src={ icon } alt={text} /></div>
                                    <p>{ value }</p>
                                    <span>{ text }</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
