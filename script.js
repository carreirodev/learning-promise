const fs = require("fs/promises");

const sum = (a, b) => {
	return new Promise(async (reject, resolve) => {
		if (typeof (a + b) !== "number") {
			return reject("NaN");
		}
		const sumTotal = a + b;
		try {
			await fs.appendFile("resultado.txt", `${a} + ${b} = ${sumTotal}\n`);
			console.log("Arquivo gravado com sucesso");
		} catch {
			console.log("problema na gravação do arquivo");
		}
	});
};

sum(10, 5);
sum(8, 26);
console.log(sum(4, "a"));
console.log(sum("3", 2));
