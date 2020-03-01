# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Spring 2020<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Belosan Jekale<br/>
GitHub: [belosanj](https://github.com/belosanj)<br/>

# Step 1: Fork this repository
- [The URL of my forked repository](https://github.com/belosanj/cis411_lab0.git)
- ![Diagram representing forked repository](../assets/Forked_repository.png)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "7f8c91f5-12bf-40bd-9d90-cb27c68bb2e4",
      "name": "Belosan Jekale",
      "email": "bj1203@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
303591f (HEAD -> master) merging feature branch
c6c649e (origin/master, origin/HEAD, labreport) Belosan's commit message
55584c2 (origin/labreport) Belosan's commit @tangollama
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
- ![Diagram representing relationship between your master and feature branch](../assets/Master_feature&#32;branch.png)

# Step 4: Setup a Continuous Integration configuration
- .circleci/config.yml is where your code is configured. It is the only file where the entire delivery process from build to deploy is setup. 
- The various sections on the config file tell us what is happening. For instance, "Version" tells us what version of circleCi we are working on. 
- When CI is sucessful that means that the all of the builds jobs passed sucessfully.
- I would go to my config.yml file in visual studio code to edit and add code. 

# Step 5: Merging the feature branch
* The output of my git commit log
```
c6c649e (HEAD -> master, labreport) Belosan's commit message
55584c2 (origin/labreport) Belosan's commit @tangollama
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
* ![Screenshot of Jobs in CircleCi](../assets/circleCi_jobs_workflow.png)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
