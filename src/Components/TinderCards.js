import react,{useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'//Explore more on this Tinder Card Functionality
import '../CSS/TinderCards.css'
import axios from 'axios'

function TinderCards() {
    // useState for functional components to hold a set of initial People list
    const [people, setPeople] = useState([
        // {
        //     name:'Elon Musk',// Should we use Single Quote or Double Quotes?
        //     url:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
        // },
        // {
        //     name:'Tom Cruise',
        //     url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg'
        // }
        //
    ])

    //Explore more on this useEffect
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('https://tinder-backendserverclone.herokuapp.com/tinder/cards')

            setPeople(req.data)
        }

        fetchData();
    },[])

    const swiped = (direction, nameToDelete) => {
        console.log(nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name)
    }
    //Explore more on Background Image related to the CSS Property
    return (
        <div className='tinderCards'>
            <div className='tinderCards_cardContainer'>
                {people.map( person => 
                    <TinderCard
                        className='swipe'
                        preventSwipe={['up', 'down']}
                        key={person.name}
                        onSwipe = {dir => swiped(dir, person.name)}
                        onCardLeftScreen = { () => outOfFrame(person.name)}                    
                    >
                    
                        <div style={{backgroundImage: "url("+ person.url +")"}} className='card'>
                            <h1>{person.name}</h1>
                        </div>
                    </TinderCard>
                )}
            </div>            
        </div>
    )
}

export default TinderCards