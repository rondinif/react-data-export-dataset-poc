import React from "react";
import ReactDOM from 'react-dom';

import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


const csvData1 = [
    {
      _id: "5eabcd22d65dc1782ee6f837",
      createdAt: "2020-05-01T07:17:54.521Z",
      companyName: 'My Company',
      tons: 2,
      rate: 0,
      amount: 0
    },
    {
      _id: "5eabcdfcd65dc1782ee6f83a",
      createdAt:"2020-05-01T07:21:32.332Z",
      companyName: 'Your Company',
      tons: 2,
      rate: 1870,
      amount: 1870
    },
    {
      _id: "5eabf4c5c4b90f16f59b6377",
      createdAt: "2020-05-01T10:07:01.968Z",
      companyName: 'His Company',
      tons: 2,
      rate: 34,
      amount: 34
    }
  ]
  
  // Header2 data
  
  const csvData2 = [
      {
      _id: "5e9b183e7934ec4e7af15b7a",
      manifestNumber: '56',
      manifestNumberOther: '45',
      grossWeight: 69,
      actualGross: 10,
      tare: 10,
      totalCost: 80
    },
    {
      _id: "5e9d6faf651be9322f028c5d",
      manifestNumber: '34',
      manifestNumberOther: '34',
      grossWeight: 121,
      actualGross: 0,
      tare: 0,
      totalCost: 80
    },
    {
      _id: "5ea9e9b072f7e20924c56f7d",
      manifestNumber: '',
      manifestNumberOther: '',
      grossWeight: 41,
      actualGross: 0,
      tare: 0,
      totalCost: 80
    }
  ]

const data = [
    {
      columns: [
        { title: "Company Name" },
        { title: "Tons" },
        { title: "Rate" },
        { title: "Amount" }
      ],
      data: csvData1.map((record, index) => {
        return [
          { value: record.companyName },
          { value: record.tons },
          { value: record.rate },
          { value: record.amount }
        ];
      }),
    },
    {
        ySteps: 5, //will put space of 5 rows
        columns: [
          { title: "Manifest #" },
          { title: "Other #" },
          { title: "Weight" },
          { title: "Gross" },
          { title: "Tare" },
          { title: "Total Cost" }
        ],
        data: csvData2.map((record, index) => {
          return [
            { value: record.manifestNumber },
            { value: record.manifestNumberOther },
            { value: record.grossWeight},
            { value: record.actualGross},
            { value: record.tare},
            { value: record.totalCost}
          ];
        }),
      },  
  ];

class Download extends React.Component {
    render() {
        return (
            <ExcelFile>
                <ExcelSheet   dataSet={data} name="Organization">
                </ExcelSheet>
            </ExcelFile>
        );
    }
}


ReactDOM.render(     
    <Download />,
    document.getElementById('app')        
  );