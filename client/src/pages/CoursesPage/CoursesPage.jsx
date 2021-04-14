import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGet } from '../../hooks/get.hook'
import Styles from './CoursesPage.module.css'

import Dots from './../../assets/images/dots1.png'

export const CoursesPage = () => {
    const { data, loading } = useGet('/api/course')

    return (
        <div className={Styles.courses}>
            <div className="container">
                <h3 className={Styles.heading}>Кружки и секции</h3>
                {
                    loading ?
                    <div className="center"><div className="loading"></div></div> :
                    <div>
                        <div className={Styles.block}>
                            {
                                data.map(({ imageUrl, name }, i) => {
                                    return (
                                        <div key={ i } className={Styles.item}>
                                            <div className={Styles.image}>
                                                <img src={ imageUrl } alt={ name } />
                                                <img src={ Dots } alt="dots" />
                                            </div>
                                            <p className={Styles.title}>{ name }</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={Styles.button}>
                            <NavLink to="/timetable">Посмотреть расписание</NavLink>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
