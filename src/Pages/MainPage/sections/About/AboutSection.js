import React from 'react';
import "./AboutSectionStyle.css"
import TitleBlock from "../components/TitleBlock/TitleBlock";

export default function AboutSection() {
    return (
        <TitleBlock title={"О нас"}/>,
        <div className="block-content-about">
            <p>Наша компания качественно и в кратчайшие сроки выполнит уборку любой сложности.
                Работаем с 2006 года. За это время накопили огромный опыт и более 2000 положительных отзывов
                клиентов.<br/>
                    Предлагаем уборку в Риге, Юрмале, Марупе, Балтезерс и по всей Латвии. Широкий спектр услуг
                    от
                    мойки
                    окон
                    до генеральной уборки после ремонта, пожара и т.д.
            </p>
        </div>
    );
}


