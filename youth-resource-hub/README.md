# Youth Resource Hub

A trauma-informed, mobile-first resource hub to help young adults and providers find local services in "the study county".

This project was created to be easy to host as a static website (for example, on Netlify, Vercel, or GitHub Pages).

## Quick start (non-technical summary)

1. Install **Node.js** (LTS version) on your computer.
2. Download this project folder and open it in your file explorer.
3. In the project folder, run:

   - `npm install`
   - `npm run dev` to try it locally
   - `npm run build` to create production files in the `dist` folder

4. Upload the `dist` folder to a static hosting provider such as Netlify (drag-and-drop upload).

## Updating local resource data

- All resources live in: `src/data/resources.json`.
- Each resource follows a clear JSON structure:
  - `id`, `name`, `category`, `description`, `eligibility_summary`, `location`, etc.
- To add or edit resources:
  1. Open `src/data/resources.json` in a text editor.
  2. Copy an existing entry, paste it, and change the fields.
  3. Save the file.
  4. Rebuild the site with `npm run build` and redeploy the `dist` folder.

## Changing local labels (county, agency)

- Open `src/config.ts`.
- Update:
  - `countyName`
  - `agencyName`
  - `shortAgencyLabel`
- Save the file, then run `npm run build` again before redeploying.

