# Lab Report Template for CIS4011_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Joshua Simmons<br/>
GitHub: [joshuasimmons33](https://github.com/joshuasimmons33)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
- https://github.com/joshuasimmons33/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents
```
See: 'Fork Diagram.pdf'
```
# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "name": "Joshua Simmons",
      "email": "joshua.simmons33@gmail.com"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
61209c7 (HEAD -> labreport, origin/labreport) Adding my output for the mutation
db482d0 @tangollama Hey this is a commit! Yay!
62f6fd0 (origin/master, origin/HEAD, master) Npm install
1949d2a (upstream/master) Update LAB_INSTRUCTIONS.md
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
```
See: 'Branch Diagram.pdf'
```

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
```
config.yml, as far as I can tell, is an automatic script that installs the project using yarn commands. This serves to continuously
synch up the developer's code and make sure that it still is able to be integrated with the existing code.
```
- What do the various sections on the config file do?
```
The 'jobs' section is seemingly a container, that might hold several 'build' instances.
The 'build' section seems specific to each project, and probably holds different configuration options that determine
  how a project is built.
The 'docker section' contains an image number, which looks like it determines which node image gets used.
The 'steps' portion of config.yml seems to contain shell commands, that would be used in a CMD line in order to perform various opertations.
  Specifically, I see a checkout command, which would be a git command to retrieve a branch from a remote repo to the local machine. I am
  also familiar with yarn, which is a package manager. Those commands are responsible for building and running a version of a Javascript
  application. Finally, this section also seems to set up dependencies, and will save/install the ones that are needed as determined by
  the package.json
```
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
```
If a CI build is successful, that means that there are no compilation errors, and that the code builds correctly without issues.
  For this lab, this doesn't really mean much; the project isn't complex. In a more professional project, this might also mean that
  the automated tests all passed, and the code was all successfully compiled.
```
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
```
There would need to definitely be tests that were added, in order to make sure that the project meets any specifications that are needed.
  The tests would need to be rather comprehensive, to ensure that the project is ready to build before actually doing the build process.
  Also, there would need to be a method of deploying the project, meaning that there would most likely need to be a place where the project
  is hosted, so that the built project could be accessed. We would also have to have somebody responsible for deploying the builds on a
  semi-regular basis.
```

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
