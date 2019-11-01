# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Reagan Lyle<br/>
GitHub: [reaganl1998](https://github.com/reaganl1998)<br/>

# Step 1: Fork this repository
- The URL of my forked repository:  https://github.com/reaganl1998/cis411_lab0 
- The accompanying diagram of what my fork precisely and conceptually represents: [here](https://www.draw.io/?lightbox=1&highlight=0000ff&layers=1&nav=1&title=lab0.drawio#RzZRRT4MwEIB%2FDY8mQM0cr5tzi9GnmRh9O%2BkJNYUj3TGGv94yyhhhWzTRxCfar3e569cWT8yz3dJAkT6SRO2Fvtx54tYLw8APr%2B2nIXVLriMHEqOkC%2BrBWn1il%2BloqSRuBoFMpFkVQxhTnmPMAwbGUDUMeyc9rFpAgiOwjkGP6bOSnLZ0Gt70fIUqSbvKwSRqVzLogt1ONilIqo6QWHhiboi4HWW7OepGXuelzbs7s3pozGDO30mYxi%2Br1ycMQileluX9W7FWsyt3GFvQpduwa5brzgBKK8RNyXBKCeWgFz2dGSpziU0Z3876mAeiwsLAwg9krt3pQslkUcqZdqttzabQ2b05tKHSxHhhQ90dAZMgX4gThxOwVxcpQza1zTOogdV22Ae4O5Qc4nrNduBM%2F8B6MLLOkCekNWSwb6Kg0TH0khtjVaoY1wXsXVT26Z0SukXDuLusdKzAJQjh7m3dPUg3r%2FpnEISiZenRE5j4f2RNjKwZhARyHUTR9N9qi05p839Fm532v4%2F92tFPWCy%2BAA%3D%3D)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "6b89f7ea-6246-4726-b5ed-e3858e3488c0",
      "name": "REAGAN LYLE",
      "email": "RL1299@MESSIAH.EDU"
    }
  }
}
```

# Step 3: Creating a feature branch
- The output of my git commit log
```
d2ddea5 (HEAD -> master, origin/master, origin/HEAD) Version 0.0.1 of the lab instructions
ab312fc more progress
62fb0a5 more progress
fe1937b more in the lab instructions
3e807fb first section
9ae6b83 remove LAB.md
e429c1a lab instructions
968099e remove test db
7362cd1 working
44ce6ae Initial commit
```
- The accompanying diagram of what my feature branch precisely and conceptually represents

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
- What do the various sections on the config file do?
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?

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
