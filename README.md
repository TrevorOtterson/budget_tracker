# Budget Tracker

Using mongoDB to keep track of data I created this simple budget tracker to see where the user spends and where they may need to save. The user is able to log in their transactions and subtract or add to their total amount of money. This is a PWA so even the user doesnt have a connection to the internet they can log their new data and it'll be saved for when the user gets connected to the internet again.

Offline Functionality:

  * Enter deposits offline
  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.


```
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.
```

## Deployed App

https://thawing-meadow-47918.herokuapp.com/
