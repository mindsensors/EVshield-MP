Open Device Manager, expand Ports (COM & LPT), and find USB Serial Device (COM6). Remember this COM port number. Use pybcdc.inf for the driver software of needed.
Open an Explorer window. Under This PC, Devices and drives (#), find EVSHIELD (E:). Remember this drive letter.

Open a command prompt and type
```
E:
python pyboard.py --device COM6 myProgram.py
```

Alternatively, use a program such as PuTTY to open the COM port as a serial connection and use the Python interpreter.

Please visit http://micropython.org/help/ for further help.
