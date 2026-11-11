# GitHub profile and repository presentation

This document is the source copy for the GitHub profile README and repository descriptions.

## Profile README setup

GitHub displays a profile README only when the public repository name exactly matches the account username. The connected account username is **fhyxx**, so the special profile repository must be named exactly **fhyxx**. A repository named **fhyx** is a normal repository and will not automatically appear on the profile. Once the correctly named repository exists, replace its root README with the content in [README.md](README.md).

## Recommended pinned repositories (in this order)

1. `aws-three-tier-architecture` — cloud network foundations, Terraform, IAM and deployment validation.
2. `pelumi-containerized-cicd` — software delivery, containers, GitHub Actions, OIDC and ECS/Fargate.
3. `fhyxx-aws-serverless-rest-api` — Python API engineering, Cognito, DynamoDB and infrastructure as code.
4. `aws-cloud-migration-blueprint` — systems architecture, migration strategy and operational readiness.
5. `aws-cost-optimization-dashboard` — Python analytics, FinOps and a hosted demonstration.
6. `pelumi-cloud-portfolio` — the website connecting the wider engineering body of work.

## Suggested repository descriptions

- `aws-three-tier-architecture`: Cloud network foundation with segmented AWS VPC subnets, Terraform, secure state design and independently verified EC2 deployment.
- `pelumi-containerized-cicd`: Node.js application delivery pipeline using GitHub Actions, Docker, GitHub OIDC, Amazon ECR and verified ECS/Fargate deployment.
- `aws-cloud-migration-blueprint`: Fictional on-premises-to-cloud migration blueprint covering hybrid networking, MGN, DMS, DataSync, Terraform and rollback planning.
- `aws-cost-optimization-dashboard`: Python and Streamlit cost analytics dashboard with synthetic billing data, anomaly review and evidence-led optimization insights.
- `fhyxx-aws-serverless-rest-api`: Python serverless task API with API Gateway, Lambda, Cognito JWT scopes, user-scoped DynamoDB, Terraform and OpenAPI.
- `pelumi-cloud-portfolio`: Engineering portfolio showcasing cloud infrastructure, software delivery, migration architecture, data analytics and serverless application work.

## Accuracy rules

Keep project status visible in READMEs and portfolio copy. The migration blueprint is fictional and design-only; the cost dashboard uses synthetic data; the serverless API is not deployed; the ECS service was scaled down after its HTTP 200 deployment verification; and the baseline three-tier environment was cleaned up after validation.
