# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Joe King<br/>
GitHub: [YOUR_HANDLE](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- https://github.com/jk1551/cis411_lab0.git
- https://docs.google.com/drawings/d/1h0SjvO5dkoTpowOZxbOuXqBtjmsRfm0ZSZTcb8XIn50/edit?usp=sharing

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a10db030-ded8-4397-a78f-30b79d3497ab",
      "name": "MY NAME",
      "email": "MY EMAIL"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
 git log

commit fb1370210619dfa264ca72a377c94cb155080320 (labreport2)
Author: jk1551 <joe.k659@gmail.com>
Date:   Fri Feb 28 11:41:05 2020 -0500

    jk1551 commit @tangollama.

```
- https://docs.google.com/drawings/d/1zpPHtpeXZ8YptKF3-L48NVeWWW3QGDn_x8DO32pgrSY/edit?usp=sharing

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
    .circleci/config.yml allows you to build and test the application at the same time. 
  
- What do the various sections on the config file do?
    "Orbs" is a configuration
    "welcome" lets you declare a dependency
    "workflow" lets you orchestrate a set of jobs
    "welcome" is also the name of the workflow
    the "job" is run/welcome

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
    When the CI build is successful, it allows you to keep a code repository, automate the build, keep the build fast, and test in a clone production enviorment. 
    
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
    I would make the updates to the master branch continuous so users would recieve updates instantaneously 

# Step 5: Merging the feature branch
*  git log

commit ad8c0b5916b59129bb03faa53c0eedbe6658458b (HEAD -> labreport, origin/labreport)
Author: jk1551 <joe.k659@gmail.com>
Date:   Sat Feb 29 17:20:12 2020 -0500

    2nd commit
    
commit fb1370210619dfa264ca72a377c94cb155080320 (HEAD -> labreport, origin/labreport)
Author: jk1551 <joe.k659@gmail.com>
Date:   Fri Feb 28 11:41:05 2020 -0500

    jk1551 commit @tangollama.

* ![Screenshot](https://github.com/jk1551/cis411_lab0/blob/master/jobs%20list.PNG)

# Step 6: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

# Step 7: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
