import "./Card.scss"

export default function Card({name, image, about, tags, date, index}) {
    let day = date.split("T")[0].replace("-", ".").replace("-", ".");
    return (
        <section key={index} className={"card"}>
            <div className={"card__container"}>
                <div className={'image'}>
                    <img className={'image__inner'} src={image} alt=""/>
                </div>
                <div className={"text-container"}>
                    <div className={"title"}>
                        <h3 className={"title__text"}>{name}</h3>
                    </div>
                    <div className={"day"}>
                        <span className={"day__text"}>{day}</span>
                    </div>
                    <div className={'about'}>
                        <div className={'about__text'}>{about}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}