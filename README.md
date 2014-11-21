# Drupal.hu alapsmink
* jelenleg html proto van fejlesztési fázisban de ez az alapja a későbbi Drupal sminknek *

## drupalhu_theme_html_template
============================

HTML alap a Drupal.hu sminkhez
Megtekinthető: http://drupalhu.github.io/drupalhu_theme_html_template/

### Grafika
https://dl.dropboxusercontent.com/u/743951/drupalhu/forrasanyagok/Drupal.hu_web_09.ai

### Használata
* mivel a css fájlok nincsenek elkomittolva így szükséges a compass compile kiadása.


## Sminkeseknek
============================
### Szükséges Toolok:
* Ruby (verzió: 2.xxx ), szükséges GEM ek: sass (3.4.8); compass (1.0.1) ; compass-core (1.0.1); compass-import-once (1.0.5)
  -> a mappában a "compass watch paranccsal kezdődik a .sass fileok figyelése

### Könyvtárak
* értelemszerűen elnevezésből sejthető mi megy oda, a HTMLbe megy a HTML proto file jai kivéve az index.html ami kinn van a gyökérben

### JS kód
* Minden JS kód "use strict"
* Minden JS a Drupal standardnak megfelelően kellene megírni, jelenlegi ömlesztett kódot refactorolni kellene
* TODO: Refactor jelenlegi szemetes js kód

### SASS style rule
* Natív sass kiterjesztés (így nem kell linter, mert egyébként nem fordul le a kód)
* NINCS vendor specifikus kód (Autoprefixer lesz a projekten az fogja lekezelni ezeket)
* Minden variable megfelelő elnevezéssel kerüljön be (pl a színek $color- előtaggal így a $color gépelése közben már dobja fel a találatot
* SVG sprite van, icon font és png sprite NINCS (erre majd teszek be grunt jobot)
* TODO: jelenlegi átemelt stílusfileok szétdobálása logikailag és párhuzamosan javítani