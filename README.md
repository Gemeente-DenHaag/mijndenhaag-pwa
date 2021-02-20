# MijnDenHaag Progressive Web App

## 🥅 Goals of this codebase
The MijnGemeente portal is the portal where citizens and entrepreneurs can get 24/7 insight to their personal data inside the services and products from the municipality. The citizens and enterpreneurs will only see the services and products which are relevant to them. The portal will also provide suggestions for other relevant products and services. The MijnGemeente portal provides citizens and entrepreneurs insight and control over their data via one central digital portal for the entire municipality. Because the portal is 100% personal, we can provide the citizen and entrepreneur with suggestions which are relevant to their situation.

## 🚀 Getting started

1. Clone this repository
2. Install npm go [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for instructions. Make sure to install version `14` or higher.
3. Install yarn go [here](https://yarnpkg.com/getting-started/install) for instructions. Make sure to install version `1.22` or higher.
4. Run the following command to install all development dependencies:
  ```bash
  yarn install
  ```
5. `yarn start`;

To view the project you can open `http://localhost:8000`.


## Environment variables
This project currently relies on the mockserver (see `/mockserver/README.md`).
In order to run the project you need to add two .env files to the root directory:
* .env.development
* .env.production

Both containing the address of the mockserver instance:
`MOCK_CONTENT_API_URL=<address>`

## 🤝 Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-new-feature`;
3. Commit your changes: `git commit -m 'Add some feature'`;
4. Push to the branch: `git push origin my-new-feature`.

**After your pull request is merged**, you can safely delete your branch.

## ❗ Reporting issues
Our public issue tracker is located [here](https://github.com/Gemeente-DenHaag/mijndenhaag-pwa/issues).
Before reporting an issue make sure to check if a similar issue already exists.
When reporting an issue give detailed information about the issue and how to reproduce it if applicable.