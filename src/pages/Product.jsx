import { useOutletContext, useParams } from "react-router"
import { Side } from "../components/Side/Side"
import { sideArray } from "../constants"


export const Product = () => {
    const {products} = useOutletContext()

    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id)
    return (
       <section className="content">
                    <div className="conteiner">
                        {findProduct ? 
                        <div className="content-box">
                            <div className="content-product">
                                <div className="content-product_left">
                                    <h2 className="content-product_title">{findProduct.title}</h2>
                                    <img src= {findProduct.img} alt= {findProduct.title} className="content-product_img" />
                                    <p className="content-product_title">
                                        {findProduct.description}</p>
                                </div>
                                <div className="content-product_right">
                                    <h2 className="content-product_price">{findProduct.price}</h2>
                                    <button className="btn btn-primary btn-large">Подать объявление</button>
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
                        : 
                        <h2>Эй, ты чо нна? Такого у нас нетУ.</h2>}
                        
                    </div>
                </section>

    )
}