basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
led.plot(0, 0)
led.toggle(0, 0)
music.playMelody("G B A G C5 B A B ", 120)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(0, 0)
    led.toggle(0, 0)
})
