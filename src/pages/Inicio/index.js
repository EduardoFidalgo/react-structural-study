import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Titulo from "components/Titulos";
import { useEffect, useState } from "react";
// import videos from "json/db.json";
import styles from './Inicio.module.css';

function Inicio() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/EduardoFidalgo/c-api/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    return (
        <div className="App">
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </div>
    );
}

export default Inicio;