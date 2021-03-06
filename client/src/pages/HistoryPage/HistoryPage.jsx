import React, { useEffect } from 'react'
import Styles from './HistoryPage.module.css'

import Image from './../../assets/images/history.png'
import Image2 from './../../assets/images/history2.png'
// import Dots from './../../assets/images/dots1.png'

export const HistoryPage = () => {
    useEffect(() => {
        window.scrollTo(0,0);
        return () => {
            window.scrollTo(0,0);
        }
    })

    return (
        <div className={Styles.history}>
            <div className="container">
                <h3 className={Styles.heading}>История школы</h3>
                <div className={Styles.block}>
                    <div className={Styles.top}>
                        {/* <div className={Styles.image}> */}
                            <img src={ Image } alt="history"/>
                            {/* <img src={ Dots } alt="dots" /> */}
                        {/* </div> */}
                        <p>Удивительный этот дом – школа. Здесь все перемешалось: детство и зрелость, юность и романтика, наука и искусство, мечты и реальная жизнь. Какова же судьба нашей школы?  Чтобы учащиеся, и их родители знали  историю школы, в которой учатся их дети, чтобы иметь четкое представление о самой школе. Более половины информации можно получить, зная историю учебного заведения. <br/><br/> После приобретения независимости,  Кыргызстан переживает сложное время социально-экономических преобразований, основанных на рыночной экономике.  В системе образования  республики  также очень много проблем и нерешенных вопросов. Внутренняя миграция, связанная с безработицей, отсутствием рабочих мест в сельской местности и многим другим, привела к тому, что государственные школы, построенные еще в далекие союзные времена, не смогли обеспечить учебными местами всех детей, желающих учиться. И в это время, эту проблему, проблему охвата всех детей учебой, проблему повышения качества обучения, а также обеспечение педагогических кадров работой, начали решать частные общеобразовательные школы, которые стали появляться в столице и  в других регионах республики.</p>
                    </div>
                    <p style={{marginTop: '60px'}}>В августе 2016 года  открывается  новая частная школа – Учебно-воспитательный комплекс «Ак-Тилек» ( лицензия № LВ 160000378 от 20 августа 2016 года).
                        С первых лет школа заявила о себе как об учреждении развития личности. И, одним из главных педагогических условий личностного подхода стало дифференцированное обучение, которое во многом реализовывалось в создании классов с углубленным изучением отдельных предметов. Углубленное изучение английского языка, физики, математики, испанского, итальянского языков и литературы.
                        Школа работает над обеспечением доступности качественного образования, подготовкой детей к жизни в меняющемся мире. Создание нового компьютерного кабинета и школьной библиотеки, позволило внедрить информационные технологии в преподавание предметов разных циклов. В создланном образовательном пространстве открылись возможности проявить свою индивидуальность, обнаружить интересы и склонности, сохранив при этом здоровье высокий уровень преподавания, использование инновационных технологий, разработка учебных планов и программ, участие в экспериментальной деятельности.	
                        Достопримечательностью школы является библиотека имени Софьи Ефимовны Барелко, в которой более 2000 книг художественной литературы, около 1700 учебников. 
                    </p>
                    <ul className={Styles.list}>
                        <p>В школе работают учителя высокой педагогической квалификации:</p>
                        <li>Заслуженный учитель Кыргызской Республики - 1 человек,</li>
                        <li>Отличников образования К.Р. - 8 человек,</li>
                        <li>Имеющих педагогический стаж более 10 лет – 7 человек,</li>
                        <li>Имеющих педагогический стаж более 20 лет – 12 человек,</li>
                        <li>Имеющих педагогический стаж более 40 лет - 6 человек,</li>
                    </ul>
                    <p>Успешно функционируют такие кружки, как: плавание, таэквондо, драм.кружок, хореография, ритмика, хор, ИЗО.
                        Имеется мультимедийный кабинет, оснащенный стационарными компьютерами, широкоформатным экраном, проектором.
                        Учащиеся, выпускники  нашей школы своими успехами и достижениями делают историю нашей школы сейчас и сегодня.</p>
                </div>
                <h3 className={Styles.heading} style={{marginTop: '60px'}}>Наша миссия</h3>
                <div className={Styles.block}>
                    <p>Раскрыть творческий потенциал, найти уникальный дар каждого ученика, обеспечить его успешное личностное, интеллектуальное, духовное, социальное, эмоциональное и физическое развитие на основе достижений общечеловеческой культуры и национальных особенностей.</p>
                    <p className={Styles.title}>Инструменты ее реализации:</p>
                    <div className={Styles.bottom}>
                        <ul className={Styles.list} style={{padding: '0'}}>
                            <li>создание наиболее благоприятных условий развития абсолютно для всех учащихся школы, с учетом различий их склонностей и способностей, используя возможности образовательного пространства школы,</li>
                            <li>развития дополнительного образования,</li>
                            <li>привлечения социальных партнеров,</li>
                            <li>гибко реагировать на социо-культурные изменения среды,</li>
                            <li>адаптировать учащихся к быстроменяющейся жизни,</li>
                            <li>создать возможность каждому ученику для саморазвития и самореализации,</li>
                            <li>обеспечение индивидуальной траектории развития и воспитания учащихся,</li>
                        </ul>
                        {/* <div className={Styles.image}> */}
                            <img src={ Image2 } alt="history2"/>
                            {/* <img src={ Dots } alt="dots" /> */}
                        {/* </div> */}
                    </div>
                    <p className={Styles.title}>Основные направления развития:</p>
                    <p>Переход школы к продуктивному образованию как процессу и результату индивидуальной самореализации человека, происходящей в ходе его образовательной деятельности. Развитие у учащихся языковой культуры для описания ценностей и реалий современной жизни   на иностранных языках (английский, итальянский и испанский). Углубление знаний иностранных языков за счет развития коммуникативно-речевой компетенции при систематическом межкультурном общении с носителями иностранных языков.</p>
                    <p className={Styles.title}>Приоритетные направления развития:</p>
                    <ul className={Styles.list}>
                        <li>внедрение инновационных технологий, в том числе, здоровье сберегающих, с привлечением ученых,</li>
                        <li>развитие творческих способностей обучающихся и навыков самообразования,</li>
                        <li>работа с одаренными детьми,</li>
                        <li>нравственное воспитание, привитие навыков здорового образа жизни,</li>
                        <li>дошкольное образование,</li>
                        <li>предпрофильная и профильная подготовка обучающихся к НЦТ и ОРТ,</li>
                        <li>введение ОРТ.</li>
                    </ul>
                    <p className={Styles.title}>Ожидаемые результаты:</p>
                    <p>Сформированность у выпускников школы социальных компетенций, коммуникативных навыков, готовность выпускников школы к осознанному выбору будущей профессии.</p>
                </div>
            </div>
        </div>
    )
}
