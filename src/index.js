import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu products={pizzaData} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className='header'>
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}
function Menu({ products }) {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {products.length > 0 ? (
        <div className='pizzas'>
          {products.map((product, index) => {
            return (
              <Pizza
                key={index}
                name={product.name}
                photoImage={product.photoName}
                ingredients={product.ingredients}
                price={product.price}
                soldOut={product.soldOut}
              />
            );
          })}
        </div>
      ) : (
        "No pizzas available"
      )}
    </main>
  );
}
function Pizza({ name, photoImage, ingredients, price, soldOut }) {
  return (
    <div className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoImage} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 10;
  const closedHours = 22;
  const isOpen = hour >= openHours && hour < closedHours;

  return (
    <footer>
      <Order isOpen={isOpen} openHours={openHours} closedHours={closedHours} />
    </footer>
  );
}

function Order({ isOpen, openHours, closedHours }) {
  if (isOpen) {
    return (
      <div className='order'>
        <p>We're open until {closedHours}:00. Come and visit us!</p>
        <button className='btn'>Order online!</button>
      </div>
    );
  } else {
    return <p>We're current closed. Come back at {openHours}:00!</p>;
  }
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
