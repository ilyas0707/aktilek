import React from 'react'
import { useGet } from '../../hooks/get.hook'
import Styles from './GalleryPage.module.css'

export const GalleryPage = () => {
    const { data, loading } = useGet('/api/gallery')

    return (
        <div className={Styles.gallery}>
            <div className="container">
                <h3 className={Styles.heading}>Школьная жизнь</h3>
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
