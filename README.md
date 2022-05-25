## BELANGRIJK
Als het lampje van de USB-c chip een andere kleur dan rood brandt, is er iets mis en komt er een te hoge spanning op de ledstrips (dan branden ze door). 

## Taakverdeling
In het algemeen zijn de gameloop en game mechanics en dergelijke door Jaap gedaan, en de elektronica en de verbindingen in de software door Niek.

## Filesize
Makecode editor kan onze code niet helemaal compilen naar een hex-file, omdat de compiler die Makecode gebruikt maar een beperkt aantal bytes kan compilen. De stukken code die met behulp van comments (/* ) zijn uitgezet, zijn teveel voor deze compiler. Deze uitgezette code zorgt ervoor dat er (meer) strings op de ledmatrix weergeven kunnen worden. 
(Comments worden niet gecompiled naar het hex-file en geven daarom geen error :D )

> Open this page at [https://funnyscope.github.io/informatica-po-rondrennen/](https://funnyscope.github.io/informatica-po-rondrennen/)


## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/funnyscope/informatica-po-rondrennen** and import

## Edit this project ![Build status badge](https://github.com/funnyscope/informatica-po-rondrennen/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/funnyscope/informatica-po-rondrennen** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/funnyscope/informatica-po-rondrennen/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
