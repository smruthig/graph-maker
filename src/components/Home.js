import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import DataForm from './DataForm'

{/* State needs to be global, in App.js, as it is not being preserved */}

const Home = () => {
    const [start, setStart] = useState(false)
    
    return (
        <>
            { !start ? 
                (<div className="home">
                    <h2 className="home_text">What do we do?</h2>
                    <p>
                        Have an assignment that requires you to plot graphs?<br/>
                        GraphMaker will do it for you! <br/>
                        Just enter the data, and you will have a variety of
                        customizable graphs,<br/>
                        ready to go!<br/>
                    </p>
                    <Button variant="secondary" onClick={()=>setStart(true)}>Get started</Button>
                </div>)
            :
                <DataForm/>
            }
        </>
    )
}

export default Home
