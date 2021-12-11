import BTC from '../../data/BTC.txt'
import ADA from '../../data/ADA.txt'
import BNB from '../../data/BNB.txt'
import ETH from '../../data/ETH.txt'
import SOL from '../../data/SOL.txt'
import XRP from '../../data/XRP.txt'

export const showFile =  async (setCryptoDatas,cryptoUnit ) => {
  let cryptoData 
  console.log(cryptoUnit)
  if (cryptoUnit === 'bitcoin' )cryptoData  = BTC
  else if (cryptoUnit === 'ADA')cryptoData  = ADA
  else if (cryptoUnit === 'BNB')cryptoData  = BNB
  else if (cryptoUnit === 'Ether')cryptoData  = ETH
  else if (cryptoUnit === 'Solana')cryptoData = SOL
  else if (cryptoUnit === 'XRP')cryptoData = XRP

    fetch(cryptoData )
   .then(r => r.text())
   .then(text => {
     let bufferText =JSON.parse(text)
     randomData(setCryptoDatas , bufferText)
   });
   }
   const randomData = (setCryptoDatas ,bufferText ) => {
     let randomValues = bufferText.array
     let rnd  = Math.random() * (randomValues.length - 10000)
     randomValues = randomValues.slice(rnd  ,rnd + 10000 )
      setCryptoDatas(randomValues)
   }