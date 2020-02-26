# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Nik Mourelatos<br/>
GitHub: [YOUR_HANDLE](https://github.com/NikMourelatos)<br/>

# Step 1: Fork this repository
- https://github.com/NikMourelatos/cis411_lab0.git
- The accompanying diagram of what my fork precisely and conceptually represents

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "91a06f4f-a923-4368-98a6-39e1a4e20ace",
      "name": "Nikolas Michael Mourelatos",
      "email": "nm1287@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
7316627 (HEAD -> labreport, origin/labreport) NikMourelatos commit 2  @tangollama
f45d84a NikMourelatos committ @tangollama
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
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit
```
- The accompanying diagram of what my feature branch precisely and conceptually represents

# Step 4: Setup a Continuous Integration configuration
- The config.yml file is allowing our repo to have continuous integration, this is being done by the config file whic deploys your repo with the selected configurations that are needed in order to run/ test your project.
- * orbs are packages that you want in your build 
  * jobs are what run your build process, inside our job we have the build which is used to run when we push our code.
  * inside our build we define the enviorment to run our project, which in this case is node/default
  * Also present inside our build processs we have the steps which would be the command line commands that we use in order to run/ test our program. In this case we have git check out which creates a branch to the working tree and then npm install and npm start which are used to test if ourproject is working correctly.
  * lastly, we have the workflow, this is used to pipeline the continuous integration of the project directing how the project is ran and tested. Present in ours we have build and test and jobs which causes those jobs to run.
- When a CI build is succesful it shows that the code is able to compile and run currectly.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

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
