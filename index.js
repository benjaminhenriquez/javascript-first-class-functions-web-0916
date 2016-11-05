function receivesAFunction(callback){
  return callback();
}

function returnsANamedFunction(){
  return function hello(){
    return "Hello";
  };
}

function returnsAnAnonymousFunction(){
  return function(){
    return "Hello";
  };
}
