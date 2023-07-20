function processData(input) {
  //Enter your code here
  const passwords = input.trim().split("\n");
  const myPassword = passwords[0];
  const passwordPassed = passwords[1];

  const regex = /cu.*b.*os/gi;
  // let contLengthPassword = 0;

  // for (let i = 0; i < myPassword.length - 1; i++) {
  //   for (let j = 0; j < passwordPassed.length; j++)
  //     if (myPassword[i] === passwordPassed[j]) {
  //       contLengthPassword++;
  //     }
  // }

  // console.log(myPassword);
  // console.log(passwordPassed);

  // if (contLengthPassword >= myPassword.length) {
  //   console.log("SIM");
  // } else {
  //   console.log("NAO");
  // }
  if (regex.test(passwordPassed)) {
    console.log("SIM");
  } else {
    console.log("NAO");
  }
}

// const input = "cubos\ncuggbyos";
const input = "cubos\newvelrabsocaeln";
// const input = "cubos\ncuggasdfasdfbasdfasdfasdfyos";

processData(input);
