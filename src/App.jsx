import MyComponent from "./MyComponent";
import CarComponent from "./components/car/CarComponent";
import FoodComponent from "./components/food/FoodComponent";
import ToDoListComponent from "./components/toDoList/toDoListComponent";

function App() {
  return (
    <>
      <MyComponent />
      <br />
      <CarComponent />
      <br />
      <ToDoListComponent />
      <br />
      <FoodComponent />
    </>
  );
}

export default App;
