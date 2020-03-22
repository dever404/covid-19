const api_url = 'https://corona.lmao.ninja/countries/morocco';
	
async function getData() {

    const response = await fetch(api_url);
    const data = await response.json();

    $(".tConfirmed").text(data.cases);
    $(".tActive").text(data.active);
    $(".tDeaths").text(data.deaths);
    $(".tRecovered").text(data.recovered);
    $(".tCritical").text(Math.round(((data.recovered * 100) / data.cases))  + "%");
    $('.tTodayCases').text(data.todayCases);
    $('.tTodayDeaths').text(data.todayDeaths);
    $('.tPersontage').text(Math.round(((data.deaths * 100) / data.cases))  + "%");

        }

        getData();

        