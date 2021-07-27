import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'
import SingleVar from './SingleVar'
import TwoVar from './TwoVar'
import MultiVar from './MultiVar'

const DataForm = ({singleVar, twoVar}) => {
    return (
        <div className="dataForm">
            <Tabs defaultActiveKey="twovar" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="singlevar" title="One variable">
                    <SingleVar 
                        singleVar = {singleVar}
                    />
                </Tab>
                <Tab eventKey="twovar" title="Two variables">
                    <TwoVar 
                        twoVar = {twoVar}
                    />
                </Tab>
                <Tab eventKey="multivar" title="Multiple variables">
                    <MultiVar/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default DataForm
