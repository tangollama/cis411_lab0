# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Andrew Douglass<br/>
GitHub: [douglassjohnandrew](https://github.com/douglassjohnandrew)<br/>
One repository I follow: https://github.com/mgba-emu/mgba

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/douglassjohnandrew/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents:
(https://docs.google.com/drawings/d/122jiH6F1ala05YfrIWkopGfFEqXDX0abaKKnsfKOj20/edit?usp=sharing)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "7347263e-c7d0-4179-86ad-e084c0a6fdef",
      "name": "Andrew Douglass",
      "email": "ad1373@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
44d2664 (HEAD -> labreport, origin/master, origin/labreport, origin/HEAD, master) Update LAB_[douglassjohnandrew].md
edc7faf Update LAB_[douglassjohnandrew].md
dda8634 Create LAB_[douglassjohnandrew].md
2f01bf4 Update LAB_INSTRUCTIONS.md
347bd50 Update LAB_INSTRUCTIONS.md
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
```
- The accompanying diagram of what my feature branch precisely and conceptually represents:
https://docs.google.com/drawings/d/1QmS0ontJWPx0tSodWrGwGioOvMajxzcwGJsc19DMR_4/edit?usp=sharing

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?<br/>
https://docs.google.com/drawings/d/1LJu-lw8EIZCwDPxci2yR-ArWaVDQSkRAZWbAifeVK_o/edit?usp=sharing
- What do the various sections on the config file do?<br/>
       Version defines the version of CircleCI<br/>
       Jobs: indicates all the tasks to be done<br/>
          Build: the parts that compose the build of a certain job<br/>
              Docker: the image specifies the desired docker container<br/>
              working_directory changes the working directory<br/>
              steps: the statements for the config file to run<br/>
                  checkout: changes branches<br/>
                  restore_cache / keys: downloads the needed dependencies for the config file to do its tasks<br/>
                  run: does a task<br/>
                  save_cache: saves paths and keys for future builds<br/>
                  yarn test: tests something (I have no idea what)<br/>
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?<br/>
      If a build is successful, it is reliable and can be trusted to consistently, continuously integrate any future
      project features effectively and efficiently.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?<br/>
      I might implement more test besides the yarn test, or create unit tests. I might also have the application
      generate a changelog so that users who got the latest version of this application could see the
      enhancements and changes.

# Step 5: Merging the feature branch
* The output of my git commit log:
```
44d2664 (HEAD -> master, origin/master, origin/labreport, origin/HEAD, labreport) Update LAB_[douglassjohnandrew].md
edc7faf Update LAB_[douglassjohnandrew].md
dda8634 Create LAB_[douglassjohnandrew].md
2f01bf4 Update LAB_INSTRUCTIONS.md
347bd50 Update LAB_INSTRUCTIONS.md
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
```
* A screenshot of the _Jobs_ list in CircleCI:
https://drive.google.com/open?id=14MuPnhsVnUf5MuCKScehoUjid3p54Tn1
https://drive.google.com/open?id=181vPLkQn_0q_cDWx06da6VNV4GDybEsr
https://drive.google.com/open?id=1yM10r3koX5ZpTl-KCHORJzhEsXWpeIg0

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
