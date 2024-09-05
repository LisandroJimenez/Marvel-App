import CryptoJS from "crypto-js"


const time_stamp = new Date().getTime()
const private_api_key = '71f0c52e949d2dcaddd94e528b329cb7033aecb6'
const public_api_key = '3605731526765112a1c687356e9702b3'
const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()


export const reqCharacter = async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit
    const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`)
    const { data } = await resp.json()
    console.log(data)
    return data
}