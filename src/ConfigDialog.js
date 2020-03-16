import React from 'react';
import LineDropdown from './LineDropdown.js'
import RadioButton from './RadioButton.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


let radioList = ['one', 'two', 'three'];
//<RadioButton radioData={['one', 'two', 'three','four']} radioTitle='This is Radio Titlez'/>



class ConfigDialog extends React.Component {

    componentWillMount() {
        //this.setState({ selectedTabIndex: 0 });

        try{
            tableau.extensions.initializeDialogAsync().then(() => {
                console.log('Debug: component will mount.');
                const tableauSettings = tableau.extensions.settings.getAll();
                const tableauDashboard = tableau.extensions.dashboardContent.dashboard;

                tableauDashboard.worksheets.forEach(function (worksheet) {
                    sheetList02.push(worksheet.name);

                    worksheet.getSummaryDataAsync({ maxRows: 1 }).then(function (sumdata) {
                        console.log('Debug running worksheet.getSummaryDataAsync... ');

                        sumdata.columns.forEach(function (current_value) {

                            if(current_value.dataType === 'float' || current_value.dataType === 'int') {
                                measureColumns.push(current_value.fieldName);
                            }
                    
                            if(current_value.dataType === 'string') {
                                dimensionColumns.push(current_value.fieldName);
                            }
                    
                        });
                    });
                });

                console.log('Debug tableauSettings: ', tableauSettings);
                console.log('Debug sheetList02: ', sheetList02);
                console.log('Debug tableauDashboard: ', tableauDashboard);
                console.log('Debug measureColumns: ', measureColumns);
                console.log('Debug dimensionColumns: ', dimensionColumns);
            });
        }
        catch(err){
            console.log('window.tableau.extensions did not load');
        }
    }

    render() {


        return(
            <>
            <h1>Tableau Extension D3 Sankey Diagram ConfigDialog.</h1>

            <Tabs>
                <TabList>
                    <Tab>Main</Tab>
                    <Tab>Optional: Filter Actions</Tab>
                    <Tab>Optional: Formatting</Tab>
                    <Tab>About</Tab>
                </TabList>
                
                <TabPanel>
                    <p>Main, core options</p>
                    <br/>
                    <LineDropdown />
                </TabPanel>

                <TabPanel>
                    <p>Optional features</p>
                    <br/>
                    <RadioButton radioData={radioList} radioTitle='This is Radio Titlez'/>
                    <br/>
                </TabPanel>

                <TabPanel>
                    <p>Optional formatting stuff</p>
                </TabPanel>

                <TabPanel>
                    <p>About</p>
                </TabPanel>



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