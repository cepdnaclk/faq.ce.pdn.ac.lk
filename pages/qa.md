---
layout: default
permalink: "/qa/"
---

# cepdnaclk.github.io/faq/qa

##### How to add questions to this FAQ list?
1. Sign in to GitHub.
2. Go to [https://github.com/cepdnaclk/faq/blob/main/pages/qa.md](https://github.com/cepdnaclk/faq/)
3. Fork the repo.
4. Edit the file. (You may answer an existing question, and a new question or add a new question along with the answer)
5. Send a pull request.

---

##### How to connect to department servers?
    You can use the Department LDAP login. If you have any issue, please mention it in the 'ask-for-help' channel of the
    PeraCom Discord server.

---

##### How can I become a member of the github organization?
Send an email to e17154ATengDOTpdnDOTacDOTlk from your @ce.pdn.ac.lk email (not your gmail, not your @eng.pdn.ac.lk). You can send the email from you @eng.pdn.ac.lk address only if you have the registration number (not the name) as the email address.

---

##### What are my Wifi networks and login credentials?
<table class="table table-bordered">
    <tr><td>Network</td><td>Username</td><td>Password</td></tr>
    <tr><td>Pera-Wifi</td><td>e14000</td><td>Feels password</td></tr>
    <tr><td>Eng-Student</td><td>None</td><td><a href="https://cepdnaclk.github.io/servers/admin/">ask</a>(cannot post publicly)</td></tr>
    <tr><td>NetLab</td><td>None</td><td><a href="https://cepdnaclk.github.io/servers/admin/">ask</a>(cannot post publicly)</td></tr>
</table>

---

##### How to setup proxy settings in linux based operating systems?
As of now (2020-04-12) you do not need any proxy settings to access the internet through any network.

---

##### How to setup proxy in windows?
As of now (2020-04-12) you do not need any proxy settings to access the internet through any network.

---

##### How to troubleshoot wifi driver issues in Ubuntu?

---

##### How to run ARM assembly code?

1. Install the following software on your computer (already installed on tesla.ce.pdn.ac.lk)
<pre><code>
    sudo apt-get install gcc-arm-linux-gnueabi
    sudo apt-get install qemu-user
</code></pre>

2. Assemble and run (example is armProg.s)
<pre><code>
    arm-linux-gnueabi-gcc -Wall armProg.s -o assembledCode
    qemu-arm -L /usr/arm-linux-gnueabi assembledCode
</code></pre>

---

##### What server (tesla/aiken/kepler) to use for what purpose?

---

##### How to automatically connect to a server without typing a password?
See https://www.tecmint.com/ssh-passwordless-login-using-ssh-keygen-in-5-easy-steps/

---

##### How can I install a software package on a department server without sudo access?

1. Contact any instructor/lecturer and request them to install the software.
2. Request a virtual machine contact: rajitharamanayake[at]gmail[dot]com
3. There are many workarounds that do not require sudo access such as "pip install --user", "conda install" if all you want to do is indtalling a python package.

---

##### How can I get a linux virtual machine on a department server?

Ask for permission from roshanr[at]eng[dot]pdn[dot]ac[dot]lk and help from rajitharamanayake[at]gmail[dot]com (update this answer if someone else is in charge now).

---

##### Why is my linux virtual machine on a department server unable to connect to the internet?

Ask harshana[dot]w[at]eng[dot]pdn[dot]ac[dot]lk and fill this answer.

---



##### Can my laptop be set to automatically turn on/off proxy?


---

##### Will my @ce.pdn.ac.lk mail address and @eng.pdn.ac.lk mail address expire after graduation?

As of now (2020/04/14): @ce.pdn.ac.lk will be deleted one year after the graduation. @eng.pdn.ac.lk will not be deleted in the foreseeable future.

---

##### What are my usernames and passwords for university websites?

<table class="table table-bordered">
<tr><th>Account</th><th>Username</th><th>Password</th></tr>
    <tr>
        <td>https://feels.pdn.ac.lk/</td>
        <td>eXXYYY</td>
        <td>Given to you during faculty orientation</td>
    </tr>
<tr><td>CO Top floor lab linux computers, tesla, aiken, babbage, [at]ce.pdn.ac.lk email, results.ce.pdn.ac.lk</td><td>eXXYYY</td><td>Given to you during the department orientation</td></tr>
<tr><td>CO Top floor windows password</td><td>eXXYYY</td><td>Given on the first day of using windows software for a lab after enrolling in the department</td></tr>
<tr><td>CC windows password</td><td>eXXYYY</td><td>FILL THIS</td></tr>
<tr> <td>[at]eng.pdn.ac.lk password</td><td>You choose</td><td>You choose</td></tr>
<tr><td>http://me.pefaa.net/</td><td>You choose</td><td>You choose</td></tr>
</table>

---

##### How can I get help to recover passwords or create accounts?

<table class="table table-bordered">
<tr><th>Account</th><th>Whom to ask</th></tr>
<tr><td>https://feels.pdn.ac.lk/</td><td>feels[at]eng[dot]pdn[dot]ac[dot]lk</td></tr>
<tr><td>CO Top floor lab linux computers, tesla, aiken, babbage, [at]ce.pdn.ac.lk email, results.ce.pdn.ac.lk</td><td><a href="https://cepdnaclk.github.io/servers/admin/">CO server admin</a></td></tr>
<tr><td>CO Top floor windows password</td><td><a href="https://cepdnaclk.github.io/servers/admin/">CO server admin</a></td></tr>
<tr><td>CC windows password</td><td><a href="https://cepdnaclk.github.io/servers/admin/">CO server admin</a></td></tr>
<tr><td>[at]eng.pdn.ac.lk password</td><td>roshanr[at]eng[dot]pdn[dot]ac[dot]lk</td></tr>
<tr><td>http://me.pefaa.net/</td><td>kamalanath[at]eng[dot]pdn[dot]ac[dot]lk</td></tr>
</table>

---

##### How to get started with the Open BCI Cyton Board?

See [https://cepdnaclk.github.io/e15-4yp-Brain-Computer-Interface-for-controlling-virtual-objects/](https://cepdnaclk.github.io/e15-4yp-Brain-Computer-Interface-for-controlling-virtual-objects/) and contact the team listed there.

---


##### How to prepare a good CV?

Pointers from workshop for E16s on 15/06/2021 [url](https://docs.google.com/document/d/1kGc2ksuyw97ns5VA4npvq_qi52ud6HbZutMcLezhqBM/edit).


---
