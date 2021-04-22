import React from 'react'
// import { useGet } from '../../hooks/get.hook'
import Styles from './NewsPage.module.css'

import News1 from './../../assets/news/news1.png'
import News2 from './../../assets/news/news2.png'
import News3 from './../../assets/news/news3.png'

export const NewsPage = () => {
    // const { data, loading } = useGet('/api/news')

    const news = [
        { imageUrl: News1, heading: 'С праздником Нооруз', date: '21 марта, 2021', description: 'Поздравляем всех с праздником Нооруз! Вот так мы отпраздновали этот праздник в нашей школе Ак-Тилек. Наши ученики самые талантливые и старательные!' },
        { imageUrl: News2, heading: 'Второе место в международном турнире', date: '12 марта, 2021', description: 'Каждый ребенок уже рождается со своим особым талантом. Надо лишь вовремя рассмотреть этот дар и создать все условия для его развития. Так случилось и с ученицей 6 класса Ниязовой Маликой.' },
        { imageUrl: News3, heading: 'Неделя кыргызского языка в начальной школе', date: '20 декабря, 2020', description: 'Согласно переписи  населения Кыргызстана 2009 года, родным языком Кыргызский является для 3 830 556 человек, а в качестве второго языка, которым свободно владеют, указали ещё 271 187 человек (в том числе 212 063 этнических узбеков).' },
    ]

    return (
        <div className={Styles.news}>
            <div className="container">
                <h3 className={Styles.heading}>Новости школы</h3>
                {
                    <div className={Styles.block}>
                        {
                            news.map(({ imageUrl, heading, date, description }, i) => {
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
            </div>
        </div>
    )
}
