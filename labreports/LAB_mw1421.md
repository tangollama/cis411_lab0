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
    could not merge with my branch. You can only go to the original repository. 
# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
{
  "data": {
    "mutateAccount": {
      "id": "3f40e472-f517-4147-a8fb-1ddaf4ac7576",
      "name": "Michael Williams",
      "email": "mw1421@messiah.edu"
    }
  }
}

# Step 3: Creating a feature branch
- The output of my git commit log
Michael@Michael-Laptop MINGW64 ~/cis411_lab0 (labreport)
$ git log --oneline
cef4152 (HEAD -> labreport, origin/labreport) copied @tabgollama's lab report to my own lab report
39a1887 committed my labreport @tangollama
dabceca Merge pull request #24 from tangollama/circleci
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
9ae6b83 remove LAB.md
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit
(END)
    - I made some mistakes, but I fixed my probelms and did it right the second time. 
    
- [The accompanying diagram of what my feature branch precisely and conceptually represents]((https://docs.google.com/drawings/d/1Bzt8FWsGmBR3BQx8DZTcdofMr4r-zwmvKyvC2-N595A/edit?usp=sharing)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
    Runs the command Greeting and the command Print the Current Time. 
- What do the various sections on the config file do?
    .circleci config file checks the version of circleci. Then it tries to find an image. It then moves to a different branch. It then runs the command “Greeting” where the command echoes “Hello, world.” It runs another command “Print the Current Time” where it prints the current date. It then builds the project. 
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
    It means that it is built, tested, and deployed easier and quicker on a lot of different platforms. 
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
    Building something to automate tests to detect problems, and then automatically push the products. 

# Step 5: Merging the feature branch
* The output of my git commit log
Michael@Michael-Laptop MINGW64 ~/cis411_lab0 (master|MERGING)
$ git log --oneline
f6fe770 (HEAD -> master, origin/master, origin/HEAD) Moved onto step 3 of the Lab Report
064639f Working on Lab Report and Checking it
abd9bcd committed again the .circleci step because I messed up
39a1887 committed my labreport @tangollama
dabceca Merge pull request #24 from tangollama/circleci
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
:...skipping...
f6fe770 (HEAD -> master, origin/master, origin/HEAD) Moved onto step 3 of the Lab Report
064639f Working on Lab Report and Checking it
abd9bcd committed again the .circleci step because I messed up
39a1887 committed my labreport @tangollama
dabceca Merge pull request #24 from tangollama/circleci
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
9ae6b83 remove LAB.md
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit

* [A screenshot of the _Jobs_ list in CircleCI](https://docs.google.com/document/d/1HwZrJsKE7b0ErLG6RkrX2ySIKjENG08IBIeDNj0Yyw8/edit?usp=sharing)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
