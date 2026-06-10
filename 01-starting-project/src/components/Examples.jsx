import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
export default function Examples (){
     const [selectedtabContent, setTabcontent] = useState() 
  function handleSelect(selectedButton){
    setTabcontent(selectedButton)
  }
    return (
         <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isActive={selectedtabContent == "components" } onSelect={() => handleSelect("components")}>Components </TabButton>
          <TabButton isActive={selectedtabContent == "jsx"} onSelect={() => handleSelect("jsx")}>JSX </TabButton>
          <TabButton isActive={selectedtabContent == "props"} onSelect={() => handleSelect("props")}>Props </TabButton>
          <TabButton isActive={selectedtabContent == "state"} onSelect={() => handleSelect("state")}>State </TabButton>
        </menu>
          {
            selectedtabContent ? (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedtabContent].title}</h3>
          <p>{EXAMPLES[selectedtabContent].description}</p>
          <pre>
            <code>
          {EXAMPLES[selectedtabContent].code}
            </code>
          </pre>
        </div>

            ) : (
              <p>Please select a topic.</p>
            )
          }
      </section>
    );

}