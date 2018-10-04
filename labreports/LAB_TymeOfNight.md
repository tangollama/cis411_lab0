# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Justin Kim<br/>
GitHub: [TymeOfNight](https://github.com/TymeOfNight)<br/>

# Step 1: Fork this repository
- The URL of my forked repository: [https://github.com/TymeOfNight/cis411_lab0](https://github.com/TymeOfNight/cis411_lab0)
- The accompanying diagram of what my fork precisely and conceptually represents<br /> ![Forking vs. Branching](https://github.com/TymeOfNight/cis411_lab0/blob/master/assets/forkbranch.png) 

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "f52f049a-d4db-45c8-b749-28133b560294",
      "name": "Justin John Kim",
      "email": "jk1515@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
c38a9c6 (HEAD -> labreport, origin/labreport) config.yml
d8934f4 Copy of the labreport, as per @tangollama's instructions.
9fa72a8 (origin/master, origin/HEAD, master) Update LAB.md
9bae12b Update LAB.md
6eecec0 Update LAB.md
da3b016 Update LAB.md
60853f1 Update LAB.md
8d4096e Added forkbranch.png
e9c3234 Update LAB.md
d9d407d Update LAB.md
526ab08 Added Untitled Diagram.png
83b2e33 Added Forks v Branches.png
f68a795 Update LAB.md
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
(END)
```
- The accompanying diagram of what my feature branch precisely and conceptually represents
![Branch Diagram](https://github.com/TymeOfNight/cis411_lab0/blob/labreport/assets/GitBranches.png)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
- What do the various sections on the config file do?
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
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
