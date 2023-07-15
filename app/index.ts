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



  