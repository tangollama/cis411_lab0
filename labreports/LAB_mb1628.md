# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Matthew Bromley<br/>
GitHub: [mb1628](https://github.com/mb1628)<br/>
Followed Repository: SymPRM(https://github.com/CISMessiahCollege/SymPRM)<br/>

# Step 1: Fork this repository
- Forked Repository: (https://github.com/mb1628/cis411_lab0)
- [Fork Representation Diagram](https://docs.google.com/drawings/d/1_vJ4r05tP2ZcR-YpC6ItLNg4b8MYFQ1LXt4I9b8cKdY/edit?usp=sharing)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
{
  "data": {
    "mutateAccount": {
      "id": "9dafef50-aeca-45d8-aa27-7641f87ed453",
      "name": "YOUR FULL NAME",
      "email": "YOUR EMAIL"
    }
  }
}

# Step 3: Creating a feature branch
- The output of my git commit log
7b0b90e (HEAD -> labreport, origin/labreport) Commiting LAB_mb1628 based of template by @tangollama
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
9ae6b83 remove LAB.md
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit

- [Clone Representaion Diagram](https://docs.google.com/drawings/d/1c9DnNumqXj9wBFIcHbhiG-3F6QhDZwpItFZOineDz8s/edit?usp=sharing)

# Step 4: Setup a Continuous Integration configuration
- Looks like everytime you push your code to git hub the config file runs tests on a seperate instance of your code and sends the results to circleci.com for you to review the results. I believe the main reasoning behind it is to test integration of files. Circleci tests a seperate instance of the integration to see if there are any issues with integration.
- Image determines the primary container image where all steps will run.
Name specifies the name the container is reachable through.
Command specifies what the container is to do with it's data when testing.
- It indecates that the build is done well, and the code is adaptable enough for continuous integration.
- I would add additional tests for the different features of the code, so when files are updated any minor errors are caught and no major issues occur.

# Step 5: Merging the feature branch
* 7293794 (HEAD -> master, labreport) Commiting updates to lab file and implementation of circleCI configuration file
7b0b90e (origin/labreport) Commiting LAB_mb1628 based of template by @tangollama
dabceca (origin/master, origin/HEAD) Merge pull request #24 from tangollama/circleci
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

* [CircleCI Jobs list Screenshot](https://docs.google.com/drawings/d/1s824qEWtfnb11H9fLGmp9jWR1RMYoSyujl9kpT1APww/edit?usp=sharing)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
