console.log("🚀 Hello there! Bun is running your code. Here's some work getting done...");

function doSomeWork() {
  // Simulate a task
  const result = Array.from({length: 5}, (_, i) => `Task ${i+1} complete`).join('\n');
  return result;
}

console.log(doSomeWork());