# CS472 (WAP): Project English Dictionary


## Intro :sunglasses:

The purpose of this project is to review and integrate all of the tools and techniques we have learned in this course. 
<br>
In this project, we will create a website that uses all of the following technologies: HTML, CSS, JavaScript, jQuery, Node.js, AJAX, SQL, and JSON. 
<br>
<br>
:bulb: The goal is to create a simple website that functions as an `Online English Dictionary`. 


## Files and their uses :file_folder:

- `dict.html` displays the webpage containing the User Interface
- `dict.css` styling for dict.html
- `dict.js` JavaScript event handlers for dict.html
- `jQuery.js` Standard jQuery library
- `Dictionary.js` Node.js web server for this web site
- `word.js` Node.js program to lookup the term in the database, collect the meanings, and send JSON to Browser


## Features :star:

- The user can input any english word into the input box and either press enter or click the search button.
- The backend runs the query based on the user input and returns the results if available else displays a friendly message indicating that the word
doesnt exist in the dictionary DB.


## How to use :blush:

You will need to make sure the backend server is running, so firstly run in terminal:


```
git clone https://github.com/chunkingz/CS472.git
```

```
git checkout Week4Day1
```

```
npm init
```

`npm run start` OR `node Dictionary.js`


## Hosted on Github Pages :octocat:

:link: [Link to github pages](https://github.com/chunkingz/CS472/tree/Week4Day1/dict.html)
