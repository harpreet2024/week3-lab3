const os = require('os');
const fs = require('fs');

const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus();

// Logging the information to the console
console.log('Hostname:', hostname);
console.log('Platform:', platform);
console.log('CPU Cores:', cpus.length);

// Writing the information to a file
const fileInfo = `
Hostname: ${hostname}
Platform: ${platform}
CPU Cores: ${cpus.length}
`;

fs.writeFile('os_info.txt', fileInfo, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Information written to os_info.txt file.');
});

const fs1 = require('fs');

const os1 = require('os');
console.log('Hostname:', os.hostname());
console.log('OS Platform:', os.platform());
console.log('CPU Cores:', os.cpus());



