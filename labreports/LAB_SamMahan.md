# Lab Report Template for CIS4011_Lab0

Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Samuel Mahan<br/>
GitHub: [SamMahan](https://github.com/SamMahan)<br/>

# Step 1: Fork this repository

* The URL of my forked repository

* The accompanying diagram of what my fork precisely and conceptually represents

# Step 2: Clone your forked repository from the command line

* My GraphQL response from adding myself as an account on the test project

```
{
  "data": {
    "mutateAccount": {
      "id": "a10db030-ded8-4397-a78f-30b79d3497ab",
      "name": "Samuel Mahan",
      "email": "sm1520@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch

* The output of my git commit log

```
$ git log --oneline
6b090f8 (HEAD -> master, origin/labreport, labreport) committing .circleci resources
d9e9c7a my initial commit of the labreport branch at the end of step 3
1949d2a (origin/master, origin/HEAD) Update LAB_INSTRUCTIONS.md
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

* The accompanying diagram of what my feature branch precisely and conceptually represents
* this image shows both the relationship between repositories and between branches
  https://livemessiah-my.sharepoint.com/:i:/g/personal/sm1520_messiah_edu/Eecgc5HIay1JrFsccETIRWIB4rZnOihorXzIrC8cQ877Mg?e=WZ4Cfl

# Step 4: Setup a Continuous Integration configuration

* What is the .circleci/config.yml doing?
  -config.yml is providing circleCi with instrructions for how it should go about building and validating the current codebase
* What do the various sections on the config file do?
  build: determines what will compile the code. in this case, node is selected
  working_directory: sets the working directory
  steps: procedures that should be taken to build the code. checkout, download dependencies using yarn, save the list of current dependencies, and run tests.
* When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
  Practically, that means that the build is without errors and ready for deployment. Precisely, it means that the build has compiled properly and passed all the tests
  that have been designated to it.
* If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
  In concept, I would configure a full suite of tests that would run at each push. I would also set up a notification system (slack,email,etc.), to notify relevant personnel
  of successes and failures.

# Step 5: Merging the feature branch

* The output of my git commit log can be found here:

  https://livemessiah-my.sharepoint.com/:i:/g/personal/sm1520_messiah_edu/EcAhcPgSbBxAtA4ITu61rawBdtfASuDqp0ZFtDFtfvBCGg?e=2fofKw

- A screenshot of the _Jobs_ list in CircleCI

- the image of my successful jobs can be found here:
  https://livemessiah-my.sharepoint.com/:i:/g/personal/sm1520_messiah_edu/EdaYrL-ntHBDphMFnSHXhjAB7FRb0SyTLdBs9TmxlYwkyQ?e=2mZDp2

# Step 6: Submitting a Pull Request

_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project

PR reference in the report to one of the following:

1.  Add one or more unit tests to the core assignment project.
2.  Configure the CircleCI config.yml to automatically build a Docker image of the project.
3.  Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
