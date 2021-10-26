# Project Catwalk - Getting Started

## General Rules

- Never work directly on the `main` branch
- Create a branch for each new feature
- Handle merge conflicts on local clone in VS Code
- Pull requests must be reviewed by another team member before closing
- If any changes are accidentally made on main:
  1. Stash changes: `git stash`
  2. Check out into the new branch: `git checkout -b <feature_name>`
  3. Apply those changes to the new branch: `git stash pop`

## Getting Started

- Step One: After cloning the repo to your local machine make a file in the root directory named config.js using the same format as example.config.js -- the code should look something like this codeblock below. You will need a [github personal token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with [read:org and all user privileges checked](https://imgur.com/a/W5FoC3D).

```javascript
module.exports = {
  authToken: 'YOUR TOKEN HERE',
};
```

- Step Two: npm install and run webpack to create a development bundle

```bash
npm install
npm run webpack
```

- Step Three: In a separate terminal start up the development server to test API interactions

```bash
npm run server
```

Open http://localhost:3000 with your browser to see the result.

## Creating a new Feature Branch

1. Clone from [this repo](https://github.com/teamkatara/Project-Catwalk.git)

    ```bash
    git clone https://github.com/teamkatara/Project-Catwalk.git
    ```

1. Make sure you are on branch `main` with latest version
1. Create a branch with a name descriptive of the feature you are developing
1. Make changes, commit frequently
1. Push to feature-branch on GitHub

    ```bash
    git checkout main
    git pull
    git checkout -b feature-name
    # do work, commit often
    git push origin feature-name
    # submit Pull Request
    ```

## Adding Features from Branches to `main`

1. Submit Pull Request
    1. base:main <- feature-name
    1. reference Trello ticket with link
1. Have a team member complete a Code Review according to [Code Review Guidelines](https://learn-2.galvanize.com/cohorts/2778/blocks/94/content_files/Front%20End%20Capstone/exercises/code_reviews.md)
    1. reviewer will look for errors

## Syncing changes with `main`

Avoid conflicts in PR

1. Switch to branch `main` locally
1. Pull changes made to main by others
1. Switch to `feature-branch`
1. Merge changes from `main` -> `feature-branch`
1. Handle any merge conflicts in VS Code
1. Push up to GitHub `feature-branch`

    ```bash
    git checkout main
    git pull
    git checkout feature-branch
    git merge main
    # handle merge conflicts
    git push origin feature-branch
    ```

## Pulling Features for Testing

1. create new branch locally branched from main
1. checkout new branch
1. pull from origin feature-branch

```bash
git checkout main
git pull
git checkout -b feature-branch
git pull origin feature-branch
```
