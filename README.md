# My Portfolio Website: [renelevesque.com](https://renelevesque.com)

- ☁️ Hosted on AWS using Route53, Cloudfront, and S3
- 🚀 Infrastructure provisioned using [terraform](https://github.com/ReneEML/rene-levesque-infra)

Project build off [template](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter)

# Deploy

- aws s3 rm s3://`bucket-name` --recursive
- cd out
- aws s3 sync . s3:`bucket-name`
- aws cloudfront create-invalidation --distribution-id `distribution-id` --paths "/\*";
