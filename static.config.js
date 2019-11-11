import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createClient } from "contentful";
import { omit } from "lodash";

const websiteRootUrl = new URL(
    process.env.WEBSITE_ROOT_URL || "http://localhost:3000"
);

const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default {
    siteRoot: websiteRootUrl.origin,
    basePath: websiteRootUrl.pathname,
    getRoutes: async () => {
        const gameEntries = await contentful.getEntries({
            content_type: "game"
        });
        const games = gameEntries.items.map(item => ({
            date: item.fields.date,
            teams: item.fields.teams,
            scores: item.fields.scores,
            comment: documentToHtmlString(item.fields.comment)
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
