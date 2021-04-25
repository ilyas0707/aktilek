import React from 'react'
import Styles from './StaffPage.module.css'

import Dots from './../../assets/images/dots1.png'

import Face1 from './../../assets/staff/face4.png'
import Face2 from './../../assets/staff/face5.png'
import Face3 from './../../assets/staff/face6.png'
import Face4 from './../../assets/staff/face7.png'
import Face5 from './../../assets/staff/face1.png'
import Face6 from './../../assets/staff/face2.png'
import Face7 from './../../assets/staff/face3.png'
import Face8 from './../../assets/staff/face8.png'
import Face9 from './../../assets/staff/face9.png'
import Face10 from './../../assets/staff/face10.png'
import Face11 from './../../assets/staff/face11.png'
import Face12 from './../../assets/staff/face12.png'
import Face13 from './../../assets/staff/face13.png'
import Face14 from './../../assets/staff/face14.png'
import Face15 from './../../assets/staff/face15.png'
import Face16 from './../../assets/staff/face16.png'
import Face17 from './../../assets/staff/face17.png'
import Face18 from './../../assets/staff/face18.png'
import Face19 from './../../assets/staff/face19.png'
import Face20 from './../../assets/staff/face20.png'
import Face21 from './../../assets/staff/face21.png'
import Face22 from './../../assets/staff/face22.png'
import Face23 from './../../assets/staff/face23.png'
import Face24 from './../../assets/staff/face24.png'
import Face25 from './../../assets/staff/face25.png'
import Face26 from './../../assets/staff/face26.png'
import Face27 from './../../assets/staff/face27.png'
import Face28 from './../../assets/staff/face28.png'

export const StaffPage = () => {
    const staff = [
        { imageUrl: Face1, fullname: 'Алиева Гулайим Усеновна', position: 'Директор школы', administration: true },
        { imageUrl: Face2, fullname: 'Махнёва Марина Владимировна', position: 'Заместитель директора по УВР', administration: true },
        { imageUrl: Face3, fullname: 'Шелухина Галина Геннадьевна', position: 'Заместитель директора по воспитательной работе', administration: true },
        { imageUrl: Face4, fullname: 'Кашкараева Дидана Алмазбекова', position: 'Заместитель директора по УВР начальной школы', administration: true },
        { imageUrl: Face27, fullname: 'Бейшенбаева Чинара Акматовна', position: 'Администратор, Библиотекарь', administration: true },
        { imageUrl: Face2, fullname: 'Махнёва Марина Владимировна', position: 'Учитель математики высшей квалификационной категории, заместитель директора по УВР', administration: false },
        { imageUrl: Face3, fullname: 'Шелухина Галина Геннадьевна', position: 'Учитель русского языка и литературы высшей квалификационной категории, заместитель директора по воспитательной работе.', administration: false },
        { imageUrl: Face4, fullname: 'Кашкараева Дидана Алмазбекова', position: 'Учитель начальных классов высшей квалификационной категории, заместитель директора по УВР начальной школы', administration: false },
        { imageUrl: Face5, fullname: 'Елисеева Елена Владимировна', position: 'Учитель математики и информатики высшей квалификационной категории', administration: false },
        { imageUrl: Face6, fullname: 'Эсенбаев Анарбек Исмаилович', position: 'Учитель физики высшей квалификационной категории', administration: false },
        { imageUrl: Face7, fullname: 'Четвертных Нина Петровна', position: 'Учитель начальных классов высшей квалификационной категории, отличник образования', administration: false },
        { imageUrl: Face8, fullname: 'Югай Ляна Георгиевна', position: 'Учитель английского языка', administration: false },
        { imageUrl: Face9, fullname: 'Шатова Ольга Олеговна', position: 'Учитель немецкого языка', administration: false },
        { imageUrl: Face10, fullname: 'Дудников Александр Борисович', position: 'Руководитель хора, Лауреат Республиканских и Международных конкурсов и фестивалей', administration: false },
        { imageUrl: Face11, fullname: 'Касмалиева Клара Керимкуловна', position: 'Учитель технологии', administration: false },
        { imageUrl: Face12, fullname: 'Капарова Жаныл Жоробековна', position: 'Учитель кыргызского языка', administration: false },
        { imageUrl: Face13, fullname: 'Миненкова Светлана Геннадьевна', position: 'Учитель английского языка высшей квалификационной категории, победитель конкурса "Учитель года-96", Отличник народного образования', administration: false },
        { imageUrl: Face14, fullname: 'Миненков Игорь Олегович', position: 'Учитель английского языка в старших классах', administration: false },
        { imageUrl: Face15, fullname: 'Кан Людмила Владимировна', position: 'Учитель английского языка. Отличник образования.', administration: false },
        { imageUrl: Face16, fullname: 'Ниязов Муханбек Саринжиевич', position: 'КМС по вольной борьбе, тренер по плаванию.', administration: false },
        { imageUrl: Face17, fullname: 'Мамбеталиева Бегаим Эриковна', position: 'Учитель музыки', administration: false },
        { imageUrl: Face18, fullname: 'Чубаков Сабыр Чубакович', position: 'Тренер по тажквон-до ИТФ, обладатель черного пояса 3 д., призер чемпионата мира, трёхкратный чемпион Азии и Европы, абсолютный чемпион КР и стран СНГ, Мастер спорта КР', administration: false },
        { imageUrl: Face19, fullname: 'Данилова Наталья Васильевна', position: 'Учитель английского языка, председатель ШМО учителей английского языка', administration: false },
        { imageUrl: Face20, fullname: 'Филатова Наталья Павловна', position: 'Учитель английского языка высшей квалификационной категории, Отличник образования', administration: false },
        { imageUrl: Face21, fullname: 'Сайдаева Милана Рашидовна', position: 'Учитель начальных классов, хореограф, вокалистка', administration: false },
        { imageUrl: Face22, fullname: 'Амирова Тамара Жолдыбаевна', position: 'Учитель начальных классов высшей квалификационной категории', administration: false },
        { imageUrl: Face23, fullname: 'Адамкулова Жылдыз Бериковна', position: 'Учитель начальных классов, организатор школьных мероприятий', administration: false },
        { imageUrl: Face24, fullname: 'Рахматов Данияр Рустамович', position: 'Педагог - хореограф', administration: false },
        { imageUrl: Face25, fullname: 'Давлетбаков Саддам Куштарбекович', position: 'Учитель истории и ЧиО', administration: false },
        { imageUrl: Face26, fullname: 'Пугачёва Татьяна Николаевна', position: 'Учитель географии высшей квалификационной категории', administration: false },
        { imageUrl: Face28, fullname: 'Жолбунов Ишенбек Аширакманович', position: 'Учитель истории. Отличник народного образования КР. Высшая категория.', administration: false }
    ]

    return (
        <div className={Styles.staff}>
            <div className="container">
                {
                    <div>
                        <h3 className={Styles.heading}>Наша администрация</h3>
                        <div className={`${Styles.block} ${Styles.fi}`}>
                            {
                                staff.filter(el => el.administration === true).map(({ imageUrl, fullname, position }, i) => {
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
                                staff.filter(el => el.administration !== true).map(({ imageUrl, fullname, position }, i) => {
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
