# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Annika Kowalski
**GitHub Handle:** AnnikaKowalski  
**Repository:** https://github.com/AnnikaKowalski/cis411_lab1_CI
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/AnnikaKowalski/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents...

# Step 2: Clone your forked repository from the command line  
- The command to navigate to the directory when I open up the command line is... 
- cd docments/GitHUb/cis411_lab1_CI 

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "2b9420a1-7668-4421-807d-4d0e881bb14a",
      "name": "Annika Kowaslki",
      "email": "volleygirl21@comcast.net"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
d4f22eb (origin/purelab, purelab) Update repo branch names
0e3ae4c Reset purelab
050b420 Merge pull request #2 from trevordbunch/main
1fe415c Merge pull request #1 from trevordbunch/labreport
13e571f Update Lab readme, instructions and templates
eafe253 Adjust submitting instructions
47e83cd Add images to LabReport
ec18770 Add Images
dbf826a Answer Step 4
a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
1ead543 remove LAB.md
8c38613 Initial commit of labreport with @tangollama
dabceca Merge pull request #24 from tangollama/circleci
a4096db Create README.md
2f01bf4 Update LAB_INSTRUCTIONS.md
347bd50 Update LAB_INSTRUCTIONS.md
7aaa9f3 Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
1949d2a Update LAB_INSTRUCTIONS.md
d36ad90 Update LAB.md
59ef18a Update LAB_INSTRUCTIONS.md

```
- The accompanying diagram of what my feature branch precisely and conceptually represents...

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?   
- The .circleci/config.yml allows the user to create a new configuration or branch without changing anything to the   original configuration. By creating the new brach it allows the user to edit it and create new conect without changing hte roginal so others can do the same. It also allow the new braach to be tested for any code error.

- What do the various sections on the config file do?  
- The various config files are used to set the parameters as well as initial setting for the programmer who is doing work on the program. It gives that perosn a baseline for what needs to be done what is allowed to be done. 

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
- When a CI build is successful that means the code was tested and the CI program found no build errors in the code. This now means that the build can be further expanded and used for other steps in the process. It can also remain the same if that program is alreay completed and no further steps need to be taken. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
- The configration could be changed by adding more detiled to the report, ensuring that the data is accuarte and making sure the report is what is needed from the user or company requesting it.

# Step 6: Merging the feature branch
* The output of my git commit log
```
ecaaa53 (HEAD -> main, origin/main, origin/labreport, origin/HEAD, labreport) Update branch terminology
c552213 Merge pull request #3 from hallienicholas/main
78ede9f Corrected error
1fe415c Merge pull request #1 from trevordbunch/labreport
13e571f Update Lab readme, instructions and templates
eafe253 Adjust submitting instructions
47e83cd Add images to LabReport
ec18770 Add Images
dbf826a Answer Step 4
a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
1ead543 remove LAB.md
8c38613 Initial commit of labreport with @tangollama
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
:

```

* A screenshot of the _Jobs_ list in CircleCI

![CircleCI Success](../assets/circleci_success.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
