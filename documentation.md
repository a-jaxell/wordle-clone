
Test strategi
- Testa datatyp och datastruktur in och ur komponenten.
- Testa resultat.
- Beskriv på vilket sätt testerna täcker hela koden.

Algoritm

1 Ta emot 2 strängar och spara dem som arrayer i en array.
  
  1.1 Kontrollera så att input har rätt format. Dvs inga specialtecken, orden ska vara lika långa och strängarna får inte vara tommma.

  1.2 dela upp strängarna med .split
  1.3 konvertera dem till lowercase

2 Kontrollera vilka bokstäver från gissningen som finns i det korrekta ordet och isåfall var.

  2.1.0
    Skapa en tom array som är lika lång som orden.

  2.1.1
    iterera igenom det gissade ordet
      2.1.1.1
        Om bokstäverna inte matchar så gör en .indexOf(x) på facit.
      2.1.1.2
        Om .filter(x).indexOf(n) === true
          2.1.1.2.1
            iterera igenom .filter(x).length()
      2.1.1.3
        Om .indexOf(x) === false, .push "incorrect" till resultArray
      2.1.1.3
        Om bokstäverna matchar, 

  2.1 matcha bokstäverna i arr1 emot arr2

    2.1.1 matchar inte bokstäverna så kolla om [n] till array.length innehåller bokstaven
      2.1.1.1 Finns det ingen match så är bokstaven "incorrect"
      2.1.1.2 Finns det en match 

    2.1.2 Vid ingen match men bokstaven förekommer på annan plats i arrayen, skicka ett object med "mismatch"
  
    2.1.3 om bokstäverna matchar, skicka ett object till result array med "correct"

  genom att iterera genom arr1. Skapa ett objekt med data för varje matchförsök.
  
  pusha varje försök till en array. som sen returneras i slutet av funktionen.
  
  (for x in y)
    if(x=y)
      arr.push({letter: x result: correct})
    else if(word.index0f(x))
      // iterate from x[n] to x.length
      arr.push({letter: x, result: misplaced})
    else
      arr.push({letter: x, result: incorrect})

  2.2 Bokstäver ska matcha enligt max antal, 
  dvs det kan inte ske fler matchningar än antalet bokstäver som finns i ordet.

  //Löses genom att iterera från x[n] -> x.length



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

