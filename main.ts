let pushCountA = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    pushCountA += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # . # #
        . . # . .
        `)
    basic.showArrow(input.compassHeading())
})
basic.forever(function () {
	
})
