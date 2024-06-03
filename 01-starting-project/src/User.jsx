export default function User({
  setInitialInvestment,
  setAnnualInvestment,
  setExpectedReturn,
  setDuration,
}) {
  const handleChangeValues = (event, name) => {
    switch (name) {
      case "initial-investment":
        setInitialInvestment(Number(event.target.value));
        break;
      case "annual-investment":
        setAnnualInvestment(Number(event.target.value));
        break;
      case "expected-return":
        setExpectedReturn(Number(event.target.value));
        break;
      case "duration":
        if (event.target.value < 0) event.target.value = 0;
        if (event.target.value > 12) event.target.value = 12;
        setDuration(Number(event.target.value));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label for="initial-investment">Initial Investment</label>
            <input
              type="number"
              onChange={(e) => handleChangeValues(e, "initial-investment")}
            ></input>
          </p>
          <p>
            <label for="annual-investment">Annual Investment</label>
            <input
              type="number"
              onChange={(e) => handleChangeValues(e, "annual-investment")}
            ></input>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label for="expected-return">Expected Return</label>
            <input
              type="number"
              onChange={(e) => handleChangeValues(e, "expected-return")}
            ></input>
          </p>
          <p>
            <label for="duration">Duration</label>
            <input
              type="number"
              onChange={(e) => handleChangeValues(e, "duration")}
            ></input>
          </p>
        </div>
      </div>
    </>
  );
}
