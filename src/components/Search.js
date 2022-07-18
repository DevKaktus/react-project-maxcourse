import "./Search.scss"

export default function Search () {
return (
    <div className={'wrapper'}>
        <form >
            <input className={"input"} type="text" placeholder={"Поиск..."}/>
        </form>
    </div>
)
}