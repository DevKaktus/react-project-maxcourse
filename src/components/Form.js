import "./Form.scss"
import {useState} from "react";

export default function Form() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [nameNotValid, setNameNotValid] = useState(false);
    const [lastNameNotValid, setLastNameNotValid] = useState(false);
    const [emailNotValid, setEmailNotValid] = useState(false);
    const [nameError, setNameError] = useState('Enter name');
    const [lastNameError, setLastNameError] = useState('Enter lastname');
    const [emailError, setEmailError] = useState('Enter email');

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!valid.test(String(e.target.value).toLowerCase())){
            if (!e.target.value) {
                setEmailError("Enter email")
            } else {
                setEmailError("Not a valid email")
            }
        } else {
            setEmailError("")
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value) {
            setNameError("")
        } else {
            setNameError("Enter name")
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (e.target.value) {
            setLastNameError("")
        } else {
            setLastNameError("Enter lastname")
        }
    }

    const blurHandler = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'email':
                setEmailNotValid(true)
                break
            case 'name':
                setNameNotValid(true)
                break
            case 'lastname':
                setLastNameNotValid(true)
                break
        }
    }


    return (
        <div className={"wrapper"}>
            <form className={"form"} onSubmit={event => event.preventDefault()}>
                <div className={"title"}>
                    <h2 className={"title__text"}>Contact Me</h2>
                </div>
                <div className={"name"}>
                    {(nameNotValid && nameError) && <div className={"error"}>{nameError}</div>}
                    <input
                        className={"name__input text-input"}
                        value={name}
                        id={"firstName"}
                        name={"name"}
                        type="text" placeholder={"Firstname"}
                        onBlur={(e) => blurHandler(e)}
                        onChange={(e) => nameHandler(e)}/>
                    {(lastNameNotValid && lastNameError) && <div className={"error"}>{lastNameError}</div>}
                    <input
                        className={"name__input text-input"}
                        value={lastName}
                        id={"lastName"}
                        name={"lastname"}
                        type="text" placeholder={"lastname"}
                        onBlur={(event) => blurHandler(event)}
                        onChange={(e) => lastNameHandler(e)}/>
                </div>
                <div className={"email"}>
                    {(emailNotValid && emailError) && <div className={"error"}>{emailError}</div>}
                    <input
                        className={"email__input text-input"}
                        value={email}
                        id={"email"}
                        name={"email"}
                        type="email" placeholder={"email"}
                        onBlur={(event) => blurHandler(event)}
                        onChange={(e) => emailHandler(e)}/>
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
                <div className={"textarea"}>
                    <textarea className={"textarea__inner"} name="textarea" id="textarea-1" cols="20" rows="10"
                              placeholder={"Your message..."}/>
                </div>
            </form>
        </div>
    )
}