<h1 align="center">Team Profile Generator 📠</h1>
<p>
    <img src="https://img.shields.io/github/repo-size/slchld1/OOP-TeamProGen" />
    <img src="https://img.shields.io/github/languages/top/slchld1/OOP-TeamProGen"  />
    <img src="https://img.shields.io/github/last-commit/slchld1/OOP-TeamProGen" />
    <img src="https://img.shields.io/badge/license-MIT-brightgreen"/>
</p>

## Description 💾

## User Story ✉️
~~~
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
~~~
## Acceptance Criteria 📩
~~~
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
~~~
## Table of Contents 🔍
* [Installation](#installation-)
* [Usage](#usage-)
* [Questions](#questions-)
* [License](#license)
## Installation 🔨
To generate a Team Profile Page, `git clone` the repo down to your local.

Run `npm install inquirer@8.2.4` or `npm i inquirer@8.2.4` in order to install the following npm package,

Make sure you follow the correct version listed in the dependencies of `package.json` file.

* [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.
* [`jest`](https://www.npmjs.com/package/jest) will be used to run the application inquirer.

In order to start the application, direct your terminal to the same folder as where index.js is located,

then type `node index.js` in the command line.

Answer the following questions prompt in the command line,

After answering, an `index.html` file will be generated in the `./dist` folder.
## Usage 💡
![Gif demo of Team-Profile-Generator](/oop_gif1.gif)
![Gif demo of Team-Profile-Generator](/oop_gif2.gif)
![Gif demo of Team-Profile-Generator](/oop_gif3.gif)


## License
MIT License


## Questions ❓

For any Additional questions, Please reach out to: jaecho203@gmail.com

Or visit slchld1 on github! Thank you.
