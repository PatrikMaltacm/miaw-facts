import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import './facts.css'

function Facts() {
    const ulrApi = "https://meowfacts.herokuapp.com/?lang=por-br"
    const urlApiImage = "https://cataas.com/cat/says/@usuario_progamador?fontSize=35&fontColor=blue"
    const [fact, setFact] = useState()
    const [facto, setFacto] = useState()

    const AddFatc = () =>{
        setFacto(fact)
    }

    axios.get(ulrApi).then((res) => {
        let fato = res.data.data[0]
        console.log(fato)
        setFact(fato)
    }).catch((erro) => {
        console.log(erro)
    })

    return (
        <div className="main">
            <div className="container">
                <h1 className="title">Curiosidades aleatórias sobre o mundo felino</h1>
                <img className="img-cat" src={urlApiImage} alt="" width={"200px"} height={"200px"}/>
                <button className="btn" onClick={() =>{
                    AddFatc()
                }}>Buscar</button>
                <h2 className="text-fact">{facto}</h2>
            </div>
            
        </div>
    )
}

export default Facts;