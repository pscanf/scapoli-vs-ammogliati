import jdown from "jdown";
import { omit } from "lodash";
import { join } from "path";

const websiteRootUrl = new URL(
    process.env.WEBSITE_ROOT_URL || "http://localhost:3000"
);

export default {
    siteRoot: websiteRootUrl.origin,
    basePath: websiteRootUrl.pathname,
    getRoutes: async () => {
        const content = await jdown(join(__dirname, "/content"));
        const games = content.games.map(game => ({
            date: game.date,
            teams: game.teams,
            scores: game.scores,
            comment: game.contents
        }));
        return [
            {
                path: "/",
                template: "src/pages/Home/index",
                getData: () => ({
                    games: games.map(game => omit(game, "comment"))
                })
            },
            {
                path: "404",
                template: "src/pages/NotFound/index"
            },
            ...games.map(game => ({
                path: `/games/${game.date}`,
                template: "src/pages/Game/index",
                getData: () => ({ game })
            }))
        ];
    },
    plugins: ["react-static-plugin-sitemap"]
};
