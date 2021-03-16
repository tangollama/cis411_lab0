# CIS 411 Lab 1: Continuous Integration
This is the Requirements Lab for CIS 411: Systems Analysis and Design for [Messiah University](http://messiah.edu)

This lab has four purposes:
1. Within Systems Analysis and Design, you are going to need to articulate a DEVOPs process that includes **Continuous Integration (CI)**, practice of merging all developers' working copies to a shared mainline several times a day,[^1] and be able to describe what is conceptually happening behind the scenes.
2. Develop a comfort using CI tools, such as CircleCI.  
3. Read installation requirements to get a system running locally, so that you learn how to contribute and test locally.
4. To ensure that you are only accepting code that works within your repository, you will apply knowledge of spinning up a local environment into CI test condition.

# Doing the Lab
## 1. Pre-Requisites
1. GitHub account
2. Git is installed on your development machine.
3. Text editor or other integrated development environment (IDE) for modifying code.
4. Install [node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/cli/install) (STEP 3 in the Lab Instructions).
5. CircleCI account (STEP 5 in the Lab Instructions)

## 2. Lab Description
Within this lab, you will need to fork a repository that has a simple node / graphql application.  After confirming that you can successfully run and perform simple actions within the applicaiton, then you will configuration CircleCI to perform a test that the application did not break with any changes in the commit before allowing the code into the repository.

Detailed instructions are [here](labreports/LAB_INSTRUCTIONS.md), and you are expected to compile your findings into a labreport following this [template](labreports/LAB_TEMPLATE.md).

## 3. Submissions
You are expected to create a lab report as a markdown file under the labreports directory using the **LAB_[GITHUB Handle].md** naming convention in your forked repository.  After you have reviewed your work, then you should submit a `Pull Request` to this repository with your lab report and any accompanying images/files (e.g., required diagrams).  Add the `Pull Request` URL into the courseroom LMS (Canvas) for grading.

# Resources
Lab Specific Help.
- [Detailed instructions](LAB_INSTRUCTIONS.md)  
- [Lab template](labreports/LAB_Template.md)  

Node  
- Node Download [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
- Node Package Manager [https://docs.npmjs.com/cli/install](https://docs.npmjs.com/cli/install)  
- Checking Node Versions [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  

Footnotes  
[^1]: Fowler, M. C*ontinuous Integration.* Retrieved from https://martinfowler.com/articles/continuousIntegration.html

CircleCi
- [CircleCI Documentation](https://circleci.com/docs/)
- [Writing YAML](https://circleci.com/docs/2.0/writing-yaml/)
# License
This content is provided under the `MIT` [license](LICENSE).

# Credits
Special thanks to Joel Worrall, aka [tangollama](https://github.com/tangollama), for co-developing this course and writing the original version of this lab [https://github.com/tangollama/cis411_lab0](https://github.com/tangollama/cis411_lab0).