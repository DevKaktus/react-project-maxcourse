import "./Form.scss"

export default function Form () {
    return (
        <div className={"wrapper"}>
            <form className={"form"} onSubmit={event => event.preventDefault()}>
                <div className={"title"}>
                    <h2 className={"title__text"}>Contact Me</h2>
                </div>
                <div className={"name"}>
                    <input className={"name__input"} id={"firstName"} type="text" placeholder={"Firstname"}/>
                    <input className={"name__input"} id={"lastName"} type="text" placeholder={"lastname"}/>
                </div>
                <div className={"form__checkbox"}>
                    <input className={"checkbox__input input__hidden"} type="checkbox" id={"checkbox-1"}/>
                    <div className={"checkbox__marker"}></div>
                    <label className={"checkbox__label"} htmlFor={"checkbox-1"}>Subscribe for updates</label>
                </div>
                <div className={"form__select"}>
                    <select className={"select"} name="select" id="select">
                        <option className={"option"} value="man">Мужчина</option>
                        <option className={"option"} value="woman">Женщина</option>
                        <option className={"option"} value="helicopter">Небинарный боевой вертолёт</option>
                    </select>
                </div>
                <div className={"form__textarea"}>
                    <textarea name="textarea" id="textarea-1" cols="30" rows="10" placeholder={"Your massage..."}/>
                </div>
            </form>
        </div>
    )
}