import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { chart, chartDestroy } from '../depedances/chartConfig';
import { endGame, generateNewDatasAndUpdateChart, updateCurrentPrice, updateFlag, updateGain, updateTickPrice } from '../depedances/gameLoop';
import { showFile } from '../depedances/txtToObject';


let dynamicValues = { fee: 0.004, currentPrice: 0, index: 0, sellShort: 'Buy Short', longSell: 'Buy Long', orderPrice: 0, tickPriceData: 0, playerCrypto: 0, playerCurrentFee: 0, playerMonney: 0, cryptoUnit: 'btc' }
const Playground = ({ stateDatas, setStateDatas }) => {
    const [cryptoDatas, setCryptoDatas] = useState()
    const [playerMonney, setPlayerMonney] = useState(0)
    const [currentPrice, setCurrentPrice] = useState(0)
    const [sellShort, setSellShort] = useState('Buy Short')
    const [longSell, setLongSell] = useState('Buy Long')
    const [flagColor, setFlagColor] = useState('transparent')
    const [playerCrypto, setPlayerCrypto] = useState(0)
    const [orderPrice, setOrderPrice] = useState(0)
    const [gain, setGain] = useState(0)
    const [drawIndex, setDrawIndex] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        showFile(setCryptoDatas,stateDatas.cryptoUnit)
    }, [])
    useEffect(() => {
        if (cryptoDatas) {
            let bufferDatas = []
            for (let i = 0; i < 500; i++) {
                bufferDatas.push(cryptoDatas[i])
            }
            dynamicValues.index = 0
            setDrawIndex(0)
            updateCurrentPrice(bufferDatas, setCurrentPrice, dynamicValues)
            chart(bufferDatas, dynamicValues.currentPrice)
            dynamicValues.playerMonney = stateDatas.playerMonney
            dynamicValues.cryptoUnit = stateDatas.cryptoUnit
            setPlayerMonney(stateDatas.playerMonney)
            loopControler()
        }
    }, [cryptoDatas])
    const loopControler = () => {
        const interval = setInterval(() => {
            if (!document.querySelector('.playground-main')) {
                chartDestroy()
                clearInterval(interval)
            }
            dynamicValues.index++
            setDrawIndex(dynamicValues.index)
            let currentData = []
            generateNewDatasAndUpdateChart(currentData, cryptoDatas, dynamicValues)
            updateCurrentPrice(currentData, setCurrentPrice, dynamicValues)
            updateTickPrice(dynamicValues)
            updateFlag(dynamicValues, setFlagColor)
            updateGain(setGain, dynamicValues)
            if (dynamicValues.index >= 10000) {
                endGame(setStateDatas, dynamicValues, navigate, interval)
            }
        }, 200)
        return () => clearInterval(interval);
    }

    const longOrSell = () => {
        if (dynamicValues.playerMonney > 0) {
            dynamicValues.playerCurrentFee = (stateDatas.playerMonney * dynamicValues.fee)
            const transactionResult = (stateDatas.playerMonney - (stateDatas.playerMonney * dynamicValues.fee)) / currentPrice
            setPlayerCrypto(transactionResult)
            dynamicValues.playerCrypto = transactionResult
            dynamicValues.playerMonney = 0
            setPlayerMonney(0)
            setSellShort('Sell')
            dynamicValues.sellShort = 'Sell'
            setLongSell('')
            dynamicValues.longSell = ''
            setOrderPrice(currentPrice)
            dynamicValues.orderPrice = currentPrice
        } else if (dynamicValues.playerMonney === 0 && playerCrypto < 0) {
            dynamicValues.playerMonney = - (playerCrypto * currentPrice - (playerCrypto * currentPrice * dynamicValues.fee))
            setPlayerMonney(dynamicValues.playerMonney)
            setPlayerCrypto(0)
            dynamicValues.playerCrypto = 0
            setSellShort('Buy Short')
            dynamicValues.sellShort = 'Buy Short'
            setLongSell('Buy Long')
            dynamicValues.longSell = 'Buy Long'
            setOrderPrice(0)
            dynamicValues.orderPrice = 0
        }
    }
    const shortOrSell = () => {
        if (dynamicValues.playerMonney === 0 && playerCrypto > 0) {
            dynamicValues.playerMonney = playerCrypto * currentPrice - ((playerCrypto * currentPrice) * dynamicValues.fee)
            setPlayerMonney(dynamicValues.playerMonney)
            setPlayerCrypto(0)
            dynamicValues.playerCrypto = 0
            setSellShort('Buy Short')
            dynamicValues.sellShort = 'Buy Short'
            setLongSell('Buy Long')
            dynamicValues.longSell = 'Buy Long'
            setOrderPrice(0)
            dynamicValues.orderPrice = 0
        } else if (dynamicValues.playerMonney > 0 && playerCrypto === 0) {
            dynamicValues.playerCurrentFee = (stateDatas.playerMonney * dynamicValues.fee)
            const transactionResult = -(stateDatas.playerMonney - (stateDatas.playerMonney * dynamicValues.fee)) / currentPrice
            setPlayerCrypto(transactionResult)
            dynamicValues.playerCrypto = transactionResult
            dynamicValues.playerMonney = 0
            setPlayerMonney(0)
            setSellShort('')
            dynamicValues.sellShort = ''
            setLongSell('Sell')
            dynamicValues.longSell = 'Sell'
            setOrderPrice(currentPrice)
            dynamicValues.orderPrice = currentPrice
        }
    }
    const returnMenu = () => {
        endGame(setStateDatas, dynamicValues, navigate)
    }
    return (
        <main className=" playground-main">
            <section>
                <div>
                    <h2 className="current-price">current price :{currentPrice}$</h2>
                    <h2 className={"order " + flagColor}  >Order at : {orderPrice}</h2>
                    <h2 className="gain" >Gain : {gain}$</h2>
                </div>
                <div>
                    <h2 className="user-money">monney : {playerMonney} $ / {playerCrypto} {stateDatas.cryptoUnit}</h2>
                    <h2> fee : 0.004% </h2>
                    <h2 className="index">{drawIndex}/10000</h2>
                </div>
            </section>
            <div className="chart">
                <canvas id="line-chart" width="800" height="450"></canvas>
            </div>
            <section className="buy-sell">
                <div className="sell-btn btn" onClick={longOrSell}>{longSell}</div>
                <div className="return-btn btn" onClick={returnMenu}>Menu</div>
                <div className="buy-btn btn" onClick={shortOrSell}>{sellShort}</div>
            </section>
        </main>
    );
}

export default Playground;
