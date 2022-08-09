var data = [
  {
    OrderID: 10248,
    CustomerID: 'text   1',
    ShipName: 'Vins et alcools Chevalier',
    ShipCity: 'Reims',
    ShipCountry: 'France',
  },
  {
    OrderID: 10249,
    CustomerID: 'text  1',
    ShipName: 'Toms Spezialitäten',
    ShipCity: 'Münster',
    ShipCountry: 'Germany',
  },
  {
    OrderID: 10250,
    CustomerID: 'text 1',
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    ShipCountry: 'Brazil',
  },
  {
    OrderID: 10251,
    CustomerID: 'text1',
    ShipName: 'Victuailles en stock',
    ShipCity: 'Lyon',
    ShipCountry: 'France',
  },
  {
    OrderID: 10252,
    CustomerID: 'SUPRD',
    ShipName: 'Suprêmes délices',
    ShipCity: 'Charleroi',
    ShipCountry: 'Belgium',
  },
  {
    OrderID: 10253,
    CustomerID: 'HANAR',
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    ShipCountry: 'Brazil',
  },
];
var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  allowSelection: true,
  allowFiltering: true,
  keyPressed: function () {
    debugger;
  },
  filterSettings: { type: 'Menu' },
  toolbar: [{ text: 'Search', align: 'left' }],
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
    },
    { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
    {
      field: 'ShipCity',
      headerText: 'Ship City',
      width: 130,
    },
    {
      field: 'ShipName',
      headerText: 'Ship Name',
      width: 120,
    },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
  ],
});
grid.appendTo('#Grid');
let sportsData = [
  { Id: 'text  1', Game: 'text  1' },
  { Id: 'Game2', Game: 'Basketball' },
  { Id: 'Game3', Game: 'Cricket' },
  { Id: 'Game4', Game: 'Football' },
  { Id: 'Game5', Game: 'Golf' },
  { Id: 'Game6', Game: 'Hockey' },
  { Id: 'Game7', Game: 'Rugby' },
  { Id: 'Game8', Game: 'Snooker' },
];
// initialize AutoComplete component
var listObj = new ej.dropdowns.AutoComplete({
  //set the data to dataSource property
  dataSource: sportsData,
  // maps the appropriate column to fields property
  fields: { value: 'Game' },
  // set placeholder to AutoComplete input element
  placeholder: 'Find a game',
});
listObj.appendTo('#atcelement');

// Initialize TextBox component
var inputObj = new ej.inputs.TextBox({
  placeholder: 'Enter your address',
});

// Render initialized TextBox
inputObj.appendTo('#default');
