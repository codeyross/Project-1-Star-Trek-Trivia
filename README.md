I have created a Star Trek inspired trivia game!
I created a div "container" to hold the question and buttons in a grid style
I created the questions in the javascript code itself instead of an API
The game works as follows:
When you click the start button, "Engage!" (using event listener), the question and anwsers populate which I used append child/DOM manipulation to attain.
I researched and created a math function to generate the answers randomly from my array of questions.
To choose an answer I used event target with if/esle statements and with some css the button will change to green if correct and red if incorrect
*The one thing I could not fix is that points are currently added for incorrect answers.(So everyone's a winner right now)
When you select an answer and hit submit, the pointContainer that has been grabbed will be populated by adding 6 points and alert displays "Correct"
Once all questions have been iterated over, the restart button(start button filled with 'Restart' text) will appear(using a hide class), the score will reset to zero and the questions will begin again