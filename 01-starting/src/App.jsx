import componentImage from "./assets/components.png";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TapButton from "./components/TapButton";
import { Children, useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <CoreConcepts key={item.title} {...item} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TapButton
            className={selectedTopic === "components" ? "active" : ""}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TapButton>
          <TapButton
            className={selectedTopic === "jsx" ? "active" : ""}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TapButton>
          <TapButton
            className={selectedTopic === "props" ? "active" : ""}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TapButton>
          <TapButton
            className={selectedTopic === "state" ? "active" : ""}
            onSelect={() => handleSelect("state")}
          >
            State
          </TapButton>
        </menu>
        {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : (
          "Deafult content"
        )}
      </section>
    </div>
  );
}

export default App;
