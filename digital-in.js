let morris = 0
basic.forever(function () {
    morris = pins.digitalReadPin(DigitalPin.P8)
    if (morris == 1) {
        pins.digitalWritePin(DigitalPin.P12, 1);
    }

})
