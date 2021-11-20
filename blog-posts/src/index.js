import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/img1.jfif';
import profile2 from './image/img2.jfif';
import profile3 from './image/img3.jfif';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hello my name is Sarah, and I am live in instabul
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Alex' 
                    date='Today at 5:00pm'
                    text='it is amazing'
                    picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Jack' 
                    date='Today at 6:00pm'
                    text='Great job'
                    picture={profile2}
                />
            </UserCard>
           <UserCard>
                <SingleComment 
                    name='Sarah' 
                    date='Today at 7:00pm'
                    text='Thanks...'
                    picture={profile3}
                />
           </UserCard>
           
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
