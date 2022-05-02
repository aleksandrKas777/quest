import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal} from "./modal/Modal";
import govorun from "./images/govorun.jpg"
import brest from "./images/Brest.jpg"
import art from './images/aqua.jpg'
import maps from './images/maps.jpg'
import tort from './images/tort.png'
import build from './images/build.jpg'

const arrText = {
    0: {
        task: 'в первом задании тебе нужно ввести номер по которому можно позвонить тебе домой с домофона)',
        modalText: 'Верно!!!'
    },
    1: {
        task: 'А теперь введи код от домофона твой предыдущей квартиры=)',
        modalText: 'На самом деле мы не знали этот код, поэтому тут подошло бы любое значение=))))'
    },
    2: {
        task: 'Этот дом ты должна знать. В ответ нужно записать слово закрашенное красным цветом.',
        modalText: 'ты справилась с этим заданием!!!'
    },
    3: {
        task: 'теперь встань на то место, где было сделано это фото и нажми Ок)))',
        modalText: 'молодец!!!'
    },
    4: {
        task: 'Обернись, за твоей спиной баннер. Иди по направлению стрелки к серому ящику. Переходи дорогу только на зеленый!!! Напиши в ответ номер шкафа)',
        modalText: 'СУПЕР!!!'
    },
    5: {
        task: "Садись на 116 автобус и отправляйся на Кунцевщину) Там есть странный термометр, написано одно, а показывает другое... Запиши в ответ максимальное значение на термометре соответствующее надписи",
        modalText: 'Огонь!!!'
    },
    6: {
        task: "В древности верили, что Землю держат 3 слона, которые стоят на черепахе. Здесь на рынке на черепахе стоит кто-то другой... Кто? )))",
        modalText: "Вау, круто!!!"
    },
    7: {
        task: "Между Кунцевщиной и Спортивной видели сахатых, тебе нужно найти это место и хорошенько там осмотреться. В ответ нужно записать номер телефона, который там найдешь))",
        modalText: "На мозгобойне с тобой всех порвем в следующий раз"
    },
    8: {
        task: "Теперь двигаясь к м.Спортивная нужно найти передвижную перекусочную и в ответ записать ее регистрационный знак",
        modalText: "Молодец!!!"
    },
    9: {
        task: "найди место на фото) примерно где-то здесь на карте)напиши в ответ автора этого рисунка",
        modalText: "ты почти у цели!!!!"

    },
    10: {
        task: "Открой этот тайник и нажми Ок)",
        modalText: "Cупер!!! Приз твой)))"
    }

}

function App() {
    const [stage, setStage] = useState(Number(localStorage.getItem('questJulia')) || 0)
    const [valueInput, setValueInput] = useState('')
    const arrCorrectAnswers = ['170b', 'all', 'говорун', 'all', '334', '96.8', 'лев', '397-50-10', 'a 1161b-2', 'art&shock', 'all']
    const [count, setCount] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [textError, setTextError] = useState('')
//  "homepage": "/quest/build",
    useEffect(() => {
        localStorage.setItem('questJulia', String(stage));
    }, [stage])


    const checkResult = () => {
        if (arrCorrectAnswers[stage] !== 'all') {
            if (valueInput.trim().toLowerCase() === arrCorrectAnswers[stage]) {
                setShowModal(true)
                setValueInput('')
                setTimeout(() => {
                    setShowModal(false)
                    setStage((prev) => prev + 1)
                    setCount(0)
                }, 4000)

            } else {
                if (count === 5) {
                    setTextError('Юль, соберись!!!')
                    setShowModal(true)
                    setTimeout(() => {
                        setShowModal(false)
                        setTextError('')
                        setCount(prev => prev + 1)
                    }, 2000)
                } else if (count === 8) {
                    setTextError('мдееееееееееее!!!')
                    setShowModal(true)
                    setTimeout(() => {
                        setShowModal(false)
                        setTextError('')
                        setCount(prev => prev + 1)
                    }, 2000)
                } else {
                    setCount(prev => prev + 1)
                }
                setValueInput('')

            }
        } else {
            setShowModal(true)
            setTimeout(() => {
                setShowModal(false)
                setValueInput('')
                if (stage === 10) {
                    setStage(100)
                } else {
                    setStage((prev) => prev + 1)
                }

            }, 4000)

        }

    }


    return (
        <div className={`App position-relative`}>
            {showModal &&
                <Modal setShowModal={setShowModal} textModal={textError ? textError : arrText[stage].modalText}/>
            }
            <header className={'mb-2'} style={{backgroundColor: '#7952b3', height: '40px', color: '#FFF'}}>
                <img src={tort} alt={'tort'} style={{height: '92%'}}/>
                <div>Happy Birthday</div>
            </header>
            {stage < 99 && <main className={'p-2 task'}>
                <div className={'mb-2'} style={{
                    border: '4px solid #7952b3',
                    borderRadius: '10px',
                    backgroundColor: '#FFF'
                }}>{arrText[stage].task}</div>

                {stage === 2 && <img src={govorun} style={{width: '100%'}}
                                     alt={'если фото не загрузилось, попроси организаторов сбросить тебе фото в телегу))'}/>
                }
                {stage === 3 && <img src={brest} style={{width: '100%'}}
                                     alt={'если фото не загрузилось, попроси организаторов сбросить тебе фото в телегу))'}/>
                }
                {stage === 10 && <img src={build} style={{width: '100%'}}
                                     alt={'если фото не загрузилось, попроси организаторов сбросить тебе фото в телегу))'}/>}
                {stage === 9 &&
                    <div>
                        <img className={'mb-2'} src={art} style={{width: '100%'}}
                             alt={'если фото не загрузилось, попроси организаторов сбросить тебе фото в телегу'}/>
                        <img src={maps} style={{width: '100%'}}
                             alt={'если фото не загрузилось, попроси организаторов сбросить тебе фото в телегу'}/>
                    </div>}

                <div className={'count'}>
                    <span>{'счетчик неправильных ответов: '}</span><span className={'text-decoration-underline'}
                                                                         style={{color: count < 1 ? '#17790c' : '#810505'}}>{count}</span>
                </div>
                <div className={'d-flex justify-content-center'}>
                    <input className={'form-control w-75 me-2'} value={valueInput}
                           onChange={(e) => setValueInput(e.target.value)}/>
                    <button className={'btn btn-primary btn-text'} onClick={() => checkResult(valueInput)}>OK</button>

                </div>
            </main>}
            {stage === 100 &&
                <button className={'btn btn-primary'} onClick={() => setStage(0)}>Начать заново</button>
            }
        </div>
    );
}

export default App;
