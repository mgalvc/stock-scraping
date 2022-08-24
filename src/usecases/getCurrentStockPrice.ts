import axios from "axios"
import { load as cheerioLoad } from "cheerio"

export default async (stockCode: string) => {
    const { data: html } = await axios.get(`https://www.google.com/finance/quote/${stockCode}:BVMF`)
    
    const $ = cheerioLoad(html)
    const target = $('main div').map((i, el) => $(el).attr('data-last-price')).toArray()
    
    if (target.length === 0) {
        return 'unable to find information'
    }

    return parseFloat(target[0])
}