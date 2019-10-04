# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Stephanie Tran<br/>
GitHub: [tran1996](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- https://github.com/tran1996/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents
  img src="C:\Users\Thao\Documents\CIS411\cis411_lab0\labreports\Forked Repository"

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "31e088e6-4736-4206-ad89-47218a4ebf69",
      "name": "STEPHANIE TRAN",
      "email": "STEPHANIET1900@YAHOO.COM"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
eb219d1 (HEAD -> labreport, origin/master, origin/labreport, origin/HEAD, master) your commit and reference @tangollama in the message
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

```
- The accompanying diagram of what my feature branch precisely and conceptually represents
  img src="C:\Users\Thao\Documents\CIS411\cis411_lab0\labreports\Branched Forked Repository"

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
  Circleci is a assists in managing projects by creating new files and repositories, as well as creating an environment for testing. To set up a build in Circleci, you must be logged in and make sure you are following a project you have access to. Next, you must add the repository while ensuring your Github account is selected. Then, you select the Add Projects page and search for the repository you just created as a new project and click the Set up Project button. 
  
- What do the various sections on the config file do?
  THe various sections in a config file keep it organized. An example is the Workflow section which helps define a set of rules for defining a collection of jobs along with their run order. 

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
  After your build is successful and running automatically, this is where the project really starts. You must now create an environment to start testing this build and work to actively improve it. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
  For continuous delivery, the team must focus on delivering smaller batches of changes more frequently to the production. If I were to make additional changes, I would make sure that they are something that can be acheivable in a short amount of time.  

# Step 5: Merging the feature branch
* The output of my git commit log
eb219d1 (HEAD -> master, origin/master, origin/labreport, origin/HEAD, labreport) your commit and reference @tangollama in the message
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

* A screenshot of the _Jobs_ list in CircleCI

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
