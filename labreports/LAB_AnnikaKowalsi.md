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

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?   
  - This file communicates with the CircleCI and tells it how to configure their processes to work with the project that is being used. This file can also store network preferences which allows the connection to take place and for both programs to be to on the same page with the settings and networking. The .yml file is a language that can easily be translated to other languages. 

- What do the various sections on the config file do?  
  - There are orbs which are packages of configuration code. People are abe to share and create config files easier with this feature. 
  - Workflows use rules in order to keep jobs running properly. This feature allows everyone to be up to date on the process that is taking place. 
  - Lastly, jobs are a collection of different processes that have the ability to run together as a unit. 

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
  - When a CI build is sucessful it means that the code was passsed through the automated debugging process and is now compelte and free from errors. The code being tested will make sure it functions with the predefined tests that are set up. The debugging process makes sure that the code will run and that it will be sucessful. Even if the code functions correctly it will be sucessful even if the code does not do what it was intended to do. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
  - For this to be used in a project I would want to make sure that each person working on the project knows how the code will function so that errors will be minimal. I also would add beta stream and stable stream which would be able to catch bugs before it is open for the public to use. An automated system would also allow things to be updated easier and quicker. 

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
![CircleCI Success](../assets/circleci_success.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

