try {
  require('./clicker.js');
  console.log('Syntax is valid.');
} catch (e) {
  if (e instanceof SyntaxError) {
    console.error('Syntax error:', e);
    process.exit(1);
  } else {
    // If it fails because of DOM elements not existing in Node, that's expected.
    // We only care about syntax.
    console.log('Syntax is likely valid, failed on runtime DOM dependencies.');
  }
}
