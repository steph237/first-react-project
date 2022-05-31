import "./App.css";
const Person =(props) => {
  return(
    <>
      <h1>Name : {props.name}</h1>
      <h1>Last name : {props.lastName}</h1>
      <h1>Age : {props.age}</h1>
    </>
  )
}
const App = () => {
  const name ='Steph'
  return (
    <div className="App">
     <Person name={'Steph'} lastName ={'fru'} age ={12} />
     <Person lastName ={'fru'}/>
     <Person/>
    </div>
  );
};

export default App;
