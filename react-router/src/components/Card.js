//NEED TO WORK ON HOW TO ACCESS THE UPDATED STATE AFTER FETCHUSER

import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { deleteCard, fetchUsers } from '../actions/cardActions';



function Card(props) {
    // console.log(props);
    //Declare a new state variable
    // const [userInput, setUserInput] = useState('');
    
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { user } = useParams();
    //In place of useHistory()
    let navigate = useNavigate();
   
    //in place of mapStateToProps
    const {title, body, id} = useSelector((state) => state.cards.find(card => card.title === user));
    
    //IN place of mapDispatchToProps
    const dispatch = useDispatch();
    const onButtonClick = () => {
        dispatch(deleteCard(id))
        navigate("/contact");
    }
    dispatch(fetchUsers());
    
    return(
        <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
        <h3 className='ui header'>{ title }</h3>
        <p>{ body }</p>
        <button className='ui primary right floated button' onClick={onButtonClick}>Delete</button>
    </div>
    )
  }


// class Card extends React.Component {
//      state = {user:'' }
//     componentDidMount() {
//         // let user = this.props.match.params.user;
        //this.setState({user})
//     }

//     render(){
    // const{user} = this.state
//         return(
//             <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
//             <h3 className='ui header'>{user}</h3>
//             <p></p>
//         </div>
//         )
//     }
// }


// const mapDispatchToProps =(state) => {
//     return {
//         users: state.users
//     }
// }

export default Card;
// export default connect(null, mapDispatchToProps)(Card);
// export default connect(mapStateToProps, mapDispatchToProps)(Card);