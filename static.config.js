import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createClient } from "contentful";
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
        const games = await getGames();
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

async function getGames() {
    if (
        process.env.CONTENTFUL_SPACE_ID &&
        process.env.CONTENTFUL_ACCESS_TOKEN
    ) {
        const contentful = createClient({
            space: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        });
        const gameEntries = await contentful.getEntries({
            content_type: "game"
        });
        return gameEntries.items.map(item => ({
            date: item.fields.date,
            teams: item.fields.teams,
            scores: item.fields.scores,
            comment: documentToHtmlString(item.fields.comment)
        }));
    } else {
        const content = await jdown(join(__dirname, "/content"));
        return content.games.map(game => ({
            date: game.date,
            teams: game.teams,
            scores: game.scores,
            comment: game.contents
        }));
    }
}
