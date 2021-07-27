import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'
import SingleVar from './SingleVar'
import TwoVar from './TwoVar'
import MultiVar from './MultiVar'

const DataForm = ({singleVar, twoVar, setLastUpdated}) => {
    return (
        <div className="dataForm">
            <Tabs defaultActiveKey="twovar" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="singlevar" title="One variable">
                    <SingleVar 
                        singleVar = {singleVar}
                        setLastUpdated = {setLastUpdated}
                    />
                </Tab>
                <Tab eventKey="twovar" title="Two variables">
                    <TwoVar 
                        twoVar = {twoVar}
                        setLastUpdated = {setLastUpdated}
                    />
                </Tab>
                <Tab eventKey="multivar" title="Multiple datasets">
                    <MultiVar/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default DataForm
