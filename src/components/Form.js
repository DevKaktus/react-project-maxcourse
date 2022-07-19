import "./Form.scss"

export default function Form () {
    return (
        <div className={"wrapper"}>
            <form className={"form"} onSubmit={event => event.preventDefault()}>
                <div className={"name"}>
                    <label htmlFor={"firstName"}>firstname</label>
                    <input id={"firstName"} type="text"/>
                    <label htmlFor={"lastName"}>lastname</label>
                    <input id={"lastName"} type="text"/>
                </div>
            </form>
        </div>
    )
}