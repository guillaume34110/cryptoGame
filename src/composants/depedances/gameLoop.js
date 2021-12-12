
import { chartUpdate } from "./chartConfig"


export const generateNewDatasAndUpdateChart = (currentData, data, dynamicValues) => {
    
        for (let i = dynamicValues.index; i < (500 + dynamicValues.index); i++) {
            currentData.push(data[i])
        }
        currentData.slice(dynamicValues.index, 500 + dynamicValues.index)
        chartUpdate(currentData, dynamicValues.tickPriceData)
    
}

export const updateCurrentPrice = (currentData, setCurrentPrice, dynamicValues) => {
    const lastPrice = currentData[currentData.length - 1]
    dynamicValues.currentPrice = lastPrice
    setCurrentPrice(lastPrice)

}
export const updateFlag = (dynamicValues, setFlagColor) => {
    if (dynamicValues.longSell === '') {

        if (dynamicValues.currentPrice > dynamicValues.orderPrice) {
            setFlagColor('green')
        }
        if (dynamicValues.currentPrice <= dynamicValues.orderPrice) {
            setFlagColor('red')
        }
    } else if (dynamicValues.sellShort === '') {
        if (dynamicValues.currentPrice > dynamicValues.orderPrice) {
            setFlagColor('red')
        }
        if (dynamicValues.currentPrice <= dynamicValues.orderPrice) {
            setFlagColor('green')
        }
    } else {
        setFlagColor('transparent')
    }
}
export const updateTickPrice = (dynamicValues) => {
    if (dynamicValues.orderPrice === 0) {
        dynamicValues.tickPriceData = dynamicValues.currentPrice
    } else {
        dynamicValues.tickPriceData = dynamicValues.orderPrice
    }

}
export const updateGain = (setGain, dynamicValues) => {
    if (dynamicValues.orderPrice > 0 && dynamicValues.longSell === '') {
        setGain(((dynamicValues.currentPrice - dynamicValues.orderPrice) * dynamicValues.playerCrypto) - dynamicValues.playerCurrentFee - (dynamicValues.playerCrypto * dynamicValues.currentPrice * dynamicValues.fee))
    } else if (dynamicValues.orderPrice > 0 && dynamicValues.sellShort === '') {
        setGain(((dynamicValues.orderPrice - dynamicValues.currentPrice) * (-dynamicValues.playerCrypto)) - dynamicValues.playerCurrentFee - (- dynamicValues.playerCrypto * dynamicValues.currentPrice * dynamicValues.fee))
    } else {
        setGain(0)
    }
}
export const endGame = async (setStateDatas, dynamicValues, navigate, interval) => {
    if (dynamicValues.playerMonney === 0) {
        let newFee = (dynamicValues.playerCrypto * dynamicValues.currentPrice) * dynamicValues.fee
        dynamicValues.playerMonney = (dynamicValues.playerCrypto * dynamicValues.currentPrice)
        if (dynamicValues.playerMonney < 0) dynamicValues.playerMonney = dynamicValues.playerMonney * -1
        dynamicValues.playerMonney = dynamicValues.playerMonney - newFee
    }
    setStateDatas({ playerMonney: dynamicValues.playerMonney, cryptoUnit: dynamicValues.cryptoUnit })
    if (interval)clearInterval(interval)
    navigate('/')
}
export const menuLoopChart = (dynamicValues) => {
if (dynamicValues.index === 9400) dynamicValues.index = 0
}