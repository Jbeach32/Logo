const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter up to three characters: ', (text) => {
  rl.question('Enter text color (color keyword or hexadecimal): ', (textColor) => {
    rl.question('Choose a shape (circle, triangle, square): ', (shapeChoice) => {
      rl.question('Enter shape color (color keyword or hexadecimal): ', (shapeColor) => {
        rl.close();

        // SVG Generation
        const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${
          shapeChoice === 'circle'
            ? `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`
            : shapeChoice === 'triangle'
            ? `<polygon points="100,50 200,150 300,50" fill="${shapeColor}" />`
            : shapeChoice === 'square'
            ? `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`
            : ''
        }
        <text x="150" y="125" fill="${textColor}" font-family="Arial" font-size="24" text-anchor="middle">${text}</text>
      </svg>
      `;

        // SVG File Creation
        fs.writeFileSync('logo.svg', svgContent);

        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Logo</title>
</head>
<body>
  <img src="logo.svg" width="300" height="200" alt="Generated Logo">
</body>
</html>
`;        

fs.writeFileSync('index.html', htmlContent);

        // Print Output
        console.log('Generated logo.svg');
      });
    });
  });
});


