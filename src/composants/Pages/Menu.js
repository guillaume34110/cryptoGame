import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cryptolist } from '../../data/CryptoList';

let startSoft = false
const Menu = ({stateDatas , setStateDatas}) => { 
    const navigate = useNavigate()
    const selectCrypto = (e) => {
        setStateDatas({playerMonney : stateDatas.playerMonney ,cryptoUnit : e.target.value})
    }
  const playGame = () => {
      navigate('/playground')
  }
useEffect(() => {
    let playerMonney = 0
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
}, [])

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

        </div>
    );
}

export default Menu;
