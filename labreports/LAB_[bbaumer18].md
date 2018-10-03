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
- The config file starts by specifying what version of continuous integration is being used, in this case version two. Then it looks at the job that it is tasked with. 
  This list consists of all of the builds that it is keeping track of, which is only one in this case. Within that build, it specifies how that build should be made for
  each instance of the build that it makes. It specifies what it is using, in this case Node version 7.10. Then it specifies what the continuous integration is working in,
  which in this case is the whole repo but it could be specified to something else. After specifying all of the requirements for the build, the config file then specifies
  all of the steps to go through for each build. These steps include caching all of the dependencies, and running a series of tests that the new code must pass in order to 
  be integrated. Each test that is implemented to prevent new code from breaking old code must be specified here so that the CI knows to run each of the desired tests in the 
  process of integrating the new commits. 
- What is the .circleci/config.yml doing?
	- It is setting up all of the requirements and steps for the CI to follow for each instance of a build that it makes.
- What do the various sections on the config file do?
	- The first section, specifies which version of circleci to use. The second section lists all of the jobs being done (i.e. each build that it must make instances of).
	  Within the build, docker sets up the type of build (i.e. node). The steps section specifies all of the steps that are included in the process of building an instance.
	  These steps include cache requirements and tests to run in order to check validity of commits.
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
	- It means that there is a system in place to automatically test code that has been committed and then it creates a build including that newly committed code (assuming
	  that the code passes all of the tests) to be deployed.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
	- I might need to add more tests and change the working directory to more specifically encompass only what I want it to reference.

# Step 5: Merging the feature branch
- Git Commit Log 
1fafec7 (HEAD -> master, origin/master, origin/labreport, origin/HEAD, labreport) finished step 4
98fafb3 more report changes
5af37ba circleci
f2141c2 circleci info
e4f2516 Second commit
edd4113 God Bless @tangollama
0da696d Update LAB.md
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

* A screenshot of the _Jobs_ list in CircleCI
Screenshot: https://docs.google.com/document/d/11CGn9nB97y6GJJ95_t22l_nuFuGKmW5HIcxO_lmU_uQ/edit?usp=sharing


# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
