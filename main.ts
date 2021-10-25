basic.forever(function () {
    if (input.lightLevel() > 10) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
    basic.clearScreen()
})
