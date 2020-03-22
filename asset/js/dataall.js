const api_url_all = 'https://corona.lmao.ninja/all';
	
async function getDataAll() {

    const response = await fetch(api_url_all);
    const data = await response.json();

    $(".tConfirmedAll").text(data.cases);
    $(".tDeathsAll").text(data.deaths);
    $(".tRecoveredAll").text(data.recovered);

        }

        getDataAll();

        