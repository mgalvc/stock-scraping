import express from "express"
import getCurrentStockPrice from "../../usecases/getCurrentStockPrice";

const app = express()

app.use(express.json())

app.get("/stock-price/:stockCode", async (req, res) => {
    const { stockCode } = req.params
    const currentStockPrice = await getCurrentStockPrice(stockCode)
    return res.json({ currentStockPrice })
})

app.listen(3000, () => console.log("server listening"))