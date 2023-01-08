/* Get the value of each of the inputs in the HTML file when the form is submitted. 
Remember the event.preventDefault()*/
document.getElementById('libform').addEventListener('submit', function(e) {
    // Remember the event.preventDefault
    e.preventDefault()

    var noun = document.getElementById('noun').value
    var adjective = document.getElementById('adjective').value
    var person = document.getElementById('person').value
    var verb = document.getElementById('verb').value
    var place = document.getElementById('place').value
  
    // make sure the values are not empty
    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        alert('Please complete all fields!')
    }
  
    // Write a story that uses each of the values
    var story = `Once upon a time, a ${adjective} ${noun} named ${person}, who ${verb} to learn to read and write, went one day in search of a school. He left his province to go to the Kayor region, in ${place}.`
  
    // display the story
    document.getElementById('story').textContent = story
})

// Make sure you check the console for errors when playing the game.
/* Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story 
currently displayed (but keep the values entered by the user). The user could click the button at least 
three times and get a new story. Display the stories randomly.*/