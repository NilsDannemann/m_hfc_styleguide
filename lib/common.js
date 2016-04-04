TabularTables = {};

TabularTables.MyCollection = new Tabular.Table({
  name: "MyCollection",
  collection: MyCollection,
  columns: [
    {data: "field1", title: "Field 1"},
    {data: "field2", title: "Field 2"},
    {data: "field3", title: "Field 3"},
    {data: "field4", title: "Field 4"},
    {data: "field5", title: "Field 5"},
    {data: "field6", title: "Field 6"},
    {data: "field7", title: "Field 7"},
    {data: "field8", title: "Field 8"},
    {tmpl: Meteor.isClient && Template.tablecontrols},
  ],
  responsive: true,
  autoWidth: false,
  paging: true,
  scrollCollapse: true,
  pageLength: 20,
  pagingType: "simple_numbers",
  lengthChange: false,
  searching: false,
  search: {
    caseInsensitive: true,
    smart: true,
  }
});