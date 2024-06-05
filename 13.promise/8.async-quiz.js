function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
    // return Promise.resolve(`🪴 => 🐔`);
}

async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);
}

async function makeFriedEgg2() {
    const chicken = await getChicken().catch(() => '🐔');
    const egg = await fetchEgg(chicken);
    const friedEgg = await fryEgg(egg);

    return friedEgg;
}

makeFriedEgg().then(console.log);
