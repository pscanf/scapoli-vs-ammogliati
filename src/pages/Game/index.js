import htmr from "htmr";
import React from "react";
import { useRouteData } from "react-static";

export default function Game() {
    const { game } = useRouteData();
    return (
        <>
            <h1>
                {game.teams[0]}
                {" vs "}
                {game.teams[1]}
            </h1>
            <h1>
                {game.scores[0]}
                {" - "}
                {game.scores[1]}
            </h1>
            <br />
            {htmr(game.comment)}
        </>
    );
}
