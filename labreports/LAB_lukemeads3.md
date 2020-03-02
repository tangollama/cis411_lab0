# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Spring 2020<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Luke Meads<br/>
GitHub: [lukemeads3](https://github.com/lukemeads3)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
https://github.com/lukemeads3/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents


# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "88b5097d-69d0-465f-9f7c-24d42806d8d8",
      "name": "Luke Meads",
      "email": "lm1374@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
2999e5b (HEAD -> labreport, origin/labreport) Create LAB_lukemeads3.md
a38cdbc your comit and reference @tangollama in the message
dabceca (upstream/master, origin/master, origin/git-checkout--b-labreport, origin/HEAD, master) Merge pull request #24 from tangollama/circleci
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
0bd6244 (upstream/purelab, origin/purelab) updated Step 0 title
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
:    
```
- The accompanying diagram of what my feature branch precisely and conceptually represents

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
Circleci/config.yml are configurartions that interacts with other code and runs builds, tests, security scans, approval steps, deployment. The config.yml file in this lab is running the job build-and-test that installs npm and then after this is complete, runs npm
- What do the various sections on the config file do?
The job section contains the collection of children. The steps section is the list of run directives. The name attribute provides useful info when returning warnings, errors, outputs. The command is a list of shell commands. The workflow or requires attriubute tells if a job requires another job to be completeted before continuing with that job.
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
When a CI build is successful, everyone in the process are able to push their code to the repo and be able to detect any bad builds and fix them quickly.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?


# Step 5: Merging the feature branch
* The output of my git commit log
1ec0912 (HEAD -> master, labreport) answered lab report questions.
7f1a7aa (origin/labreport) Updated files
2999e5b Create LAB_lukemeads3.md
a38cdbc your comit and reference @tangollama in the message
dabceca (upstream/master, origin/master, origin/git-checkout--b-labreport, origin/HEAD) Merge pull request #24 from tangollama/circleci
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
0bd6244 (upstream/purelab, origin/purelab) updated Step 0 title
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
:  
* A screenshot of the _Jobs_ list in CircleCI
C:\Users\Lamea\Documents\GitHub\cis411_lab0\assets\jobs.PNG

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
