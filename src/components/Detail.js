import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'

function Detail(){
    const [mascota, setMascota] = useState([]);
    const params = useParams();
    useEffect(() => {
        const url =
          "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            setMascota(data[params.mascotaId-1]);
          });
      }, []);

    return (
        <div>
            <h1>Nombre: {mascota.nombre}</h1>
            <h2>Raza: {mascota.raza}</h2>
            <p>Descripción: {mascota.descripcion}</p>
            <img src={mascota.foto} alt={mascota.descripcion}></img>
        </div>
    );

}

export default Detail;