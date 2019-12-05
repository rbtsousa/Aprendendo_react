import React from 'react';
import PropTypes from 'prop-types';


function TechItem( {tech, onDelet } ) {
  return (
    <li>
    {tech}
    <button onClick={onDelet} >Remover</button>
</li>
  );
}
// Default props
TechItem.defaultProps = {
  // tech: 'Oculto',
};
// propriedade importante para trabalho com varios devs
// com essa propriedade e retornado um erro e o dev ja consegue ver esse erro
TechItem.propTypes = {
  tech: PropTypes.string,
  
  
};
export default TechItem;