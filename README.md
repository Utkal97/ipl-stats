# Stat-IPL
Stat-IPL is a client side Single Page Application built with Reactjs and Redux to view IPL statistics (based on this data). <br />
The application is currently hosted on Heroku. Link: https://stat-ipl.herokuapp.com/

### Technology Stack
1) Reactjs,
2) Redux (for universal state management ),
3) Bootstrap (for responsive design)


### Challlenges and Optimization
1) The given data consisted of excel files. I tried hard to read the files into redux state with `xlsx` library. After a day, I realized that the client side can't access local files without selection(selection is out of option since we can't put `<input type="file">` elements and make the user select data). The `fs` module just doesn't work in pure client-side application like this, because it would make a major security issue had it been supported (fs is powerful enough to make changes to local files). So, I converted the input excel files to json files and the data parsing became easy since I am using Javascript.

2) The large json files: After converting the input data to json, the `deliveries.json` came out to be 112MB, which is performance hit on the browser. Also, GitHub doesn't allow upload of files above 100MB. I have used Git LFS (large file system) plugin to overcome this. Then came the other major issue: The heroku or any other deployment platform doesn't support tracking for large files as we do in local system deployment. So, I had comporessed the `deliveries.json` file by removing extra spaces, stringify it and re-parsed it to json. This had reduced the size of the file from 112MB to 70MB. This made one of the major impact.

3) The optimization: Everytime react sees a change in state, it tries to re-render every child element of the DOM tree node. But we don't to re-render the large tables unnecessarily. One major demanding render in this application is "Deliveries" table. When I was toggling the Sidebar, I had noticed that the content component that contained Deliveries table re-rendered unnecessarily. This is a major friction on performance. So, I made all the components render only when the state they care about changes and prevent when irrelevant state components change. I have used `ShouldComponentUpdate` lifecycle method of a Class component that lets us choose when the re-render for the specified component must happen. This had improved the experience by a large extent. (If you are interested, you can try removing the `ShouldComponentUpdate` method in Deliveries Component and try toggling the side bar.)


### Folder Structure
The `/public/` folder contains the data for the project. The data given to me (from Kaggle) had csv and xlsx files, which I had converted to JSON files and stored in `/public/data` folder. <br />

The folder structure of this application is mainly classified into 3 types:-
1) Components : The rendering elements that form the layout of our application.
2) Redux : Manages the whole state of the application
3) Views : The individual components that take state as input and dictate how the content must be portrayed.

I have created a folder for each component since I didn't want to merge up Stylesheets and prevent it from becoming messy.

##### Components
Content : It is at Router that switches the views based on the given url. <br />
Loading, Error : They are created in order to give a better experience to the user. <br />
Table : This component is a headless UI component which takes in data and its attributes to display data while paginating it accordingly. <br />

##### Redux
Redux consists of the data management. The elements of redux folder divided just as input files to avoid confusion. <br />
ConfigStore.js takes in all the reducers and produces a combinedstore while applying Middlewares (`redux-thunk`).

##### Views
These are the content components that display data. <br />

Deliveries: Shows the record of everyball of every match listed in the season. <br />
Matches: Shows every match record in the season. <br />
PlayersList: Shows all the players with their details. <br />
Strikerates: Shows the total runs made by each player, his average score per ball and his strikerate average. This table is sorted in the decreasing order of Total Runs made by default. You can click on player name to display the player details component.<br />
Teams: Lists all the teams and their win status. <br />
Player details: This component is derived from Players list and Strikerates data. An individual player's data is reported here. <br />

### Setup
1) Make sure you have Node and npm installed in your machine.
2) Clone the repository.
3) Run `npm install` to download all the dependencies.
4) Run `npm start` to deploy locally. Access it at "http://localhost:3000/"

And you are good to go.

### Load times

The load times have been calculated using Profiler tab in React Dev Tools extension, which is believed to be the standard. Also, I have calculated them using my own approach (difference of times between `constructor` and `ComponentDidMount` lifecycle methods.)


| Component | Localhost (ms) | Heroku(free tier) (ms) |
| --- | ----------- | ----- |
| Deliveries | 2460 | 1903 |
| Players List | 78 | 85 |
| Matches | 267 | 272 |
| Strikerates | 42 | 28 |
| Teams | 17 | 18 |
