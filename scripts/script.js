$('.registration-btn').on('click', () => {
  const options = $('#registrationType + .dropdown-menu > li');
  for (option of options) {
    $(option).on('click', registrationTypeHandler);
  }
});

// For test purpose
const options = $('#registrationType + .dropdown-menu > li');
for (option of options) {
  $(option).on('click', registrationTypeHandler);
}
// --------------------

function registrationTypeHandler(event) {
  $('#registerButton').addClass('d-block');
  $('#registerButton').removeClass('d-none');
  const option = event.target.innerText;
  console.log(option);
  if (option === 'Hackathon') {
    renderFormForHackathon();
  } else if (option === 'Panel Discussion') {
    renderFormForPanelDiscussion();
  } else if (option === 'Seminar') {
    renderFormForSeminar();
  } else {
    renderFormForWorkshop();
  }
}

function renderFormForHackathon() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();

  const element = $(`
  <p class="fee">BDT 1000  is required for participating</p>
  <div class="mb-3">
  <label for="hackathon" class="form-label"
    >Payment Method</label
  >
  <div class="payment-container">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Payment"
        id="payment"
      />
      <label class="form-check-label" for="payment">
        bKash
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Payment"
        id="payment"
      />
      <label class="form-check-label" for="payment">
        Rocket
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Payment"
        id="payment"
      />
      <label class="form-check-label" for="payment">
        Nagad
      </label>
    </div>
  </div>
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Transaction Number</label
  >
  <input
    type="text"
    class="form-control"
    id="transactionNumber"
    name="Transaction"
    placeholder="Enter your transaction number"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label">Team Name</label>
  <input
    type="text"
    class="form-control"
    id="teamName"
    name="Team Name"
    placeholder="Enter your team name"
  />
</div>

<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Team Leader Name</label
  >
  <input
    type="text"
    class="form-control"
    id="teamLeaderName"
    name="Team Leader Name"
    placeholder="Enter your team leader name"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Team Leader Phone</label
  >
  <input
    type="number"
    min="0"
    class="form-control"
    id="teamLeaderPhone"
    name="Team Leader Phone"
    placeholder="Enter your team leader phone"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Team Leader Email</label
  >
  <input
    type="email"
    class="form-control"
    id="teamLeaderEmail"
    name="Team Leader Email"
    placeholder="Enter your team leader email"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Team Leader University</label
  >
  <input
    type="text"
    class="form-control"
    id="teamLeaderUniversity"
    name="Team Leader University"
    placeholder="Enter your team leader university"
  />
</div>
  <div class="btn btn-info" id="addMoreMemberButton">
      Add more 2 member
  </div>
  `);
  container.append(element);
  changeTitle('Registering For Hackathon');
  changeButtonText('Hackathon');
  addMessageOnModal('BDT 1000 is required for participating');
  console.log($('#addMoreMemberButton'));
  setTimeout(() => {
    $('#addMoreMemberButton').on('click', addMoreMember);
  }, 3000);
}

function renderFormForPanelDiscussion() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();

  const element = $(`
  <p class="fee">No fee is required for participating</p>
  <div class="mb-3">
    <label for="Pannel Discussion" class="form-label"
      >Name</label
    >
    <input
      type="text"
      class="form-control"
      id="name"
      name="Name"
      placeholder="Enter your name"
    />
  </div>
  <div class="mb-3">
    <label for="Pannel Discussion" class="form-label"
      >Phone</label
    >
    <input
      type="number"
      class="form-control"
      id="phone"
      name="Phone"
      min="0"
      placeholder="Enter your phone number"
    />
  </div>
  <div class="mb-3">
    <label for="Pannel Discussion" class="form-label"
      >University</label
    >
    <input
      type="text"
      class="form-control"
      id="university"
      name="University"
      placeholder="Enter your university name"
    />
  </div>
  <div class="mb-3">
    <label for="Pannel Discussion" class="form-label"
      >Email address</label
    >
    <input
      type="email"
      class="form-control"
      id="email"
      name="Email"
      placeholder="name@example.com"
    />
  </div>
  <div class="mb-3">
  <label for="Pannel Discussion" class="form-label">Select Panel Discussion</label>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="Panel" id="panel" value="Importance of Data in Health">
      <label class="form-check-label" for="panel">
        Importance of Data in Health
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="Panel" id="panel" value="Importance of Data in Education Sector">
      <label class="form-check-label" for="panel">
      Importance of Data in Education Sector
      </label>
    </div>
  </div>
</div>
  `);
  container.append(element);
  changeTitle('Registering For Panel Discussion');
  changeButtonText('Panel Discussion');
  saveToGoogleSheet('panel_discussion');
}

