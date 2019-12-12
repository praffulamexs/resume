import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

function Home() {
  const opening = "{";
  const closing = "}";
  const less = "<";
  const great = ">";
  const spacing = <span>&nbsp;&nbsp;&nbsp;</span>;
  return (
    <div className="home_container">
      <span>{spacing}</span>
      <span>
        <span className="code_line">1</span>
        {spacing}
        <span className="import">import </span>
        <span className="normal_text">React </span>
        <span className="import">from </span>
        <span className="values">'react'</span>;
      </span>

      <span>
        <span className="code_line">2</span>
        {spacing}
        <span className="import">import </span>
        <span className="normal_text">ReactDOM </span>
        <span className="import">from </span>
        <span className="values">'react-dom'</span>;
      </span>

      <span>
        <span className="code_line">3</span>
        {spacing}
        <span className="import">import </span>
        <span className="values">'./index.css'</span>;
      </span>

      <span>
        <span className="code_line">4</span>
        {spacing}
        <span className="import">import </span>
        <span className="values">'bootstrap/dist/css/bootstrap.min.css'</span>;
      </span>

      <span>
        <span className="code_line">5</span>
      </span>

      <span>
        <span className="code_line">6</span>
        {spacing}
        <span className="comments">
          \* Text inside the {less}div{great} tag is clickable *\
        </span>
      </span>

      <span>
        <span className="code_line">7</span>
      </span>

      <span>
        <span className="code_line">8</span>
        {spacing}
        <span className="bool">function </span>
        <span className="class_name">App</span>() {opening}
      </span>

      <span>
        <span className="code_line">9</span>
        {spacing}
        {spacing}
        <span className="import">return </span>(
      </span>

      <span>
        <span className="code_line">10</span>
        {spacing}
        {spacing}
        {spacing}
        {less}
        <span className="normal_text">div</span>
        {great}
      </span>

      <span>
        <span className="code_line">11</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        {less}
        <Link to="/" className="custom_tag">
          Profile{" "}
        </Link>
        /{great}
      </span>

      <span>
        <span className="code_line">12</span>
        {spacing}
        {spacing}
        {spacing}
        {less}
        <span className="normal_text">/div</span>
        {great}
      </span>

      <span>
        <span className="code_line">13</span>
        {spacing}
        {spacing}
        );
      </span>

      <span>
        <span className="code_line">14</span>
        {spacing}
        {closing}
      </span>

      <span>
        <span className="code_line">15</span>
      </span>

      <span>
        <span className="code_line">16</span>
        {spacing}
        <span className="normal_text">ReactDOM</span>.
        <span className="class_name">render</span>({less}
        <span className="custom_tag">App </span>/{great},
        <span className="custom_tag"> document</span>.
        <span className="class_name">getElementById</span>(
        <span className="values">'root'</span>));
      </span>

      <span>{spacing}</span>
    </div>
  );
}

export default Home;
