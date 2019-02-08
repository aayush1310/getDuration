# getDuration

This Module will help in finding durations like
1. Year to Date : It will give you Year to Date Duration ie ( First Day of the Year to Yesterday)
2. Month to Date: It will give you Month to Date Duration ie ( First Day of the Month to Yesterday)
3. Week to Date: It will give you Week to Date Duration ie ( First Day of the Week to Yesterday), The Week     starts from Monday

# Usage
#NodeJs/Express

var Duration = require('getduration');

var YearToDate = Duration.getDuration('ytd');
var MonthToDate = Duration.getDuration('mtd');
var WeektoDate = Duration.getDuration('wtd');

#param/Parameters

param/Parameters include 
1. 'ytd' for Year to date
2. 'mtd' for Month to Date
3. 'wtd' for Week to Date

# githubLink

https://github.com/aayush1310/getDuration

#Installation

#NodeJS

npm install getDuration --save