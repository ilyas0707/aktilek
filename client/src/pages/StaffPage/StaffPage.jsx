import React from 'react'
import { useGet } from '../../hooks/get.hook'
import Styles from './StaffPage.module.css'

import Dots from './../../assets/images/dots1.png'

export const StaffPage = () => {
    const { data, loading } = useGet('/api/staff')

    return (
        <div className={Styles.staff}>
            <div className="container">
                {
                    loading && data.length === 0 ?
                    <div className="center"><div className="loading"></div></div> :
                    <div>
                        <h3 className={Styles.heading}>Наша администрация</h3>
                        <div className={`${Styles.block} ${Styles.fi}`}>
                            {
                                data.filter(el => el.administration === true).map(({ imageUrl, fullname, position }, i) => {
                                    return (
                                        <div key={ i } className={Styles.item}>
                                            <div className={Styles.image}>
                                                <img src={ imageUrl } alt={ fullname } />
                                                <img src={ Dots } alt="dots" />
                                            </div>
                                            <p className={Styles.fullname}>{ fullname }</p>
                                            <p className={Styles.position}>{ position }</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <h3 className={Styles.heading}>Наши учителя</h3>
                        <div className={Styles.block}>
                            {
                                data.filter((el, id) => id === 4).map(({ imageUrl, fullname, position }, i) => {
                                    return (
                                        <div key={ i } className={Styles.item}>
                                            <div className={Styles.image}>
                                                <img src={ imageUrl } alt={ fullname } />
                                                <img src={ Dots } alt="dots" />
                                            </div>
                                            <p className={Styles.fullname}>{ fullname }</p>
                                            <p className={Styles.position}>
                                                Учитель математики высшей квалификационной категории, заместитель директора по УВР
                                            </p>
                                        </div>
                                    )
                                })
                            }
                            {
                                data.filter((el, id) => id === 5).map(({ imageUrl, fullname, position }, i) => {
                                    return (
                                        <div key={ i } className={Styles.item}>
                                            <div className={Styles.image}>
                                                <img src={ imageUrl } alt={ fullname } />
                                                <img src={ Dots } alt="dots" />
                                            </div>
                                            <p className={Styles.fullname}>{ fullname }</p>
                                            <p className={Styles.position}>
                                                Учитель русского языка и литературы высшей квалификационной категории, заместитель директора по воспитательной работе.
                                            </p>
                                        </div>
                                    )
                                })
                            }
                            {
                                data.filter((el, id) => id === 6).map(({ imageUrl, fullname, position }, i) => {
                                    return (
                                        <div key={ i } className={Styles.item}>
                                            <div className={Styles.image}>
                                                <img src={ imageUrl } alt={ fullname } />
                                                <img src={ Dots } alt="dots" />
                                            </div>
                                            <p className={Styles.fullname}>{ fullname }</p>
                                            <p className={Styles.position}>
                                                Учитель начальных классов высшей квалификационной категории, заместитель директора по УВР начальной школы
                                            </p>
                                        </div>
                                    )
                                })
                            }
                            {
                                data.filter(el => el.administration !== true).map(({ imageUrl, fullname, position }, i) => {
                                    return (
                                        <div key={ i } className={Styles.item}>
                                            <div className={Styles.image}>
                                                <img src={ imageUrl } alt={ fullname } />
                                                <img src={ Dots } alt="dots" />
                                            </div>
                                            <p className={Styles.fullname}>{ fullname }</p>
                                            <p className={Styles.position}>{ position }</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
