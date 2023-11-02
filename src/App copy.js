import { useState } from "react";

function App() {
  const initialState = ['apple','banana','kiwi','lime','elderberry'];
  const [array,setArray] = useState(initialState);
  const [result,setResult] = useState('');
  const [query,setQuery] = useState('');

  const handleForEach = function () {
    let temp = '';
    array.forEach(function(item,index) {
      temp += `${index} : ${item} `;
    });

    setResult(temp);
  };

const handleFilter = function () {
  const filtered = array.filter((item, index) => item.includes(query));
  
  setResult(filtered.join(', '));
  }

  const handleMap = function() {
    const mapped = array.map(function( item, index) {
      return item.toUpperCase();
    });
    setResult(mapped.join(', '));
  }

  const handleReduce = function() {
    const reduced = array.reduce(function(acc, cur) {
      return `${acc} + ${cur}`;
    })
      setResult(reduced);
  }

  const handlePush = () => {
    const newArr = [...array, query];
    setArray(newArr);
    setResult()
  }

  const handlePop = function () {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(', '));
  }
  return (
    <div>
    <div>Standard반 배열 API 테스트</div>
    <input value={query} />
    <button onClick={handleForEach}>forEach</button>
    <button onClick={handleFilter}>filter</button>
    <button onClick={handleMap}>map</button>
    <button onClick={handleReduce}>reduce</button>
    <button onClick={[handlePush]}>push</button>
    <button onClick={handlePop}>pop</button>
    <div>
    <h3>원본배열</h3>
    <p>{array.join(', ')}</p>
    </div>
    <div>
    <h3>결과물</h3>
    <p>{result}</p>
    </div>
    </div>
  );
}

export dafault App;