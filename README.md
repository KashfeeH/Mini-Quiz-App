# Module 6 : Mini-Quiz-App

## Description

This week's challenge was to create mini quiz game that would be timed, has multiple-choices and also can keep track of high scores and quiz-takers' initials. This game mostly
used what we have learnt about WEB Apis throughout the week. It has been rough and ended up in the valley of despair. However, while working on this challenge I came to understand many things chief among them how JavaScript manipulates the HTML, how we can use JavaScript to provide additional functionality to the page. It is difficult but the more I practise, I will be able to internalize the concepts.

The required functionality has been adhered to but I have made some changes of my own. For example, I wanted the score of the quiz calculated seperately from the time.
However, with the selection of each wrong answer 10 seconds is still subtracted. The score of the quiz is based on the number of correct answers selected stored as a seperate variable. Each time the user selects the right answer, the variable increments. I felt this gave the game a bit more realness. Also it further fixes the bug that because the time and
score are equated, even if the user answers all questions wrongly - the score shows the time available and not zero. So, I wanted to fix this portion.

##  Usage
To play the mini quiz game, please navigate to  https://kashfeeh.github.io/Mini-Quiz-App/

![the quiz demo](./assets/demo/08-web-apis-challenge-demo.gif)

## Contributions
As always, as I am a complete novice in this field, any contributions to improve or correct the work would be highly appreciated. The repository is public. So if you have comments 
or suggestions to make this better, then please follow the steps mentioned below:
* Create a branch for the project
* Create your feature branch (git checkout -b feature/title)
* Commit your Changes (git commit -m 'meesage')
* Push to the branch (git push origin feature/title)
* Open a Pull Request

## References
A lot of code was repurposed from the following websites: 
* https://stackoverflow.com/ , 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort, 
* https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/,
* https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/,
* https://javascript.plainenglish.io/how-to-store-json-data-in-local-storage-js-react-angular-cba97508fbc5,
* https://coderpad.io/blog/development/the-complete-guide-to-regular-expressions-regex/,
* https://www.thisdot.co/blog/understanding-regex


## License
Distributed under the MIT License. See LICENSE.txt for more information.