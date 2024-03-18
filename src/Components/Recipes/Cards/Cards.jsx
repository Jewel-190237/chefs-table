 import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import Card from "./Card/Card";


const Cards = () => {
    const [cards, setCards] = useState([]);


    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);


    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                       
                    />
                ))}
            </div>
            <div>

            </div>

        </div>
    );
};

Cards.propTypes = {
    wantToCookHandler: PropTypes.func,
    cooks: PropTypes.array,
    setCooks:PropTypes.array
};

export default Cards;
