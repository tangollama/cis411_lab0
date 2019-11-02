# Lab Report Template for CIS411_Lab0
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
Name: Reagan Lyle<br/>
GitHub: [reaganl1998's GitHub](https://github.com/reaganl1998)<br/>

# Step 1: Fork this repository
- The URL of my forked repository:  [reaganl1998's Forked Repository](https://github.com/reaganl1998/cis411_lab0)
- The accompanying diagram of what my fork precisely and conceptually represents: [reaganl1998's Fork Diagram](https://www.draw.io/?lightbox=1&highlight=0000ff&layers=1&nav=1&title=lab0.drawio#RzZRRT4MwEIB%2FDY8mQM0cr5tzi9GnmRh9O%2BkJNYUj3TGGv94yyhhhWzTRxCfar3e569cWT8yz3dJAkT6SRO2Fvtx54tYLw8APr%2B2nIXVLriMHEqOkC%2BrBWn1il%2BloqSRuBoFMpFkVQxhTnmPMAwbGUDUMeyc9rFpAgiOwjkGP6bOSnLZ0Gt70fIUqSbvKwSRqVzLogt1ONilIqo6QWHhiboi4HWW7OepGXuelzbs7s3pozGDO30mYxi%2Br1ycMQileluX9W7FWsyt3GFvQpduwa5brzgBKK8RNyXBKCeWgFz2dGSpziU0Z3876mAeiwsLAwg9krt3pQslkUcqZdqttzabQ2b05tKHSxHhhQ90dAZMgX4gThxOwVxcpQza1zTOogdV22Ae4O5Qc4nrNduBM%2F8B6MLLOkCekNWSwb6Kg0TH0khtjVaoY1wXsXVT26Z0SukXDuLusdKzAJQjh7m3dPUg3r%2FpnEISiZenRE5j4f2RNjKwZhARyHUTR9N9qi05p839Fm532v4%2F92tFPWCy%2BAA%3D%3D)

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
~\cis411_lab0 [labreport ≡]> git log --oneline
5204f05 (HEAD -> labreport, origin/labreport) tangollama Second commit after permissions cleanup
be2b9ea @tangollama Initial commit
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
44ce6ae Initial commit
~\cis411_lab0 [labreport ≡]>
```
- The accompanying diagram of what my feature branch precisely and conceptually represents [reaganl1998's Feature Branch Diagram](https://www.draw.io/?lightbox=1&highlight=0000ff&layers=1&nav=1&title=lab0_second_drawing.drawio#R1VZdb5swFP01PFbCmDXktVmaVdrUSZk0bS%2BTC7fYk%2FFlziUk%2B%2FWzgwlBtF0qTWv7hO%2B5X77HxzIRX1S7lRW1%2FIQF6CiJi13E30dJwuIkdR%2BP7DsknQegtKoIQQOwVr%2BhzwxoowrYjAIJUZOqx2COxkBOI0xYi%2B047B71uGstSpgA61zoKfpVFSQ7NEtmA%2F4BVCn7zuxy3nkq0QeHSTZSFNieQHwZ8YVFpG5V7RagPXk9L13e9SPe48YsGDor4fsFpKt7czP7tbr9diur6%2FbLRaiyFboJA1sQpTCazeeZq5WrTcrYDy3u%2Bilo31NjsTEF%2BOos4letVATrWuTe2zoxOExSpYM79AFLsHt0AHakxekJsAKyexcSEnga9hCkxC6D3Q4Hw94FTJ4cSh8nghbKY%2BmBLrcIjD2DvdmEvQlJUDg5BRMtSSzRCL0c0KuBxthZQ8xHxDqQ9xOI9uFuiIbwIWp9o6eJdfvCxubwxEA83DBhS6C%2FyWZ6UBa0ILUd7%2BOfs84nrN8YRUr4xAVWlaIXl2rK%2BEiqyUNSTf6nVNn0pr9xrWZnapW%2FpFazCeufLeYAhTLlUa4bt0Knt9Y6XXqjtrBV2Bxw4xHXPL5ryL9zUpjyEOQo8%2B8q5k3luHOH8tpEn8Znij57vuidObycB9%2FJ%2Fwdf%2FgE%3D)

# Step 4: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing? **I believe it is a way for yml to script and automate your GitHub development environment. **
- What do the various sections on the config file do? **They are parameters to setup certain functions of circleci. Similar to how a config file works on most programs.**
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build? **Indicates that your code will compile correctly. However, whether it functions correctly is up to the programmer.**
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)? **Create more projects to have separate environments for development, testing, and production/release.**

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
