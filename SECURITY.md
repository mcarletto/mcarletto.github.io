# Security & Privacy

| ID | How it is addressed |
|----|--------------------|
| SEC-01 | GitHub Pages serves over HTTPS ("Enforce HTTPS" must be enabled). All external resources (Google Fonts) use https. |
| SEC-02 | CI greps `src/` for selected common key patterns. Manually review all files and history before publishing; this is not a comprehensive secret scan. |
| SEC-03 | No application forms, cookies, analytics or trackers. Contact is via mailto/external links only. Google Fonts requests go to a third party. |
| SEC-04 | Before adding screenshots, datasets or results to `src/content/portfolio.ts` or `public/`, remove patient data, personal identifiers and confidential client details. |
| SEC-05 | Runtime dependencies are limited to the packages used by the portfolio; `npm audit --omit=dev` runs in CI and fails on high-severity issues. |
| SEC-06 | No `dangerouslySetInnerHTML` (CI blocks it); all content is rendered as React text. No third-party executable scripts. External links use `rel="noopener noreferrer"`. |
| SEC-07 | Workflow default `contents: read`; only the deploy job gets `pages: write` + `id-token: write`; checkout does not persist credentials. |
| SEC-08 | Fully static; no backend, database or authentication. |
| SEC-09 | Audit, secret scan, and tests run before build; deploy depends on build. |
| SEC-10 | This file and DEPLOYMENT.md. |

Optional: self-host fonts to remove the Google Fonts dependency entirely.
