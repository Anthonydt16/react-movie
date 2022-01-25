import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../components/Card.js";

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const  [search, setSearch] = useState(["star"]);
    const [sortGoodBad, setSortGoodbad] = useState(null);

    //effectue la request au load et ensuite au rolback
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e4e280d99cfacf94c16adeb58ca0d2cf&query=${search}&language=fr-FR`)
            .then((res) => setMoviesData(res.data.results));
    }, [search])

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="entrez le titre d'un film" id="search-input" onChange={(e) => setSearch(e.target.value)}/>
                    <input type="submit" value="Rechercher"/>
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodbad("goodToBad")}>Top<span>→</span></div>
                    <div className="btn-sort" id="badToGood" onClick={() => setSortGoodbad("badToGood")}>Flop<span>→</span></div>
                </div>
            </div>
            <div className="result">
                {
                    moviesData.slice(0, 48)
                        .sort((a, b) => {
                            if(sortGoodBad === "goodToBad"){
                                return b.vote_average - a.vote_average;
                            }else if(sortGoodBad === "badToGood"){
                                return a.vote_average - b.vote_average;
                            }

                        })
                        .map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))

                }
            </div>
        </div>
    );
};

export default Form;