const api_url_all = 'https://corona.lmao.ninja/v3/covid-19/all';
	
async function getDataAll() {

    const response = await fetch(api_url_all);
    const data = await response.json();

    $(".tConfirmedAll").text(data.cases);
    $(".tDeathsAll").text(data.deaths);
    $(".tRecoveredAll").text(data.recovered);

        }

        getDataAll();

        
