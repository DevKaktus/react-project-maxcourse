import {useEffect, useState} from "react";

export default Cards;

function Cards(name, image, about) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3004/posts')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>...</div>;
    } else {

        return (
            <div className={'wrapper'}>
                {items.map((item) => (
                    <section key={item.index} className={"card"}>
                        <div className={'image'}>
                            <img className={'image__inner'} src={item.largePicture} alt=""/>
                        </div>
                        <div className={"title"}>
                            <h3 className={"title__text"}>{item.name}</h3>
                        </div>
                        <div className={'about'}>
                            <div className={'about__text'}>{item.about}</div>
                        </div>
                    </section>
                ))}

            </div>
        );
    }
}