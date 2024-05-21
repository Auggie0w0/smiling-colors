/**
 * Change the "Class 1" bubbles in the if statements to the same names as the classes you made on Teachable Machine.
 * 
 * Spaces, spelling and capitalization matters!
 * 
 * Class names can't be longer than 12 characters.
 */
/**
 * Anything you put inside these if statements will be activated when the micro:bit receives that class name from the https://microbitai.inventor.city
 * 
 * vision recognition website
 */
/**
 * Click on the + to add more classes, and the - to delete them
 * 
 * Just duplicate this <SerialData = " "> hexagon and place it into the  new else if statement
 */
// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    // This If statement checks that variable with the class name, and if it matches the class name you entered, it will activate the code within that block
    if (SerialData == "Class 1") {
        basic.showIcon(IconNames.Happy)
    } else if (SerialData == "Class 2") {
        basic.showIcon(IconNames.Sad)
    } else if (SerialData == "Class 3") {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.clearScreen()
    }
})
let SerialData = ""
serial.redirectToUSB()
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        music.play(music.stringPlayable("E - G A G E C C ", 50), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("A C5 B A A G G - ", 50), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("D D E F A G G - ", 50), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G F E D E C C - ", 50), music.PlaybackMode.UntilDone)
    }
})
