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
