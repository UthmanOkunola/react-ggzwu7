import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
position: relative;
left: 0;
top: 0;
background: rgb(255, 255, 255);
z-index: 2;
box-shadow: rgb(255 255 255) 0px -1px;
border-bottom: 0.01px solid rgb(225, 225, 235);
height: 4rem;
    nav.navbar{
        display: flex;
        justify-content: space-between;
        position: relative;
        align-items: center;
        height: 4rem;
        top: 10px;
    }
    ul.navbar {
        display: flex;
        list-style-type: none;
        align-items: center;
    }li a {
        text-decoration: none;
    
    }ul li {
        position: relative;
        margin: 15px;
    }
    li a {
        color: black;
        font-weight: bold;
    }
`;
