# Pelumi Oke — Cloud Engineering Portfolio

A responsive cloud engineering portfolio built with **Next.js 16, React 19, TypeScript, CSS, and Lucide icons**, featuring a midnight navy and electric blue design.

**Live portfolio:** https://pelumi-cloud-portfolio.vercel.app/  
**GitHub:** https://github.com/fhyxx

The portfolio presents implemented AWS engineering work separately from the projects still on the roadmap. The summaries below describe the current published project scope; they do not imply that every proposed production enhancement is deployed.

## Featured Projects

### Project 01 — AWS Three-Tier Architecture Foundation

<badge-placeholder/>

**Status:** Implemented — Terraform refactor validated; EC2 test deployment documented.

Designed a VPC with six subnets across two Availability Zones, separate route tables for public, application, and database tiers, security-group controls, and an EC2-hosted HTTP test application. Adopted the existing AWS resources into modular Terraform, configured encrypted S3 remote state with native S3 lockfile support, and migrated the EC2 root volume to encrypted gp3 storage.

- **Repository:** https://github.com/fhyxx/aws-three-tier-architecture
- **Architecture:** https://github.com/fhyxx/aws-three-tier-architecture/blob/main/docs/architecture-diagram.md
- **Terraform:** VPC/network, security-group, and compute modules
- **Validation:** Formatting, Terraform validation, 32-resource state inventory, and a zero-change plan against the existing remote state completed on 3 November 2026.
- **Scope note:** The EC2 test instance is in a public subnet. The temporary ALB was tested and deleted. No NAT Gateway or RDS database instance is deployed. A fresh-account reproducibility guide is being added separately.

### Project 02 — Containerized AWS CI/CD Pipeline

**Status:** Implemented — ECS/Fargate deployment verified; service scaled down after testing.

Built a GitHub Actions workflow for a Node.js/Express application. It runs automated tests, builds a Docker image, publishes commit-SHA and latest tags to GHCR and Amazon ECR, authenticates to AWS through GitHub OIDC, and deploys the ECR image to Amazon ECS on AWS Fargate.

- **Repository:** https://github.com/fhyxx/pelumi-containerized-cicd
- **Successful deployment workflow:** https://github.com/fhyxx/pelumi-containerized-cicd/actions/runs/41639511999
- **Technology:** Node.js, Express, Docker, GitHub Actions, GHCR, Amazon ECR, GitHub OIDC, IAM, ECS, Fargate, and CloudWatch Logs.
- **Verification:** Deployment reached ECS steady state and the application returned HTTP 200 during testing.
- **Scope note:** The ECS service was scaled to zero after verification, and the temporary public inbound TCP 3000 rule was removed. The application is not currently running as a public ECS task.

## Project Roadmap

| Project | Focus | Status |
|---|---|---|
| 03 — On-Premises to AWS Migration | Workload discovery, migration planning, replication, test migration, cutover and rollback validation | Planned — implementation pending |
| 04 — AWS Cost Visibility & Optimization | Cost visibility, budgets, resource tagging, rightsizing and measurable optimization | Planned — implementation pending |
| 05 — Serverless REST API on AWS | API Gateway, Lambda, DynamoDB, IAM, validation, logging and deployment | Planned — implementation pending |

Planned projects will be marked as implemented only after their infrastructure or application has been built, tested, documented, and published.

## Skills and Technology Areas

- **AWS infrastructure:** EC2, S3, VPC, IAM, RDS concepts, Elastic Load Balancing, Auto Scaling, Route 53.
- **Infrastructure as Code:** Terraform, AWS CloudFormation.
- **Containers and deployment:** Docker, Amazon ECS, Amazon ECR.
- **CI/CD and automation:** Git, GitHub Actions, deployment automation.
- **Security and operations:** IAM policies, security groups, Systems Manager, CloudWatch, CloudTrail.
- **Architecture:** Cloud migration, high availability, scalability, cost optimization, disaster recovery, and AWS Well-Architected principles.

## Certifications

- **AWS Certified Solutions Architect – Associate** — issued 30 June 2025; expires 30 June 2028. [Verify on Credly](https://www.credly.com/badges/e33418b2-b5f6-43c0-9955-b101d2041400/public_url)
- **AWS Certified Cloud Practitioner** — issued 16 September 2023; expires 30 June 2028. [Verify on Credly](https://www.credly.com/badges/8dd03523-b93e-4837-9be3-bccac6b0c3d2/public_url)

## Run Locally

**Prerequisites:** Node.js 20.9.0 or later and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before publishing changes, run:

```bash
npm run build
```

## Deployment

The portfolio is hosted on Vercel and connected to the GitHub repository.

For future updates:

1. Commit and push changes to GitHub.
2. Confirm the Vercel deployment completes successfully.
3. Open the live URL and check navigation, project links, certification links, resume download, contact links, and mobile layout.

Do not commit credentials, `.env` files, AWS state files, Terraform variable files, or generated plan files.

## Cost Awareness

Vercel hosting and associated services may have plan limits or charges. Review the current plan, usage limits, and billing settings before deploying or adding paid services. AWS project resources can incur charges while provisioned; monitor billing and clean up test resources after validation. Budget alerts are notifications, not hard spending caps.
