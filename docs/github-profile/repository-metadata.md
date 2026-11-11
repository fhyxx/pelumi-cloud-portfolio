# GitHub profile and repository presentation

This document is the source copy for the GitHub profile README and repository descriptions.

## Profile README setup

Create a **public repository named exactly `fhyxx`** under the `fhyxx` GitHub account, initialize it with a README, and replace that README with the content in [README.md](README.md). GitHub displays that README on the profile because the repository name matches the username.

## Recommended pinned repositories (in this order)

1. `aws-three-tier-architecture` — core AWS networking, Terraform and deployment validation.
2. `pelumi-containerized-cicd` — CI/CD, containers, OIDC and ECS/Fargate deployment.
3. `fhyxx-aws-serverless-rest-api` — Python serverless API, Cognito, DynamoDB and infrastructure as code.
4. `aws-cloud-migration-blueprint` — migration architecture, planning and operational readiness.
5. `aws-cost-optimization-dashboard` — Python analytics, FinOps and hosted demonstration.
6. `pelumi-cloud-portfolio` — the landing page connecting all five projects.

## Suggested repository descriptions

- `aws-three-tier-architecture`: AWS network foundation with segmented VPC subnets, Terraform, secure state design and independently verified EC2 deployment.
- `pelumi-containerized-cicd`: Node.js container delivery pipeline using GitHub Actions, Docker, GitHub OIDC, Amazon ECR and verified ECS/Fargate deployment.
- `aws-cloud-migration-blueprint`: Fictional on-premises-to-AWS migration blueprint covering hybrid networking, MGN, DMS, DataSync, Terraform and rollback planning.
- `aws-cost-optimization-dashboard`: Python and Streamlit AWS cost analytics dashboard with synthetic billing data, anomaly review and evidence-led optimization insights.
- `fhyxx-aws-serverless-rest-api`: Python serverless task API with API Gateway, Lambda, Cognito JWT scopes, user-scoped DynamoDB, Terraform and OpenAPI.
- `pelumi-cloud-portfolio`: Personal AWS cloud engineering portfolio showcasing infrastructure, DevOps, migration, FinOps and serverless projects.

## Important accuracy rules

Keep project status visible in READMEs and portfolio copy. The migration blueprint is fictional and design-only; the cost dashboard uses synthetic data; the serverless API is not deployed; the ECS service was scaled down after its HTTP 200 deployment verification; and the baseline three-tier environment was cleaned up after validation.
