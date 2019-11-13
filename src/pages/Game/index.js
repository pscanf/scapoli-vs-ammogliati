import htmr from "htmr";
import React from "react";
import { Head, useRouteData } from "react-static";

import "./index.css";

export default function Game() {
    const { game } = useRouteData();
    return (
        <div className="p-Game">
            <Head>
                <title>{`${game.date} - ${game.teams[0]} vs ${game.teams[1]}`}</title>
                <meta
                    name="description"
                    content={`Risultato della partita ${game.teams[0]} vs ${game.teams[1]} del ${game.date}`}
                />
            </Head>
            <h1>
                <span>{game.teams[0]}</span>
                {" vs "}
                <span>{game.teams[1]}</span>
            </h1>
            <h1>
                <span>{game.scores[0]}</span>
                {" - "}
                <span>{game.scores[1]}</span>
            </h1>
            <h4>
                <em>{game.date}</em>
            </h4>
            <div className="p-Game-comment">{htmr(game.comment)}</div>
        </div>
    );
}
