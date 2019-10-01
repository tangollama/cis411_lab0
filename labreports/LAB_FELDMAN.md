Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018
Instructors: Joel Worrall & Trevor Bunch
Name: Drew Feldman
GitHub: DrewRFeldman
Step 1: Fork this repository
https://github.com/DrewRFeldman/cis411_lab0
The accompanying diagram of what my fork precisely and conceptually represents
https://docs.google.com/drawings/d/1XnyDNvx4CySERyUQh_7TGzCZSk5WRbbRNFNBDxwDnPc/edit?usp=sharing
Step 2: Clone your forked repository from the command line
My GraphQL response from adding myself as an account on the test project
{
  "data": {
    "mutateAccount": {
      "id": "faad80fc-52b9-4cb3-beb5-fabb2a291a82",
      "name": "Drew Feldman",
      "email": "df1239@messiah.edu"
    }
  }
}
Step 3: Creating a feature branch
The output of my git commit log
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
The accompanying diagram of what my feature branch precisely and conceptually represents
Step 4: Setup a Continuous Integration configuration
What is the .circleci/config.yml doing?
What do the various sections on the config file do?
When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
Step 5: Merging the feature branch
The output of my git commit log
A screenshot of the Jobs list in CircleCI
Step 6: Submitting a Pull Request
Remember to reference at least one other student in the PR content via their GitHub handle.
Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
Add one or more unit tests to the core assignment project.
Configure the CircleCI config.yml to automatically build a Docker image of the project.
Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.