import React from 'react';
import styled from 'styled-components';


const SubnavWrapper = styled.div`
    background-color: #e5e5e5;
    color: #555;
    font-family: "Avenir Next", Avenir, Roboto, "Century Gothic", "Franklin Gothic Medium", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    padding: 1em;
    justify-content: space-between;
`;

const SubnavItemsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   width: 50%;
   margin-left: 10%;
`;

const SearchImage = styled.i`
background-image: url(https://bluebottlecoffee.com/assets/svgs/search-gray-25431d1….svg);
`;

class Subnav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        
    }

    render() {
        return (
            <SubnavWrapper>
                <SubnavItemsWrapper>
                    <span>SHOP ALL</span>
                    <span>COFFEE</span>
                    <span>BREWING</span>
                    <span>GIFT CARDS</span>
                    <span>MORE</span>
                </SubnavItemsWrapper>
                <SubnavItemsWrapper>
                    <SearchImage />
                    <input type="search" placeholder="Search Store">

                    </input>
                </SubnavItemsWrapper>
            </SubnavWrapper>
        )
    }

}
 
export default Subnav;