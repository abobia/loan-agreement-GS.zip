<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loan Agreement Form</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="container">
    <h1>Loan Agreement Form</h1>
    <form id="loanAgreementForm">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>

      <label for="ghanaCard">Upload or Take Ghana Card</label>
      <input type="file" id="ghanaCard" name="ghanaCard" accept=".jpg, .jpeg, .png, .pdf" capture="camera" required>

      <label for="phone">Phone</label>
      <input type="tel" id="phone" name="phone" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="address">Address</label>
      <input type="text" id="address" name="address" required>

      <label for="houseNumber">House Number</label>
      <input type="text" id="houseNumber" name="houseNumber" required>

      <label for="digitalAddress">Digital Address</label>
      <input type="text" id="digitalAddress" name="digitalAddress" required>

      <label for="town">Town</label>
      <input type="text" id="town" name="town" required>

      <label for="region">Region</label>
      <input type="text" id="region" name="region" required>

      <label for="occupation">Occupation/Position</label>
      <input type="text" id="occupation" name="occupation" required>

      <label for="loanPurpose">Loan Purpose</label>
      <input type="text" id="loanPurpose" name="loanPurpose" required>

      <label for="loanType">Type of Loan</label>
      <select id="loanType" name="loanType" required>
        <option value="business">Business Loan</option>
        <option value="salary">Salary Loan</option>
        <option value="pension">Pension Loan</option>
      </select>

      <label for="loanAmount">Loan Amount</label>
      <input type="number" id="loanAmount" name="loanAmount" required>

      <label for="duration">Duration of Loan (in months, max 8)</label>
      <input type="number" id="duration" name="duration" min="1" max="8" required>

      <label for="processingFee">Processing Fee (5% of Loan Amount)</label>
      <input type="number" id="processingFee" name="processingFee" readonly>

      <label for="commencementDate">Commencement Date</label>
      <input type="date" id="commencementDate" name="commencementDate" readonly>

      <label for="maturityDate">Maturity Date</label>
      <input type="date" id="maturityDate" name="maturityDate" readonly>

      <label for="paymentMode">Payment Mode</label>
      <select id="paymentMode" name="paymentMode" required>
        <option value="momo">MOMO PAYMENT</option>
        <option value="bank">Bank Transfer</option>
        <option value="cash">Cash Payment</option>
        <option value="controller">Controller Deduction</option>
      </select>

      <label for="monthlyInstallment">Monthly Installment</label>
      <input type="number" id="monthlyInstallment" name="monthlyInstallment" readonly>

      <label for="oneMonthLoanInstallment">One Month Loan Installment</label>
      <input type="number" id="oneMonthLoanInstallment" name="oneMonthLoanInstallment" readonly>

      <label for="guarantorName">Name of Guarantor</label>
      <input type="text" id="guarantorName" name="guarantorName" required>

      <label for="guarantorPhone">Phone Number of Guarantor</label>
      <input type="tel" id="guarantorPhone" name="guarantorPhone" required>

      <label for="guarantorEmail">Email of Guarantor</label>
      <input type="email" id="guarantorEmail" name="guarantorEmail">

      <label for="mandateNumber">Mandate Number</label>
      <input type="text" id="mandateNumber" name="mandateNumber" required>

      <label for="fourDigitCode">Four-Digit Code</label>
      <input type="text" id="fourDigitCode" name="fourDigitCode" maxlength="4" required>

      <label for="nationalId">Upload National ID Card</label>
      <input type="file" id="nationalId" name="nationalId" accept=".jpg, .jpeg, .png, .pdf" required>

      <label for="terms">
        <input type="checkbox" id="terms" name="terms" required>
        I accept the Terms and Conditions
      </label>

      <button type="button" id="submitButton">Submit</button>
    </form>
  </div>

  <!-- Modal for agreement confirmation -->
  <div id="confirmationModal" class="modal">
    <div class="modal-content">
      <h2>Please Read Carefully</h2>
      <p>
        Please read this section carefully, and I have read, understood, and accepted the agreement.
        I hereby understand and acknowledge that the affordability and commitment of my guarantor play a vital role in securing this loan. In case I, the borrower, fail to meet my financial obligations by missing two consecutive installment payments, I hereby authorize Goodseed Hire Purchase Ltd. on behalf of Goodseed Microcredit Enterprise to make withdrawals from the salary of my guarantor to cover the outstanding balance and any accumulated penalties at the current interest rate charged, as stipulated in the loan agreement.
      </p>
      <p>
        This authorization remains in effect for the duration of the loan agreement and until all financial obligations are met in full. I understand that these salary withdrawals will be executed in accordance with the terms and conditions of the loan agreement.
      </p>
      <p>
        I further acknowledge that my guarantor is aware of and consents to this arrangement. I have communicated to the guarantor the potential implications of this authorization, and they have agreed to fulfill this commitment.
      </p>
      <p>
        I, the borrower, affirm my commitment to the terms of this loan agreement and this authorization note. I understand the importance of fulfilling my financial responsibilities and ensuring that my guarantor is protected to the best of my ability.
      </p>
      <h3>Termination of Authorization:</h3>
      <p>
        The authorization for salary withdrawals shall be terminated upon the full repayment of the loan and all other accrued penalties by the borrower.
      </p>
      <h3>Penalties and Interest Rates:</h3>
      <p>
        The borrower acknowledges and agrees that, in the event of missed installments, penalties and interest will be applied at the current interest rate, as specified in the Loan Details section of this agreement. 15% on the installment for late payment beyond the accepted payment date and 25% of the principal if the loan exceeds the maturity date.
      </p>
      <h3>Confidentiality:</h3>
      <p>
        All financial and personal information shared by the parties, including the guarantor's salary information, will be treated confidentially by the lender.
      </p>
      <h3>Unauthorized Guarantor Documents:</h3>
      <p>
        Valid loan security documents must have explicit guarantor consent. Unauthorized submissions release Goodseed Microcredit from liability. We retain the right to reject such documents, verify consent, and take legal action in cases of false information, with the borrower assuming associated liabilities within legal bounds.
      </p>
      <p>
        This agreement is effective from the date of signing and shall remain in effect until the loan is fully repaid.
      </p>
      <button id="confirmSubmit">I Accept</button>
      <button id="cancelSubmit">Cancel</button>
    </div>
  </div>

  <script src="scripts.js"></script>
