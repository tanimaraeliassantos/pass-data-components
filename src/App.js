import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";

export default function App() {
  const [user, setUser] = useState("Joe");

  return (
    <main>
      <Header user={user} />
      <Body user={user} />
    </main>
  );
}
