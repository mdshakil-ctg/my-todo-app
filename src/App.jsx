import { lazy, Suspense } from "react";
import "./App.css";
import ReactMemo from "./ReactMemo";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
const UserCard = lazy(()=> import('./UserCard '))
const UseCallback = lazy(()=> import('./UseCallback'))

function ExampleErrorBoundary (){
  throw new Error('An error occurred in the exampleError Component')
}

function App() {
console.log('render app component')
  // eslint-disable-next-line react/prop-types
  function Fallback({error, resetErrorBoundary}){
    console.log({error})
    return (
      <div>
        <p>Something went wrong...</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try Again</button>
      </div>
    )
  }



  Fallback.propTypes = {
    error: PropTypes.instanceOf(Error).isRequired,
    resetErrorBoundary: PropTypes.func.isRequired
  }

  return (
    <div>
      <h1 className="text-center text-3xl">
        The concept of react lazy loading and code splitting
      </h1>
      <ErrorBoundary FallbackComponent={Fallback} onReset={(details) =>{ 
        console.log({details})
        }} >

        <ExampleErrorBoundary/>
      </ErrorBoundary>

      {/* usercard lazy loading */}
      <Suspense fallback={<div>loading...usercard</div>}>
      <UserCard
        name="shakil"
        age="30"
        isAdmin={true}
        hobbies={["cricket", "badminton", "kolapata"]}
        address={{ city: "chittagong", country: "Bangladesh" }}
        onClick={() => alert("usercard onclick clicked")}
      />
      </Suspense>

      {/* reactmemo lazy loading */}
      <Suspense fallback={<div>loading...reactmemo</div>}>
      <ReactMemo />
      </Suspense>

      {/* usecallback lazy loading */}
      <Suspense fallback={<div>loading...usecallback</div>}>
      <UseCallback />
      </Suspense>
    </div>
  );
}

export default App;

