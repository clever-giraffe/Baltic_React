import React from 'react';
import "./ProuctSectionStyle.css"
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ProductItem from "./components/ProductItem/ProductItem";
import image1 from "../Product/images/1-shop.jpg"
import image2 from "../Product/images/2-shop.jpg"
import image3 from "../Product/images/3-shop.jpg"
import image4 from "../Product/images/4-shop.jpg"
import image5 from "../Product/images/5-shop.jpg"
import image6 from "../Product/images/6-shop.jpg"
import image7 from "../Product/images/7-shop.jpg"
import image8 from "../Product/images/8-shop.jpg"
import image9 from "../Product/images/9-shop.jpg"

export default function ProductSection() {
    return (
        <div id={"Product"}>
            <TitleBlock title={"Услуги"}
            />
            <div className="shop-grid">
            <ProductItem className="shop-item"
                src={image1}
                title={"Уборка квартир/домов"}
                description={"ежедневная/генеральная,после пожара /ремонта"}
            />
            <ProductItem className="shop-item"
                src={image2}
                 title={"Уборка офисов/ произв. помещений"}
                description={"ежедневная/генеральная"}
            />
            <ProductItem className="shop-item"
                src={image3}
                title={"Импрегнация бетона"}
                description={"бетонные полы, стены"}
            />
            <ProductItem className="shop-item"
                src={image4}
                title={"Мойка окон любой сложности"}
                description={"телескопические удавки, высотой до 25м"}
            />
            <ProductItem className="shop-item"
                src={image5}
                title={"Воскование полов"}
                description={"так же снятие старого воска"}
            />
            <ProductItem className="shop-item"
                src={image6}
                title={"Чистка и полировка камня"}
                description={"мрамор, гранит, каменная масса"}
            />
            <ProductItem className="shop-item"
                src={image7}
                title={"Химчистка мебели/ ковров"}
            />
            <ProductItem className="shop-item"
                src={image8}
                title={"Уборка территории"}
            />
            <ProductItem className="shop-item"
                src={image9}
                title={"Чистка фасада/ крыши/ стоков"}
            />
            </div>
        </div>
    );
}


