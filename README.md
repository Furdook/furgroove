# FurGroove

Static page containing information on location, dates, tickets sales, artists and contact information for the Dutch event FurGroove.

## Description:

Informational page for the Dutch event FurGroove. A static page built using React TypeScript and Vite. React has been used so that new features can be added for future iterations. Currently the project does not contain a backend and relies on external services for ticket sales and forms.

## How to use:

To use this project on your local machine:

- Clone the repository
- Remember to have Node.js installed
- To ensure new chnages are compatible with the build process:

  `npm run lint`,
  can be used to check for any errors

- Run the following commnand to install dependencies and run a dev server:

  `npm i && npm run dev`

- To build the project for production, run the following command:

  `npm run build`

## Technologies used:

The following is installed when using the command: `npm i` / `npm install`:

- React
- TypeScript
- Vite
- ESLint

Currently no other dependencies are necessary but will become more prevalent in furture releases.

### Production use:

If the project is run on your server in a different directory than root, index.html will need to be updated to reflect the new path. This ensures both the CSS bundle and JS bundle are loaded from their correct location. Images and other assets are placed in the public directory and should be referenced correctly automatically.

Currently the project is live on the following URL: [FurGroove](https://furgroove.club/)
