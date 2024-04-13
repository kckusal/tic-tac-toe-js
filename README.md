## Introduction

This is a simple Calculator app implementation written in Typescript (which gets compiled to JavaScript and is intended to be run in Node.js runtime) as part of Assessment 2 for the DevOps Tools (DOT503) subject offered at Torrens University Australia.

## Implementation details per assessment specifications

**About the application**: This is going to be a very simple program expected to be run in Node.js runtime. In order to manually run the application, please ensure you have [Node.js](https://nodejs.org/en) installed in your device. Once you have cloned the repo and Node.js installed, you can simply run `npm install` to install required dependencies from the root path and then run `npm run test` to run the unit tests or `npm run build` to spit .js files that can be run in browser or Node.js environments.

### 1) Implement Source control using Git and GitHub

- Three branches `feature-x`, `feature-y`, `feature-z`: <https://github.com/kckusal/ts-calculator/branches>

- PR to merge `feature-x` to `master` showing merge conflicts: <https://github.com/kckusal/ts-calculator/pull/1>

- Merging of `feature-y` to `master` had merge conflicts resolved by GitHub CLI and pushed: <https://github.com/kckusal/ts-calculator/commits/feature-y>

- Successful resolution of merge conflict and merged of `feature-z` to `master`: <https://github.com/kckusal/ts-calculator/pull/2>

### 2) Implement Unit testing

- Unit tests can be found in `tests/app/Calculator.test.js`: <https://github.com/kckusal/ts-calculator/blob/master/tests/app/Calculator.test.js>

- Note that two of the five test cases are made to fail intentionally as noted with comments within the test file.

- The test file can be run with command: `npm run test` which runs the script `test` in `package.json` file.

### 3) Implement Build automation

We compile the Typescript code with `tsc` command [(more on compiling with tsc)](<https://www.typescriptlang.org/docs/handbook/compiler-options.html>) which will conver the `*.ts` files into `*.js` files that can be run in browsers or other compatible runtime environments like Node.js.

- The application can be built by running command `npm run build` from root directory. However, we use GitHub Actions to build the application **whenever a PR is merged to the `master` branch**. The action will also commit the build results back to the master branch which can be found in the `build/` directory.
  - GitHub Build App workflow file: <https://github.com/kckusal/ts-calculator/blob/master/.github/workflows/build-app.yml>
  - Sample Build App workflow run: <https://github.com/kckusal/ts-calculator/actions/runs/8673505617/job/23784925016>
  - Build results auto-committed: <https://github.com/kckusal/ts-calculator/commit/47b1b93685d9d9c76ba86001242590525e2148dd>

- Similarly, we can manually run the unit tests by running `npm run test`, but we have GitHub workflows configured. **Any new commit to any branch should trigger this action.**
  - GitHub Run Tests workflow file: <https://github.com/kckusal/ts-calculator/blob/master/.github/workflows/run-tests.yml>
  - Sample Run Tests workflow run: <https://github.com/kckusal/ts-calculator/actions/runs/8673505616/job/23784925024>
  
  - You can re-run these jobs to see in action: **Go to Actions > `Run Tests` workflow > Select one of the previous runs and choose re-run jobs as shown in screenshot below.**
    ![image](https://github.com/kckusal/ts-calculator/assets/26818010/ae4de6ed-86ee-4f09-9653-5317e9db3ce1)
