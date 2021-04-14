import React from 'react'
import Styles from './PaymentPage.module.css'

export const PaymentPage = () => {
    return (
        <div className={Styles.payment}>
            <div className="container">
                <h3 className={Styles.heading}>Прием оплаты</h3>
                <div className={Styles.block}>
                    <p>Наши реквизиты</p>
                    <p>
                        Адрес:  Малдыбаева 54 <br/>
                        ИНН:     01507201610032 <br/>
                        ОКПО:   29413533 <br/>
                        Реквизиты банка: ОАО “Коммерческий банк “Кыргызстан” <br/>
                        Расчетный счет:  1030120000410260 <br/>
                        БИК банка:           103001 <br/>
                        В назначении указать: Ф.И.О. ученика и класс обучения <br/> 
                    </p>
                </div>
            </div>
        </div>
    )
}
