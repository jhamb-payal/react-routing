import React from 'react';
import { useParams } from 'react-router-dom';

// class About extends Component {
//     render() { 
//         return ( <div>At About Page</div> );
//     }
// }
const About = () => {
    const [ company ] = useParams()
return ( <div>At About Page of {company}</div> );
}

 
export default About;