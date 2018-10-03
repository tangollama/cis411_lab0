Lab Report 
Course: Messiah College CIS 411, Fall 2018
Instructors: Joel Worrall & Trevor Bunch
Name: David Abraham
GitHub: da1238
Step 1
•	https://github.com/da1238/cis411_lab0
•	The accompanying diagram of what my fork precisely and conceptually represents
 
Step 2
•	My GraphQL response from adding myself as an account on the test project
{
  "data": {
    "mutateAccount": {
      "id": "5b476994-28b3-48a6-8254-2b321261ee04",
      "name": "David Abraham",
      "email": "da1238@messiah.edu"
    }
  }
}


Step 3
•	The output of my git commit log
f35094c (HEAD -> labreport, origin/labreport) commit lab report  @tangollama
1949d2a (origin/master, origin/HEAD, master) Update LAB_INSTRUCTIONS.md
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
•	The accompanying diagram of what my feature branch precisely and conceptually represents 
Step 4: Setup a Continuous Integration configuration
•	What is the .circleci/config.yml doing?
The yml file is connecting and configurating circleci to the git repository.
•	What do the various sections on the config file do?
According to the comments in the file, the first section serves to specify the version of node to be installed, the second section to specify service dependencies, the third section downloads and caches the dependencies and the last section installs and tests yarn
•	When a CI build is successful, what does that philosophically and practically/precisely indicate about the build? 
According to the report from my first unsuccessful build, a successful build will primarily have a functional config file followed up with commands such as the spin up environment.
•	If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
Since delivery will be done in short increments, I would modify the configuration to reduce installation of any sorts in order to increase time efficiency.
Step 5: Merging the feature branch
•	The output of my git commit log
f35094c (HEAD -> master, origin/labreport, labreport) commit lab report  @tangollama
1949d2a (origin/master, origin/HEAD) Update LAB_INSTRUCTIONS.md
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
•	A screenshot of the Jobs list in CircleCI 

