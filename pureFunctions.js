// Pure Function to funkcja (blok kodu), która zawsze zwraca ten sam wynik, jeśli przekazano te same argumenty.
// Nie zależy to od żadnego stanu ani zmiany danych podczas wykonywania programu,
// a jedynie od jego argumentów wejściowych.

// PURE FUNCTION 👼
const pureAdd = (num1, num2) => {
    return num1 + num2;
  };
  
  //always returns same result given same inputs
  pureAdd(5, 5);
  //10
  pureAdd(5, 5);
  //10
  
  //IMPURE FUNCTION 😈
  let plsMutateMe = 0;
  const impureAdd = (num) => {
    return (plsMutateMe += num);
  };
  
  //returns different result given same inputs
  impureAdd(5);
  //5
  impureAdd(5);
  //10
  console.log(plsMutateMe)
  //10 🥳 I'm now double digit, yay!

  //IMPURE FUNCTION 😈
const impureAddToArray = (arr1, num) => {
    //altering arr1 in-place by pushing 🏋️
    arr1.push(num);
    return arr1;
  };
  
  // PURE FUNCTION 👼
  const pureAddToArray = (arr1, num) => {
    return [...arr1, num];
  };