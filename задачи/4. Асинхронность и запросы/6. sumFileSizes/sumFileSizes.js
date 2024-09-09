const fileSizes = {
  testFile1: 65,
  testFile2: 48,
};

function getFileSize(filename, cb) {
  setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
  
    
  getFileSize(filename1, (size1)=> {
      getFileSize(filename2, (size2)=> {
        if (!(typeof fileSizes[filename1] == 'number' && typeof fileSizes[filename2]  == 'number')) {
          return cb(undefined, new Error('not found'))
        } else {
          return cb(size1 + size2);
        }
      });
  });
}


export { getFileSize, sumFileSizes, fileSizes };
// Для запуска теста вводим в терминале команду: npm run test:current -- sumFileSizes.test.js
