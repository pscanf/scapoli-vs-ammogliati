import React from "react";
import { Head, useRouteData } from "react-static";

import GamesList from "../../components/GamesList";

export default function Home() {
    const { games } = useRouteData();
    return (
        <div className="p-Home">
            <Head>
                <title>{"Scapoli vs Ammogliati"}</title>
                <meta
                    name="description"
                    content="Vedi i risultati delle partite di calcetto"
                ></meta>
            </Head>
            <h1>
                <em>{"“Ho fatto gol! Ho fatto gol!”"}</em>
            </h1>
            <GamesList games={games} />
        </div>
    );
}
