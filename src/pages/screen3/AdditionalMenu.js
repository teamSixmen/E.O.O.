import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getDrinkMenu } from '../../apis/menuAPI';
import { getSideMenu } from '../../apis/menuAPI';

import AdditionalMenuInfo from '../screen3/AdditionalMenuInfo';

function AdditionalMenu({selected, setSelected, totalPrice, setTotalPrice}){

    const [drink,setDrink] = useState([]);
    const [side,setSide] = useState([]);

    useEffect(()=>{
        setDrink(getDrinkMenu());
        setSide(getSideMenu());
    },[]);

    return(
        <>
            <div>
                {drink.map((menu)=><AdditionalMenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
            </div>
            <div>
                {side.map((menu)=><AdditionalMenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
            </div>
            <div style={{textAlign:'center',lineHeight:'50px',borderTop:'1px solid'}}>
                <Link to="/menu">추가하기</Link> | {" "}
                <Link to="/menu">취소</Link>
            </div>
        </>
    );
}

export default AdditionalMenu;