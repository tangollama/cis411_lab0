# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Eric Weischedel<br/>
GitHub: [eric-weischedel](https://github.com/eric-weischedel)<br/>

# Step 1: Fork this repository
- The [URL](https://github.com/eric-weischedel/cis411_lab0) of my forked repository
- The accompanying diagram of what my fork precisely and conceptually represents<br/>
![Fork](images/fork.jpg)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```json
{
  "data": {
    "mutateAccount": {
      "id": "629aaa71-3fa1-4f22-b079-777664b7ac80",
      "name": "Eric Weischedel",
      "email": "ew1309@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
eb43391 (HEAD -> labreport, origin/labreport) Updating labreport @tangollama
7bea9dd (master) Adding my lab report @tangollama
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
- The accompanying diagram of what my feature branch precisely and conceptually represents<br/>
![Feature Branch](images/featurebranch.jpg)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
  - The config file is configuring various options for CircleCI, a continuous integration system.
- What do the various sections on the config file do?
  - Version
    - Declares the version of CircleCI. In our example, we are using version 2.1.
  - Orbs
    - Packages that you can pull in and use in your pipeline, e.g. Slack. In our example, we pull in Node.
  - Jobs
    - A job is a collection of steps in your build process.
    - Executor
      - Defines the underlying technology or environment in which to run a job. In our example, it is Node.
    - Steps
      - Executable commands which are run during a job. In our example, we have `checkout`, `npm install`, and `npm test`.
  - Workflows
    - Sets of rules for defining a collection of jobs and their run order. In our example, we only have one workflow: `build-and-test`, which runs our job `build-and-test`.
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
  - The build did not have errors. The changes introduced in the push integrate well with the project and do not break anything.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
  - The job would need to deploy the branch to the production server.

# Step 5: Merging the feature branch
* The output of my git commit log
* A screenshot of the _Jobs_ list in CircleCI

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
