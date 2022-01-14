import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
             <h1>Check out these EPIC Destinations Now!</h1>
             <div className='Cards__container'>
               <div className='cards__wrapper'>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/fineart1.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Luxury ART'
                        path='/services'
                       />
                       <CardItem 
                        src='images/fineart3.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/fineart4.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Luxury ART'
                        path='/services'
                       />
                       <CardItem 
                        src='images/findartdog1.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/fineart5.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Luxury ART'
                        path='/services'
                       />
                       <CardItem 
                        src='images/img-9.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/fineart-night-move.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                       />
                       <CardItem 
                        src='images/img-5.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Luxury ART'
                        path='/services'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/img-3.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Luxury ART'
                        path='/services'
                       />
                       <CardItem 
                        src='images/img-7.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Luxury ART'
                        path='/services'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/img-dog2.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Luxury ART'
                        path='/services'
                       />
                       <CardItem 
                        src='images/img-2.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Luxury ART'
                        path='/services'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/poppy-dog.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Luxury ART'
                        path='/services'
                       />
                       <CardItem 
                        src='images/img-1.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Luxury ART'
                        path='/services'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/img1.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Luxury ART'
                        path='/services'
                       />
                       <CardItem 
                        src='images/img2.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Luxury ART'
                        path='/services'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                        src='images/img3.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Luxury ART'
                        path='/services'
                       />
                       <CardItem 
                        src='images/img4.jpg' 
                        text='Travel through th Islans of Bali in a Private Cruise'
                        label='Luxury ART'
                        path='/services'
                       />
                   </ul>
               </div>
             </div>            
        </div>
    )
}

export default Cards;