function renderFormForSeminar() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();

  const element = $(`
  <p class="fee">No fee is required for participating</p>
  <div class="mb-3">
    <label for="Seminar" class="form-label"
      >Name</label
    >
    <input
      type="text"
      class="form-control"
      id="name"
      name="Name"
      placeholder="Enter your name"
    />
  </div>
  <div class="mb-3">
    <label for="Seminar" class="form-label"
      >Phone</label
    >
    <input
      type="number"
      class="form-control"
      id="phone"
      name="Phone"
      min="0"
      placeholder="Enter your phone number"
    />
  </div>
  <div class="mb-3">
    <label for="Seminar" class="form-label"
      >University</label
    >
    <input
      type="text"
      class="form-control"
      id="university"
      name="University"
      placeholder="Enter your university name"
    />
  </div>
  <div class="mb-3">
    <label for="Seminar" class="form-label"
      >Email address</label
    >
    <input
      type="email"
      class="form-control"
      id="email"
      name="Email"
      placeholder="name@example.com"
    />
  </div>
  `);
  container.append(element);
  changeTitle('Registering For Seminar');
  changeButtonText('Seminar');
  saveToGoogleSheet('seminar');
}

function renderFormForWorkshop() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();

  const element = $(`
  <p class="fee">BDT 100  is required for participating</p>
  <div class="mb-3">
    <label for="Workshop" class="form-label"
      >Name</label
    >
    <input
      type="text"
      class="form-control"
      id="name"
      name="Name"
      placeholder="Enter your name"
    />
  </div>
  <div class="mb-3">
    <label for="Workshop" class="form-label"
      >Phone</label
    >
    <input
      type="number"
      class="form-control"
      id="phone"
      name="Phone"
      min="0"
      placeholder="Enter your phone number"
    />
  </div>
  <div class="mb-3">
    <label for="Workshop" class="form-label"
      >University</label
    >
    <input
      type="text"
      class="form-control"
      id="university"
      name="University"
      placeholder="Enter your university name"
    />
  </div>
  <div class="mb-3">
    <label for="Workshop" class="form-label"
      >Email address</label
    >
    <input
      type="email"
      class="form-control"
      id="email"
      name="Email"
      placeholder="name@example.com"
    />
  </div>

  <div class="mb-3">
  <label for="Workshop" class="form-label">Select Workshop</label>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="Workshop" id="workshop" value="Data Visualization">
      <label class="form-check-label" for="workshop">
        Data Visualization
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="Workshop" id="workshop" value="Market & Customer Analysis">
      <label class="form-check-label" for="workshop">
        Market & Customer Analysis
      </label>
    </div>
  </div>
</div>

  <div class="mb-3">
    <label for="Workshop" class="form-label"
      >Payment Method</label
    >
    <div class="payment-container">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="Payment"
          id="payment"
          value="bKash"
        />
        <label class="form-check-label" for="payment">
          bKash
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="Payment"
          id="payment"
          value="Rocket"
        />
        <label class="form-check-label" for="payment">
          Rocket
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="Payment"
          id="payment"
          value="Nagad"
        />
        <label class="form-check-label" for="payment">
          Nagad
        </label>
      </div>
    </div>
  </div>
  <div class="mb-3">
    <label for="Workshop" class="form-label"
      >Transaction Number</label
    >
    <input
      type="text"
      class="form-control"
      id="transactionNumber"
      name="Transaction"
      placeholder="Enter your transaction number"
    />
  </div>
  `);
  container.append(element);
  changeTitle('Registering For Workshop');
  changeButtonText('Workshop');
  addMessageOnModal('BDT 100  is required for participating');
  saveToGoogleSheet('workshop');
}

function changeTitle(title) {
  $('.modal-title').text(title);
}

function changeButtonText(text) {
  $('#registrationType').text(text);
}

function addMessageOnModal(text) {
  $('#message').text(text);
}

