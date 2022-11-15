import React from 'react';

function ProductNutrients({product}) {
    return (
        <table className="table-auto border mb-4">
        <thead>
            <tr>
                <th className="border border-slate-300 bg-slate-100 px-4 py-2">Ккал</th>
                <th className="border border-slate-300 bg-slate-100 px-4 py-2">Белки</th>
                <th className="border border-slate-300 bg-slate-100 px-4 py-2">Жиры</th>
                <th className="border border-slate-300 bg-slate-100 px-4 py-2">Углеводы</th>
               
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border border-slate-300  px-4 py-2">{product.nutritionals.calories}</td>
                <td className="border border-slate-300  px-4 py-2">{product.nutritionals.proteins}</td>
                <td className="border border-slate-300  px-4 py-2">{product.nutritionals.fats}</td>
                <td className="border border-slate-300  px-4 py-2">{product.nutritionals.carbohydrates}</td>
            </tr>
        </tbody>
    </table>

    );
}

export default ProductNutrients;