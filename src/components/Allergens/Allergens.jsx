import React from 'react';
import { CgAsterisk } from 'react-icons/cg';

function Allergens({product, ...props}) {
    return (
        <div {...props}>
            <CgAsterisk/><span>Аллергены: {product.allergens}</span>
        </div>
    );
}

export default Allergens;