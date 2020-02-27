# Lab Report for CIS411_Lab0
Course: Messiah College CIS 411, Spring 2020<br/>
Instructors: [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Drew Weaver<br/>
GitHub: [drewpoo99](https://github.com/drewpoo99)<br/>

# Step 1: Fork this repository
- https://github.com/drewpoo99/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents
![What is a fork?](https://github.com/drewpoo99/cis411_lab0/blob/labreport/assets/What%20is%20a%20fork_.jpg)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "fb555655-80e0-4144-b554-3da810e70272",
      "name": "Drew Weaver",
      "email": "aw1518@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
22566c4 (HEAD -> labreport, origin/labreport) add my lab document to the branch from @tangollama
dabceca (upstream/master, origin/master, origin/HEAD, master) Merge pull request #24 from tangollama/circleci
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
0bd6244 (upstream/purelab, origin/purelab) updated Step 0 title
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
- The accompanying diagram of what my feature branch precisely and conceptually represents
![What is a feature branch?](https://github.com/drewpoo99/cis411_lab0/blob/labreport/assets/feature_branch.jpg)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
   According to  the CircleCi documentation at <https://circleci.com/docs/2.0/config-intro/#section=configuration>, the config.yml is how CircleCI can interact with code and create builds from it. The config.yml included in this project is the basic config template for a node app. It does a view commands like checkout to get the branch code, then it does the npm install to install node dependencies and then does npm test to run node tests.
- What do the various sections on the config file do?
  * The `version` is the version if the CircleCi platform getting used. In this case it's 2.1.

  * The `orbs` referes to orb references in the circleci namespace named node.

  * The `jobs` tell what jobs are to be done. This is a `build-and-test` job as apposed to a `build` job. It uses the default node `executor` instead of something like an operating system. The `steps` are the steps of executing the build and test. First it does a github checkout to pull branch code, then it uses `node/with-cache` to run node commands in their own `steps`. This one npm installs and npm tests. 

  * The `workflows` are used for orchestrating all jobs. Since there is only one job, the workflow only executes the `build-and-test` job. 

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
  When a CI build is successful, it means that the newest code was run in a `job` and that it has passed any `steps` or tests set up to inspect the code. This means that the most recent push of code is able to be integrated into a master branch and all of the features checkout, there are no errors in the code or in the repository.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
  As an example, if we were to deploy to Heroku (*foreshadowing!*), we would add the Heroku `orb`. We can then use a `workflow` to deploy using that Heroku `orb` after some other `jobs` were completed. I assume an `orb` is like a API endpoint sort of thing and CircleCI uses them to do a bunch of stuff behind the scenes for us. (Like deploying to Heroku when we use the orb). 

# Step 5: Merging the feature branch
* The output of my git commit log
```
6c87603 (HEAD -> master, origin/master, origin/labreport, origin/HEAD, labreport) Lots of lab updates
37b1a33 Update LAB_drewpoo99.md
705d626 Create feature_branch.jpg
1b59886 Update LAB_drewpoo99.md
f361302 added fork image
1b486e8 config.yml
96fb8e8 Create config.yml
8877816 added my git output to the lab report
22566c4 add my lab document to the branch from @tangollama
dabceca (upstream/master) Merge pull request #24 from tangollama/circleci
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
0bd6244 (upstream/purelab, origin/purelab) updated Step 0 title
4562cd8 added npm and node install repreq
255051e adding template
13a09b7 Adding the LAB.md and correcting some instructions.
d2ddea5 Version 0.0.1 of the lab isntructions
ab312fc more progress
62fb0a5 more progress
fe1937b more in the lab instructions
3e807fb first section
```
* A screenshot of the _Jobs_ list in CircleCI

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
