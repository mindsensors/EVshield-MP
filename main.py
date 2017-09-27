from EVShield import EVShield
evshield = EVShield()


evshield.waitForButtonPress(BTN_GO, led_pattern=1)
while True:
  if evshield.getButtonState(BTN_LEFT):
    evshield.bank_a.ledSetRGB(255, 0, 0)
  else:
    evshield.bank_a.ledSetRGB(0, 0, 0)
  if evshield.getButtonState(BTN_RIGHT):
    evshield.bank_b.ledSetRGB(0, 153, 0)
  else:
    evshield.bank_b.ledSetRGB(0, 0, 0)
  if evshield.getButtonState(BTN_GO):
    evshield.centerLedSetRGB(0, 0, 153)
  else:
    evshield.centerLedSetRGB(0, 0, 0)
