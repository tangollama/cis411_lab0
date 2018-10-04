# Lab Report for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Thomas Wood<br/>
GitHub: [tw1255](https://github.com/tw1255)<br/>

# Step 1: Fork this repository
- https://github.com/tw1255/cis411_lab0.git

# Step 2: Clone your forked repository from the command line
```
{
  "data": {
    "mutateAccount": {
      "id": "62000cfb-ee88-43d5-a651-2144930d8580",
      "name": "Thomas Wood",
      "email": "tw1255@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
```
8f054ba (HEAD -> labreports, origin/labreports, master) God bless Joel @tangollama
37393ae (origin/master, origin/labreport, origin/HEAD, labreport) Bug fixed
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
# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
It continously integrates itself with Github to create your build, test it, and release it.

- What do the various sections on the config file do?
It gets the repo, zttempts to check it out, runs yarn (a package manager) in order to reduce errors related to netowrk connectivity.

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
It indicates that it is able to provide rapid feedback so that if a defect is introduced into the code base, it can be identified and corrected as soon as possible. This allows for easier deployment and is much easier to manage.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
I would probably try to make a change that allowed for an option of no deployment no matter what just for testing.

# Step 5: Merging the feature branch
``` 2ae2066 (HEAD -> master, origin/labreports, labreports) Merge branch 'labreports' of https://github.com/tw1255/cis411_lab0 into labreports
0bcec4b Please work
90e45de Delete config.yml
4dd4c2b Add files via upload
b5095ba Update LAB_[tw1255].md
8f054ba God bless Joel @tangollama
37393ae (origin/master, origin/labreport, origin/HEAD, labreport) Bug fixed
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
```
# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
