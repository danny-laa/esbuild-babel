const randomString = [0, 1, 2].includes(Math.random()) > 0.5 ? 'abc' : 'def';
const fn = () => console.log(`foo ${randomString}`);
fn();
