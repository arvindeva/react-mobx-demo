import React from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';

@inject('incomeDomainStore')
@inject('incomeUiStore')
@observer
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="number"
            placeholder="Income"
            className="income-input"
            onChange={event =>
              this.props.incomeDomainStore.setIncome(event.target.value)
            }
          />
          <button
            type="button"
            className="calculate-btn"
            onClick={() => this.props.incomeUiStore.showCalculation()}
          >
            Calculate
          </button>
          {this.getCalculation()}
        </header>
      </div>
    );
  }

  getCalculation() {
    if (!this.props.incomeUiStore.shouldShowCalculations) return null;
    return (
      <div>
        <p>Income: ${this.props.incomeDomainStore.incomeBeforeTax}.00</p>
        <p>
          Tax Percentage:
          {this.props.incomeDomainStore.calculatedTaxPercentage}%
        </p>
        <p>
          Income after tax: $
          {this.props.incomeDomainStore.calculatedIncomeAfterTax}.00
        </p>
      </div>
    );
  }
}

export default App;
