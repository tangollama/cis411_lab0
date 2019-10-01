# Lab Report for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)
Name: Nathan Chan Zhung Hern
GitHub: [nathanczh](https://github.com/nathanczh)
# Step 1: Fork this repository
- [The URL of my forked repository](https://github.com/nathanczh/cis411_lab0)
- [Diagram of relationship between my repo and the master](https://docs.google.com/drawings/d/1uVJfTBH6xzWWjshbvpHan0K8HcBvT6V4FKumX0RVXDY)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "45619ce9-661d-43cf-aaba-70f537cfa26a",
      "name": "Nathan Chan",
      "email": "nathan.chan.zh@gmail.com"
    }
  }
}
```
# Step 3: Creating a feature branch
- The output of my git commit log
```
ac20839 (HEAD -> labreport, origin/labreport) Commit to labreport branch, @tangollama and @trevordbunch notice me
dabceca (origin/master, origin/HEAD, master) Merge pull request #24 from tangollama/circleci
a4096db Create README.md
2f01bf4 Update LAB_INSTRUCTIONS.md
347bd50 Update LAB_INSTRUCTIONS.md
7aaa9f3 Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
1949d2a Update LAB_INSTRUCTIONS.md
d36ad90 Update LAB.md
59ef18a Update LAB_INSTRUCTIONS.md
37be3c8 Update LAB_INSTRUCTIONS.md
97da547 Update LAB.md
0bd6244 (origin/purelab) updated Step 0 title
4562cd8 added npm and node install repreq
255051e adding template
13a09b7 Adding the LAB.md and correcting some instructions.
d2ddea5 Version 0.0.1 of the lab isntructions
ab312fc more progress
62fb0a5 more progress
fe1937b more in the lab instructions
3e807fb first section
9ae6b83 remove LAB.md
e429c1a lab instructions
```
- [Branch relation diagram](https://docs.google.com/drawings/d/1uVJfTBH6xzWWjshbvpHan0K8HcBvT6V4FKumX0RVXDY/edit)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?

First, declare the version of the config file to ensure breaking changes are known
```yaml
version: 2
```
Use a docker image
```yaml
jobs:
  build:
    docker:
      # specify the version you desire here
      - image: circleci/node:7.10
```
Set the working directory for the script.
```yaml
    working_directory: ~/repo
```
The following "steps" are instructions specific to this deployment.
```yaml
    steps:
```
First check out the source code to the working directory
```yaml
      - checkout
```
Then restore a cache that has been saved with the package.json as a cache key, using the latest cache if no existing record is found.
```yaml
      # Download and cache dependencies
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            - v1-dependencies-
```
Run the command "yarn install", which will do *linux stuff*. (install the yarn packages listed in the yarn file.
```yaml
      - run: yarn install
```
Save a cache of node_modules with the current package.json file as the key
```yaml
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
```
Run the command "yarn test", which will run tests.
```yaml
      # run tests!
      - run: yarn test
```
## Additional question
 - What do the various sections on the config file do?


	 - Version: version indicator
	 - Jobs: A set of commands for circleci to run at fixed point in the DevOps process

 - When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?

It indicates that the build has been committed, and has passed all the written tests, and so is that much more ready for deployment to a production server.

 - If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

Would add a workflow in CircleCI to automate the staging of the software - after tests have passed, first push it to a development branch / server. Once that instance / codebase has been approved, have a process build to push automatically to the production server.

# Step 5: Merging the feature branch
```
5f25022 (HEAD -> master, origin/labreport, labreport) Completed lab until step 5

ac20839 Commit to labreport branch, @tangollama and @trevordbunch notice me

dabceca (origin/master, origin/HEAD) Merge pull request #24 from tangollama/circleci

a4096db Create README.md

2f01bf4 Update LAB_INSTRUCTIONS.md

347bd50 Update LAB_INSTRUCTIONS.md

7aaa9f3 Update LAB_INSTRUCTIONS.md

37393ae Bug fixed

1949d2a Update LAB_INSTRUCTIONS.md

d36ad90 Update LAB.md

59ef18a Update LAB_INSTRUCTIONS.md

37be3c8 Update LAB_INSTRUCTIONS.md

97da547 Update LAB.md
```
![screenshot of the Jobs list in CircleCI](https://raw.githubusercontent.com/nathanczh/cis411_lab0/master/labreports/step5_sc.png)

# Step 6: Submitting a Pull Request

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:

1. Add one or more unit tests to the core assignment project. **(Done)**
2. Configure the CircleCI config.yml to automatically build a Docker image of the project. **(Done)**
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
