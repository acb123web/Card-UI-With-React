import React from 'react';
import Card from '../src/Components/Card';
import Latasha from '../src/img/latasha.png';
import Prasanna from '../src/img/prasanna.png';
import Michel from '../src/img/michel.png';

const Carddata = () => {
    return(
        <>
         <Card 
          Name={'Prasanna Kumar'}
          Designation={'Web Designer'}
          Followern={'1.5K'}
          Followers={'Followers'}
          Followingn={'856'}
          Following={'Following'}
          Follow={'Follow'}
          Message={'Message'}
          images={Prasanna}
         />
         <Card 
          Name={'Michel Jane'}
          Designation={'Web Developer'}
          Followern={'1.8K'}
          Followers={'Followers'}
          Followingn={'956'}
          Following={'Following'}
          Follow={'Follow'}
          Message={'Message'}
          themecolor={'#1cb65d'}
          images={Michel}
         />
         <Card 
          Name={'Latasha'}
          Designation={'Web Lead'}
          Followern={'1.9K'}
          Followers={'Followers'}
          Followingn={'136'}
          Following={'Following'}
          Follow={'Follow'}
          Message={'Message'}
          themecolor={'#f4b932'}
          images={Latasha}
         />
        </>
    )
}

export default Carddata;