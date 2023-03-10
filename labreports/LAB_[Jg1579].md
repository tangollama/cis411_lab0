# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2022  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Jonathan Gaston
**GitHub Handle:** JG1579 
**Repository:** cis411_JG1579lab1_CI
__-

# Step 1: Fork this repository
- https://github.com/JG1579/cis411_JG1579lab1_CI?organization=JG1579&organization=JG1579

# Step 2: Clone your forked repository from the command line  
- My local file directory is cis411_JG1579lab1_CI
- The command to navigate to the directory when I open up the command line is cd cis411_JG1579lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "c7e6643e-68f5-4f00-9328-874f5ad08857",
      "name": "Jonathan Gaston",
      "email": "jg1579@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
Jonat@DESKTOP-0DNRIDL MINGW64 ~/Documents/GitHub/cis411_JG1579lab1_CI (purelab)
$ git  checkout -b labreport
Switched to a new branch 'labreport'

Jonat@DESKTOP-0DNRIDL MINGW64 ~/Documents/GitHub/cis411_JG1579lab1_CI (labreport)
$ cp labreports/LAB_Template.md labreports/LAB_[Jg1579].md

Jonat@DESKTOP-0DNRIDL MINGW64 ~/Documents/GitHub/cis411_JG1579lab1_CI (labreport)
$ git commit -a -m "What is a commit @trevordbunch"
[labreport 7289418] What is a commit @trevordbunch
 2 files changed, 250 insertions(+), 119 deletions(-)

Jonat@DESKTOP-0DNRIDL MINGW64 ~/Documents/GitHub/cis411_JG1579lab1_CI (labreport)
$ git push -u origin labreport
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 12 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 1.71 KiB | 1.71 MiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote:
remote: Create a pull request for 'labreport' on GitHub by visiting:
remote:      https://github.com/JG1579/cis411_JG1579lab1_CI/pull/new/labreport
remote:
To https://github.com/JG1579/cis411_JG1579lab1_CI.git
 * [new branch]      labreport -> labreport
branch 'labreport' set up to track 'origin/labreport'.

Jonat@DESKTOP-0DNRIDL MINGW64 ~/Documents/GitHub/cis411_JG1579lab1_CI (labreport)
$ git log  --oneline
7289418 (HEAD -> labreport, origin/labreport) What is a commit @trevordbunch
94babae (upstream/purelab, upstream/HEAD, origin/purelab, origin/HEAD, purelab) Merge pull request #59 from JeffSinsel/purelab
2e92bd8 Fixed typos and links in markdown files
fa4fc85 Update Instructions
f8513e0 Update Node links to Instructions
d4f22eb Update repo branch names
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
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit

Jonat@DESKTOP-0DNRIDL MINGW64 ~/Documents/GitHub/cis411_JG1579lab1_CI (labreport)


```
-
![image](/assets/Networkpath.png)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
It is running a program that will print hello world. However it will hold until it gets approval from me to do so. It will run the first step and then fetch data from the repo and then run the node. It like I said before will not run the final steps until it gets approval from me.

The config file allows circleci to create testing environments using Ubuntu, and testing cases (called jobs) specific to your application.

What do the various sections on the config file do?
There are comments inside the config file to explain itself, but

The file opens with a version of circleci, in a similar position to other files's import statements.

Any number of jobs are described/defined, each with its own name, and step-by-step instructions.

Each step can have a name and a set of commands.

The file then descibes/defines a series of workflows, each of which is named and contains a set of jobs.

When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?

It means that the build (whatever code is being tested) has no critical errors/errors that are not handled, and that it is ready for deployment.

If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
I would create more testing environments, all slightly different, to ensure that my project was stable in less planned and sterile contexts. 
   

- Make sure that there are backups stored in case an error is made. This way we can go back and 
   

# Step 6: Merging the feature branch
* The output of my git commit log
```
$ git log  --oneline
94babae (HEAD -> purelab, origin/purelab, origin/HEAD) Merge pull request #59 from JeffSinsel/purelab
2e92bd8 Fixed typos and links in markdown files
fa4fc85 Update Instructions
f8513e0 Update Node links to Instructions
d4f22eb Update repo branch names
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
...skipping...
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
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit
...skipping...
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
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit
...skipping...
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
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit
...skipping...
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
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit

(END)
```

![image](/assets/Cislab1%20sucessful%20ping.jpg)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
