import React from "react";
import { useBasepath } from "react-static";

import withLeadingSlash from "../../common/withLeadingSlash";
import "./index.css";

export default function GamesList({ games }) {
    const basePath = useBasepath();
    return (
        <div className="c-GamesList">
            <h4>{"Ultime partite"}</h4>
            <table>
                <tbody>
                    {games.map(game => (
                        <tr key={game.date}>
                            <td className="c-GamesList-date-column">
                                {game.date}
                            </td>
                            <td className="c-GamesList-team0-column">
                                {game.teams[0]}
                            </td>
                            <td className="c-GamesList-score0-column">
                                {game.scores[0]}
                            </td>
                            <td className="c-GamesList-team1-column">
                                {game.teams[1]}
                            </td>
                            <td className="c-GamesList-score1-column">
                                {game.scores[1]}
                            </td>
                            <td className="c-GamesList-link-column">
                                <a
                                    href={withLeadingSlash(
                                        `${basePath}/games/${game.date}`
                                    )}
                                >
                                    {"→"}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
