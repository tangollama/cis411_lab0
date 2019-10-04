# Lab Report Template for CIS411_Lab0

Course: Messiah College CIS 411, Fall 2018<br/>

Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Ethan Wong<br/>

GitHub: [ETHANWWM](https://github.com/ethanwwm)<br/>

# Step 1: Fork this repository

- The URL of my forked repository: https://github.com/ethanwwm/cis411_lab0

![Representation of what my fork looks like](https://lh3.googleusercontent.com/TorReL7V866SGlvbLIzefKDIHRpPljpHz7Z9s5Z9-5BoCG_HJxv_EfSpypXvBRuT6yoANRBnEsB33Q)

# Step 2: Clone your forked repository from the command line

- My GraphQL response from adding myself as an account on the test project

Response:
{
"data": {
"mutateAccount": {
"id": "ee5a2c89-91b3-4b00-b830-075f798d1a0a",
"name": "Ethan Weng Mun Wong",
"email": "ethanwwm@gmail.com"
}
}
}

```



# Step 3: Creating a feature branch



e6b7d09 (HEAD -> labreport, origin/labreport) Made additional changes to my lab report @tangollama
032917e Ethan's lab report commit, @tangollama
e1461ec New lab file. @tangollama
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


```

- The accompanying diagram of what my feature branch precisely and conceptually represents

  ![Representation of what my feature branch represents](https://lh3.googleusercontent.com/OniGPjuJ-u-rKl0SnpOyP6Yq3A4xV1cWAsP34G3rHSkrNKRY363hUKcCKUwZKLqgjTyzVhnpyx9RzA)

# Step 4: Setup a Continuous Integration configuration

- The config.yml file's main purpose is to give users the ability to provide values like dependencies. Users can also run specific commands in the config file as needed.

- What do the various sections on the config file do? - Version: Issues warnings about breaking changes. - Jobs: A job is what runs your build process on CircleCI. Can either be named or simply contain a job named _build_. Can be ran sequentially or in parallel. - Docker file: A Docker image is a file, comprised of multiple layers, used to execute code in a Docker container.

# Step 5: Merging the feature branch

```
984f68b (HEAD -> master, origin/labreport, labreport) Made changes just to see Circle CI work
e6b7d09 Made additional changes to my lab report @tangollama
032917e Ethan's lab report commit, @tangollama
e1461ec New lab file. @tangollama
dabceca (origin/master, origin/HEAD) Merge pull request #24 from tangollama/circleci
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
```

![Screenshot of my jobs in Circle CI](https://lh3.googleusercontent.com/HHgz-p_SrFpGk9DfMsRekur_nkDA0jRW9nOzSy09W_Ym4yCUY3N8EKO3KgVhrrMlcp0DhRA7dN19Tw)

# Step 6: Submitting a Pull Request

_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project

PR reference in the report to one of the following:

1. Add one or more unit tests to the core assignment project.

2. Configure the CircleCI config.yml to automatically build a Docker image of the project.

3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
