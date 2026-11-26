# Deployment

1. Restore the original images `maria_portrait.png` and `hallway_world_map.png` in `src/assets/` if available. Until then the original graphic fallback is used and the portrait is omitted.
2. Review `public/cv.pdf` and all public content for confidentiality.
3. Run `npm install` and commit the generated `package-lock.json` together with the source.
4. Run `npm run test`, `npm run build`, and `npm run preview` to verify navigation, images, CV and links.
5. Push to GitHub on branch `main`.
6. Settings → Pages → Source: GitHub Actions. Enable Enforce HTTPS.
7. The workflow builds and publishes `dist/`. Relative asset paths support both a user site and a repository subpath.

The website is a static client-rendered React application. No runtime server is necessary. Edit the site content in `src/content/portfolio.ts`.
