import React from 'react'
import { useImport } from '../../hooks/import.hook'
import Styles from './DocumentsPage.module.css'

export const DocumentsPage = () => {
    const { importAll } = useImport()
    const icons = importAll(require.context('./../../assets/documents', false, /\.(png|jpe?g|svg)$/))

    return (
        <div className={Styles.documents}>
            <div className="container">
                <h3 className={Styles.heading}>Документы</h3>
                <div className={Styles.block}>
                    <div className={Styles.image}>
                        <img style={{ marginRight: '40px' }} src={ icons[0].default } alt={ icons[0].default } />
                        <img src={ icons[1].default } alt={ icons[1].default } />
                    </div>
                    {
                        icons.filter((el, i) => i === 2 || i === 3).map((el, i) => {
                            return (
                                <div key={ i } className={Styles.image}>
                                    <img src={ el.default } alt={ el.default } />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
