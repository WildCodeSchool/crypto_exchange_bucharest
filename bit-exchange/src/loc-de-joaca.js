function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  function asyncCall() {
    console.log('calling');
    resolveAfter2Seconds().then( res => {
        console.log(res)
    });
    console.log("res");
    // expected output: 'resolved'
  }

  asyncCall();
