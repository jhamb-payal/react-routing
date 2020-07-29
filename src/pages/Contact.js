import React  from 'react';
import { useHistory } from 'react-router-dom';

const Contact =() =>  {
    const history = useHistory()
    console.log(
        history
    );
     const goBackHandle = () => {
        history.goBack()
     }
        return ( <>
        <div>At Contact page</div>
        <button onClick = {goBackHandle}>Go Back</button>
        </> );
}
 
export default Contact;