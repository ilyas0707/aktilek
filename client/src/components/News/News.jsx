import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGet } from '../../hooks/get.hook'
import Styles from './News.module.css'

export const News = () => {
    const { data, loading } = useGet('/api/news')

    return (
        <div className={Styles.news}>
            <div className="container">
                <h3 className={Styles.heading}>Новости школы</h3>
                {
                    loading ?
                    <div className="center"><div className="loading"></div></div> :
                    <div className={Styles.block}>
                        {
                            data.map(({ imageUrl, heading, date, description }, i) => {
                                return (
                                    <div key={ i } className={Styles.item}>
                                        <img src={ imageUrl } alt={ heading } />
                                        <div className={Styles.text}>
                                            <p className={Styles.title}>{ heading }</p>
                                            <p className={Styles.date}>{ date }</p>
                                            <p className={Styles.description}>{ description }</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <div className={Styles.button}>
                    <NavLink to="/news">Все новости</NavLink>
                </div>
            </div>
        </div>
    )
}
