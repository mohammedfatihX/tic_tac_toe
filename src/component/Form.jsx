import React ,{useState} from 'react'





export default function Form(){

    let [formData ,setFormData] = useState({firstname:'mohammed',lastname:'fatih',comment:'as i told you i feel so dumb , and i famble every chance i get',gender:'Others'})
    
    let option =["Male","Female","Others"]
    let colorOption =['--chose--','red','blue','voilte','orange','black','yellow']
    function getInput(event){
        let {name ,value,type,checked} = event.target
            console.log(name,value,type,checked)
        setFormData(prev => {
            return {...prev,[name]: type === 'checkbox'?checked :value}})
    }

return(
    <> 
        <div className='b'>
            <input type="text" placeholder="First Name" name="firstname" value={formData.firstname} onChange={getInput} />

        </div>
        <div className="b">
            <input type="text" placeholder="Last Name" name="lastname" value={formData.lastname} onChange={getInput} />

        </div>
        <div className="b">
            <textarea name="comment" placeholder="write you comment here" value={formData.comment} onChange={getInput}/>

        </div>
        <div className="b">
            <input type='checkbox' id="isLegalAge" name="isLegaleAge" onChange={getInput}/>
            <label htmlFor="isLegalAge">is your age above 18 </label>

        </div>
        <div className="b">
            <fieldset>
                    <legend>what are you </legend>

                        {option.map(option =>{
                            return(
                                <div className="sb">
                            <input name='gender' type='radio' value={option} id={option} checked={formData.gender === option} onChange={getInput}/>
                            <label htmlFor={option}>{option}</label>
                        </div>
                            )
                        })}
            </fieldset>

        </div>
        <select className='b'  id="favoriteColor" name='favoriteColor' value={formData.favoriteColor} onChange={getInput}>
          {colorOption.map(item =>  <option key={item} value={item}>{ [...item].with(0,item[0].toUpperCase())}</option>)}
               
        </select>
        <div className="b">
            <button onClick={() => console.log(formData)}>getdata</button>    
        </div>

    </>
)
    
}