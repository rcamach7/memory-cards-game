#Memory Card Game

##### 1. Take a little bit of time to think about how you want to implement your application, the features you want to implement, which components you need, and how to structure your application. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the best score you achieved thus far. You also need a couple of cards that display images and possibly informational text. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.

##### 2. Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components. We suggest you use functional components and therefore hooks in this project.
##### 3. Style your application so you can show it off!

Step One: 
- Create cards for 3 pokemon (pokemon theme)
  - hard coded components
  - each has a state of clicked on, or not
- When clicked or page loaded (so add some type of event listener) it must shuffle the order displayed
  - this will, i imagine, have to be implemented in the parent component
- Each valid click (ie not clicked before) will be sent upwards to app to add a score point

Components: 
- App
  - GameField (all child cards will exist in same file)
    - Pickachu Card
    - Charmander Card
    - Tortoise Card