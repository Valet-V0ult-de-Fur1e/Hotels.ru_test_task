function task4(number) {
    process.stdout.write("  ");
    for (let i = 1; i <= number; i++) {
        process.stdout.write(` ${i.toString().padStart(2, ' ')} `);
    }
    console.log();
    for (let i = 1; i <= number; i++) {
        process.stdout.write(`${i.toString().padStart(2, ' ')} `);
        for (let j = 1; j <= number; j++) {
            process.stdout.write(`${(i * j).toString().padStart(2, ' ')} `);
        }
        console.log();
    }
}