# Lab Report Template for CIS4011_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: YOUR NAME<br/>
GitHub: [YOUR_HANDLE](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/g-reichert/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents: https://docs.google.com/drawings/d/1ku1oU8Bh3MfztSN1YRZs0Il8xEK_KoN_nAwnXvgMQ5A/edit?usp=sharing

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "c5e32ab3-7c37-47ca-b559-1fe8c1dde3c1",
      "name": "Garrett Reichert",
      "email": "gr1192@gmail.com"
    }
  }

```

# Step 3: Creating a feature branch
- The output of my git commit log
```
6af4ee7 (HEAD -> labreport, origin/labreport) your commit and reference @tangollama in the message
1949d2a (origin/master, origin/HEAD, master) Update LAB_INSTRUCTIONS.md
d36ad90 Update LAB.md
59ef18a Update LAB_INSTRUCTIONS.md
37be3c8 Update LAB_INSTRUCTIONS.md
97da547 Update LAB.md
0bd6244 updated Step 0 title
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
968099e remove test db
7362cd1 working
44ce6ae Initial commit

```
- The accompanying diagram of what my feature branch precisely and conceptually represents: https://docs.google.com/drawings/d/1IiPk5pxi67Fa_jzRy_Vb87_q956tu3tioSulusABsgU/edit?usp=sharing

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?: The .circleci/config.yml file is a configuration file. It contains the entire delivery process from build to deploy. It helps us do what we need to do on separate steps of 
- What do the various sections on the config file do?: It provides of the version of CircleCi we are using, defines the different jobs, and each job has a sepearate set of steps to be run. It will run commands for us whenever we update or submit a change.
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?: It tells us that are code still runs for all of our dependencies and tests.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?: You would want to develop test to make sure they work as expected.

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
