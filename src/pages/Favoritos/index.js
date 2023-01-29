import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulos';
import styles from './Favoritos.module.css';
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Titulo>

            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    );
}

export default Favoritos