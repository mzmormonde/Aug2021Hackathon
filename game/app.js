
// See Docs under Frame for FIT, FILL, FULL, and TAG scaling modes
var scaling = FIT; // this will resize to fit inside the screen dimensions
var width = 1024;
var height = 768;
var color = light; // zim has colors built in - see https://zimjs.com/docs.html
var outerColor = darker;
var assets = ["icon.png"]; // do not need array if only one, but need it if more than one
var path = "assets/";

// the Frame sets up an HTML Canvas tag, the stage and handles scaling
var frame = new Frame(scaling, width, height, color, outerColor, assets, path);

function start() {

    frame.on("ready", function () {
        zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

        // the stage is where we put things if we want to see them!
        var stage = frame.stage;
        var stageW = frame.width;
        var stageH = frame.height;

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // 0. Make background

        // This series will give these colors in order
        // var colors = series("#769296");

        var background = "#769296"; 

        // The series is part of a special system called ZIM VEE
        // which uses a Pick object for dynamic parameters
        // https://zimjs.com/docs.html?item=Pick

        // Tile background Rectangle
        // then add the tile to the stage
        // object.addTo(container) can add to any container, the stage is default
        // We can chain most ZIM methods such as addTo()
        // Here is where we use the colors series
        new Tile(new Rectangle(stageW / 1, stageH / 1, background), 1, 1).addTo();

        // Set a style for all label colors
        // We could set this as parameters on each label instead...
        // ZIM STYLE is similar to CSS but a slightly different system
        // but it has the same purpose - see:
        // https://zimjs.com/docs.html?item=STYLE
        STYLE = {
            Label: { color: white }
        }

        // This is our own variable
        // to store a time in ms for animation on each section
        // We could use an animate() series or sequence
        // but we are keeping the intro more basic...
        // We store it here because it is used in many places
        // We could use an JavaScript 6 const...
        // but we are showing this intro in ES5
        // For info on ES6 see https://zimjs.com/tips.html#JAVASCRIPT6
        // Note: as of ZIM Cat, time is in seconds (not milliseconds)
        // To go back to milliseconds, use TIME = "milliseconds" or "ms"
        var animateTime = .5;


         // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //Create hole to drop circle

         var hole = new Container(stageW / 2, stageH / 1)
            .addTo()
            .alp(0) // start off with alpha (transparency) of 0
            .animate({ alpha: 2 }, animateTime); // animate the alpha to 1


        // dragging is very simple - just use obj.drag()
        // and here we will add a boundary of the one container
        // this could be customized with a Boundary object as well
        new Circle(60, black)
            .center(hole)

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Make the circle

        // To animate the sections in we put each in a container
        // The chaining after can go on the same line or multiple lines
        // Multiple lines lets you comment out individual methods
        // and can sometimes make the code easier to read
        // Make sure the semi-colon goes right at the end!
        var one = new Container(stageW / 1, stageH / 1)
            .addTo()
            .alp(0) // start off with alpha (transparency) of 0
            .animate({ alpha: 1 }, animateTime); // animate the alpha to 1


        // dragging is very simple - just use obj.drag()
        // and here we will add a boundary of the one container
        // this could be customized with a Boundary object as well
        new Circle(30, "#D7AC83")
            .center(one)
            .drag(one);
            console.log("ONE LOC" + one.loc); 

        new Label("Level 1")
            .alp(.7)
            .pos(30, 30, LEFT, BOTTOM, one);


        
        console.log("HOLE LOC" + hole.loc); 
        
        

        stage.update(); // this is needed to show any changes

    }); // end of ready
}