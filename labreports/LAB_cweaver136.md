# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Caleb Weaver<br/>
GitHub: [Cweaver136](https://github.com/Cweaver136)<br/>
Repo: 

# Step 1: Fork this repository
- https://github.com/Cweaver136/cis411_lab0
- Creates an entirely new repo with a new origin/master
    [Diagram](https://docs.google.com/drawings/d/1wXy9JTltwarOgrFHV0M4pgKDi6qQVNqkEBQ35Mq1q8s/edit?usp=sharing)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "584d947f-93fe-403a-adae-00ee58631292",
      "name": "Caleb Weaver",
      "email": "cweaver136@gmail.com"
    }
  }
}}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
bd34176 (HEAD -> labreport, origin/labreport) added labreport @tangollama
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
```
[Diagram](https://docs.google.com/drawings/d/1-q6jKzCIGaIfLDajsiyQ9kSUYQ9Etd3fTUoTQSxIDSc/edit?usp=sharing)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
The config file is basically pulling code from your designatied repo, building a virtual instance of your new code, and then testing it to make sure that it all works together.
- What do the various sections on the config file do?

image: specifies the version of node we want to use
steps: denotes the specific process of the build
yarn install: will download the needed dependencies for the project
yarn test: will test a given script, in our case tests our code

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
The code that you pushed out to the main repo will not break existing code and integrates smoothly.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
You would add automatic deployment upon successful build of a project?

# Step 5: Merging the feature branch
* The output of my git commit log
```
68cdcd6 (HEAD -> master, origin/labreport, labreport) updated lab report
1eeb4e5 added circleCI .yml files
bd34176 added labreport @tangollama
dabceca (origin/master, origin/HEAD) Merge pull request #24 from tangollama/circleci
a4096db Create README.md
2f01bf4 Update LAB_INSTRUCTIONS.md
347bd50 Update LAB_INSTRUCTIONS.md
7aaa9f3 Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
```
* A screenshot of the _Jobs_ list in CircleCI
[Picture](https://docs.google.com/document/d/11C5n6GF_ZohrttWSr8157KfmjJEzIUUeEAPM68yC4N8/edit?usp=sharing)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

