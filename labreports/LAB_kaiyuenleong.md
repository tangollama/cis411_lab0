# CIS411_Source Control Lab
Course: Messiah College CIS411, Fall 2018  
Instructors: Joel Warroll & Trevor Bunch  
Name: Kai Yuen Leong  
GitHub: kaiyuenleong  
Link of Starred Repository: https://github.com/FlightGear/flightgear  
# Step 1: Fork this repository
URL of Forked Repository: https://github.com/kaiyuenleong/cis411_lab0
![Diagram of relationship between original and forked repository](https://github.com/kaiyuenleong/cis411_lab0/raw/master/labreports/step1_diagram.jpg)  
Not the same as a source control branch as a forked repository allows modifications that does not affect the original repository
# Step 2: Clone your forked repository from the command line
![GraphQL Response](https://github.com/kaiyuenleong/cis411_lab0/raw/master/labreports/step2.jpg)
# Step 3: Creating a feature branch
![Git Commit Log Output](https://github.com/kaiyuenleong/cis411_lab0/raw/master/labreports/step3.jpg)
![Diagram of relationship between master and feature branch](https://github.com/kaiyuenleong/cis411_lab0/raw/master/labreports/step3_diagram.jpg)
# Step 4: Setup a Continuous Integration configuration  
**1. What is config.yml doing?** It indicates to a repository that it should utilize the 2.x infrastructure of CircleCI  
**2. What do the various sections on the config file do?** The "jobs" section contains the configurations and sequences for a build  
**3. When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?** The build is foundationally well-standardized  
**4. If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?** Add a section that configures the deployment options of the CI build  
# Step 5: Merging the Feature Branch
![Git commit log output](https://github.com/kaiyuenleong/cis411_lab0/raw/master/labreports/step5.jpg)
![CircleCI Jobs List](https://github.com/kaiyuenleong/cis411_lab0/raw/master/labreports/circle.jpg)



