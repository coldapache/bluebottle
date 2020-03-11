import React from 'react';
import styled from 'styled-components';


const BannerWrapper = styled.div`
    background-color: #01a1dd;
    font-family: "Avenir Next", Avenir, Roboto, "Century Gothic", "Franklin Gothic Medium", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
`;

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        
    }

    render() {
        return (
            <BannerWrapper>
                <span>FREE SHIPPING on orders over $50 </span>
                <span><a href="#">Shop Now</a></span>
            </BannerWrapper>
        )
    }

}
 
export default Banner;