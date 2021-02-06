<p align="center">
  <img src="https://www.joaopedro.cc/img/github/typescript-gatsby-starter.png" alt="Gatsby and TypeScript">
</p>

<br>

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
