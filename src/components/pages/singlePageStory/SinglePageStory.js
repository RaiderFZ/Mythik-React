import { useMemo } from "react";
import { useParams } from "react-router-dom";
import StoriesData from "../../../data/StoriesData";

import './singlePageStory.scss'
import HeroSection from "../../heroSection/HeroSection";
import Promo from "../../promo/Promo";

const SinglePageStory = () => {

    const { id } = useParams();
    
    const card = useMemo(() => {
        return StoriesData.find(item => item.id === parseInt(id));
    }, [id]);

    const RenderText = useMemo(() => {
        return (texts) => {
            return texts.map((text, index) => (
                <p key={index} className="singlePage-descript">
                    {text}
                </p>
            ));
        };
    }, []);

    if(!card) {
        return <div>History card not found</div>
    }
    
    return (
        <>
            <HeroSection/>
                <div className="singlePage-card">
                    <img className="singlePage-image" 
                         src={card.url} 
                         alt={card.title} />
                    <h1 className="singlePage-title">{card.title}</h1>
                    {RenderText(card.text)}
                </div>
            <Promo/>
        </>
        
    )
}

export default SinglePageStory;