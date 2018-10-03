---


---

<h1 id="lab-report">Lab Report</h1>
<p>Course: Messiah College CIS 411, Fall 2018<br>
Instructors:  <a href="https://github.com/tangollama">Joel Worrall</a>  &amp;  <a href="https://github.com/trevordbunch">Trevor Bunch</a><br>
Name: David Abraham<br>
GitHub:  <a href="https://github.com/da1238">da1238</a></p>
<h1 id="step-1">Step 1</h1>
<p>· <a href="https://github.com/da1238/cis411_lab0">https://github.com/da1238/cis411_lab0</a></p>
<ul>
<li>The accompanying diagram of what my fork precisely and conceptually represents</li>
</ul>
<p><img src="blob:https://stackedit.io/c38e2927-ed13-43b5-a20b-5f4f4c589c1b" alt=""></p>
<p><strong>Step 2</strong></p>
<ul>
<li>My GraphQL response from adding myself as an account on the test project</li>
</ul>
<p>{</p>
<p>“data”: {</p>
<p>“mutateAccount”: {</p>
<p>“id”: “5b476994-28b3-48a6-8254-2b321261ee04”,</p>
<p>“name”: “David Abraham”,</p>
<p>“email”: <a href="mailto:%22da1238@messiah.edu">"da1238@messiah.edu</a>"</p>
<p>}</p>
<p>}</p>
<p>}</p>
<p><strong>Step 3</strong></p>
<ul>
<li>The output of my git commit log</li>
</ul>
<p>f35094c (<strong>HEAD -&gt;</strong> <strong>labreport</strong>, <strong>origin/labreport</strong>)commit lab report  @tangollama</p>
<p>1949d2a (<strong>origin/master</strong>, <strong>origin/HEAD</strong>, <strong>master</strong>)Update LAB_INSTRUCTIONS.md</p>
<p>d36ad90Update <a href="http://LAB.md">LAB.md</a></p>
<p>59ef18aUpdate LAB_INSTRUCTIONS.md</p>
<p>37be3c8Update LAB_INSTRUCTIONS.md</p>
<p>97da547Update <a href="http://LAB.md">LAB.md</a></p>
<p>0bd6244updated Step 0 title</p>
<p>4562cd8added npm and node install repreq</p>
<p>255051eadding template</p>
<p>13a09b7Adding the <a href="http://LAB.md">LAB.md</a> and correcting some instructions.</p>
<p>d2ddea5Version 0.0.1 of the lab isntructions</p>
<p>ab312fcmore progress</p>
<p>62fb0a5more progress</p>
<p>fe1937bmore in the lab instructions</p>
<p>3e807fbfirst section</p>
<p>9ae6b83remove <a href="http://LAB.md">LAB.md</a></p>
<p>e429c1alab instructions</p>
<p>968099eremove test db</p>
<p>7362cd1working</p>
<p>44ce6aeInitial commit</p>
<ul>
<li>The accompanying diagram of what my feature branch precisely and conceptually represents<img src="blob:https://stackedit.io/520e614e-7c22-42b6-92e4-52ce1b29acd8" alt=""></li>
</ul>
<p><strong>Step 4: Setup a Continuous Integration configuration</strong></p>
<ul>
<li>What is the .circleci/config.yml doing?</li>
</ul>
<p>The yml file is connecting and configurating circleci to the git repository.</p>
<ul>
<li>What do the various sections on the config file do?</li>
</ul>
<p>According to the comments in the file, the first section serves to specify the version of node to be installed, the second section to specify service dependencies, the third section downloads and caches the dependencies and the last section installs and tests yarn</p>
<ul>
<li>When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?</li>
</ul>
<p>According to the report from my first unsuccessful build, a successful build will primarily have a functional config file followed up with commands such as the spin up environment.</p>
<ul>
<li>If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?</li>
</ul>
<p>Since delivery will be done in short increments, I would modify the configuration to reduce installation of any sorts in order to increase time efficiency.</p>
<p><strong>Step 5: Merging the feature branch</strong></p>
<ul>
<li>The output of my git commit log</li>
</ul>
<p>f35094c (<strong>HEAD -&gt;</strong> <strong>master</strong>, <strong>origin/labreport</strong>, <strong>labreport</strong>)commit lab report  @tangollama</p>
<p>1949d2a (<strong>origin/master</strong>, <strong>origin/HEAD</strong>)Update LAB_INSTRUCTIONS.md</p>
<p>d36ad90Update <a href="http://LAB.md">LAB.md</a></p>
<p>59ef18aUpdate LAB_INSTRUCTIONS.md</p>
<p>37be3c8Update LAB_INSTRUCTIONS.md</p>
<p>97da547Update <a href="http://LAB.md">LAB.md</a></p>
<p>0bd6244updated Step 0 title</p>
<p>4562cd8added npm and node install repreq</p>
<p>255051eadding template</p>
<p>13a09b7Adding the <a href="http://LAB.md">LAB.md</a> and correcting some instructions.</p>
<p>d2ddea5Version 0.0.1 of the lab isntructions</p>
<p>ab312fcmore progress</p>
<p>62fb0a5more progress</p>
<p>fe1937bmore in the lab instructions</p>
<p>3e807fbfirst section</p>
<p>9ae6b83remove <a href="http://LAB.md">LAB.md</a></p>
<p>e429c1alab instructions</p>
<p>968099eremove test db</p>
<p>7362cd1working</p>
<p>44ce6aeInitial commit</p>
<ul>
<li>A screenshot of the <em>Jobs</em> list in CircleCI<img src="blob:https://stackedit.io/497ffa61-bced-49af-9eb6-b1733b30d72c" alt=""></li>
</ul>

