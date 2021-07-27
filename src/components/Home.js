import Button from 'react-bootstrap/Button'
import DataForm from './DataForm'

const Home = ({start, setStart, setLastUpdated, singleVar, twoVar}) => {
    
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
                    <Button variant="secondary" onClick={setStart}>Get started</Button>
                </div>)
            :
                <DataForm 
                    singleVar = {singleVar}
                    twoVar = {twoVar}
                    setLastUpdated = {setLastUpdated}
                />
            }
        </>
    )
}

export default Home
