# TrainSchedule

This project is for displaying the train schedules of the trains added. This app also allows to add a new train.
When ever a new train is added, the train details are displayed in the table holding the trains information.
The information displayed for the convenience of the users are as below
1. Train name
2. Destination
3. Frequency
4. Next Arrival(calculated based on the First start time input when the train is added)
5. Minutes away from the current time.

Firebase is used to store the data. MomentJS library is used to calculate the next arrival and minutes away.

Challenges Faced

1. Storing data in firebase in the required hirarchy was challenging.But resolved by studying the Firebase documentary.
2. Calculating the next arrival for trains having the first start time in future was challenging. But was able to resolve by understanding how momentJS works and by adding the required if else conditions.

Future Enhancements

1. Option to edit the train details in the table

2. option to delete the train information.

The project can be accessed from the linnk below

https://pavani-vithala.github.io/TrainSchedule/

The app is maintained by Pavani Vithala who can be reached on pavani.vithala18@gmail.com
