const customeHook = () => {
  const [count ,  setCount ] = useState(0);
  const prev =() => setCount((prev)=> prev-1);
  const next = () =>  setCount((next) => next+1);
  const reset = () => setCount(0);
  return { count ,  prev , next , reset}
}


const component = () => {
    const { count ,prev , next , reset} = customeHook;
    return (<>
      <h1>
        count
      </h1>
      <button onClick={next}>
      increment
      </button>
      <button onClick={prev}>
      decrement
      </button>
      <button onClick={reset}>
      reset
      </button>
    </>
    )
}



JSON.parse(JSON.stringify(X))