function addMoreMember() {
  const status = $('#addMoreMemberButton').text().trim();
  console.log(status);
  if (status === 'Add last member') {
    const element = $(`
  <div class="mb-3">
  <label for="hackathon" class="form-label"
    >Last Member Name</label
  >
  <input
    type="text"
    class="form-control"
    id="thirdMemberName"
    name="Third Member Name"
    placeholder="Enter your last member name"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Last Member Phone</label
  >
  <input
    type="number"
    min="0"
    class="form-control"
    id="thirdMemberPhone"
    name="Third Member Phone"
    placeholder="Enter your last member phone"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Last Member Email</label
  >
  <input
    type="email"
    class="form-control"
    id="thirdMemberEmail"
    name="Third Member Email"
    placeholder="Enter your last member email"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Last Member University</label
  >
  <input
    type="text"
    class="form-control"
    id="thirdMemberUniversity"
    name="Third Member University"
    placeholder="Enter your last member university"
  />
</div>
  `);
    $(element).insertBefore($('#addMoreMemberButton'));
    $('#addMoreMemberButton').addClass('d-none');
  } else {
    const element = $(`
    <div class="mb-3">
    <label for="hackathon" class="form-label"
      >Another Member Name</label
    >
    <input
      type="text"
      class="form-control"
      id="secondMemberName"
      name="Second Member Name"
      placeholder="Enter your another member name"
    />
  </div>
  <div class="mb-3">
    <label for="hackathon" class="form-label"
      >Another Member Phone</label
    >
    <input
      type="number"
      min="0"
      class="form-control"
      id="secondMemberPhone"
      name="Second Member Phone"
      placeholder="Enter your another member phone"
    />
  </div>
  <div class="mb-3">
    <label for="hackathon" class="form-label"
      >Another Member Email</label
    >
    <input
      type="email"
      class="form-control"
      id="secondMemberEmail"
      name="Second Member Email"
      placeholder="Enter your another member email"
    />
  </div>
  <div class="mb-3">
    <label for="hackathon" class="form-label"
      >Another Member University</label
    >
    <input
      type="text"
      class="form-control"
      id="secondMemberUniversity"
      name="Second Member University"
      placeholder="Enter your another member university"
    />
  </div>
    `);
    $(element).insertBefore($('#addMoreMemberButton'));
    $('#addMoreMemberButton').text('Add last member');
  }
}

function getWorkshopData() {
  const name = $('#name').val();
  const phone = $('#phone').val();
  const university = $('#university').val();
  const email = $('#email').val();
  const workshop = $("input[name='workshop']:checked").val();
  const payment = $("input[name='payment']:checked").val();
  const transactionNumber = $('#transactionNumber').val();

  if (
    name === undefined ||
    phone === undefined ||
    university === undefined ||
    email === undefined ||
    workshop === undefined ||
    payment === undefined ||
    transactionNumber === undefined
  ) {
    addMessageOnModal('Please fill all the * field');
  } else {
    saveToGoogleSheet({
      name,
      phone,
      university,
      email,
      workshop,
      payment,
      transactionNumber,
    });
  }
}

function saveToGoogleSheet(sheetName) {
  let scriptURL;
  if (sheetName === 'workshop') {
    scriptURL =
      'https://script.google.com/macros/s/AKfycbysB5Ph3UjgHnUy8ijwzl0rRJEHu_wJCfVwYGAcARbOyIn4S48KuD8PDW5pihQG09Ir/exec';
  } else if (sheetName === 'hackathon') {
    scriptURL =
      'https://script.google.com/macros/s/AKfycbxP4n0F0z7LHeohGlrWeH7FzFWsN9mGhlYfYmER4wMh-k1p8lQFojGYwCfpFRHcnVMd/exec';
  } else if (sheetName === 'panel_discussion') {
    scriptURL =
      'https://script.google.com/macros/s/AKfycbwR9g4xNhhA7alECg16RMKbg2wThCpAJ4KEGX5pH4LK35-ftnKJCrtO7c1lDk87iX8C/exec';
  } else if (sheetName === 'seminar') {
    scriptURL =
      'https://script.google.com/macros/s/AKfycbx2l__YbwL4pKw_BkiIO7Wxdyfr4zn88FqSQ3Dfc7kash1jneD2WogJc1bjh0CX9wk6/exec';
  }

  const form = document.forms['google-sheet'];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(scriptURL);
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => alert('You have successfully submitted.'))
      .catch((error) => console.error('Error!', error.message));
  });
}
