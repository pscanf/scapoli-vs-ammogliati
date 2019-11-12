import htmr from "htmr";
import React from "react";
import { Head, useRouteData } from "react-static";

export default function Game() {
    const { game } = useRouteData();
    const teams = `${game.teams[0]} vs ${game.teams[1]}`;
    const scores = `${game.scores[0]} - ${game.scores[1]}`;
    return (
        <>
            <Head>
                <title>{`${game.date} - ${teams}`}</title>
                <meta
                    name="description"
                    content={`Risultato della partita ${teams} del ${game.date}`}
                ></meta>
            </Head>
            <h1>{teams}</h1>
            <h2>{scores}</h2>
            <h3>{game.date}</h3>
            <br />
            {htmr(game.comment)}
        </>
    );
}
