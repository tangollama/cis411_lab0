# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Spring 2020<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Joston Chan<br/>
GitHub: [JostonChan](https://github.com/JostonChan)<br/>

# Step 1: Fork this repository
- [Joston's Forked Repository](https://github.com/JostonChan/cis411_lab0.git)
- The accompanying diagram of what my fork precisely and conceptually represents
  The diagram is stored in the images folder.
  Forked repository branch is not the same thing as a source control branch but rather it creates a child repository branch 
  for the user so that the user can edit the files that is only within the child repository branch, not affecting the source control branch.Once the user is satisfied with the changes that he has made, he can submit the changes to the source control branch using the "Pull Request".  

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "d0d02813-7dfc-4f06-b8ef-d3e9b972157b",
      "name": "Jen Wayne Chan",
      "email": "jc1608@messsiah.edu"
    }
  }
}
```
A diagram is stored in the images folder.

# Step 3: Creating a feature branch
- The output of my git commit log
```
  ba38011 (HEAD -> labreport, origin/labreport) I redid step 3 because I want to understand it better. @tangollama
  0078d1e (origin/master, origin/HEAD, master) Update LAB_JostonChan.md
  044199b Merging the feature branch
  e43f564 your commit message
  a3b15ca your commit and reference @tangollama in the message
  330597a your commit and reference @tangollama in the message
  dabceca (upstream/master) Merge pull request #24 from tangollama/circleci
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
```
- The accompanying diagram of what my feature branch precisely and conceptually represents
The diagram is stored in the images folder.

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
  It creates a workflow and scan the yml file. It also records the commits that you have made to a Git branch. Not only that, the main feature of the yml file is to run tests in parallel.This requires specifying a parallelism level to define how many separate executors get spun up for the test job. 

- What do the various sections on the config file do?
  - Specify the version of the circle.ci platform
  - Specify service dependencies here if necessary
  - CircleCI maintains a library of pre-built images
  - Runs test according to the steps and parallelism key that you have entered  

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
  It indicates that the task or the feature that the user has added to the program presents no errors. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
  - Add a job to the config.yml file
  - configure the job to run the steps that I want
  - Add environment variables and SSH keys
  - To simplify deployment, we can use Orbs, 


# Step 5: Merging the feature branch
* The output of my git commit log
'''
e43f564 (HEAD -> master, origin/master, origin/HEAD, labreport) your commit message
a3b15ca (origin/labreport) your commit and reference @tangollama in the message
330597a your commit and reference @tangollama in the message
dabceca (upstream/master) Merge pull request #24 from tangollama/circleci
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
'''

* A screenshot of the _Jobs_ list/Pipeline in CircleCI


# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
