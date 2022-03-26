const fs = require("fs/promises");

// ==== 1a. Way to Do (Object Oriented Programming) ====

const sum = (a, b) => {
	return new Promise(async (resolve, reject) => {
		if (typeof (a + b) !== "number") {
			return resolve(console.log("NaN"));
		}
		const sumTotal = a + b;
		try {
			await fs.appendFile("resultado.txt", `${a} + ${b} = ${sumTotal}\n`);
			console.log("Arquivo gravado com sucesso");
			console.log(`Soma= ${sumTotal}`);
		} catch {
			console.log("problema na gravação do arquivo");
		}
	});
};

// ======== 2a. Way to Do (only async await)========

const sum1 = async (a, b) => {
	const sumTotal = a + b;
	if (typeof sumTotal !== "number") {
		return console.log("NaN");
	}
	try {
		await fs.appendFile("resultado.txt", `${a} + ${b} = ${sumTotal}\n`);
		console.log("Arquivo gravado com sucesso");
		console.log(`Soma= ${sumTotal}`);
	} catch {
		console.log("problema na gravação do arquivo");
	}
};

// sum(10, 5);
// sum(8, 26);
// sum(4, "a");
// sum("3", 2);

// sum1(10, 5);
// sum1(8, 26);
// sum1(4, "a");
sum1("3", 2);
