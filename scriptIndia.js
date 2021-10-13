init();

function init() {
  var url = "https://api.covid19api.com/summary";

  var data = "";
  $.get(url, function (data) {
    console.log(data.Countries[76].TotalConfirmed);

    data = `
      
      <td>${data.Countries[76].TotalConfirmed}</td>
      <td>${data.Countries[76].TotalDeaths}</td>
      <td>${data.Countries[76].TotalRecovered}</td>
      
      `;

    $("#data").html(data);
  });
}

function refreshData() {
  clearData();
  init();
}

function clearData() {
  $("#data").empty();
}
