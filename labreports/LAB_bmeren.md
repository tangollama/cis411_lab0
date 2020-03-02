# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Becky Merendino<br/>
GitHub: [bmeren](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- https://github.com/bmeren/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents
![CIS411 Lab Diagram](CIS411-Lab-Diagram.png)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "d8d8597e-8d1d-4c6d-9ed7-c17a572337d7",
      "name": "Becky Merendino",
      "email": "bm1371@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
6bc16bc (HEAD -> labreport, origin/labreport, master) add my lab report @tangollama
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

```
- The accompanying diagram of what my feature branch precisely and conceptually represents
![CIS 411 Lab Diagram 2](CIS411-Lab-Diagram2.png)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing? Executing node as default, installing and testing npm, and building and testing the job.
- What do the various sections on the config file do? "jobs" is executing node as default and installing and testing npm, workflows is building and testing jobs.
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build? It indicates that the build is running smoothly philosophically without error.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)? I would add a place for an ID photo, possibly an address to go with the rest of the data.

# Step 5: Merging the feature branch
* The output of my git commit log
02c6791 (HEAD -> master, labreport) updated for step 5
6bc16bc (origin/labreport) add my lab report @tangollama
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

* A screenshot of the _Jobs_ list in CircleCI
![Jobs](jobs.png)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
