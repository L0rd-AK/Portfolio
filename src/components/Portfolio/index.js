import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    
    const doSomething = async() =>{
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
  }
  useEffect(() => {
    doSomething()
  }, [])

    useEffect(() => {
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setPortfolio(data)
        })
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio?.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port?.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port?.title}</p>
                                    <h4 className="description">{port?.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port?.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"My Works".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;