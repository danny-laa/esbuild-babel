const randomString = () => [1, 2].includes(Math.ceil(Math.random() * 4)) ? 'abc' : 'def';
const fn = () => console.log(`foo ${randomString()}`);
fn();
