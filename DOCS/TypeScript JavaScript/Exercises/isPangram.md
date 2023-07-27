tag: 
- Exercise

```typescript
export function isPangram(sentence : string = 'hgf') : boolean{

    var alphabet = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ];

  

    [...sentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "")].forEach(char => {

        if (alphabet.indexOf(char) !== -1){

            alphabet.splice(alphabet.indexOf(char), 1);

            console.log(char);

        }

         else if (alphabet.indexOf(char) === -1){

        return false;

         }

  

    });

    console.log(alphabet);

    if(alphabet.length !== 0) return false;

    return true;

  

}

  

// isPangram('The quick brown fox jumps over the lazy dog');
```
[[How to Remove element from array based on content of element]] [[How to Remove spaces and punctuation from a string in JavaScript]]
[[Splice Method]] [[IndexOf method]]

Other peoples' solutions
```typescript 
- export function isPangram(sentence: string): boolean {
    
- 2
    
    sentence = sentence.toLowerCase()
    
- 3
    
    return [..."abcdefghijklmnopqrstuvwxyz"].every(c => sentence.includes(c))
    
- 4
    
    }

/////////////

export const isPangram = (s: string): boolean => {
  const regex = /([a-z])(?!.*\1)/g;
  return (s.toLowerCase().match(regex) || []).length === 26;
};

```
