import React from 'react';
import { Tabs } from '@tableau/tableau-ui'
import LineDropdown from './LineDropdown.js'
import RadioButton from './RadioButton.js'

let radioList = ['one', 'two', 'three'];
//<RadioButton radioData={['one', 'two', 'three','four']} radioTitle='This is Radio Titlez'/>

let tabs = [ { content: 'Four' }, { content: 'Five' }, { content: 'Six' } ];
let initialState = { selectedTabIndex: 0 };


class ConfigDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectedTabIndex: 0};
    }

    componentDidMount() {
        this.setState({
            selectedTabIndex: 0
        });
    } 

    /*this.setState( function(previousState, currentProps) {
        return { selectedTabIndex: currentProps};
    });*/

    render() {


        return(
            <>
            <h1>Tableau Extension D3 Sankey Diagram ConfigDialog.</h1>

            <LineDropdown />
            <br/>
            <RadioButton radioData={radioList} radioTitle='This is Radio Titlez'/>

            <br/>
            <br/>
            <Tabs
            activation='manual'
            alignment='left'
            onTabChange={(index) => {
                console.log(`onChange: ${index}`);
                setState({ selectedTabIndex: index });
            }}
            selectedTabIndex={state.selectedTabIndex}
            tabs={tabs}
            >
            <span>{tabs[state.selectedTabIndex].content} panel content</span>
            </Tabs>



            </>
        )
    }
}

export default ConfigDialog

/*
import React from 'react';
import { Pill } from '@tableau/tableau-ui'
import { DropdownSelect } from '@tableau/tableau-ui'

const items = [
    { value: 'alpha'},
    { value: 'bravo'},
    { value: 'charlie'},
    { value: 'delta'},
    { value: 'echo'}
]

const makeDefaultOption = (strInput, index) =>
    <option disabled selected="selected">{strInput}</option>

const makeOption = (item, index) => 
    <option disabled={item.disabled || item.separator} key={index} value={item.value}>{item.value}</option>;


class ConfigDialog extends React.Component {
    render() {
        return(
            <>
            <h1>Tableau Extension D3 Sankey Diagram ConfigDialog.</h1>

            <div style={{width: 150}}>
                <Pill kind='discrete'>Discrete</Pill><br/>
                <Pill kind='continuous'>Continuous</Pill><br/>
                <Pill kind='other'>Other</Pill><br/>
                <Pill kind='invalid'>Invalid</Pill><br/>
            </div>

            <DropdownSelect kind='line'>
                {makeDefaultOption('Please select dimension')}
                {items.map(makeOption)}
            </DropdownSelect>
            </>
        )
    }
}

export default ConfigDialog

*/