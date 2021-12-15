const fs = require('fs');
const os = require('os');
const path = require('path');
const child_process = require('child_process');
const eol = require('line-ending-corrector').LineEndingCorrector;

// Check os
const platform = os.platform();
console.log('Running on operation system: ' + platform);

// Only fix line endings on windows systems (other systems are always using LF and no mix of LF and CRLF)
if (platform === 'win32') {
  // Check changes
  console.log('Checking for file changes');
  const changes = child_process.execSync('git status --porcelain | sed s/^...//').toString().trim().split(/\r?\n/);
  if (changes.length > 0) {
    // Print detected changes
    console.log('Changes detected:');
    changes.forEach(change => {
      console.log('- ' + change);
    });
    // Fix line endings
    let count = 0;
    changes.forEach(change => {
      // Only fix line endings for frontend sources (that exist: so no deleted ones)
      const file = path.join(__dirname, '..', '..', change); // git changes are according to root of the project
      if (fs.existsSync(file) && file.startsWith(__dirname)) {
        const content = fs.readFileSync(file, 'utf-8');
        const [wasAltered, modifiedContents] = eol.correctSync(content, { eolc: 'CRLF' });
        if (wasAltered) {
          console.log('Fixing file: ' + file);
          fs.writeFileSync(file, modifiedContents);
          count++;
        }
      }
    });
    // Print fixes
    if (count > 0) {
      console.log('Number of files fixed: ' + count);
    } else {
      console.log('No need to fix line endings');
    }
  } else {
    console.log('No changes detected');
  }
} else {
  console.log('No need to fix line endings');
}
