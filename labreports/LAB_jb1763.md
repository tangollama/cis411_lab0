# Lab Report Template for CIS4011_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Jared Butler<br/>
GitHub: [jb1763](https://github.com/jb1763)<br/>

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/jb1763/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents

[Fork Diagram]()
//XXX TODO: add drive link

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project

```
{
  "data": {
    "mutateAccount": {
      "id": "7a39ac2c-ff66-4a27-b357-489858855635",
      "name": "Jared Butler",
      "email": "jb1763@messiah.edu"
    }
  }
}

```

# Step 3: Creating a feature branch
- The output of my git commit log
```
14cb1ad (master) Jared Butler committing my copy of @tangollama reference labreport markdown before any changes have been made.
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
- The accompanying diagram of what my feature branch precisely and conceptually represents

[Feature Branch Diagram]()
//XXX TODO: add drive link


# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?

config.yml is specifying what the continuous environment should do.

It is markup to set up the Continuous Integration environment by using a prebuilt image, setting the working directory, Downloading and caching dependencies, and running yarn tests.

- What do the various sections on the config file do?

See answer above.

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?

The code passes all written tests/ the new commit doesn't regress in the testing process.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

Issue a pull request into the original code base.

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
