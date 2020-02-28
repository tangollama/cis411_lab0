# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Matthew Laven<br/>
GitHub: [ml1402](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- The URL of my forked repository: 
[My Link](https://github.com/ml1402/cis411_lab0)
- The accompanying diagram of what my fork precisely and conceptually represents
- A fork of a project is a seperate entity than the original project itself, giving the new developer full control over the fork. A branch is just a temporary fork that is meant to be re-implemented into the original codebase once modifications are done. 
![Fork Diagram](StepOneDiagram.png)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "b45db004-59da-45f9-8693-97f862f0dc7e",
      "name": "Matt Laven",
      "email": "ml1402@messiah.edu"
    }
  }
}

```

# Step 3: Creating a feature branch
- The output of my git commit log
```
d2ddea5 (HEAD -> master, origin/master, origin/HEAD) Version 0.0.1 of the lab instructions
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
![Diagram of a Branch of the Lab](StepThreeDiagram.png)

# Step 4: Setup a Continuous Integration configuration
## What CircleCI is doing:
```
INSERT DESCRIPTION
```
- What is the .circleci/config.yml doing?
- What do the various sections on the config file do?
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

# Step 5: Merging the feature branch
* The output of my git commit log
```
Matt L@MATTXPS15 MINGW64 ~/Desktop/Spring 2020/411 Dev Environment/cis411_lab0 (labreport)
$ git commit -a -m "Half-way done lab report commit test"
[labreport 6d79084] Half-way done lab report commit test
 1 file changed, 16 insertions(+), 6 deletions(-)

Matt L@MATTXPS15 MINGW64 ~/Desktop/Spring 2020/411 Dev Environment/cis411_lab0 (labreport)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

Matt L@MATTXPS15 MINGW64 ~/Desktop/Spring 2020/411 Dev Environment/cis411_lab0 (master)
$ git merge labreport
Updating dabceca..6d79084
Fast-forward
 labreports/LAB_ml1402.md | 68 ++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 68 insertions(+)
 create mode 100644 labreports/LAB_ml1402.md

Matt L@MATTXPS15 MINGW64 ~/Desktop/Spring 2020/411 Dev Environment/cis411_lab0 (master)
$ git log --oneline
6d79084 (HEAD -> master, labreport) Half-way done lab report commit test
9b1d90e (origin/labreport) This is a test commit. Reference @tangollama
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
0bd6244 (origin/purelab) updated Step 0 title
4562cd8 added npm and node install repreq
255051e adding template
13a09b7 Adding the LAB.md and correcting some instructions.
d2ddea5 Version 0.0.1 of the lab isntructions
ab312fc more progress
62fb0a5 more progress
fe1937b more in the lab instructions
3e807fb first section
:...skipping...
6d79084 (HEAD -> master, labreport) Half-way done lab report commit test
9b1d90e (origin/labreport) This is a test commit. Reference @tangollama
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
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit
```
* A screenshot of the _Jobs_ list in CircleCI
![CircleCI is functioning](CircleCI.png)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
