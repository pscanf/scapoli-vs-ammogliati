import React from "react";
import { useRouteData } from "react-static";

import GamesList from "../../components/GamesList";

export default function Home() {
    const { games } = useRouteData();
    return (
        <>
            <GamesList games={games} />
        </>
    );
}
