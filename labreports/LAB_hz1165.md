# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Howard Zhang<br/>
GitHub: https://github.com/hz1165<br/>

# Step 1: Fork this repository
- https://github.com/hz1165/cis411_lab0
- https://docs.google.com/drawings/d/1E-OQN1gpMkcnwfl1HNVylB2O7GFsJ18u6j2Jwc3G1Yc/edit

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a8ced443-2e85-42d8-a6db-a7859f196ec1",
      "name": "Howard Zhang",
      "email": "hz1165@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
7d0874d (HEAD -> labreport, origin/labreport) created lab report, ref:@tangollama
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
```
- https://docs.google.com/drawings/d/1VgTXpvHGj9bHgt7FOw1HXDe2mlRGVfGGO1hHv1EXKSk/edit

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing? 
    Config.yml manages the entire process from build to deploy, it has multiple sections for the programmer to 
    edit directly instead of changing the code. It bascially tells circleCI how to manage the project.
- What do the various sections on the config file do?
    Version: The virsion of circle ci you want
    Jobs: List of jobs this program is going to do
    Build: Includes three main sections
      working_directory: specify the working directory
      Docker: specify which version of Node.js it's using, which pre-built images it's depending on
      Steps: checking out the dependencies
             Download and cache the dependencies
             Run the dependencies
             save and cache the dependencies for future usages
             run tests!
    
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
    when a CI build is successful, it doesn't mean it's ready to use for the program, the programmer still need to implement more steps and tests to make sure it's doing what they desire.
    
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
    If I continue work on this project in the future, I will probably add more tests and code steps in order to give more functions to the program.

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
