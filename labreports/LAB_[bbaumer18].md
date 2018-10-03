# Lab Report Template for CIS4011_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Brandon Baumer<br/>
GitHub: @bbaumer18(https://github.com/bbaumer18)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
  - https://github.com/bbaumer18/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents
  - While the forked version of the repo came from the original, it is completely separate with each being
	controlled by the owner of that repo. So the original is controlled completely by tangollama while the 
	forked version is completely controlled by bbaumer18. The only connection is that the forked version was
	initially a copy of the original.
  - Link to the diagram: https://docs.google.com/drawings/d/1vtkQT0afWz62Oymz0Z01DeeZWGD5QO8-Fdq6y_Fg-2I/edit?usp=sharing

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "c95c3672-3e10-47cb-8a75-eb1e53370611",
      "name": "Brandon Baumer",
      "email": "bb1351@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
e4f2516 (HEAD -> labreport, origin/labreport) Second commit
edd4113 God Bless @tangollama
0da696d (origin/master, origin/HEAD, master) Update LAB.md
b939aee Update LAB.md
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

```
- The accompanying diagram of what my feature branch precisely and conceptually represents
	- The feature branch is simply a version of the repo that will track changes without them being 
	  applied to the primary repo (master) until they are pushed. It represents an alternate version of the code that is
	  not currently contained within master and can be merged to implement its differences with the master version.
	  branch.
	- Link to the diagram: https://docs.google.com/drawings/d/1fyCvImQVexLCOXhql0wSA66-dyhD21H8m3IeK27W_c4/edit?usp=sharing

# Step 4: Setup a Continuous Integration configuration
- The config file is determining where within the project the CI is going to be working, then it checks and stores all
  dependencies, then it specifies all of the tests that need to be run on code that is being continuously integrated.
	- Link to the diagram: 
- What is the .circleci/config.yml doing?
	- It is continually watching your repo to check for dependency issues and is storing backups of cache dependencies.
- What do the various sections on the config file do?
	- The first section, 'docker', appears to simply be where configuration variables are set to allow it to
	  integrate with git. 
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
	- It means that there is a system in place to automatically test code that has been committed and then it creates a build including that newly committed code (assuming
	  that the code passes all of the tests) to be deployed.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
	- I might need to add more tests and specify where all of the cache dependencies are being stored.

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
