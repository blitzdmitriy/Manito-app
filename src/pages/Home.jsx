import { Header } from "../components/Header/Header"
import { Card } from "../components/Card/Card"
import { Side } from "../components/Side/Side"
import { cardArray } from "../constants"
import { sideArray } from "../constants"


export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="conteiner">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-primary search-btn">
                                <img className="search-btn_icon" src="/image/search.svg" alt="" />
                                <span className="search-btn_text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="conteiner">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main_title">Рекомендации для вас</h2>
                                <div className="content-main_list">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }



                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side_title">Сервисы и услуги</h3>
                                <div className="content-side_box">
                                    <div className="content-side_list">
                                        {
                                            sideArray.map(side => (
                                                <Side 
                                                    key={side.id}
                                                    icon={side.icon}
                                                    title={side.title}
                                                    text={side.text}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className="content-side_footer">
                                        <p className="content-side_footer--item">© ООО «Manito», 2011–2021</p>
                                        <a href="#!" className="content-side_footer--item">Политика конфиденциальности</a>
                                        <a href="#!" className="content-side_footer--item">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}