import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index} : ${item} / `;
    });

    //이거 왜?
    setResult(temp);
  };

  const handelFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));

    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });

    setResult(reduced);
  };

  const handlePush = function () {
    const newArr = [...array, query];
    //이건 왜 필요함?
    setArray(newArr);
    // console.log(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    //1. 원본 배열을 통해 pop한 값을 저장함(임시 변수에)
    const newArr = [...array];
    newArr.pop();
    //2. setArray
    setArray(newArr);
    //3,array를 기반으로 result 생성(setResult)
    setResult(newArr.join(", "));
  };

  const handleSlice = function () {
    const newArr = [...array];
    const newSlice = newArr.slice(1, 4);
    setResult(newSlice.join(", "));
  };

  const handleSplice = function () {
    // const newArr = [...array];
    //newArr.splice(2, 2, "kiwi", "lime");
    array.splice(2, 2, "kiwi", "lime");

    console.log(array);
    // newArr.splice(2, 3);
    // newArr[2] = "kiwi";
    // newArr[3] = "lime";
    // newArr[4] = "elderberry";
    setResult(array.join(", "));
  };

  const handleIndexOf = function () {
    const indexOf = array.indexOf(query);
    setResult(indexOf);
  };

  const handleFind = function () {
    const newFind = array.find((element) => element.includes(query));
    if (newFind === undefined) {
      setResult("Not Found");
    } else {
      setResult(newFind);
    }
  };

  const handleSome = () => {
    const newSome = array.some(function (element) {
      return element.includes(query);
    });
    if (newSome === true) {
      return setResult("true");
    } else {
      return setResult("false");
    }
  };

  const handleEvery = function () {
    const newEvery = array.every(function (element) {
      return element.length >= 3;
    });
    if (newEvery === true) {
      return setResult("true");
    } else {
      return setResult("false");
    }
  };

  const handleSort = function () {
    const newSort = array.sort();
    setResult(newSort.join(", "));
  };

  const handleJoin = function () {
    const newJoin = array.join(", ");
    setResult(newJoin);
  };

  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handelFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
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
