# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Nicholas DeSola<br/>
GitHub: [nd1227](https://github.com/nd1227)<br/>

# Step 1: Fork this repository
- https://github.com/nd1227/cis411_lab0
- https://docs.google.com/drawings/d/1mK7pVFVtwSv5iSbhb3imsMOd2X6eihiN4TagNdJj5jY/edit?usp=sharing

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "0eab29e2-e894-445e-84e6-409b07037254",
      "name": "Nicholas DeSola",
      "email": "nd1227@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
c43182c (HEAD -> labreport, origin/labreport) Nicholas DeSola ab commit
7aaa9f3 (origin/master, origin/HEAD, master) Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
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
- https://docs.google.com/drawings/d/1i6XUN-eYmXIYh1e2ppibuzC-OKCfRwZCnAxV34C2qBk/edit?usp=sharing

# Step 4: Setup a Continuous Integration configuration
- The config file is deciding what version of circleci to use, as well as specifying any dependencies needed for the build to run with.
- The file specifies the json version, then checking for any dependencies, and finally validating and checking that json is even installed/apparent.
- The build has been validated for the proper version of json and has been configured to connect properly with circleci.
- I would allow for a backup to be made, as well as a default section to constantly keep the proper dependencies available to always wait for a build to be complete for it to be delivered.

# Step 5: Merging the feature branch
* f614e16 (HEAD -> labreport, origin/labreport) .gitignore fix
721fb69 copy circle ci config file
7e80829 move config file for circleci
1c4641a update node package version
63ef66e Retry git configuration file push
3ecbbc3 circleci configuration files
c43182c Nicholas DeSola ab commit
7aaa9f3 Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
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
* https://drive.google.com/open?id=1jfb1QmRRazTMhv9rjOT0T7PmJYVsmgG4

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
