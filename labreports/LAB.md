# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: [Donovan Varney]<br/>
GitHub: [dv1187](https://github.com/dv1187)<br/>

# Step 1: Fork this repository
- Fork (https://github.com/dv1187/cis411_lab0)
- The accompanying diagram of what my fork precisely and conceptually represents:
	(https://docs.google.com/drawings/d/17tdxWhBnN9Y04bGVTFAHBsbZtSgm6IZMOKTgG_w0-zg/edit?usp=sharing)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "1a33db58-ee99-4f83-850f-7d3aef5cf517",
      "name": "Donovan T Varney",
      "email": "dv1187@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
Donovans-MacBook-Air:cis411_lab0 Dono$ git log --oneline
563099c (HEAD -> master, origin/master, origin/HEAD) Add links to google draw files
16bd042 your commit and reference @tangollama in the message
2846c92 your commit and reference @tangollama in the message
37393ae (origin/labreport, labreport) Bug fixed
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
```
- The accompanying diagram of what my feature branch precisely and conceptually represents
	(https://docs.google.com/drawings/d/1wvHj4P8jygYdXQckCEC6JFDSHrZDgTL1c1tCiTS79e0/edit?usp=sharing)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing? 
	It appears that the config is making sure that the project has all the proper dependincies installed before it is run.
- What do the various sections on the config file do?
	They make sure that the right versions of dependencies are included, the directory of the project, run commands, and test commands.
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
	When a build is successful, I'm assuming that everything in the config.yml file has passed inspection and will allow it to be built properly.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
	IF i had to make this ready for continuous development, I'd probably want to add significantly more test cases to make sure whatever was in the project would remain working once it worked in the first place.

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
