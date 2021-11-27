//init paginate datatable-basic
if (document.getElementById("datatable-basic")) {
  const dataTableSearch = new simpleDatatables.DataTable("#datatable-basic", {
    searchable: true,
    fixedHeight: false,
    perPage: 5,
  });
}
