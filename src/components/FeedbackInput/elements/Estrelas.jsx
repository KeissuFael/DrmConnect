import { useState } from "react"
import { Angry, Frown, Meh, Smile, Laugh } from 'lucide-react';

export default function Estrelas({funcao}){
    const estrela1 = document.getElementById("estrela1")
    const estrela2 = document.getElementById("estrela2")
    const estrela3 = document.getElementById("estrela3")
    const estrela4 = document.getElementById("estrela4")
    const estrela5 = document.getElementById("estrela5")

    function verificarCheckBox(){
        const estrelas = [estrela1, estrela2, estrela3, estrela4, estrela5]
        let estrelasMarcadas = 0
        for(let i = 0; i < estrelas.length; i++){
            if(estrelas[i].checked){
                estrelasMarcadas++
            }
        }
        funcao(estrelasMarcadas)
    }
    return(
        <>
        <div className="estrelas">
        <div style={{display: "flex", justifyContent: "center", margin: "10px 0"}}>
        <input type="checkbox"  id="estrela1" onClick={() => verificarCheckBox()} className="estrela-checkbox"/>
        <label htmlFor="estrela1" className="estrela-label"><Angry size={40}/></label>
        <input type="checkbox"  id="estrela2" onClick={() => {estrela1.checked = true, verificarCheckBox()}} className="estrela-checkbox"/>
        <label htmlFor="estrela2" className="estrela-label"><Frown size={40}/></label>   
        <input  type="checkbox"  id="estrela3" onClick={() => {estrela2.checked = true, estrela1.checked = true, verificarCheckBox()}} className="estrela-checkbox"/>
        <label htmlFor="estrela3" className="estrela-label"><Meh size={40}/></label>
        <input type="checkbox"  id="estrela4" onClick={() => {estrela3.checked = true, estrela2.checked = true, estrela1.checked = true, verificarCheckBox()}} className="estrela-checkbox"/>
        <label htmlFor="estrela4" className="estrela-label"><Smile size={40}/></label>
        <input type="checkbox"  id="estrela5" onClick={() => {estrela4.checked = true, estrela3.checked = true, estrela2.checked = true, estrela1.checked = true, verificarCheckBox()}} className="estrela-checkbox"/>
        <label htmlFor="estrela5" className="estrela-label"><Laugh size={40}/></label>
        </div>
        </div>
        </>
    )
}