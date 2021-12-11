import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cryptolist } from '../../data/CryptoList';
import { chart, chartDestroy, yAxisD } from '../depedances/chartConfig';
import { generateNewDatasAndUpdateChart, updateCurrentPrice, updateTickPrice } from '../depedances/gameLoop';
import { showFile } from '../depedances/txtToObject';

let startSoft = false
let dynamicValues  = { fee: 0.00004, currentPrice: 0, index: 0, sellShort: 'Buy Short', longSell: 'Buy Long', orderPrice: 0, tickPriceData: 0, playerCrypto: 0, playerCurrentFee: 0, playerMonney: 0, cryptoUnit: 'btc' }
const Menu = ({stateDatas , setStateDatas}) => { 
    const [cryptoDatas, setCryptoDatas] = useState()
    const [graphDisplay ,setGraphDisplay] = useState({width:600,height:600})
    const navigate = useNavigate()
    const selectCrypto = (e) => {
        setStateDatas({playerMonney : stateDatas.playerMonney ,cryptoUnit : e.target.value})
    }
  const playGame = () => {
      navigate('/playground')
  }
useEffect(() => {
    let playerMonney = 0
    graphheightandWidth()
    yAxisD.display = false
    if (!startSoft){
        startSoft = true
        console.log(window.localStorage)
    let localStorage = window.localStorage.getItem('myWallet')
    if (!localStorage) window.localStorage.setItem('myWallet',stateDatas.playerMonney)
    else {
        setStateDatas({playerMonney : localStorage ,cryptoUnit : stateDatas.cryptoUnit}) 
        playerMonney = localStorage
    }
}else{
    window.localStorage.setItem('myWallet',stateDatas.playerMonney)
    playerMonney = stateDatas.playerMonney
}
if (playerMonney === 0) {
    setStateDatas({playerMonney : 1000 ,cryptoUnit : stateDatas.cryptoUnit})
    window.localStorage.setItem('myWallet',1000)
}
dynamicValues.index = 0

    showFile(setCryptoDatas,'bitcoin')

}, [])
const graphheightandWidth = () => {
    setGraphDisplay({width: window.innerWidth , height:window.innerHeight})
}
useEffect(() => {
     if (cryptoDatas) {
    let bufferDatas = []
    for (let i = 0; i < 500; i++) {
        bufferDatas.push(cryptoDatas[i])
    }
    dynamicValues.index = 0
    
    chart(bufferDatas, dynamicValues.currentPrice)
    loopControler()
}
},[cryptoDatas])

const loopControler = () => {
    const interval = setInterval(() => {
        if (!document.querySelector('.menu')) {
            chartDestroy()
            clearInterval(interval)
        }
        let currentData = []
        dynamicValues.index++
        updateTickPrice(dynamicValues)
        generateNewDatasAndUpdateChart(currentData, cryptoDatas, dynamicValues)
        
    }, 200)
    return () => clearInterval(interval);
}
    return (
        <div className = "menu">
             <h1>CryptoGame</h1>
             <div className="main-section">
            <div className = "left-section">
                <div>
                <p>Wallet :</p>
                <div><p>{stateDatas.playerMonney}$</p></div>
                </div>
            </div>
            <div>
            <label htmlFor = "crypto">Crypto :</label>
                <select id ="crypto" onChange ={selectCrypto} >
                ${cryptolist.map((crypto ,  index)=> {
                    return <option key = {index}  value = {crypto}>{crypto}</option>
                })}
                </select>
        </div>
        </div>
        <div className = "play" onClick ={playGame}><p>Play</p></div>
        <div className="menu-chart">
                <canvas id="line-chart" width={graphDisplay.width+"px"} height={graphDisplay.height +"px"}></canvas>
            </div>
        </div>
    );
}

export default Menu;
