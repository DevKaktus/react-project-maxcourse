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
            </form>
        </div>
    )
}