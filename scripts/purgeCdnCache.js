const { CloudFront } = require("aws-sdk");

const cloudfront = new CloudFront({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

cloudfront.createInvalidation(
    {
        DistributionId: process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID,
        InvalidationBatch: {
            CallerReference: Date.now().toString(),
            Paths: { Quantity: 1, Items: ["/*"] }
        }
    },
    err => {
        if (err) {
            console.log("Error creating CloudFront invalidation");
            console.log(err);
        } else {
            console.log("Created ClodFront invalidation");
        }
    }
);
