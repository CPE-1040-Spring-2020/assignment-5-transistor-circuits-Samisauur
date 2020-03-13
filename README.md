
# 1. NPN transistor circuit
###Voltage measurements (Switch off):
Accross the resistor RC = 00V
At the collector (C) = 3.085V
At the base (B) = 00V
At the emitter (E) = 00V

### Current measurements (Switch off): 
i.The collector current IC = .001A
ii. The emitter current IE = .001A
iii. The base current IB = .004A

### Voltage measurements (Switch on):
Accross the resistor RC = 4.38V
At the collector (C) = 2.87V
At the base (B) = .713V
At the emitter (E) = 6.55mV

### Current measurements (Switch on)
The collector current IC = 6.31mA
The emitter current IE = 6.68mA 
The base current IB = 0.368mA

The relationship between the collector, emitter, and base is that the base is a small amount of energy that is given or removed by the switch, the emitter is the full power given, and the collector is what is holding most of the power.
The amplification coefficient is roughly 17:1.

# 2. PNP transistor circuit
The LED lights up when the switch is off!
  
### Voltage measurements (SWITCH on):
Accross the resistor RC = .00mV
At the collector (C) = .00mV
At the base (B) = 5.08V
At the emitter (E) = 5.09V

### Current measurements (SWITCH on): 
i.The collector current IC = .00ohm
ii. The emitter current IE = .00ohm
iii. The base current IB = .00ohm

### Voltage measurements (Switch off):
Accross the resistor RC = 2.2V
At the collector (C) = 5.01V
At the base (B) = 4.32V
At the emitter (E) = 5.07V

### Current measurements (Switch off)
The collector current IC = 6.71mA
The emitter current IE = 7.15mA
The base current IB = .44mA

*The relationship amongst them in PNP is is that the collector and base make up the sum of the emitter.
The amplification coefficient is 16:1.

### 3. Soil Sensor
 1) Probe 1 contains the ground, resister, transister, and signal; these transistor allows the VCC to switch to the signal when Probe 1     senses wetness. 
 2) I will be measuring Rdry by leaving prongs out, Rwet by placing prongs on a damp cloth, and Rsoak by inserting the prongs in a cup     of water.
  3) Will use bread and breakout board with alligator wires to measure the base voltage of the sensor transistor. 
  Measured values for:
  fully dry soil VBDRY = 00V 
  somewhat wet soil VBWET = 4.67V (declining)
  fully soaked soil VBSOA = 5.00V (declining)
  4) I did not need a pull up resistor since the microbit already contained one and the wires connecting to the analog pins. Used a digital read pin on the microbit. Whenever anolog 8 switched between 0/1 it caused the LED in anolog pin 12 to go on or off depending on 0/1. See the demo [here](https://imgur.com/gallery/IxgBkvT).
  
