import {useEffect, useState} from "react";
import Card from "../../components/Card";
import "./Posts.scss"



const Posts = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const [value, setValue] = useState('');
    const filteredPosts = data.filter((post) => {
        return (
            post.name.toLowerCase().includes(value.toLowerCase()) || post.tags.join().toLowerCase().includes(value.toLowerCase())
        )
    })


    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
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
            <div className={"wrapper"}>
                <div className={"search"}>
                    <form className={"search__form"} onSubmit={(event) => {event.preventDefault()}}>
                        <input
                            className={"search__input"}
                            type="text"
                            placeholder={"Search..."}
                            onChange={(event) => {
                                setValue(event.target.value)
                            }}
                        />
                    </form>
                </div>
                {
                    data.length && filteredPosts.map((data) => {
                        return (
                            <Card className={"card"} key={data.index}
                                  date={data.date}
                                  index={data.index}
                                  name={data.name}
                                  image={data.picture}
                                  about={data.about}
                                  tags={data.tags[0]}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Posts;