import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./Coreconcepts";
export default function MainCoreConcepts(){
    return (
        <section id="core-concepts">
                <h2>Core concepts</h2>
                <ul>
                  {CORE_CONCEPTS.map(item => {
                    return (
        
                      <CoreConcept key={item.title} title={item.title} description={item.description} img={item.image}/> 
        
                    )
                  })}
                </ul>
              </section>
    );
}