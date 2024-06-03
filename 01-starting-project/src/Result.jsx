import { calculateInvestmentResults } from "./util/investment.js";
import { formatter } from "./util/investment.js";

function calculateTotalInterest(result) {
  let totalInterest = [];
  if (result.length > 0) {
    totalInterest.push(result[0].interest);
    for (let i = 1; i < result.length; i++) {
      totalInterest.push(result[i].interest + totalInterest[i - 1]);
    }
  }
  return totalInterest;
}

function calculateInvestedCapital(result, totalInterest) {
  let investedCapital = [];
  if (result.length > 0) {
    for (let i = 0; i < result.length; i++) {
      investedCapital.push(result[i].valueEndOfYear - totalInterest[i]);
    }
  }
  return investedCapital;
}

export default function Result({ obj }) {
  const result = calculateInvestmentResults(obj);
  const totalInterest = calculateTotalInterest(result);
  const investedCapital = calculateInvestedCapital(result, totalInterest);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>{`Interest (Year)`}</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest[index])}</td>
              <td>{formatter.format(investedCapital[index])}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
