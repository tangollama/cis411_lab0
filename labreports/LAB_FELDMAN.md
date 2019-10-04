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
``` JSON
{
  "data": {
    "mutateAccount": {
      "id": "faad80fc-52b9-4cb3-beb5-fabb2a291a82",
      "name": "Drew Feldman",
      "email": "df1239@messiah.edu"
    }
  }
}
```
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
https://docs.google.com/drawings/d/1amICOGRvqSiRTOhNTL_8t3MmSojMFRfK8WRidiYwxiA/edit?usp=sharing
Step 4: Setup a Continuous Integration configuration
What is the .circleci/config.yml doing?
It is error checking the commit to see if the commit is going to cause errors for the project. I think.
It does this by pulling the code from the repository and creating a virtual instance to test and make sure everything is working.
What do the various sections on the config file do?
Version shows which version of CircleCI you're using. The Jobs section contains all the tasks that need to be executed. The build is the build of the current job being worked on, and the docker designates which docker to use. Image dictates which version of node to use, steps explains the build process, yarn install downloads anything circleci needs for the test, yarn test tests the code. I think. This is all super confusing to me, I tried to get it explained by friends.
When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
It shows that the changes to the existing file blend well and that no errors were produced. This means the code is sound.
If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

Step 5: Merging the feature branch

The output of my git commit log

d7b74f2 (HEAD -> master, origin/master, origin/HEAD) Finished Lab Report
0428c7b Changes to lab reports file.
5dd212d (labreport) Commiting changes to feature branch.
a3abcde (origin/labreport) Just a random commit
3249302 Commit 1 @tangollama
dabceca (lapreport) Merge pull request #24 from tangollama/circleci
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


A screenshot of the Jobs list in CircleCI
Step 6: Submitting a Pull Request
Remember to reference at least one other student in the PR content via their GitHub handle.
Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
Add one or more unit tests to the core assignment project.
Configure the CircleCI config.yml to automatically build a Docker image of the project.
Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.