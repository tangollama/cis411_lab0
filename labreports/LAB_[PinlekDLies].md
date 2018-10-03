# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Andrew Hoffman<br/>
GitHub: [PinlekDLies](https://github.com/PinlekDLies)<br/>

# Step 1: Fork this repository
- https://github.com/PinlekDLies/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "48f44890-54fb-4a4e-b9e4-3aae79d65cfc",
      "name": "Andrew Hoffman",
      "email": "ah1522@gmail.com"
    }
  }
}

```

# Step 3: Creating a feature branch
- The output of my git commit log
```
Andrew@Andrews_PC MINGW64 ~/cis411_lab0 (labreport)
$ git log --oneline
8de391c (HEAD -> labreport, origin/labreport) I love 411 and God please give me extra credit <3 @tangollama
347bd50 (origin/master, origin/HEAD, master) Update LAB_INSTRUCTIONS.md
7aaa9f3 Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
1949d2a Update LAB_INSTRUCTIONS.md
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

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
It connects your git to .circleci so that from your pipline to delpoying, it is completely automated/tested. 

- What do the various sections on the config file do?
It gets your repo, attempt to check it out if it can, runs Yarn (a package manager) in order to reduce errors related to network connectivity

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
It indicates that it is able to provide rapid feedback so that if a defect is introduced into the code base, it can be identified and corrected as soon as possible. This allows for easier deployment and is much easier to manage. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

# Step 5: Merging the feature branch

```
Andrew@Andrews_PC MINGW64 ~/cis411_lab0 (master)
$ git merge labreport
Updating 347bd50..e06a98a
Fast-forward
 .circleci/config.yml            | 39 ++++++++++++++++++++
 labreports/LAB_[PinlekDLies].md | 82 +++++++++++++++++++++++++++++++++++++++++
 2 files changed, 121 insertions(+)
 create mode 100644 .circleci/config.yml
 create mode 100644 labreports/LAB_[PinlekDLies].md

```

* A screenshot of the _Jobs_ list in CircleCI


# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._
@tw1255

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
