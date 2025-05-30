let code01;
code01 = 7 + 3;

let code02 = 500 / 10 - 10;

let code03 = 38 + (13 % 3);

let message = "The vault has been secured. The combination is:";

let codeA = code01 + "-" + code02 + "-" + code03;

let codeB = `${code01}-${code02}-${code03}`;

console.log(`${message} using concat ${codeA} using string template ${codeB}`);