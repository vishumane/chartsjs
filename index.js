import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Doughnut } from 'react-chartjs-2';

class App extends Component {
  constructor() {
    super();

    const data = {
      status: 0,
      message: null,
      data: {
        totalEmployeesCount: 87,
        activeCount: 73,
        terminatedCount: 2,
        mouritechCategoryCount: 0,
        thirdPartyCategoryCount: 0,
        contractorCount: 12,
        enabledCount: 85,
        disabledCount: 2,
        billableCount: 70,
        nonBillableCount: 17,
      },
      success: true,
      errors: [],
      exception: null,
    };

    const balancedTracingSummary ={
      "status": 0,
      "message": null,
      "data": {
          "totalOutstanding": 175590.4,
          "totalAvailable": 71433.4
      },
      "success": true,
      "errors": [],
      "exception": null
  }
   

   const datar = {
      datasets: [
        {
          data: [
            data.data.totalEmployeesCount,
            data.data.terminatedCount,
            data.data.contractorCount,
          ],
          backgroundColor: [
         'purple', 
         'red'
          ],
        },
      ],
      labels: ['eanbled','disabled'], // Corrected label casing
    },

    this.state = {
      name: 'React',
      data: {
        datasets: [
          {
            data: [
              data.data.totalEmployeesCount,
              data.data.terminatedCount,
              data.data.contractorCount,
            ],
            backgroundColor: [
              'green', 
              'red', 
              'yellow', 
            ],
          },
        ],
        labels: ['Employee', 'Terminated', 'Contractor'], // Corrected label casing
      },
    };
  }

  render() {
    return (
      <>
        <h5> Employee status</h5>
        <Doughnut
          data={this.state.data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />

      <h5> Tracking status</h5>
      {/* <Doughnut
          data={datasets}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        /> */}

      <h5>billibng status</h5>
      {/* <Doughnut
          data={datasets}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        /> */}    
        
        <h5> tracking balance summary </h5>

        
          </>
    );
  }
}

render(<App />, document.getElementById('root'));
