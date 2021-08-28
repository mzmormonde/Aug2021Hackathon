
// See Docs under Frame for FIT, FILL, FULL, and TAG scaling modes
var scaling = FIT; // this will resize to fit inside the screen dimensions
var width = 1920;
var height = 1080;
var color = light; // zim has colors built in - see https://zimjs.com/docs.html
var outerColor = darker;
var assets = ["icon.png"]; // do not need array if only one, but need it if more than one
var path = "assets/";

var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');

// the Frame sets up an HTML Canvas tag, the stage and handles scaling
var frame = new Frame(scaling, width, height, color, outerColor, assets, path);



//Find some way to create the board and pieces separately and call eachother
//Currently, separating is breaking the game
function start() {
    frame.on("ready", function () {


        // the stage is where we put things if we want to see them!
        var stage = frame.stage;
        var stageW = frame.width;
        var stageH = frame.height;

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Make background


        var background = "#769296";

        // Tile background Rectangle
        // then add the tile to the stage
        // object.addTo(container) can add to any container, the stage is default
        // We can chain most ZIM methods such as addTo()
        // Here is where we use the colors series
        var tile = new Tile(new Rectangle(stageW / 1, stageH / 1, background), 1, 1).addTo();

        // Set a style for all label colors
        // ZIM STYLE is similar to CSS but a slightly different system
        // but it has the same purpose - see:
        // https://zimjs.com/docs.html?item=STYLE
        STYLE = {
            Label: { color: white }
        }

        var one = new Container(stageW / 1, stageH / 1)
            .addTo()
            .alp(0) // start off with alpha (transparency) of 0
            .animate({ alpha: 1 }, animateTime); // animate the alpha to 1

        // Note: as of ZIM Cat, time is in seconds (not milliseconds)
        // To go back to milliseconds, use TIME = "milliseconds" or "ms"
        var animateTime = .5;


        //Maybe add a warning popup that progress will not be saved
        //button options
        // width, height, label, color, rollColor, borderColor, borderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, flatBottom, backing, rollBacking, rollPersist, icon, rollIcon, toggle, rollToggle, toggleEvent
        new Button(200, 70, "HOME", "#D7AC83", "#75749E", one)
            .pos(35, 20, RIGHT, BOTTOM)
            .tap(function () {
                //send back to home page
                window.location.href = "https://mzmormonde.github.io/Aug2021Hackathon/";
            });



        levelOne(one, stage, stageH, stageW);

        stage.update(); // this is needed to show any changes

    }); // end of ready
}

function noAnswer(one, stage, stageH, stageW) {


    // width, height, label, backingColor, backingRollColor, borderColor, borderWidth, corner, shadowColor, shadowBlur, buttonPadding
    var closeBut = new Button(41, 41, "X", "black", "#444", "white", "2", 5);
    var label = new Label("Please try again", 30, "Courier", "white");
    // width, height, label, backgroundColor, color, draggable,
    var paneDrag = new Pane({
        width: 450,
        height: 200,
        label: label,
        backgroundColor: "#8D9DCF",
        draggable: true,
        close: true


    });
    paneDrag.x = 400; paneDrag.y = 200;
    closeBut.x = 136; closeBut.y = -130;

    paneDrag.show();
   

}

function correctAnswer(question, one, stage, stageH, stageW) {
   
    // width, height, label, backingColor, backingRollColor, borderColor, borderWidth, corner, shadowColor, shadowBlur, buttonPadding
    var closeBut = new Button(41, 41, "X", "black", "#444", "white", "2", 5);
    var label = new Label("Correct! ", 30, "Courier", "white");
    // width, height, label, backgroundColor, color, draggable,

    var paneDrag = new Pane({
        width: 450,
        height: 200,
        label: label,
        backgroundColor: "#8D9DCF",
        draggable: true,
        close: true

    });
   
    paneDrag.x = 400; paneDrag.y = 200;
    closeBut.x = 136; closeBut.y = -130;
    

    paneDrag.show();
    // width, height, label, color, rollColor, borderColor, borderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, flatBottom, backing, rollBacking, rollPersist, icon, rollIcon, toggle, rollToggle, toggleEvent
    levelTwo(one); 
  

}


function levelOne(one, stage, stageH, stageW) {

    new Label("Level 1")
        .alp(.7)
        .pos(30, 30, LEFT, BOTTOM, one);

    new Label("Let's start with an easy one, what is 2 + 2?")
        .alp(.5)
        .pos(0, 0, CENTER, CENTER, one);

    var userInput = new TextArea({ color: "AAA", height: 60, size: 30, placeholder: "YOUR ANSWER" })
        .center()
        .alp(.8)
        .pos(0, 80, CENTER, CENTER, one);

    // width, height, label, color, rollColor, borderColor, borderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, flatBottom, backing, rollBacking, rollPersist, icon, rollIcon, toggle, rollToggle, toggleEvent
    new Button(150, 50, "Submit", "#D7AC83", "#75749E", one)
        .alp(.7)
        .pos(250, 80, CENTER, CENTER, one)
        .tap(submitUserInput);

    function submitUserInput() {
        console.log("in user input")
        if (userInput.text == "4" || userInput.text.toLowerCase() == "four") {
            correctAnswer(1, one);
        } else if (userInput.text == "" || userInput.text != "4" || userInput.text.toLowerCase() != "four") {
            noAnswer();
        }

    }
   
}

function levelTwo(one, stage, stageH, stageW) {
   
    new Label("Level 2")
        .alp(.7)
        .pos(30, 30, LEFT, BOTTOM, one);

    new Label("sfghnsf")
        .alp(.7)
        .pos(0, 0, CENTER, CENTER, one);

    var userInput = new TextArea({ color: "AAA", height: 60, size: 30, placeholder: "sfgdhsgfdh" })
        .center()
        .pos(0, 80, CENTER, CENTER, one);

    // width, height, label, color, rollColor, borderColor, borderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, flatBottom, backing, rollBacking, rollPersist, icon, rollIcon, toggle, rollToggle, toggleEvent
    new Button(150, 50, "sfghsfghn", "#D7AC83", "#75749E", one)
        .alp(.7)
        .pos(250, 80, CENTER, CENTER, one)
        
        
       

}



function levelTBD(one, stage, stageH, stageW) {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Create hole to drop circle

    var hole = new Container(stageW / 1.8, stageH / 1.4)
        .addTo()
        .alp(0) // start off with alpha (transparency) of 0
        .animate({ alpha: 2 }, animateTime); // animate the alpha to 1


    // dragging is very simple - just use obj.drag()
    // and here we will add a boundary of the one container
    // this could be customized with a Boundary object as well
    var end = new Circle(75, black)
        .center(hole)

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Make the circle

    var circle = new Circle(35, "#D7AC83")
        .center(one)
        .drag(one);


    new Label("Level 1")
        .alp(.7)
        .pos(30, 30, LEFT, BOTTOM, one);


    stage.update(); // this is needed to show any changes


}
