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
    <label for="hackathon" class="form-label"
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
    <label for="hackathon" class="form-label"
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
    <label for="hackathon" class="form-label"
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
  `);
  container.append(element);
  changeTitle('Registering For Hackathon');
  changeButtonText('Hackathon');
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
}

function changeTitle(title) {
  $('.modal-title').text(title);
}

function changeButtonText(text) {
  $('#registrationType').text(text);
}
