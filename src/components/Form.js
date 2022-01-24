import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../components/Card.js";

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);

    //effectue la request au load et ensuite au rolback
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=e4e280d99cfacf94c16adeb58ca0d2cf&query=star&language=fr-FR')
            .then((res) => setMoviesData(res.data.results));
    }, [])

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="entrez le titre d'un film" id="search-input"/>
                    <input type="submit" value="Rechercher"/>
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad">Top<span>→</span></div>
                    <div className="btn-sort" id="badToGood">Flop<span>→</span></div>
                </div>
            </div>
            <div className="result">
                {
                    moviesData.slice(0, 48)
                        .map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))

                }
            </div>
        </div>
    );
};

export default Form;