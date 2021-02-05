//  put nav and name and checkout price here.
import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Header.css'; 


function Header() {


    const checkTot = useSelector(store => store.pizzaReducer);

    const pricer = (checkTot.price, 0) ; {
        const checkoutCost = checkTot.price.reduce(pizza, 0)
    }
 
    return (
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
               <p id="checkout">Checkout Total:{checkoutCost}</p>

                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/customerinfo">Customer Info</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;


// function EmployeeTotal({ employeeList }) {

//   const calculateMonthlyCost = employeeList => {
//     /*
//     This is the callback used by reduce
//     It will be called for each thing in the array.
//     Whatever it returns will be passed to the next call, in the `sum` variable
//     When the reduce is complete, it passes the final sum to the reduce function.
//     The sum of all the things is returned to who called reduce!
//     */
// const employeeSalary = (sum, employee) => sum + Number(employee.annualSalary);

// /* 
// Reduce is an array method, like .map()
// .reduce() executes the callback function once for each element present in the array
// The 0 is the starting value -- every call to employeeSalary() increases that value
// by the employees annual salary.
// Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// */
// const annualEmployeeCost = employeeList.reduce(employeeSalary, 0)

// return annualEmployeeCost / 12;
//   }

// return (
//     <p>Total Monthly Cost: {calculateMonthlyCost(employeeList)}</p>
// );
// }

// export default EmployeeTotal;
