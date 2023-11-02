import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index} : ${item} /`;
    });

    setResult(temp);
  };

  const handleFilter = () => {
    const newFilter = array.filter((item, index) => item.includes(query));

    setResult(newFilter.join(", "));
  };

  const handleMap = () => {
    const newMap = array.map((item, index) => item.toUpperCase());

    setResult(newMap.join(", "));
  };

  const handleReduce = () => {
    const newReduce = array.reduce((acc, cur) => {
      return `${acc} + ${cur}`;
    });
    setResult(newReduce);
  };

  const handlePush = () => {
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr);
  };

  const handleSlice = () => {
    const newSlice = array.slice(1, 4);
    setResult(newSlice.join(", "));
  };

  const handleSplice = () => {
    array.splice(2, 2, "kiwi", "lime");
    setResult(array.join(", "));
  };

  const handleIndexOf = () => {
    const newIndexOf = array.indexOf(query);
    setResult(newIndexOf);
  };

  const handleIncludes = () => {
    const newIncludes = array.includes(query);
    if (newIncludes === true) {
      return setResult("true");
    } else {
      return setResult("false");
    }
  };

  const handleFind = () => {
    const newFind = array.find((item) => item.includes(query));
    // const newFind = array.find((item) => array.includes(query)); - 결과값 안나옴(undefined)

    // const newFind = array.find(() => array.includes(query)); - undefined / 결과값 안나옴
    if (newFind === undefined) {
      return setResult("Not Found");
    } else {
      return setResult(newFind);
    }
  };

  const handleSome = () => {
    const newSome = array.some((item) => item.includes(query));
    // const newSome = array.some(() => array.includes(query)); - 다 false
    // const newSome = array.some((item) => array.includes(query)); - 다 false
    if (newSome === true) {
      return setResult("true");
    } else {
      return setResult("false");
    }
  };

  const handleEvery = () => {
    const newEvery = array.every((item) => {
      return item.length >= 2;
    });
    if (newEvery === true) {
      return setResult("true");
    } else {
      return setResult("false");
    }
  };

  const handleSort = () => {
    array.sort();
    setResult(array.join(", "));
  };

  const handleJoin = () => {
    setResult(array.join(", "));
  };
  return (
    <div>
      <h1>Standard API Test</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <h3>원본 배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
