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
  <div class="mb-3">
  <label for="hackathon" class="form-label"
    >Payment Method</label
  >
  <div class="payment-container">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="payment"
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
        name="payment"
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
        name="payment"
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
    placeholder="Enter your transaction number"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label">Team Name</label>
  <input
    type="text"
    class="form-control"
    id="teamName"
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
  <div class="mb-3">
    <label for="Pannel Discussion" class="form-label"
      >Name</label
    >
    <input
      type="text"
      class="form-control"
      id="name"
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
      placeholder="name@example.com"
    />
  </div>
  `);
  container.append(element);
  changeTitle('Registering For Panel Discussion');
  changeButtonText('Panel Discussion');
  addMessageOnModal('No fee is required for participating');
}

function renderFormForSeminar() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();

  const element = $(`
  <div class="mb-3">
    <label for="Seminar" class="form-label"
      >Name</label
    >
    <input
      type="text"
      class="form-control"
      id="name"
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
      placeholder="name@example.com"
    />
  </div>
  `);
  container.append(element);
  changeTitle('Registering For Seminar');
  changeButtonText('Seminar');
  addMessageOnModal('No fee is required for participating');
}

function renderFormForWorkshop() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();

  const element = $(`
  <div class="mb-3">
    <label for="Workshop" class="form-label"
      >Name</label
    >
    <input
      type="text"
      class="form-control"
      id="name"
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
      placeholder="name@example.com"
    />
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
          name="payment"
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
          name="payment"
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
          name="payment"
          id="payment"
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
      placeholder="Enter your transaction number"
    />
  </div>
  `);
  container.append(element);
  changeTitle('Registering For Workshop');
  changeButtonText('Workshop');
  addMessageOnModal('BDT 100  is required for participating');
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
    id="teamLeaderName"
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
    id="teamLeaderPhone"
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
    id="teamLeaderEmail"
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
    id="teamLeaderUniversity"
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
      id="teamLeaderName"
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
      id="teamLeaderPhone"
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
      id="teamLeaderEmail"
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
      id="teamLeaderUniversity"
      placeholder="Enter your another member university"
    />
  </div>
    `);
    $(element).insertBefore($('#addMoreMemberButton'));
    $('#addMoreMemberButton').text('Add last member');
  }
}
