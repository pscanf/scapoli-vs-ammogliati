import React from "react";
import { Head, useRouteData } from "react-static";

import GamesList from "../../components/GamesList";

export default function Home() {
    const { games } = useRouteData();
    return (
        <>
            <Head>
                <title>{"Scapoli vs Ammogliati"}</title>
                <meta
                    name="description"
                    content="Vedi i risultati delle partite di calcetto"
                ></meta>
            </Head>
            <GamesList games={games} />
        </>
    );
}
