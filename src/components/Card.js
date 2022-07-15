import "./Card.scss"

export default function Card({name, image, about}, index) {
    return (
        <section key={index} className={"card"}>
            <div className={'image'}>
                <img className={'image__inner'} src={image} alt=""/>
            </div>
            <div className={"title"}>
                <h3 className={"title__text"}>{name}</h3>
            </div>
            <div className={'about'}>
                <div className={'about__text'}>{about}</div>
            </div>
        </section>
    )
}