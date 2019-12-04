import React from 'react';


function TechItem( {tech, onDelet } ) {
  return (
    <li>
    {tech}
    <button onClick={onDelet} >Remover</button>
</li>
  );
}

export default TechItem;