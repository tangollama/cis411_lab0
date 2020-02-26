# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Matthew Laven<br/>
GitHub: [ml1402](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- The URL of my forked repository: 
[My Link](https://github.com/ml1402/cis411_lab0)
- The accompanying diagram of what my fork precisely and conceptually represents
- A fork of a project is a seperate entity than the original project itself, giving the new developer full control over the fork. A branch is just a temporary fork that is meant to be re-implemented into the original codebase once modifications are done. 
![Fork Diagram](StepOneDiagram.png)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "b45db004-59da-45f9-8693-97f862f0dc7e",
      "name": "Matt Laven",
      "email": "ml1402@messiah.edu"
    }
  }
}

```

# Step 3: Creating a feature branch
- The output of my git commit log
```
d2ddea5 (HEAD -> master, origin/master, origin/HEAD) Version 0.0.1 of the lab instructions
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
![Diagram of a Branch of the Lab](StepThreeDiagram.png)

# Step 4: Setup a Continuous Integration configuration
## What CircleCI is doing:
```
INSERT DESCRIPTION
```
- What is the .circleci/config.yml doing?
- What do the various sections on the config file do?
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

# Step 5: Merging the feature branch
* The output of my git commit log
* A screenshot of the _Jobs_ list in CircleCI
![CircleCI is functioning](CircleCI.png)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
