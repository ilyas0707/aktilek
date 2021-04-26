import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import { useGet } from '../../hooks/get.hook'
import Styles from './CoursesPage.module.css'

import Dots from './../../assets/images/dots1.png'
import Courses1 from './../../assets/courses/courses1.png'
import Courses2 from './../../assets/courses/courses2.png'
import Courses3 from './../../assets/courses/courses3.png'
import Courses4 from './../../assets/courses/courses4.png'
import Courses5 from './../../assets/courses/courses5.png'
import Courses6 from './../../assets/courses/courses6.png'
import Courses7 from './../../assets/courses/courses7.png'
import Courses8 from './../../assets/courses/courses8.png'

export const CoursesPage = () => {
    // const { data, loading } = useGet('/api/course')

    useEffect(() => {
        window.scrollTo(0,0);
        return () => {
            window.scrollTo(0,0);
        }
    })

    const courses = [
        { imageUrl: Courses1, name: 'Плавание' },
        { imageUrl: Courses2, name: 'Драм. кружок' },
        { imageUrl: Courses3, name: 'Хореография' },
        { imageUrl: Courses4, name: 'Ритмика' },
        { imageUrl: Courses5, name: 'Хор' },
        { imageUrl: Courses6, name: 'Таеквондо' },
        { imageUrl: Courses7, name: 'Программирование' },
        { imageUrl: Courses8, name: 'ИЗО' },
    ]

    return (
        <div className={Styles.courses}>
            <div className="container">
                <h3 className={Styles.heading}>Кружки и секции</h3>
                {
                    <div>
                        <div className={Styles.block}>
                            {
                                courses.map(({ imageUrl, name }, i) => {
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
