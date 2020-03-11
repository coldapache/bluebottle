import React from 'react';
import styled from 'styled-components';


const ProductAreaWrapper = styled.div`
    background-color: white;
`;

class ProductArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        
    }

    render() {
        return (
            <ProductAreaWrapper>
                <span>Coffee</span>
                <div>
                    <img src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_490,w_490/v1553638574/wygfu1tyh62zyc4ptajq.jpg" />
                    <h3>Coffee</h3>
                    <h4>Price $45</h4>

                </div>
            </ProductAreaWrapper>
        )
    }

}
 
export default ProductArea;