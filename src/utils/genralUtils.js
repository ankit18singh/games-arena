import axios from  'axios';

export async function getGamesData() {
    const responseData = await axios.get("http://starlord.hackerearth.com/gamesarena")
   // console.log(responseData)
    return responseData.data.slice(1)
}