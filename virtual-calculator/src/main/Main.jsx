import './Main.css';
import React from 'react';
import { useState } from 'react';

export default function Main() {
    return (
        <div className='home'>
        <div className="main">
            <h1>Calculadora Virtual</h1>
            <p className='p2'>Use para somar seus valores.</p>
          
          <p>Calculadora de Soma online simples e prática.</p>
        </div>

        <div className="right">
            
                
                <div className="accept">
                <h3 className='text-right'>Exemplo: 20 + 20 = 40</h3>
                <h2 className='input-text'>Coloque seu Número:</h2>
                <input type="number" id="numero"  />
                <h4>+</h4>
                <input type="number" id="numero2" />
                <input type="button" id='resultado' value="Somar" onClick={click}/>
              </div>

        </div>

        </div>
        
    )
}
function click(){
    var numero = document.getElementById('numero').value;
    var numero2 = document.getElementById('numero2').value;
    var resultado = document.getElementById('resultado');
    resultado.value = parseInt(numero) + parseInt(numero2);
}