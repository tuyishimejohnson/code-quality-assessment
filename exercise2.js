/* function greet(name) {
  if (name) {
    return "Hello, " + name + "!";
  } else {
    return "Hello!";
  }
} */


  const greet = name => name ? `Hello, ${name}!` : "Hello!"
  console.log(greet("Johnson"))
  