import {useEffect, useState} from "react";
import Card from "../../components/Card";
import "./Home.scss"

const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);


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
        console.log(data);
        return (
            <div className={"wrapper"}>
                <div className={"info"}>about info</div>
                {
                    data.length && data.slice(0,4).map((data) => {
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

export default Home;