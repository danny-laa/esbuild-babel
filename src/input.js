const randomString = Math.random() > 0.5 ? 'abc' : 'def'
const fn = () => console.log(`foo ${randomString}`);
fn();
