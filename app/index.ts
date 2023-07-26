export function leapYear(year: number) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// RNA
export function toRna4(dna : String ='ACGT') {
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
//fancy:

const mapperRNA2 = new Map<string, string>([
    ["G", "C"],
    ["C", "G"],
    ["T", "A"],
    ["A", "U"],
])
export function toRna2(strand: string) {
    let transcribedRNA2: string = ''
    const chars = [...strand].forEach((char, i) => {
        if (!mapperRNA2.has(char)) throw new Error('Invalid input DNA.')
        transcribedRNA2 += mapperRNA2.get(char)
    });
    return transcribedRNA2
}

//
export const nuc_map: { [key: string]: string } = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }
export function toRna3(DNA: string): string {
  return [...DNA].reduce((output, letter) => {
    if (!(Object.keys(nuc_map).includes(letter))) throw Error('Invalid input DNA.')
    output += nuc_map[letter]; return output
  }, '')
}
// end RNA 

export function hey(message: string ) :string {
    var question :boolean = false;
    var yell : boolean = false;
    var silence : boolean =false;
    var messagelast : string ='';
   
   if (message.trim().slice(-1) == '?') {
    
    question = true;
    silence= false;
   }
   if (message.trim().length === 0  ) {
    silence= true;
    messagelast = 'Fine. Be that way!';
   }

   if(message === message.toUpperCase() && !silence && message.toUpperCase() !== message.toLocaleLowerCase()){
    yell = true;
    silence= false;

   }

   console.log(yell && question)
  if (question && yell){
    messagelast = 'Calm down, I know what I\'m doing!';
  } else if (question){
    messagelast = "Sure."
  } else if (yell){
    messagelast = "Whoa, chill out!";
  } else if (silence) {
    messagelast = "Fine. Be that way!"
  }else {
    messagelast = "Whatever."
  }

   return messagelast;
  }
  console.log(hey('\n\r \t'));



  //Pangram 

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