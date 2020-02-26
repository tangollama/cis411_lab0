# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Nik Mourelatos<br/>
GitHub: [NikMourelatos](https://github.com/NikMourelatos)<br/>
GitHub: [Starred repo](https://github.com/vmt/udis86)<br/>

# Step 1: Fork this repository
- https://github.com/NikMourelatos/cis411_lab0.git
### Forking a branch depiction
![](images/ForkRepresentationComplete.jpg)

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
### Feature Branch Depiction
![](images/BranchRepresentation.jpg)

# Step 4: Setup a Continuous Integration configuration
- The config.yml file is allowing our repo to have continuous integration, this is being done by the config file which deploys your repo with the selected configurations that are needed in order to run/ test your project.
- Orbs
  * orbs are packages that you want in your build. 
- Jobs  
  * Jobs are what run your build process, inside our job we have the build which is used to run when we push our code.
- Build
  * inside our build, we have executor which is where we define the enviorment to run our project, which in this case is node/default.
- Steps 
  * Also present inside our build processs we have the steps which would be the command line commands that we use in order to run/ test our program. In this case we have git check out which creates a branch to the working tree and then npm install and npm start which are used to test if ourproject is working correctly.
- Workflows
  * lastly, we have the workflow, this is used to pipeline the continuous integration of the project directing how the project is ran and tested. Present in ours we have build-and-test and jobs which causes those jobs to run in that order.
  ### Visualization of continuous integreation process
   ![](images/CircleCIDemonstration.jpg)
- When a CI build is succesful it shows that the code that is pushed is able to compile and run currectly.
- The configuration would need to make sure that all the code collectively is running how it is intended and then deploy everything to the correct production server.

# Step 5: Merging the feature branch
### The output of my git commit log
```
6f3ffe4 (HEAD -> master, origin/master, origin/labreport, origin/HEAD, labreport) Push for markdown image test
b7a21cc Push for markdown image test
8579b86 Push for markdown image test
db78322 Push for markdown image test
82793a4 Push for markdown image test
496ba66 Push for markdown image test
306cf84 Push for markdown image test
8184625 Push for markdown image test
1040e4c Push for markdown image test
2ddb589 Push for markdown image test
b738db5 Push for markdown image test
8049b03 NikMourelatos commit 4  @tangollama
5542d0b NikMourelatos commit 3  @tangollama
7316627 NikMourelatos commit 2  @tangollama
f45d84a NikMourelatos committ @tangollama
dabceca Merge pull request #24 from tangollama/circleci
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
## CircleCI Jobs Confirmation
![](images/Jobs.png)

