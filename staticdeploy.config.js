const { join } = require("path");

const BUNDLE_TAG = process.env.CIRCLE_BRANCH;
const IS_MASTER = BUNDLE_TAG === "master";

module.exports = {
    bundle: {
        from: join(__dirname, "/dist"),
        name: "sva.pscanf.com",
        tag: BUNDLE_TAG,
        description: `Commit ${process.env.CIRCLE_SHA1}`,
        fallbackAssetPath: "/404.html",
        fallbackStatusCode: 404,
        headers: {
            "**/*": {
                "Cache-Control": "public, max-age=86400"
            },
            "**/*.(js|css)": {
                "Cache-Control": "public, max-age=31536000"
            }
        }
    },
    deploy: {
        app: "sva.pscanf.com",
        entrypoint: IS_MASTER
            ? "sva.pscanf.com/"
            : `sva.pscanf.com/_/${BUNDLE_TAG}/`,
        bundle: `sva.pscanf.com:${BUNDLE_TAG}`
    }
};
