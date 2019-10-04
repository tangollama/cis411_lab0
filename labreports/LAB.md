Course: Messiah College CIS 411, Fall 2019 <br>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br>
Name: Michael Williams <br>
GitHub: mw1421 (https://github.com/mw1421)

# Step 1: Fork this repository
- The URL of my forked repository
    https://github.com/mw1421/cis411_lab0.git
- [The accompanying diagram of what my fork precisely and conceptually represents](https://docs.google.com/drawings/d/1Bzt8FWsGmBR3BQx8DZTcdofMr4r-zwmvKyvC2-N595A/edit?usp=sharing)
    tangollama's repository is like the master of the master branches in the project. 
    It is the originator of the projects, so everyone can pull from that repository,
    but not every fork can communicate with each other. Say Caleb Weaver also forked
    from tangollama's repo. He can merge back to the master of the masters, but he 
    could not merge with my own branch. You can only go to the original repository. 
    My fork off of my forked repository is like the relationship between tangollama's
    repository and my master repository. I can merge them when I want, but I cannot 
    merge my forked repository with Caleb Weaver's forked forked repository. 
# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a10db030-ded8-4397-a78f-30b79d3497ab",
      "name": "MY NAME",
      "email": "MY EMAIL"
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
