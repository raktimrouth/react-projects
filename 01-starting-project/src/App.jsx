import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/Coreconcepts';
import Header from './components/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';
const reactDescriptions = ["Fundamental","Crucial","Core"]
function getRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}




function App() {
  const [tabContent, setTabcontent] = useState("Please click a button") 
  function handleSelect(selectedButton){
    setTabcontent(selectedButton)
  }
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map(item => {
            return (

              <CoreConcept title={item.title} description={item.description} img={item.image}/> 

            )
          })}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect("components")}>Components </TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}>JSX </TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props </TabButton>
          <TabButton onSelect={() => handleSelect("state")}>State </TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default App;
