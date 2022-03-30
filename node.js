
// CALLBACKFunction

function print(a) {
    console.log(a);
}

function processing(data, func) {
    for (let i = 0; i<data.length; i++) {
        if (data[i] ==5) {
            func(data[i]);
    }
}

}

processing([1, 2, 3, 4, 5, 6, 7, 8, 9], print);




CALLHELLFUNCTION

function printasd(a) {
    console.log(a);
    processing([2, 3, 4, 5, 6],printasd)
}

function processing(data, print) {
    for (let i = 0; i<data.length; i++) {
        if (data[i] ==5) {
            print(data[i]);
    }
}
}processing([1, 2, 3, 4, 5, 6, 7, 8, 9], print);



console.log("mohan");

function test() {
    console.log('from function')

}
setTimeout(() => {
    console.log('devesh')
}, 0);

test()

setTimeout(() => {
    console.log('devesh 2')
}, 2000);


function test() {
    console.log(9);
    setTimeout(() => {
        console.log("mohan");
    }, 7000);
}

console.log("devesh");


setTimeout(() => {
    console.log("sharmi");


    setTimeout(() => {
        console.log("fsd");
    }, 500);
}, 2000);

setTimeout(() => {
    test();
}, 2000);
    




