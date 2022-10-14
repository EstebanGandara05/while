input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let Jose = game.createSprite(0, 2)
let andres = game.createSprite(randint(1, 4), randint(0, 4))
andres.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        Jose.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        Jose.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        Jose.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        Jose.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (Jose.isTouching(andres)) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
        andres.delete()
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
    }
})
