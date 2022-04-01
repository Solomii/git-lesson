function grid(N) {
  if (N < 0) {
    return null;
  };

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let gritAlphabet = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let index = j + i;
      if (index >= 26) {
        index %= 26;
      }
      gritAlphabet += alphabet[index];
        if (j < N - 1) {
        gritAlphabet += " ";
      }
    }
    if (i < N - 1) {
      gritAlphabet += "\n" 
    }
 }
  
  console.log(gritAlphabet);
  return gritAlphabet;
}

grid(4);
grid(10);
// grid(25);
// grid(26);
// grid(90);