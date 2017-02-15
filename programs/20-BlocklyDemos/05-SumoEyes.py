#!/usr/bin/env python

# ATTENTION!
# Please do not manually edit the contents of this file
# Only use the web interface for editing
# Otherwise, the file may no longer be editable using the web interface, or you changes may be lost

# Copyright (c) 2017 mindsensors.com
# 
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License version 2 as
# published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.    See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
#
#mindsensors.com invests time and resources providing this open source code, 
#please support mindsensors.com  by purchasing products from mindsensors.com!
#Learn more product option visit us @  http://www.mindsensors.com

"""
--BLOCKLY FILE--
--START BLOCKS--
PHhtbCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+PGJsb2NrIHR5cGU9InZhcmlhYmxlc19zZXQiIGlkPSJhQW0lfkhpZ1MqdWNrKHR4X11JRyIgeD0iMCIgeT0iMCI+PGZpZWxkIG5hbWU9IlZBUiI+c3Vtb3NlbnNvcjwvZmllbGQ+PGNvbW1lbnQgcGlubmVkPSJ0cnVlIiBoPSI4NSIgdz0iMzQzIj5BdHRhY2ggYSBOWFRTdW1vRXllcyB0byBQb3J0IEJBUzEgb2YgUGlTdG9ybXMuClN0YXJ0IHRoZSBwcm9ncmFtIGZyb20gUGlTdG9ybXMgb24gU2NyZWVuIEJyb3dzZXIgYW5kIHByZXNzIEdPIGJ1dHRvbiB0byB0ZXJtaW5hdGUuPC9jb21tZW50Pjx2YWx1ZSBuYW1lPSJWQUxVRSI+PGJsb2NrIHR5cGU9InNlbnNvcnNfc3Vtb2V5ZXMiIGlkPSJSXz9UMCN+eV80OlBWZE5lSS9BJSI+PGZpZWxkIG5hbWU9InNlbnNvcl9zZWxlY3RvciI+QkFTMTwvZmllbGQ+PC9ibG9jaz48L3ZhbHVlPjxuZXh0PjxibG9jayB0eXBlPSJzZW5zb3JzX3N1bW9leWVzc2V0bW9kZSIgaWQ9IiFAIW1UdXhPYShocz9+VWBKMUhaIj48ZmllbGQgbmFtZT0ibW9kZV9zZWxlY3RvciI+TE9OR19SQU5HRTwvZmllbGQ+PHZhbHVlIG5hbWU9InNlbnNvciI+PGJsb2NrIHR5cGU9InZhcmlhYmxlc19nZXQiIGlkPSIrP0lSamFWeC86WmdzVDN4cmheOiI+PGZpZWxkIG5hbWU9IlZBUiI+c3Vtb3NlbnNvcjwvZmllbGQ+PC9ibG9jaz48L3ZhbHVlPjxuZXh0PjxibG9jayB0eXBlPSJjb250cm9sc193aGlsZVVudGlsIiBpZD0iTUt8SDZxZkRKUUBkcnBfQXk4bFkiPjxmaWVsZCBuYW1lPSJNT0RFIj5VTlRJTDwvZmllbGQ+PHZhbHVlIG5hbWU9IkJPT0wiPjxibG9jayB0eXBlPSJzeXN0ZW1fa2V5cHJlc3NlZCIgaWQ9Im9WQVd2cS9gWChCOmZZfExRNFV4Ij48L2Jsb2NrPjwvdmFsdWU+PHN0YXRlbWVudCBuYW1lPSJETyI+PGJsb2NrIHR5cGU9InZhcmlhYmxlc19zZXQiIGlkPSJ3bElFaC8rU01XS1BqJXgsMFZjayI+PGZpZWxkIG5hbWU9IlZBUiI+b2xkX3pvbmU8L2ZpZWxkPjx2YWx1ZSBuYW1lPSJWQUxVRSI+PGJsb2NrIHR5cGU9InZhcmlhYmxlc19nZXQiIGlkPSI0R1Yham5LblJhRV9xfD86MmVyOyI+PGZpZWxkIG5hbWU9IlZBUiI+c3RyMTwvZmllbGQ+PC9ibG9jaz48L3ZhbHVlPjxuZXh0PjxibG9jayB0eXBlPSJ2YXJpYWJsZXNfc2V0IiBpZD0iWWJYZVZMPzstTUdjKyo7MmVGZjUiPjxmaWVsZCBuYW1lPSJWQVIiPnN0cjE8L2ZpZWxkPjx2YWx1ZSBuYW1lPSJWQUxVRSI+PGJsb2NrIHR5cGU9InNlbnNvcnNfc3Vtb2V5ZXNnZXR2YWx1ZSIgaWQ9IkleXy5gS1JwbUpJUjQpPTsoVE0rIj48dmFsdWUgbmFtZT0ic2Vuc29yIj48YmxvY2sgdHlwZT0idmFyaWFibGVzX2dldCIgaWQ9InN7ZkZ0R3NITyFEUFFbMCkyTEtXIj48ZmllbGQgbmFtZT0iVkFSIj5zdW1vc2Vuc29yPC9maWVsZD48L2Jsb2NrPjwvdmFsdWU+PC9ibG9jaz48L3ZhbHVlPjxuZXh0PjxibG9jayB0eXBlPSJjb250cm9sc19pZiIgaWQ9InMuYHFYY2d0NklKSmgxVXF8NTtoIj48dmFsdWUgbmFtZT0iSUYwIj48YmxvY2sgdHlwZT0ibG9naWNfY29tcGFyZSIgaWQ9ImIoT0FjbEFXQkwoNjRzdWUwITlLIj48ZmllbGQgbmFtZT0iT1AiPk5FUTwvZmllbGQ+PHZhbHVlIG5hbWU9IkEiPjxibG9jayB0eXBlPSJ2YXJpYWJsZXNfZ2V0IiBpZD0iRndfT1BQcWdJL1RhLXhLMnQ1RkciPjxmaWVsZCBuYW1lPSJWQVIiPnN0cjE8L2ZpZWxkPjwvYmxvY2s+PC92YWx1ZT48dmFsdWUgbmFtZT0iQiI+PGJsb2NrIHR5cGU9InZhcmlhYmxlc19nZXQiIGlkPSJnTzhPOl5+dCt4YyxYX0NuW3NMXSI+PGZpZWxkIG5hbWU9IlZBUiI+b2xkX3pvbmU8L2ZpZWxkPjwvYmxvY2s+PC92YWx1ZT48L2Jsb2NrPjwvdmFsdWU+PHN0YXRlbWVudCBuYW1lPSJETzAiPjxibG9jayB0eXBlPSJzY3JlZW5fY2xlYXIiIGlkPSJSazR4TjgoW3JPWDN+YDZAKz0tdCI+PGZpZWxkIG5hbWU9IkRJU1BMQVkiPlRSVUU8L2ZpZWxkPjxuZXh0PjxibG9jayB0eXBlPSJzY3JlZW5fZHJhd2F1dG90eHQiIGlkPSJFNWcjc3A0Q2UvKGg4KEo1fDtNbiI+PGZpZWxkIG5hbWU9IkNPTE9SIj4jZmYwMDAwPC9maWVsZD48ZmllbGQgbmFtZT0iRElTUExBWSI+VFJVRTwvZmllbGQ+PHZhbHVlIG5hbWU9InN0ciI+PHNoYWRvdyB0eXBlPSJ0ZXh0IiBpZD0iZTA4YTN1KV5KKmF9IWM/LC9jIXAiPjxmaWVsZCBuYW1lPSJURVhUIj5IZWxsbyBXb3JsZDwvZmllbGQ+PC9zaGFkb3c+PGJsb2NrIHR5cGU9InZhcmlhYmxlc19nZXQiIGlkPSIqUCNAL1Fiaj01a2hDXS5aMWMoTCI+PGZpZWxkIG5hbWU9IlZBUiI+c3RyMTwvZmllbGQ+PC9ibG9jaz48L3ZhbHVlPjx2YWx1ZSBuYW1lPSJ4Ij48c2hhZG93IHR5cGU9Im1hdGhfbnVtYmVyIiBpZD0iRkhpMERXZmszeUZxa2IvaFVSLnMiPjxmaWVsZCBuYW1lPSJOVU0iPjQwPC9maWVsZD48L3NoYWRvdz48L3ZhbHVlPjx2YWx1ZSBuYW1lPSJ5Ij48c2hhZG93IHR5cGU9Im1hdGhfbnVtYmVyIiBpZD0iIVNvVVA3RG5tKFJiUjR7dV5JdDYiPjxmaWVsZCBuYW1lPSJOVU0iPjQwPC9maWVsZD48L3NoYWRvdz48L3ZhbHVlPjx2YWx1ZSBuYW1lPSJzaXplIj48c2hhZG93IHR5cGU9Im1hdGhfbnVtYmVyIiBpZD0iVXpkZk5fP10uVHBsemdKUXBCVUkiPjxmaWVsZCBuYW1lPSJOVU0iPjUwPC9maWVsZD48L3NoYWRvdz48L3ZhbHVlPjwvYmxvY2s+PC9uZXh0PjwvYmxvY2s+PC9zdGF0ZW1lbnQ+PC9ibG9jaz48L25leHQ+PC9ibG9jaz48L25leHQ+PC9ibG9jaz48L3N0YXRlbWVudD48L2Jsb2NrPjwvbmV4dD48L2Jsb2NrPjwvbmV4dD48L2Jsb2NrPjwveG1sPg==
e193a87b5d9d2a5cb558efa27c0a1d36f2f2a11d44da1aff62bfbcb2e1712fed
--END BLOCKS--
"""


from PiStorms import PiStorms
import MsDevices

sumosensor = None
old_zone = None
str1 = None

psm = PiStorms()

sumoeyes_BAS1 = MsDevices.SumoEyes(psm.BAS1)


# Attach a NXTSumoEyes to Port BAS1 of PiStorms.
# Start the program from PiStorms on Screen
# Browser and press GO button to terminate.
sumosensor = sumoeyes_BAS1
sumosensor.setRange(sumosensor.LONG_RANGE)
while not (bool(psm.isKeyPressed())):
  old_zone = str1
  str1 = sumosensor.detectObstactleZone(True)
  if str1 != old_zone:
    psm.screen.clearScreen(True)
    psm.screen.drawAutoText(str1, 40, 40, fill = (255, 0, 0), size = 50, display = True)
