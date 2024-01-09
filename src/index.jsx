import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { Marunda } from "./pages/Marunda/index.jsx";
import { KBN } from "./pages/KBN/index.jsx";
import { KwhComponent } from "./pages/Marunda/Kwh/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/marunda" component={Marunda} />
          <Route path="/kbn" component={KBN} />
          <Route path="/marunda/kwh" component={KwhComponent} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));

// http://localhost:5173/kbn?data=eyJpZCI6OSwibGFpbl9sYWluIjp7Ik1hdGVyYWkiOjEwMDAwLCJCaWF5YSBUZXRhcCI6MTUwMDAsIkJpYXlhIFBlbWVsaWhhcmFhbiI6ODUwMH0sInN1Yl90b3RhbCI6MjMxNjE0NjMsImdyYW5kdG90YWwiOjIzMTk0OTYzLCJzdGFydF9kYXRlIjoiMjAyMy0xMS0xNlQxNjowODoyMCswNzowMCIsImVuZF9kYXRlIjoiMjAyNC0wMS0wMlQwMDowMDowMCswNzowMCIsInN0YXJ0X21ldGVyIjowLjA4LCJlbmRfbWV0ZXIiOjU3OTMuMDcsIm1pbmltdW1fY2hhcmdlX3RvdGFsIjowLCJiaWxsaW5nX3VzYWdlIjo1NzkyLjk5LCJ1c2FnZSI6NTc5Mi45OSwicGFyYW1ldGVyXzEiOiIyIiwicGFyYW1ldGVyXzIiOiIyIiwicGFyYW1ldGVyXzMiOiIzIiwicGFyYW1ldGVyXzQiOiI1IiwicHJpY2VfcGFyYW1ldGVyXzEiOjEwMDAsInByaWNlX3BhcmFtZXRlcl8yIjoxNTAwLCJwcmljZV9wYXJhbWV0ZXJfMyI6MzAwMCwicHJpY2VfcGFyYW1ldGVyXzQiOjQwMDAsImFtb3VudF9wYXJhbWV0ZXJfMSI6MTk5OSwiYW1vdW50X3BhcmFtZXRlcl8yIjoxNTAwLCJhbW91bnRfcGFyYW1ldGVyXzMiOjYwMDAsImFtb3VudF9wYXJhbWV0ZXJfNCI6MjMxNTE5NjQsInVzYWdlX3BhcmFtZXRlcl8xIjoxLjk5OSwidXNhZ2VfcGFyYW1ldGVyXzIiOjEsInVzYWdlX3BhcmFtZXRlcl8zIjoyLCJ1c2FnZV9wYXJhbWV0ZXJfNCI6NTc4Ny45OTEsImR1ZV9kYXRlIjpudWxsLCJjdXRfZGF0ZSI6IjIwMjQtMDEtMDIgMDA6MDA6MDAiLCJpbnZvaWNlIjoiTUMuS0JOIENha3VuZy41LUlOVi0wMjAxMjQtNTNHIiwiaWRfcGVsYW5nZ2FuIjpudWxsLCJ0ZW5hbnRfbmFtZSI6IktBTkcgSU5URVJOQVRJT05BTCIsImJpbGxpbmdfYWRkcmVzcyI6IkNha3VuZyJ9
