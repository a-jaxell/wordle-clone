
Test strategi
- Testa datatyp och datastruktur in och ur komponenten.
- Testa resultat.
- Beskriv på vilket sätt testerna täcker hela koden.

Algoritm

1 Ta emot 2 strängar och spara dem som arrayer i en array.
  1.2 dela upp strängarna med .split
2 Kontrollera vilka bokstäver från gissningen som finns i det korrekta ordet och isåfall var.
  2.1 matcha bokstäverna i arr1 emot arr 2
    genom att iterera genom arr1. Skapa ett objekt med data för varje matchförsök.
  pusha varje försök till en array. som sen returneras i slutet av funktionen.
  2.2 Bokstäver ska matcha enligt max antal, 
  dvs det kan inte ske fler matchningar än antalet bokstäver som finns i ordet.

  *letter
  *result
    *incorrect
    *misplaced
    *correct

Algoritm B

Tar in 3 parametrar

    en lista av ord (array)
    en siffra som anger önskad längd på ord(number)
    en operand som anger huruvida en bokstav får förekomma fler gånger eller inte (string)

0 parametrar får inte vara felaktiga
    1. Slumpa fram ett ord i listan som uppfyller kriterierna.
        1.1 .filter(index.length = inputLength)
        1.2 .filter(uniqueletter/multiletter words)
    2 När det inte finns ett ord som passar
        2.1 returnera Det finns inget ord som passar de givna kraven.
    3 Returnera det valda ordet.

