import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cryptolist } from '../../data/CryptoList';
import { chart, chartDestroy, paddingChart, yAxisD } from '../depedances/chartConfig';
import { generateNewDatasAndUpdateChart, menuLoopChart, updateTickPrice } from '../depedances/gameLoop';
import { showFile } from '../depedances/txtToObject';
import btcIcon from '../../assets/coin/bitcoin.png'
import adaIcon from '../../assets/coin/ada.png'
import ethIcon from '../../assets/coin/ethereum.png'
import solanaIcon from '../../assets/coin/solana.png'
import xrpIcon from '../../assets/coin/xrp.png'
import bnbIcon from '../../assets/coin/binance.png'

let icons = [btcIcon, adaIcon, ethIcon, bnbIcon, solanaIcon, xrpIcon]
let startSoft = false
let dynamicValues = { fee: 0.00004, currentPrice: 0, index: 0, sellShort: 'Buy Short', longSell: 'Buy Long', orderPrice: 0, tickPriceData: 0, playerCrypto: 0, playerCurrentFee: 0, playerMonney: 0, cryptoUnit: 'btc' }
const Menu = ({ stateDatas, setStateDatas }) => {
    const [cryptoDatas, setCryptoDatas] = useState()
    const [graphDisplay, setGraphDisplay] = useState({ width: 600, height: 600 })
    const [playerMonney, setPlayerMonney] = useState(0)
    const navigate = useNavigate()

    const playGame = (e) => {
        setStateDatas({ playerMonney: stateDatas.playerMonney, cryptoUnit: e.target.dataset.icon })
        chartDestroy()
        navigate('/playground')
    }
    useEffect(() => {
        let playerMonneyBuffer = 0
        graphheightandWidth()
        yAxisD.display = false
paddingChart.right = 0
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
        dynamicValues.index = 0
        showFile(setCryptoDatas, 'Bitcoin')
    }, [])
    const formatPlayerMonney = (playerMonney) => {
        setPlayerMonney((Math.round(playerMonney * 100)) / 100)
    }
    const graphheightandWidth = () => {
        setGraphDisplay({ width: window.innerWidth, height: window.innerHeight })
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
    }, [cryptoDatas])

    const loopControler = () => {
        const interval = setInterval(() => {
            if (!document.querySelector('.menu')) {
                chartDestroy()
                clearInterval(interval)
            }
            let currentData = []
            dynamicValues.index++
            updateTickPrice(dynamicValues)
            menuLoopChart(dynamicValues)
            generateNewDatasAndUpdateChart(currentData, cryptoDatas, dynamicValues)
        }, 200)
        return () => clearInterval(interval);
    }
    const unhideCryptoname = (e) => {
        const target = document.querySelector(`.name-${e.target.dataset.icon}`)
        target.classList.remove('opa0')
    }
    const hideCryptoname = (e) => {
        const target = document.querySelector(`.name-${e.target.dataset.icon}`)
        target.classList.add('opa0')
    }
    return (
        <div className="menu">
            <div>
                <h1>CryptoGame</h1>
                <p>Trading simulator for future on binance </p>
            </div>

            <div className="left-section">
                <div className="wallet">
                    <h2>Wallet :  {playerMonney}$</h2>
                </div>
            </div>
            <div>
            <p className="crypto-label">Choice a Crypto to start high speed tradding : </p>
            <div className="crypto-select">
                {cryptolist.map((crypto, index) => {
                    return (
                        <div key={index} className="img-contenair">
                            <img onMouseLeave={hideCryptoname} onMouseEnter={unhideCryptoname} onClick={playGame} data-icon={crypto} className={"icons " + crypto}  src={icons[index]} alt={crypto} />
                            <p className={"name-" + crypto + " opa0"}>{crypto}</p>
                        </div>
                    )
                })}
</div>
            </div>
            <p>10.000 radom data for the selected Crypto </p>

            <div className="menu-chart">
                <canvas id="line-chart" width={graphDisplay.width + "px"} height={graphDisplay.height + "px"}></canvas>
            </div>
        </div>
    );
}

export default Menu;
