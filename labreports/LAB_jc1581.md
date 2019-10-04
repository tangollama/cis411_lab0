# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2019<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Josh Coldsmith<br/>
GitHub: [jc1581](https://github.com/jc1581)<br/>
[SymPRM](https://github.com/CISMessiahCollege/SymPRM.git)

# Step 1: Fork this repository
- The URL of [my forked repository](https://github.com/jc1581/cis411_lab0)
- The accompanying diagram of what my fork precisely and conceptually represents
<img src="cis_411 GitHub Lab Diagram1.png"
     style="float: left; margin-right: 10px;" />

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "86b9a4fe-8dcf-4bff-abde-b5808730ecb4",
      "name": "Joshua Coldsmith",
      "email": "jc1581@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
f19a587 (HEAD -> labreport, origin/labreport) update lab report
a004121 update lab report
021d644 Update LAB_jc1581.md
ddd3057 updated lab report
e9b008e @tangollama added lab report
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
```
- The accompanying diagram of what my feature branch precisely and conceptually represents
<img src="cis_411 GitHub Lab Diagram2.png"
     style="float: left; margin-right: 10px;" />

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?<br/>
**The config.yml file basically tells CircleCI everything that it is supposed to do when 
new code is pushed.**
- What do the various sections on the config file do?<br/>
**We only have one job that is "build". The "docker" section of code specifies the docker image.
"steps" specifies what code to run like "yarn install" and "yarn test." "workflows" specifies
the order in which the jobs are executed.**
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?<br/>
**Every time the code is changed in GitHub, CircleCI creates a new Virtual Machine instance that 
runs tests on that code.**
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?<br/>
**I would need to add tests that ensure that nothing major is broken in my code when a change is made.
Furthermore, I would integrate it with Slack so that it could notify me or the team if any tests failed.**

# Step 5: Merging the feature branch
* The output of my git commit log
```
f786c88 (HEAD -> master, origin/master, origin/HEAD) Merge pull request #1 from jc1581/labreport
97ad3d0 (origin/labreport, labreport) update lab report
b979d99 update lab report
55988d0 update lab report
71616a6 update lab report
894b981 update lab report
892f6dc Create mkdir
3005c5c Delete mkdir .circleci
9e23fc7 Create mkdir .circleci
129d7ac updated lab report
f19a587 update lab report
a004121 update lab report
021d644 Update LAB_jc1581.md
ddd3057 updated lab report
e9b008e @tangollama added lab report
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
```
* A screenshot of the _Jobs_ list in CircleCI</br>
</br>
<img src="CircleCIJobs.png"
     style="float: left; margin-right: 10px;" />

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
