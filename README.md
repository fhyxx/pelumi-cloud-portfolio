# Pelumi Oke — Cloud Engineering Portfolio

A responsive cloud engineering portfolio built with **Next.js 16, React 19, TypeScript, CSS, and Lucide icons**, featuring a midnight navy and electric blue design.

The portfolio showcases AWS architecture interests, cloud engineering skills, and project work, with project statuses clearly identified.

## Run locally

**Prerequisites:** Node.js 20.9.0 or later and npm.

1. Install project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

4. Test the production build before deployment:

   ```bash
   npm run build
   ```

## Customize before publishing

- **Profile:** Update the profile details in `app/page.tsx`. Replace any placeholder email address or GitHub username with the correct information.
- **Resume:** Add your actual resume as `public/resume.pdf`, or remove the resume link until the file is ready.
- **About and skills:** Ensure all descriptions accurately represent your experience and verified skills.
- **Projects:** Keep unfinished projects marked as planned. Update each project's status, description, technology stack, repository link, and architecture diagram only when the information is accurate.
- **Certifications:** List only credentials you have actually earned, with verification links where available.
- **SEO metadata:** Review the title and description in `app/layout.tsx`.

## Deploy with Vercel

1. Push the project to your GitHub repository. Do not commit credentials, `.env` files, or other secrets.
2. Sign in to [Vercel](https://vercel.com/).
3. Select **Add New → Project** and import the `pelumi-cloud-portfolio` GitHub repository.
4. Confirm the framework is detected as Next.js and the root directory is the project root.
5. Review the build settings and deploy.
6. Open the Vercel-generated URL and test the navigation, project links, resume link, email link, and mobile layout.
7. For future updates, push changes to GitHub and verify that the resulting deployment succeeds.

The project currently has no environment files configured. If environment variables become necessary in the future, configure them securely in Vercel rather than committing secrets to GitHub.

## AWS portfolio project

The first featured project is the three-tier AWS architecture project:

- Repository: [AWS Three-Tier Architecture](https://github.com/fhyxx/aws-three-tier-architecture)
- Architecture diagram: [View the diagram](https://github.com/fhyxx/aws-three-tier-architecture/blob/main/docs/architecture-diagram.md)

Future project deliverables may include architecture diagrams, threat models, network CIDRs, infrastructure-as-code, deployment evidence, estimated monthly costs, teardown instructions, and lessons learned.

## Cost awareness

Vercel hosting and associated services may have plan limits or charges. Review the current plan, usage limits, and billing settings before deploying or adding paid services. Keep AWS project resources and billing alerts under review as well.

