import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGet } from '../../hooks/get.hook';
import Styles from "./Staff.module.css";

export const Staff = () => {
    const { data, loading } = useGet('/api/staff')

    return (
        <div className={Styles.staff}>
            <div className="container">
                <h3 className={Styles.heading}>Наши учителя</h3>
                {
                    loading ?
                    <div className="center"><div className="loading"></div></div> :
                    <div className={Styles.block}>
                        {
                            data.filter((el, i) => i === 0 || i === 1 || i === 2).map(({ imageUrl, fullname, position }, i) => {
                                return (
                                    <div key={ i } className={Styles.item}>
                                        <img src={ imageUrl } alt={ fullname } />
                                        <p className={Styles.fullname}>{ fullname }</p>
                                        <p className={Styles.position}>{ position }</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <div className={Styles.button}>
                    <NavLink to="/teachers">Посмотреть все</NavLink>
                </div>
            </div>
        </div>
    )
}
