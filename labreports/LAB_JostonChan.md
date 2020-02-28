# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Spring 2020<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Joston Chan<br/>
GitHub: [JostonChan](https://github.com/JostonChan)<br/>

# Step 1: Fork this repository
- [Joston's Forked Repository](https://github.com/JostonChan/cis411_lab0.git)
- The accompanying diagram of what my fork precisely and conceptually represents
  ![Joston's Forked Repository](../images/Forked_Repository.png)
  Forked repository branch is not the same thing as a source control branch but rather it creates a child repository branch 
  for the user so that the user can edit the files that is only within the child repository branch, not affecting the source control branch.Once the user is satisfied with the changes that he has made, he can submit the changes to the source control branch using the "Pull Request".  

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "d0d02813-7dfc-4f06-b8ef-d3e9b972157b",
      "name": "Jen Wayne Chan",
      "email": "jc1608@messsiah.edu"
    }
  }
}
```
 ![Joston's GraphiQL Diagram](../images/JostonGraphiQL.png)

# Step 3: Creating a feature branch
- The output of my git commit log
```
  ba38011 (HEAD -> labreport, origin/labreport) I redid step 3 because I want to understand it better. @tangollama
  0078d1e (origin/master, origin/HEAD, master) Update LAB_JostonChan.md
  044199b Merging the feature branch
  e43f564 your commit message
  a3b15ca your commit and reference @tangollama in the message
  330597a your commit and reference @tangollama in the message
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
  9ae6b83 remove LAB.md
  e429c1a lab instructions
  ce1fcea circleci default config
  80bbdbb circleci default config
  968099e remove test db
  7362cd1 working
```
- The accompanying diagram of what my feature branch precisely and conceptually represents
 ![Joston's Feature Branch](../images/Feature_Branch.png)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
  It creates a workflow and scan the yml file. It also records the commits that you have made to a Git branch. Additionally, the config.yml file is how CircleCI can interact with code and create builds from it.Not only that, the main feature of the yml file is to run tests in parallel.This requires specifying a parallelism level to define how many separate executors get spun up for the test job. 

- What do the various sections on the config file do?

  - The `version` portion specifies the version of CircleCI platform.
  - `Orbs` are shareable packages of configuration elements, including jobs, commands, and executors.
  - `Commands`allow users to enter a sequence of steps to be executed in a job and also allow users to reuse the command in multiple jobs.
  - `Executors` define the environment in which the steps of a job will be run.
      - Example: `Docker`
  - `Jobs` are a collection of `Steps` that CircleCI will execute.    
    - The `resource_class` feature allows configuring CPU and RAM resources for each job
    - `Steps` are a collection of executable commands which are run during a job.
      - `Run` declaration is used to invoke command-line programs.
      - The `save_cache` generates and stores a cache of a file or directory of files.
      - If user have done `save_cache`, the user can use `restore_cache` that restores a previously saved cache based on a key.
      - `yarn install`is basically installing Yarn.
      - `yarn test` is Yarn testing the application that is ran by CircleCI
    - `Workflows` define a list of jobs and their run order. 

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
  It indicates that the build that the user has added to the program presents no errors when CircleCI was executing all the jobs and steps within the build. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
  Doing further testing and consult the members that are involve in the project to do further testing with more testing scenarios. There will also be a log error file that will help keep track of the errors that occur after the deployment. 
  To create further testing, we do the following tests:
  1. Add a job to the config.yml file
  2. Entered the desired parallelism key
  3. Configure the job to run the steps 
  4. Add environment variables and SSH keys
  5. To simplify deployment, we can use Orbs


# Step 5: Merging the feature branch
* The output of my git commit log
```
  ae9994d (HEAD -> master, labreport) Adding Step 4 CircleCI Answers
  ba38011 (origin/labreport) I redid step 3 because I want to understand it better. @tangollama
  0078d1e (origin/master, origin/HEAD) Update LAB_JostonChan.md
  044199b Merging the feature branch
  e43f564 your commit message
  a3b15ca your commit and reference @tangollama in the message
  330597a your commit and reference @tangollama in the message
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
  9ae6b83 remove LAB.md
  e429c1a lab instructions
  :...skipping...
  ae9994d (HEAD -> master, labreport) Adding Step 4 CircleCI Answers
  ba38011 (origin/labreport) I redid step 3 because I want to understand it better. @tangollama
  0078d1e (origin/master, origin/HEAD) Update LAB_JostonChan.md
  044199b Merging the feature branch
  e43f564 your commit message
  a3b15ca your commit and reference @tangollama in the message
  330597a your commit and reference @tangollama in the message
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
  9ae6b83 remove LAB.md
  e429c1a lab instructions
  ce1fcea circleci default config
  80bbdbb circleci default config
  968099e remove test db
  7362cd1 working
  44ce6ae Initial commit
```
* A screenshot of the _Jobs_ list/Pipeline in CircleCI
 ![Joston's CircleCI Screenshot](../images/JostonCircleCI.png)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
