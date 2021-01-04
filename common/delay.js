// Define
function delay(milisecond) {
  return new Promise((resolve) => setTimeout(resolve, milisecond));
}

// Usage
console.log("start");
await delay(3000);
console.log("continues after 3 seconds");
