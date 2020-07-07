function testCycle(n) {
    console.log('sum =');
    let x;
    // Тут нужно написать решение
    x = '';
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum = sum + i * i;
        console.log('sum =', sum);

        x = `${x} ${sum}`;
        i++;
    }
    console.log(x);
}

testCycle(3);