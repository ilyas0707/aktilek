import React from 'react'
import { useGet } from '../../hooks/get.hook'
import Styles from './Gallery.module.css'

export const Gallery = () => {
    const { data, loading } = useGet('/api/gallery')

    return (
        <div className={Styles.gallery}>
            <div className="container">
                <h3 className={Styles.heading}>Наша школьная жизнь</h3>
                {
                    loading ?
                    <div className="center"><div className="loading"></div></div> :
                    <div className={Styles.block}>
                        {
                            data.map(({ imageUrl }, i) => {
                                return (
                                    <div key={ i } className={Styles.item}>
                                        <img src={ imageUrl } alt={ imageUrl } />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}
