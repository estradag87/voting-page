# EXCERCISE

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## REACT AS THE FRAMEWORK FOR THIS EXCERSICE

I structured this projects in components:
- NavBar
- Banner
- Notification
- Voting Cards
- Name Submit
- Footer

### NavBar

For the NavBar I use bootstrap for it, because it already have the structure and it was very fast to adjust for I was needing for.
Also for the search icon I used the react-icons library.
The section which you can navigate threw is "Past Trials" and for this I used the react-router component.

### Banner

The banner is the second component which is based on a div with the background-image.
This banner has just the information and a link to Wikipedia.
The bar for the closing days was coded with a Bootstrap progress bar, just for the the diagram and the info is just hard coded.

### Notification

The notification component was made with an alert role, so if the user wants to close it, it just disappeared and all the informacion move up.

### VotingCards

This is the most important component, where is all the interaction.
I hardcoded all the data in a complement file with a JSON structure, and from where I used all the info stored in an array to do a map and display all the voting cards.
I defined a first state of "votesType" and after this state was changed with an onclick on the voting options, there will be added more states as Likes, Dislikes, progress Number and Voted that is used to control if the user select one option and then click on the vote now of other voting card, also this state display the info in the progress Bar for the results of the voting interact.
The hand that appears next to the name of the person is directly the option witch has been more votes, and if it´s 50/50 the hand will not display.
In the progress Bar if one option has the 100% of the votes, the hand and the % on it disappear.
When a user click vote now before he had select one option it will be display a notification. I used for this react-toastify.


### NameSubmit

Clicking on this button will display a Bootstrap modal, in witch I added an input and functionality to the closing button.
This modal was just add as a diagram exercise.

### Fotter

On the footer was used the react-icons for the social icons and they are links to the pages.

## STYLE

I styled this page using css and SASS, because it was easier sometimes when I needed to style classes as child of other classes, also I defined a few variables with made more easy to define the same color for the different components.
This page is responsive!!!

