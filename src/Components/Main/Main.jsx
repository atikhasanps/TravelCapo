import React, { useEffect } from 'react';
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'
import img from '../../Assets/image/img1.jpg'
import img2 from '../../Assets/image/img2.jpg'
import img3 from '../../Assets/image/img3.jpg'
import img4 from '../../Assets/image/img4.jpg'
import img5 from '../../Assets/image/img5.jpg'
import img6 from '../../Assets/image/img6.jpg'
import img7 from '../../Assets/image/img7.jpg'
import img8 from '../../Assets/image/img8.jpg'
import img9 from '../../Assets/image/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
    {
        id:1,
        imgSrc: img,
        desTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:'The epitome of romance is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities'
    },
    
    {
        id:2,
        imgSrc: img2,
        desTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular'
    },
    {
        id:3,
        imgSrc: img3,
        desTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place'
    },
    {
        id:4,
        imgSrc: img4,
        desTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description:'According to the world Tourism Ranking, $5 Million people visit turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities'
    },
    {
        id:5,
        imgSrc: img5,
        desTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description:'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
    },
    {
        id:6,
        imgSrc: img6,
        desTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description:'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
    },
    {
        id:7,
        imgSrc: img7,
        desTitle: 'Angkor wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description:'Angkot wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is know for its luxurious stays and adventurous activities'
    },
    {
        id:8,
        imgSrc: img8,
        desTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description:'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breaktakingly beautiful. This place is known for its luxurious stays and adventurous activities'
    },
    {
        id:9,
        imgSrc: img9,
        desTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'Bali is an Indonesia Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art $ culture, food, temple and beautiful sandy beaches'
    }

]

const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='main container section'>
          <div className='secTitle'>
                <h3 data-aos="fade-right" className='title'>
                    Most visited destinations
                </h3>
          </div>
          <div className="secContent grid">
            {
                Data.map(({id, imgSrc, desTitle, location, grade, fees, description})=>{
                    return(
                        <div data-aos="fade-up" key={id} className='singleDestination'>
                            <div className="imageDiv">
                                <img src={imgSrc} alt={desTitle}/>
                            </div>
                            <div  className='cardInfo'>
                                <h4 className='desTitle'>{desTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className='name'>{location}</span>
                                </span>
                            

                            <div className='fees flex'>
                                <div className='grade'>
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>
                            
                            <div className="desc">
                                <p>{description}</p>
                            </div>
                           
                            <button className='btn flex'>
                                DETAILS <BsClipboardCheck className="icon"/>
                            </button>
                            </div>
                        </div>
                    )
                })
            }
          </div>
        </section>
    );
};

export default Main;