import React from 'react';
import index from './index.css';
import {useState,useEffect} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Body (props){

	const [items,setitems] = useState([])

	useEffect(()=>{
		fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
		.then(response => response.json())
		.then(data=>{setitems(data.meals)})
	},[])
	const itemlist = items.map(item=>{
		return <div className="col-md-4">
		<img src={item.strMealThumb}/>
		<p>{item.strMeal}</p>
		<p>{item.idMeal} </p>


		</div>
	})
	return (
		<div className="row mt-5">
		{itemlist}
		</div>
	)
}
export default Body;
