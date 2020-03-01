# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: YOUR NAME<br/>
GitHub: [YOUR_HANDLE](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
> https://github.com/SamGulinello/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "7a3c7f30-499f-4a8c-8492-8579b110557b",
      "name": "Sam Gulinello",
      "email": "sg1355@messiah.edu"
    }
  }
}

```

# Step 3: Creating a feature branch
- The output of my git commit log
```
002ae26 (HEAD -> labreport, origin/labreport) lab report
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

```
- The accompanying diagram of what my feature branch precisely and conceptually represents
  ![](../flowchart.png)
# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
> The config.yml seems to be configuring parts of the project and its directories. After that it seems to through a series of steps to finish configuration of the project. They are commands similar to if I was typing thigs into the terminal. The commands seem to do things like update caches and run tests.

- What do the various sections on the config file do?
> The docker section seems to be in charge of creating an image of the workspace and backing it up to circleci. It then sets a working directory

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
> For the CI build to be successful it has to pass certain tests. When it passes, it indicates that the build has merged successfully with a master branch and the software can be deployed. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
> For this to go into continuous deployment you would need to add commands to the file that deployed your branch to a server when you were done making changes.

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
