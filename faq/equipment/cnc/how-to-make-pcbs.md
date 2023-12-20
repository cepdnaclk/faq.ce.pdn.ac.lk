---
layout: QA_page
permalink: "/equipment/cnc/how-to-make-pcbs"

grand_parent: "Equipment"
parent: "CNC"
title: "How to make PCBs using 3018 CNC Milling Machine?"

index: 1
author: "Nuwan Jaliyagoda"
---


## Steps to prepare the files for PCB milling


## Steps to Mill a PCB

#### 1. Start the CNC, and Home the machine

Use this button to move the CNC machine into it's home position. 

[Image]

#### 2. Attach the PCB milling bit into the tool head

Please tied up the milling bit properly into the Spindle Motor using correct keys.

[Image]

#### 3. Move to the origin of the PCB cut.

- Measure the thickness of the copper board (use a Vernier Caliper to the the precious reading).
- Attach the Copper Board into the Machine bed properly. 
- Using the Jog tool, move the tool head to the bottom left corner of the PCB in X-Y plane, using the Jog commands in the software.

[Image]

- Next, carefully move the tool head in z axis until the tool head in away from the PCB by 10cm.
- Attach the Probing tool as shown in the image.
    - Yellow color clip into the milling bit
    - Blue color clip into the Copper board 

[Image]

- Next, click on the Z Probe button in the Candle software, as shown in the below image.  

> It will execute the following G-Code. 
> `G`

[Image]

- The tool head will be moved toward the PCB slowly, and stop automatically when it touch the top of the PCB.
- Next, you had to set the work coordinates to `(0,0,0)` by clicking on the following 2 buttons. 

If you followed all the above steps correctly, the machine is ready to start milling the PCB.

#### 4. Generate the height-map

Since the Copper board is not perfectly flat, you may need to generate a `hight-map` using the support of the probe tool, to correct the z axis over the PCB surface. 

- For that, first open the boarder file (`*.nc`) of your PCB design, as shown in the below images.

[Image]

- Next, open the Height Map generator tool in the CNC Candle software, by following below steps. 

[Image]

- Click on the `Auto` button, so based on the PCB design file, it will automatically identify the range required to generate the height map. Update the `Probing Grid` values in such a way that at lease one probe point per each CM of the PCB.

Example:
> If your PCN size is 60mm x 100mm, you need to set at lease 7x11 probing grid. 

- Next, start generating the height map by clicking `Probe` button.

[Image]




#### 5.

#### 6.

#### 7.

#### .
#### .
#### .
#### .
#### .
#### .
#### .
#### .
#### .


10. Remove the probe tool
11. Move the z-axis 10mm away from the board
12. Turn on the spindle and set a suitable speed
13. Click on the 'Send' button
14. After the cutting progress, send the machine into the tool change position (Button 3) and change the tool to drill bit
15. Move into (0,0,10) and probe to the board
16. Set the z-axis to zero
17. G0Z3
18. Remove probe tool
19. Load drilling file.
20. Turn on the spindle and adjust for suitable speed.
21. Click on the 'Send' button
22. After drilling, move the machine into the tool change position (Button3)
23. Check all is okay and finally move the tool into a safe position and remove the board.



__________________________________________________________
Isolation mode

Tool diameter: 0.2
Passes: 2
Width: 0.15
Cutting Feed: 100
Cutting Depth: 0.06
Travel Z: 1

__________________________________________________________
Drilling

Feed: 150
Drilling Depth 	: 1.35


__________________________________________________________
Board Curring

Cutting Depth: 1.4
Feed: 75



