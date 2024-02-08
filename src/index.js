import React from 'react';
import { render } from 'react-dom';
import { Doughnut ,Bar} from 'react-chartjs-2';

const App = () => {
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
      nonBillableCount: 17
    },
    success: true,
    errors: [],
    exception: null
  };

  const barChartData = {
    status: 0,
    message: null,
    data: {
      totalOutstanding: 175590.4,
      totalAvailable: 71433.4
    },
    success: true,
    errors: [],
    exception: null
  };

  // Bar chart data
  const barChartDataObject = {
    labels: ['Client Outstanding', 'Net Available'],
    datasets: [
      {
        label: 'Balance',
        backgroundColor: ['#36a2eb', '#ff6384'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [barChartData.data.totalOutstanding, barChartData.data.totalAvailable]
      }
    ]
  };

  const employeeData = {
    datasets: [{
      data: [
        data.data.contractorCount,
        data.data.totalEmployeesCount,
        data.data.terminatedCount
      ],
      backgroundColor: ['yellow', 'green', 'red']
    }],
    labels: ['Contractor', 'Employee', 'Terminated']
  };

  const trackingData = {
    datasets: [{
      data: [
        data.data.enabledCount,
        data.data.disabledCount
      ],
      backgroundColor: ['green', 'red']
    }],
    labels: ['Enabled', 'Disabled']
  };

  const billingData = {
    datasets: [{
      data: [
        data.data.billableCount,
        data.data.nonBillableCount
      ],
      backgroundColor: ['green', 'red']
    }],
    labels: ['Billable', 'Non-Billable']
  };

// Bar chart options
const barChartOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        callback: function (value, index, values) {
          return value + 'M';
        }
      }
    }]
  }
};


  return (
    <div>
      <h2>Employee Status</h2>
      <Doughnut data={employeeData} />

      <h2>Tracking Status</h2>
      <Doughnut data={trackingData} />

      <h2>Billing Status</h2>
      <Doughnut data={billingData} />

      <div>
        <h2>Tracking Balance Summary</h2>
        <Bar data={barChartDataObject} options={barChartOptions} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
