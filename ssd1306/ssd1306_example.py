# ecample.py -- put your code here!

from pyb import I2C
from ssd1306 import SSD1306
import font



display = SSD1306(pinout={'sda': 'X10',
                           'scl': 'X9'},
                   height=64,
                   external_vcc=False)


display.poweron()
display.init_display()
display.init_display()


index = 0 
display.draw_text(60,30,str(index))
display.draw_circle(55,35,20)
display.draw_line(0,0,127,63)
display.draw_line(0,63,127,0)
display.draw_rect(10,10,90,50)
display.set_pixel(63,   31,  True)
display.set_pixel(0,   0,  True)
display.set_pixel(127, 0,  True)
display.set_pixel(0,   63, True)
display.set_pixel(127, 63, True)
display.draw_text(2,2,"test")  
display.display()  
while True :
   
    display.draw_text(50,30,str(index))
    index = index+1 
    display.display()    
    
    

