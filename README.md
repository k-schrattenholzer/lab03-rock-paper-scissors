## Plan

# HTML
- submit button
- three radio buttons for Rock, Paper and Scissors
- displays
    - you guessed (guess)
    - the throw was (randomThrow)
    - won/lost message
    - total wins
    - total losses
    - percent or correct guesses

# State
- wins
- losses
- actual throw (ok to declare inside the even listener, not global scope)

# Events
- user clicks Submit
    - randomly generate rock paper or scissors
    - check the users subission against the generated answer
    - update the DOM to display the won/loss message
