# coding-quiz-project

<h1>INTRODUCTION</h1>
Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


<h1>REQUIREMENT</h1>
GIVEN I am taking a code quiz<br>
WHEN I click the start button<br>
THEN a timer starts and I am presented with a question<br>
WHEN I answer a question<br>
THEN I am presented with another question<br>
WHEN I answer a question incorrectly<br>
THEN time is subtracted from the clock<br>
WHEN all questions are answered or the timer reaches 0<br>
THEN the game is over<br>
WHEN the game is over<br>
THEN I can save my initials and score<br>

<h1>PROCESS</h1>

1. pseudo-coding: plan out the user flow chart, pre-define variables, research functions needed
2. decide how many html files needed
3. code all HTML files
4. code Javascript
5. style using CSS
6. refactor codes
7. test and look for errors
8. upload to github and deploy


<h1>Details</h1>

1. The complete codes are separated into 4 HTML files, 1 css file, and 1 javascript file
2. Index.html, result.html, and highscore.html use their own javascript embedded inside HTML.
3. Question.html has its own javascript file because it is the most heavy Javascript page of the project, therefore, having its own file makes it more manageable to look at.
4. This project relies heavily on local storage to store data from one html and retrieve it to use on another html, therefore, making the application very interactive.
5. Due to screen size differences, I used a little media@ to style some elements for better display on mobile
6. I added a special media queries to make the hovering effect only work on desktop screen, eliminate the touch screen hovering issue.


My Github Repo: https://github.com/ethanlam93<br>
Deployment: https://ethanlam93.github.io/coding-quiz-project/
