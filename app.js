async function getMovieList(year) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
    try {
        const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`
        const response = await fetch(url)
        const result = await response.json()
        
        if(result.data.length == 0 ) {
            console.log('No results Found');
        } else {
            result.data.forEach(element => {
                console.log(element.Title);
            });
        }
    } catch (error) {
        console.error(error)
    }
           
}

getMovieList(2012)

