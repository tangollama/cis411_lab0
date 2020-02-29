Course: Messiah College CIS 411, Spring 2020<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Will Newcomb<br/>
GitHub: [Willnew98](https://github.com/Willnew98)<br/>

# Step 1: Fork this repository
- https://github.com/Willnew98/cis411_lab0
- https://github.com/Willnew98/cis411_lab0/blob/labreport/assets/GitHub%20Diagram.png

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "9e6928b4-cadf-4d1b-b927-836234b913af",
      "name": "Will Newcomb",
      "email": "wn1154@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
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

```
- The accompanying diagram of what my feature branch precisely and conceptually represents

  https://github.com/Willnew98/cis411_lab0/blob/labreport/assets/Feature%20Branch%20Diagram.png


# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
    
    - It's building and testing my committed code with the master branch automatically, so I don't keep building the feature branch that might not work with the master.
- What do the various sections on the config file do?

    - The orbs seem to be packages that you can add to your script that come with certain tests build in so you don't have to reinvent anything. For instance, the reason I can use npm install and npm test is because I have the node orb incorperated. 

    - The jobs tell you what job is being done. The first job is a build-and-test, which is precisely what it is doing. Inside the job it also will tell you the steps that need to be taken to complete this job, and it will run those steps automatically for you.

    - The workflow is just the order in which the jobs are ran. Since there's only one job, though, the order doesn't really matter.
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?

    - When a build is successful that means that it passed all of the tests built to inspect the code, and it is now ready to be integrated into the master branch.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

    - If I were to deploy it to something like Heroku, I think I could just add an orb for Heroku, and then use the workflow to deploy to Heroku after running some tests.

# Step 5: Merging the feature branch
* The output of my git commit log
```
0c5aeb4 (HEAD -> labreport, origin/labreport) updated labreport @tangollama
332d09f adding diagram to assets folder @tangollama
928d0f0 updated circleci @tangollama
22b7652 Copy the content for the setup instructions into config.yml @tangollama
3d56731 Added my git commit log @tangollama
ee20f12 hopefully this works @tangollama
6c23264 restarting the lab @tangollama
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
* https://github.com/Willnew98/cis411_lab0/blob/labreport/assets/Jobs%20Screenshot.png


# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
