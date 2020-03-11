import React from 'react';
import blueBottle from '../blue-bottle.svg';
import cart from '../cart.svg';
import flag from '../flag.svg';
import styled from 'styled-components';


const NavbarWrapper = styled.div`
    background-color: white;
    font-family: "Avenir Next", Avenir, Roboto, "Century Gothic", "Franklin Gothic Medium", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: space-between;

    `;

const NavItemsWrapper = styled.div`
    width: 22%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
`;    

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        
    }

    render() {
        return (
            <NavbarWrapper>
               <NavItemsWrapper>
                <img src={blueBottle} />
                <span>SHOP</span>
                <span>VISIT</span>
                <span>LEARN</span>
               </NavItemsWrapper>

               <NavItemsWrapper>
                   <span>SUBSCRIBE</span>
                   <span>SIGN IN</span>
                   <img src={cart} />
                   <img src={flag} />
               </NavItemsWrapper>

            </NavbarWrapper>
        )
    }

}
 
export default Navbar;