tag: 
- Exercise
```typescript
export function toRna(dna: string = "ACGT") {

  var rna: string = "";

  for (let i = 0; i < dna.length; i++) {

    //rna += transform();

    rna += transform(dna.substring(i, i + 1));

  }

  function transform(j: string) {

    if (j.length > 0 && j.length < 2) {

      switch (j.toLowerCase()) {

        case "g":

          return "C";

        case "c":

          return "G";

        case "t":

          return "A";

        case "a":

          return "U";

  

        default:

          throw new Error("Invalid input DNA.");

      }

    }

  }

  return rna;

}
```

Works, passes all tests

```typescript
SOLUTION 1:
- export const nuc_map: { [key: string]: string } = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }
    
    
    export function toRna(DNA: string): string {
    
- 
    
    return [...DNA].reduce((output, letter) => {
    
- 
    
    if (!(Object.keys(nuc_map).includes(letter))) throw Error('Invalid input DNA.')
    
- 
    
    output += nuc_map[letter]; return output
    
- 
    
    }, '')
    
-
    
    }


```
SOLUTION 1: utilizes [[Reduce method]] 

```typescript
SOLUTION 2:
- const mapper = new Map<string, string>([
    
- 4
    
    ["G", "C"],
    
- 5
    
    ["C", "G"],
    
- 6
    
    ["T", "A"],
    
- 7
    
    ["A", "U"],
    
- 8
    
    ])
    
- 9
    
- 10
    
    export function toRna(strand: string) {
    
- 11
    
    let transcribed: string = ''
    
- 12
    
- 13
    
    const chars = [...strand].forEach((char, i) => {
    
- 14
    
    if (!mapper.has(char)) throw new Error('Invalid input DNA.')
    
- 15
    
    transcribed += mapper.get(char)
    
- 16
    
    });
    
- 17
    
    return transcribed
    
- 18
    
    }


```
Solution 2 uses [[Map Method]]
TESTS:
```Typescript
- import { toRna } from './rna-transcription'
    
- 2
    
- 3
    
    describe('Transcriptor', () => {
    
- 4
    
    it('transcribes cytosine to guanine', () => {
    
- 5
    
    expect(toRna('C')).toEqual('G')
    
- 6
    
    })
    
- 7
    
- 8
    
    xit('transcribes guanine to cytosine', () => {
    
- 9
    
    expect(toRna('G')).toEqual('C')
    
- 10
    
    })
    
- 11
    
- 12
    
    xit('transcribes adenine to uracil', () => {
    
- 13
    
    expect(toRna('A')).toEqual('U')
    
- 14
    
    })
    
- 15
    
- 16
    
    xit('transcribes thymine to adenine', () => {
    
- 17
    
    expect(toRna('T')).toEqual('A')
    
- 18
    
    })
    
- 19
    
- 20
    
    xit('transcribes all dna nucleotides to their rna complements', () => {
    
- 21
    
    expect(toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU')
    
- 22
    
    })
    
- 23
    
- 24
    
    xit('correctly handles invalid input', () => {
    
- 25
    
    expect(() => toRna('U')).toThrowError('Invalid input DNA.')
    
- 26
    
    })
    
- 27
    
- 28
    
    xit('correctly handles completely invalid input', () => {
    
- 29
    
    expect(() => toRna('XXX')).toThrowError('Invalid input DNA.')
    
- 30
    
    })
    
- 31
    
- 32
    
    xit('correctly handles partially invalid input', () => {
    
- 33
    
    expect(() => toRna('ACGTXXXCTTAA')).toThrowError('Invalid input DNA.')
    
- 34
    
    })
    
- 35
    
    })
```

my second solution
```typescript
export function toRna(dna : String ='ACGT') {

  const mapper = new Map<String, String>([

    ["G", "C"],

    ["C", "G"],

    ["T", "A"],

    ["A", "U"],

  ]);

  

     [...dna].forEach(char => {

        if(!mapper.has(char)){

            throw new Error("Invalid input DNA.");

        }

    });

    var mapped = [...dna].map(char => mapper.get(char)).join('');

  
  

return mapped;

}
```
works, passes all tests
Uses [[Map Method]]