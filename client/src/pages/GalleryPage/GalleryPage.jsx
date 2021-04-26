import React, { useEffect } from 'react'
// import { useGet } from '../../hooks/get.hook'
import Styles from './GalleryPage.module.css'

import Gallery1 from './../../assets/gallery/image1.png'
import Gallery2 from './../../assets/gallery/image2.png'
import Gallery3 from './../../assets/gallery/image3.png'
import Gallery4 from './../../assets/gallery/image4.png'
import Gallery5 from './../../assets/gallery/image5.png'
import Gallery6 from './../../assets/gallery/image6.png'
import Gallery7 from './../../assets/gallery/image7.png'
import Gallery8 from './../../assets/gallery/image8.png'

export const GalleryPage = () => {
    // const { data, loading } = useGet('/api/gallery')

    useEffect(() => {
        window.scrollTo(0,0);
        return () => {
            window.scrollTo(0,0);
        }
    })

    const gallery = [
        { imageUrl: Gallery1 },
        { imageUrl: Gallery2 },
        { imageUrl: Gallery3 },
        { imageUrl: Gallery4 },
        { imageUrl: Gallery5 },
        { imageUrl: Gallery6 },
        { imageUrl: Gallery7 },
        { imageUrl: Gallery8 },
    ]

    return (
        <div className={Styles.gallery}>
            <div className="container">
                <h3 className={Styles.heading}>Школьная жизнь</h3>
                {
                    <div className={Styles.block}>
                        {
                            gallery.map(({ imageUrl }, i) => {
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
