import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { chart, chartDestroy, paddingChart, yAxisD } from '../depedances/chartConfig';
import { endGame, generateNewDatasAndUpdateChart, updateCurrentPrice, updateFlag, updateGain, updateTickPrice } from '../depedances/gameLoop';
import { showFile } from '../depedances/txtToObject';

import btcIcon from '../../assets/coin/bitcoin.png'
import adaIcon from '../../assets/coin/ada.png'
import ethIcon from '../../assets/coin/ethereum.png'
import solanaIcon from '../../assets/coin/solana.png'
import xrpIcon from '../../assets/coin/xrp.png'
import bnbIcon from '../../assets/coin/binance.png'
let icons = {Bitcoin : btcIcon,ADA : adaIcon,Ether : ethIcon,BNB : bnbIcon,Solana : solanaIcon,XRP : xrpIcon}
let startSoft = false
let dynamicValues = { fee: 0.00004, currentPrice: 0, index: 0, sellShort: 'Buy Short', longSell: 'Buy Long', orderPrice: 0, tickPriceData: 0, playerCrypto: 0, playerCurrentFee: 0, playerMonney: 0, cryptoUnit: 'btc' }
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
    const [graphDisplay ,setGraphDisplay] = useState({width:600,height:600})
    const [spinnerImage ,setSpinnerImage] = useState(icons[stateDatas.cryptoUnit])
    const startButtonRef = useRef() 
    const chartRef = useRef()
    const spinnerRef = useRef()

    const navigate = useNavigate()

    useEffect(() => {
        let playerMonneyBuffer = 0
        if (!startSoft) {
            startSoft = true
            console.log(window.localStorage)
            let localStorage = window.localStorage.getItem('myWallet')
            if (!localStorage) window.localStorage.setItem('myWallet', stateDatas.playerMonney)
            else {
                setStateDatas({ playerMonney: localStorage, cryptoUnit: stateDatas.cryptoUnit })
                playerMonneyBuffer = localStorage
                formatPlayerMonney(localStorage)
            }
        } else {
            window.localStorage.setItem('myWallet', stateDatas.playerMonney)
            playerMonneyBuffer = stateDatas.playerMonney
            formatPlayerMonney(stateDatas.playerMonney)
        }
        if (playerMonneyBuffer === 0) {
            setStateDatas({ playerMonney: 1000, cryptoUnit: stateDatas.cryptoUnit })
            window.localStorage.setItem('myWallet', 1000)
            formatPlayerMonney(1000)
        }
        yAxisD.display = true
        paddingChart.right = 60
        graphheightandWidth()
        showFile(setCryptoDatas,stateDatas.cryptoUnit)
       
    }, [])
    const graphheightandWidth = () => {
        setGraphDisplay({width: window.innerWidth*0.94  , height:(window.innerHeight/1.6)})
    }
    useEffect(() => {
        if (cryptoDatas) {
            
            let bufferDatas = []
            for (let i = 0; i < 500; i++) {
                bufferDatas.push(cryptoDatas[i])
            }
            dynamicValues.index = 0
            setDrawIndex(0)
            updateCurrentPrice(bufferDatas, setCurrentPrice, dynamicValues)
            spinnerRef.current.classList.add('hide')
            chartRef.current.classList.remove('hide')
            chart(bufferDatas, dynamicValues.currentPrice)
            dynamicValues.playerMonney = stateDatas.playerMonney
            dynamicValues.cryptoUnit = stateDatas.cryptoUnit
            formatPlayerMonney(stateDatas.playerMonney)
            
        }
    }, [cryptoDatas])
    const startLoop = () => {
        startButtonRef.current.classList.add("hide")
        loopControler()
    }
    const formatPlayerMonney = (playerMonney) => {
        setPlayerMonney((Math.round(playerMonney * 100)) / 100)
    }
    const loopControler = () => {
        const interval = setInterval(() => {
            if (!document.querySelector('.playground-main')) {
                chartDestroy()
                clearInterval(interval)
            }
            dynamicValues.index++
            setDrawIndex(dynamicValues.index)
            let currentData = []
            if (document.querySelector('.playground-main')) {
            generateNewDatasAndUpdateChart(currentData, cryptoDatas, dynamicValues)
            updateCurrentPrice(currentData, setCurrentPrice, dynamicValues)
            updateTickPrice(dynamicValues)
            updateFlag(dynamicValues, setFlagColor)
            updateGain(setGain, dynamicValues)
            }
            if (dynamicValues.index >= 9500) {
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
            formatPlayerMonney(0)
            setSellShort('Sell')
            dynamicValues.sellShort = 'Sell'
            setLongSell('')
            dynamicValues.longSell = ''
            setOrderPrice(currentPrice)
            dynamicValues.orderPrice = currentPrice
        } else if (dynamicValues.playerMonney === 0 && playerCrypto < 0) {
        
            dynamicValues.playerMonney = - ((playerCrypto * orderPrice) + ((playerCrypto * orderPrice) - (playerCrypto *  currentPrice)) ) + (playerCrypto * currentPrice  * dynamicValues.fee)
            formatPlayerMonney(dynamicValues.playerMonney)
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
            formatPlayerMonney(dynamicValues.playerMonney)
            setPlayerCrypto(0)
            dynamicValues.playerCrypto = 0
            setSellShort('Buy Short')
            dynamicValues.sellShort = 'Buy Short'
            setLongSell('Buy Long')
            dynamicValues.longSell = 'Buy Long'
            setOrderPrice(0)
            dynamicValues.orderPrice = 0
        } else if (dynamicValues.playerMonney > 0 && playerCrypto === 0) {
            dynamicValues.playerCurrentFee = (dynamicValues.playerMonney * dynamicValues.fee)
            const transactionResult = -(dynamicValues.playerMonney - (dynamicValues.playerMonney * dynamicValues.fee)) / currentPrice
            setPlayerCrypto(transactionResult)
            dynamicValues.playerCrypto = transactionResult
            dynamicValues.playerMonney = 0
            formatPlayerMonney(0)
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
                <div className="playground-top">
                    <h2 className="current-price">current price :{currentPrice}$</h2>
                    <h2 className={"order " + flagColor}  >Order at : {orderPrice}</h2>
                    <h2 className="gain" >Gain : {gain}$</h2>
                </div>
                <div className="playground-top">
                    <h2 className="user-money">monney : {playerMonney} $ / {playerCrypto} {stateDatas.cryptoUnit}</h2>
                    <h2> fee : 0.004% </h2>
                    <div className="playground-index-menu"><h2 className="index">{drawIndex}/9500  </h2><div className="return-btn btn" onClick={returnMenu}>Menu</div>
                </div></div>
            </section>
            <div className = "chart-spinner-contenair">
            <div className="chart hide playground-chart" ref = {chartRef}>
                
                <canvas id="line-chart" width={graphDisplay.width+"px"} height={graphDisplay.height+"px"}></canvas>
            </div> 
             <img className="spinner" ref ={spinnerRef} height='128px' width='128px' src={spinnerImage} alt = "spinner"/>
            </div>
            <section className="buy-sell">
          
                <div  className="sell-btn btn" onClick={longOrSell}>{longSell}</div>
                <div ref ={startButtonRef} className ="start-btn btn" onClick={startLoop}> Start </div>
                <div className="buy-btn btn" onClick={shortOrSell}>{sellShort}</div>
            </section>
        </main>
    );
}

export default Playground;
