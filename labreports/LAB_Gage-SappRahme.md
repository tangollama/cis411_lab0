# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: YOUR NAME<br/>
GitHub: [YOUR_HANDLE](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- https://github.com/GageSapp-Rahme/cis411_lab0
- https://github.com/GageSapp-Rahme/cis411_lab0/blob/labreport/assets/fork%20(1).png

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
{
  "data": {
    "mutateAccount": {
      "id": "868c2ed3-4d97-477d-b184-d5469a9f6b6e",
      "name": "Gage Sapp-Rahme",
      "email": "Gwelldore@gmail.com"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
C:\Users\Gage Sapp\Desktop\411\cis411_lab0>git log --oneline
dabceca (HEAD -> labreport, origin/master, origin/HEAD, master) Merge pull request #24 from tangollama/circleci
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
- https://github.com/GageSapp-Rahme/cis411_lab0/blob/labreport/assets/feature.png

# Step 4: Setup a Continuous Integration configuration
- Running node, creating build and test job, doing checkout, installing and testing npm, then it creates a work flow that runs the build and test.
- Run node. Create the build/test job. Checkout. Run and test npm. Runs the file.
- Runs the tests and means the code is good to go
- Add deployemnt strategy, whether AWS or otherwise into the config.

# Step 5: Merging the feature branch
7df5f20 (HEAD -> master, origin/master, origin/HEAD) Merge branch 'labreport'
632ab2a (origin/labreport, labreport) Merge branch 'labreport' of https://github.com/GageSapp-Rahme/cis411_lab0 into labreport
2342373 update lab report
43acf09 Add files via upload
82ab60d Add files via upload
d87f3d7 update labreport
e58b468 @tangollama my first commit
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
* https://github.com/GageSapp-Rahme/cis411_lab0/blob/master/assets/CircleCi.png

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
