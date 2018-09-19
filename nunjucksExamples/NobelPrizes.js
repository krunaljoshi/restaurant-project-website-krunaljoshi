    /* A file to rendering Nobel Prize information from JSON into 
HTML with *nunjucks*. 

Student edition for use in homework assignments.

*/

const nunjucks = require('nunjucks');
// The next line imports the prize.json file into JavaScript
// as a JavaScript object which contains arrays and more objects...
const prizesJSON = require('./prize.json');
const fs = require('fs'); // The file system module
// var contents = fs.readFileSync("prize.json");
// var jsonContent  = JSON.parse(contents);
// var newArr = jsonContent.prizes;
// var arrLen = newArr.length;
//var newarr2 = newArr[1].laureates[1].firstname;
//var newArr3 = newArr[i].category;
// console.log(newArr3);

// console.log(newarr2);
//console.log(newArr.length);
// nunjucks.configure('views', {
//     autoescape: true
// });

// You will pick different topics and date ranges based on your
// interests and the contents of the prize.json file
let catDates = [{
        topic: "physics",
        start: 1926,
        end: 1954,
        title: "Physics",
        fname: "physics.html"
    },
    {
        topic: "chemistry",
        start: 1936,
        end: 1964,
        title: "Chemistry",
        fname: "chemistry.html"
    },
    {
        topic: "economics",
        start: 1940,
        end: 1980,
        title: "Economics",
        fname: "economics.html"
    },
    {
        topic: "peace",
        start: 1969,
        end: 2009,
        title: "Peace",
        fname: "peace.html"
        

    },
    {
        topic: "literature",
        start: 1920,
        end: 1940,
        title: "Literature",
        fname: "literature.html"

    },
    {
        topic: "medicine",
        start:2000,
        end: 2010,
        title:"Medicine",
        fname:"medicine.html"
    }
];


nunjucks.configure({
    autoescape: true
});
nunjucks.configure('views', {
    autoescape: true
});

// Process prizes.json to get only information of interest
let prizeArray = prizesJSON.prizes;
var arrLen = prizeArray.length;

for (let catDate of catDates) {
    
    
    
    // Create filtered versions of the prize array for rendering.
    // Recommend using JavaScript array methods like *filter*, etc...
    var filterArrays=prizeArray.filter(function(element,index,self){
        return element.year>=catDate.start&&element.year<=catDate.end&&element.category==catDate.topic;});
    filterArrays.sort(function(year1,year2){
        return year1.year - year2.year;
    });
        // Combine needed information for the template into a single
    // JavaScript object, suppose it is called prizeInfo and
    // pass it over to nunjucks
    //let outString = nunjucks.render('prizes.njk', prizeInfo);
    
    // Write the file
    let outString = nunjucks.render('prizes.njk',{prizes:filterArrays, catDates:catDate,cat:catDates});
    fs.writeFileSync('./output/' + catDate.fname, outString);
    console.log("Wrote file " + catDate.fname); // For debugging
    console.log(catDate)
 
}
