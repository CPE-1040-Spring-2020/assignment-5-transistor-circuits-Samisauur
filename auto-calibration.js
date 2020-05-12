let lo1: number = 0
let lo2: number = 0
let lo3: number = 0
let hi1: number = 0
let hi2: number = 0
let hi3: number = 0
let min: number = 0
let max: number = 0

let value = pins.analogReadPin(AnalogPin.P0)
let index = Math.map(value, 6, 1023, 4, 0)

basic.showArrow(4)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P12, 1)
lo1 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(0)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P12, 1)
hi1 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(4)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P12, 1)
lo2 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(0)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P12, 1)
hi2 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(4)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P12, 1)
lo3 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

basic.showArrow(0)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P12, 1)
hi3 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P12, 0)

min = (lo1 + lo2 + lo3) / 3
max = (hi1 + hi2 + hi3) / 3

basic.showString("Calibration success")

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
