// Bubbling up, Propagating
function a() {
    throw new Error('error!');
}

function b() {
    a();
}

function c() {
    b();
}

try {
    c();
} catch (error) {
    console.log('Catched!');
}
console.log();
