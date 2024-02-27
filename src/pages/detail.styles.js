import styled from 'styled-components';

export const TabWrap = styled.div`

    margin:0 auto;
    margin-top:40px;
    width:60%;
    border-bottom:1px solid #ddd;
    box-sizing:border-box;
    button {
        position:relative;
        padding:0 10px;
        height:30px;
        background-color:#fff;
        border:1px solid transparent;
        outline:none;
        span {
            display:block;
            height:100%;
            background-color:#fff;
        }
        &.active {
            border:1px solid #ddd;
            border-bottom:none;
            span {
                &::after {position:absolute;left:0;bottom:-1px;content:"";width:100%;height:1px;background-color:#fff;}
                border-bottom:1px solid #fff;
            }
        }
    }

`


/* Start Tab components */
export const TabContentWrap = styled.div`
    box-sizing:border-box;
    button {
        box-sizing:border-box;
    }
    &.start {
        opacity:0;
    }
    &.end {
        opacity:1;
        transition:all 0.5s;
    }
`


/* End Tab components */