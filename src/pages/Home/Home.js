import {useEffect, useState} from "react";
import Card from "../../components/Card";


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
            <div>
            {
                data.length && data.map((data) => {
                    return (
                        <Card key={data.index}
                            index={data.index}
                            name={data.name}
                            image={data.picture}
                            about={data.about}/>
                    )
                })
            }
            </div>
        )
    }
}

export default Home;