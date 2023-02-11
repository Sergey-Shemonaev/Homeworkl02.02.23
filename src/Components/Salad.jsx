import React from 'react';

const Salad = () => {
const selFurCoat =[
    'Сельдь (филе) - 300 г',
    'Свекла (крупная) - 1 шт. (400 г)',
    'Яйца 7 шт. = 420 г',
    'Картофель - 4 шт.',
    'Морковь - 2 шт.',
    'Майонез - 100 г',
    'Лук белый салатный - 1 шт.'
]

    return(
        <div className='seld'>
            <ul className='products'>
                {selFurCoat.map((arrSel)=>(
                    <li>{arrSel}</li>
                ))}
            </ul>

            <div className='area_title_stepbystep'>
                <span>Пошаговый фото рецепт</span>
                <span>Сельдь под шубой</span>
            </div>
            <div className='stepImagesN'>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207822.jpg'/>
                    </div>
                    <p>
                        Подготовьте необходимые продукты для салата. Овощи хорошо вымойте. Отделите филе сельди от кожи и костей.
                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207825.jpg'/>
                    </div>
                    <p>
                        Пока овощи варятся, нарежьте филе сельди мелкими кубиками.
                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207826.jpg'/>
                    </div>
                    <p>
                        Салатный лук нарежьте очень мелко.
                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207827.jpg'/>
                    </div>
                    <p>
                        Готовые овощи - картофель и морковь - очистите от кожуры, натрите на крупной терке. (Свекла пока еще варится.)                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207828.jpg'/>
                    </div>
                    <p>
                        В подходящую посуду для слоеного салата "Селёдка под шубой" первым слоем выкладываем натертый картофель (немного картофеля оставляем). Щедро посыпаем его нарезанным луком.                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207829.jpg'/>
                    </div>
                    <p>Смазываем майонезом. </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207830.jpg'/>
                    </div>
                    <p>  На слой картофеля с луком выкладываем нарезанную селёдку.   </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207831.jpg'/>
                    </div>
                    <p>
                        На сельдь выкладываем еще один тонкий слой картофеля, смазываем майонезом.
                        (Если будете готовить не совсем классический вариант салата "Селёдка под шубой", то на данном этапе картофель можно заменить слоем отварного яичного белка или натертого твердого сыра.)
                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207832.jpg'/>
                    </div>
                    <p>
                        На второй слой картофеля выкладываем слой натертой моркови, слегка смазываем майонезом.
                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207833.jpg'/>
                    </div>
                    <p>

                        К этому времени должна свариться свекла. Остужаем ее (в холодной воде), очищаем и натираем на крупной терке.
                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207834.jpg'/>
                    </div>
                    <p>
                        Последним слоем салата выкладываем свёклу и смазываем майонезом. Накрываем салат "Сельдь под шубой" пищевой пленкой и даем салату пропитаться (оставляем в холодильнике на несколько часов)
                    </p>
                </div>
                <div className='stepN'>
                    <div className='imgLeft'>
                        <img src='https://img1.russianfood.com/dycontent/images_upl/208/big_207835.jpg'/>
                    </div>
                    <p>
                        Приятного аппетита!
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Salad;