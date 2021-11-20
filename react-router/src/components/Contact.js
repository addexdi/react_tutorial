import React from "react";
import { Link } from "react-router-dom";
// import Modal from './Modal';
import { connect } from 'react-redux';
 
const Contact = ({ cards }) => {
    // console.log(props.cards);
    return(
        <div>
            {/* <Modal /> */}
            {
                cards.map(card => {
                    return(
                        <div 
                            className='ui raised very padded text container segment' style={{marginTop: '80px'}} key={card.id}
                        >
                            <Link to={`/${card.title}`} className='ui header'>{card.title}</Link>
                            <p>{card.body}</p>
                        </div>
                    )
                })
            }
            {/* <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
                <Link to='/card/alex' className='ui header'>Alex</Link>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos perferendis at hic nostrum, fugit tempora assumenda est, ad in recusandae cumque iusto consequuntur maxime minima aperiam cum praesentium similique?
                </p>
            </div>
            <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
                <Link to='/card/willma' className='ui header'>Willma</Link>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos perferendis at hic nostrum, fugit tempora assumenda est, ad in recusandae cumque iusto consequuntur maxime minima aperiam cum praesentium similique?
                </p>
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Contact);