import React, { useEffect, useState } from "react";
import * as S from '../../pages/detail.styles.js'

const TabContent = (props) => {
    const [fade, setFade] = useState('');
    useEffect(()=>{
        let tabTime = setTimeout(() => {
            setFade('end');    
        }, 100);
        return ()=>{
            clearTimeout(tabTime);
            setFade('')
        }
    }, [props.tabNum])

    return (
        props.tabObj.map((item, index)=>{
            return (
                <S.TabContentWrap className={'start ' + fade} key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </S.TabContentWrap>
            )
        })[props.tabNum]
    )
}

export default TabContent;