"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Home = () => {
  const router = useRouter();
  const [name, SetName] = useState("Habib");

  const navigate = (name) => {
    router.push(name)
  };

  const changeName = () => {
    SetName("Khan Habib");
  };

  const Fruits = () => {
    alert("Apple");
  };

  const FruitsMul = (item) => {
    alert(item);
  };
  return (
    <>
      <main className={styles.main}>
        Welcome to Next js learning program
        {/* Linking and Navigation */}
        <Link href="/login">Go to Login page</Link><br />
        <Link href="/about">Go to About page</Link><br />

        {/* Navigation */}
        <button onClick={() => router.push("/login")}>Go to Login page</button>
        <button onClick={() => navigate("about")}>Go to About page</button>

        {/* compotnent */}
        <User name="Habib" />

        {/* Button Note: In next we have different click event for client and server side */}
        {/* To use client click event to call the "use client" directory. it should be always on top */}
        <button onClick={() => alert("welcome habib khan")}>Click</button>

        {/* call function on click */}
        <button onClick={Fruits}>Click</button>
        <button onClick={() => FruitsMul("Mangoe")}>Click</button>

        {/* In React js the number and string can be changed using state. when state is called it reders the component */}
        <h4>Welcome to Next js learning program {name}</h4>
        {/* <button onClick={changeName}>get full name</button> */}
        <button onClick={() => changeName()}>get full name</button>


      </main>
    </>
  );
};

export default Home;


// compotnent on same file
const User = (props) => {
  return (
    <>
      <div>
        <h1>
          This is {props.name}
        </h1>
      </div>
    </>
  );
};

// Metadata
// export function generateMetadata() {
//   return {
//     title: "Home page",
//     description: "Welcome to Home Page",
//   }
// }
