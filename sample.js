
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSelection: true,
    allowFiltering: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
    filterSettings: { type: 'Excel' },
    toolbar: [{ text: 'Search'}, 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    keyPressed: function () {
        debugger;
    },
    columns: [
      {field: 'OrderID',headerText: 'Order ID',width: 120,isPrimaryKey: true},
      { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
      {field: 'ShipCity',headerText: 'Ship City',width: 130},
      {field: 'ShipName',headerText: 'Ship Name',width: 120},
      {field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
  });

grid.appendTo('#Grid');

