# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Stephen Maloney<br/>
GitHub: [sm1535](https://github.com/sm1535)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
https://github.com/sm1535/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents
https://docs.google.com/drawings/d/14tZwhcJDjaRyB4VtWe7954-m7HGQFnUPR_KOk7qbNPQ/edit?usp=sharing

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "e4d71dad-de14-4ca3-99ef-e61464e554cb",
      "name": "Stephen Maloney",
      "email": "sm1535@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
57fb0fc (HEAD -> labreport, origin/labreport) creating a feature branch @tangollama
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
https://docs.google.com/drawings/d/1th_i4YCJ5eMtJKx4JLIK9E-a9TwP4nnlLJ2hKVpt5P8/edit?usp=sharing

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
The config.yml creates a vitual machine for the test based off of the specifications in job, build, and docker. From there it aquires any needed dependencies and runs the cloned github project. From here it reviews the outcome and status to ultimately bring back a success or failure report. This is a extremely helpful thing to use because it allows you to precheck deployment to make sure all code will run successfully together and not break when deployed.

- What do the various sections on the config file do?
Version defines the version of CircleCI
Jobs: the container that indicates all the tasks to be done
Build: the parts that compose the build of a certain job
Docker: the image determines the desired docker container.
working_directory changes the working directory
steps: indicates the lines of code the config file is to execute
checkout: changes branches
restore_cache / keys: downloads the dependencies for the config file that are needed to complete the tasks
run: executes a task
save_cache: saves the keys and paths required for possible builds in the future
yarn test: test a specific aspect of the code

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
Upon the build being successful, you then know that you can rely on it to continuously integrate any possible project features that may be developed.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
If the build is successful you could add automatic deployment or integrate unit tests for more detailed conclusions.


# Step 5: Merging the feature branch
* The output of my git commit log
3832ccf (HEAD -> master, origin/master, origin/HEAD) fixing merge conflict
64a6566 lab report and config track
518e02b (origin/labreport, labreport) updated lab report and circleci
57fb0fc creating a feature branch @tangollama
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
* A screenshot of the _Jobs_ list in CircleCI
Saved in labreports directory.

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
