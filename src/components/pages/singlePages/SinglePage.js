import { useParams } from "react-router-dom";
import StoriesData from "../../../data/StoriesData";

import './singlePage.scss'
import HeroSection from "../../heroSection/HeroSection";
import Promo from "../../promo/Promo";

const SinglePage = () => {

    const { id } = useParams();

    const card = StoriesData.find(item => item.id === parseInt(id));

    if(!card) {
        return <div>History card not found</div>
    }

    function RenderText(texts) {
        return texts.map((text, index) => (
            <p key={index} className="singlePage-descript">
                {text}
            </p>
        ));
    }

    const textItems = RenderText(card.text);

    return (
        <>
            <HeroSection/>
            <div className="singlePage-card">
                <img className="singlePage-image" src={card.url} alt={card.title} />
                <h1 className="singlePage-title">{card.title}</h1>
                {textItems} 
            </div>
            <Promo/>
        </>
        
    )
}

export default SinglePage;