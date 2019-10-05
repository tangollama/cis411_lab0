# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2019<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Keller Martin<br/>
GitHub: [kellerjmrtn](https://github.com/kellerjmrtn)<br/>

# Step 1: Fork this repository
- [Forked Repo](https://github.com/kellerjmrtn/cis411_lab0)
- [Diagram of how a fork works](https://docs.google.com/drawings/d/12sIGXww3_w6tcz3v3qsVdYAM6wLva_wmXkv81g-aBnw/edit?usp=sharing)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "86463e30-4ff7-40a8-b001-b0bac39362ad",
      "name": "Keller Martin",
      "email": "kellerjmrtn@gmail.com"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
287ded7 (HEAD -> labreport, origin/labreport) link to diagram added
86586c2 new Lab report created @tangollama
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
```
- [Diagram of how my feature branch works](https://docs.google.com/drawings/d/12sIGXww3_w6tcz3v3qsVdYAM6wLva_wmXkv81g-aBnw/edit?usp=sharing)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
  - The config.yml file contains properties and configuration information that CircleCi uses to build and test the code.
- What do the various sections on the config file do?
  - The docker section specifies the version of CircleCi to be used for this project
  - The working_directory section specifies which code we would like to test. In this case, we use ~/repo to note that we want to use the root directory of the entire repo
  - Lastly, the steps section specifies how the test procedure will be run. Here we load up our dependencies and node modules, and spin up a test instance.
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
  - This merely means that it has passed all of the tests. This certainly doesn't guarentee that your new code *hasn't broken anything*, but it will help to find some easily checkable errors that you might've introduced.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
  - I would write some tests specific to this project, to verify that everything is going as expected

# Step 5: Merging the feature branch
- The output of my git commit log
```
5b02ece (HEAD -> master, origin/labreport, labreport) circleci changes
fd7d878 labreport update
287ded7 link to diagram added
86586c2 new Lab report created @tangollama
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
```

- [Jobs List](https://drive.google.com/file/d/14f1Vl0YlUr32v_gMaDEQq3DwKyTWhvLF/view?usp=sharing)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