</body>
</html>
/* Base styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
}

.container {
  width: 50%;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}
input,
select {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 15px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

button:hover {
  background-color: #0056b3;
}

/* Modal styles */
.modal {
  display: none; /* Hidden by default */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 8px;
}

.modal-content h2 {
  margin-top: 0;
}

.modal-content p {
  margin-bottom: 15px;
}

.modal-content button {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#confirmSubmit {
  background-color: #28a745;
  color: white;
}

#cancelSubmit {
  background-color: #dc3545;
  color: white;
}
// Helper function to calculate the number of working days between two dates
function calculateWorkingDays(startDate, endDate) {
  let count = 0;
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Ignore Sundays and Saturdays
      count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return count;
}

document
  .getElementById("loanAgreementForm")
  .addEventListener("input", function (event) {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const duration = parseInt(document.getElementById("duration").value);
    const currentDate = new Date();

    if (!isNaN(loanAmount) && !isNaN(duration)) {
      // Calculate processing fee (5% of loan amount)
      const processingFee = loanAmount * 0.05;
      document.getElementById("processingFee").value = processingFee.toFixed(2);

      // Calculate start date (22 working days after today)
      let startDate = new Date(currentDate);
      let workingDaysAdded = 0;
      while (workingDaysAdded < 22) {
        startDate.setDate(startDate.getDate() + 1);
        if (startDate.getDay() !== 0 && startDate.getDay() !== 6) {
          workingDaysAdded++;
        }
      }
      document.getElementById(
        "commencementDate"
      ).value = startDate.toISOString().split("T")[0];

      // Calculate maturity date (start date plus loan duration in months)
      const maturityDate = new Date(startDate);
      maturityDate.setMonth(maturityDate.getMonth() + duration);
      maturityDate.setDate(startDate.getDate()); // Ensure the day is consistent
      document.getElementById(
        "maturityDate"
      ).value = maturityDate.toISOString().split("T")[0];

      // Calculate monthly installment (simple interest of 6.5% per month, divided by duration)
      const interestRate = 0.065;
      const totalInterest = loanAmount * interestRate * duration;
      const totalAmount = loanAmount + totalInterest;
      const monthlyInstallment = totalAmount / duration;
      document.getElementById(
        "monthlyInstallment"
      ).value = monthlyInstallment.toFixed(2);

      // Calculate one month loan installment (10% interest on loan amount)
      const oneMonthLoanInstallment = loanAmount * 1.1;
      document.getElementById(
        "oneMonthLoanInstallment"
      ).value = oneMonthLoanInstallment.toFixed(2);
    }
  });

document.getElementById("submitButton").addEventListener("click", function () {
  document.getElementById("confirmationModal").style.display = "block";
});

document.getElementById("confirmSubmit").addEventListener("click", function () {
  document.getElementById("confirmationModal").style.display = "none";
  alert("Loan agreement form has been submitted!");
  // Submit the form here
  document.getElementById("loanAgreementForm").submit();
});

document.getElementById("cancelSubmit").addEventListener("click", function () {
  document.getElementById("confirmationModal").style.display = "none";
});
