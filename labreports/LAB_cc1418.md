# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Cory Collette<br/>
GitHub: (https://github.com/cc1418)<br/>

# Step 1: Fork this repository
- https://github.com/cc1418/cis411_lab0
- The accompanying diagram of what my fork precisely and conceptually represents
![Diagram of what my fork precisely and accurately represents](/Images/Step1.PNG)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "f4b25bdd-f097-41ad-b8a8-2d548ab66d60",
      "name": "Cory Collette",
      "email": "cc1418@messiah.edu"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
c19e30d (HEAD -> labreport, origin/labreport) labreport @tangollama               
dabceca (origin/master, origin/HEAD, master) Merge pull request #24 from tangollam
a/circleci                                                                        
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

```
- The accompanying diagram of what my feature branch precisely and conceptually represents
![Diagram of what my feature branch precisely and conceptually represents](/Images/Step3.PNG)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
- Config.yml runs a set of steps to build the project from the source code in a designated spot i.e. the repo.
- What do the various sections on the config file do?
- The version key in the config specifies what version of circleci to use. Build is a job for the file to run, and working directory specifies where the job’s steps run, here being the in the repo. Docker is the environment where the steps of the job are. Image specified in docker is the container where the steps for the job execute. The checkout step gets the source code for the specified version and image. Restore Cache will get cached files from previous runs to save time if the file has been run before and the cache has been saved. Run yarn install is a step to install yarn, and save cache stores source code so it won’t need to be fetched each time. Test is run to make sure yarn was installed properly. 
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
- When the build is successful, it means code is working properly with itself in the repo.
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
- For continuous delivery, there should be a log file or something to record errors that occur. I would also want addintional tests in there to test as much as I can to catch errors. 

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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MjA3NTE1OV19
-->