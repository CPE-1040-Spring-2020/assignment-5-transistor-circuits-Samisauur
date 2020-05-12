let value = pins.analogReadPin(AnalogPin.P0)
let index = Math.map(value, 6, 1023, 4, 0)

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    value = pins.analogReadPin(AnalogPin.P0)
    index = Math.map(value, 6, 1023, 4, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.clearScreen()
    for (let y = 4; y >= index; y--) {
        led.plot(0, y)
        led.plot(1, y)
        led.plot(2, y)
        led.plot(3, y)
        led.plot(4, y)
    }
    basic.pause(500)
    basic.clearScreen()
})
