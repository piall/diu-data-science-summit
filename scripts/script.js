let sheetName = null;
let scriptURL = null;
let form = null;

$('.registration-btn').on('click', () => {
  const options = $('#registrationType + .dropdown-menu > li');
  for (option of options) {
    $(option).on('click', registrationTypeHandler);
  }
});

$('.big-registration-btn').on('click', () => {
  const options = $('#registrationType + .dropdown-menu > li');
  for (option of options) {
    $(option).on('click', registrationTypeHandler);
  }
});

function registrationTypeHandler(event) {
  makeEmptyField();
  $('#registerButton').addClass('d-block');
  $('#registerButton').removeClass('d-none');
  document.forms['google-sheet'].removeEventListener('submit', formHanlder);
  const option = event.target.innerText;
  if (option === 'Hackathon') {
    sheetName = 'hackathon';
    renderFormForHackathon();
  } else if (option === 'Panel Discussion') {
    sheetName = 'panel_discussion';
    renderFormForPanelDiscussion();
  } else if (option === 'Seminar') {
    sheetName = 'seminar';
    renderFormForSeminar();
  } else {
    sheetName = 'workshop';
    renderFormForWorkshop();
  }
}

function makeEmptyField() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();
  sheetName = null;
  scriptURL = null;
  form = null;
  $('#registerButton').removeClass('d-block');
  $('#registerButton').addClass('d-none');
  $('#registrationType').text('Select Your Choice');
}

function renderFormForHackathon() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();
  const element = $(`
  <p class="fee">BDT 1000  is required for participating. Everyone will get a hackathon kit. Winner prize money is total 35K.</p>
  <p class="message">Minimum One to Three person can form a team</p>
  <div class="mb-3">
  <label for="hackathon" class="form-label"
    >Payment Method</label
  >
  <div class="radio-container">
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
    type="text"
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
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Select Team Leader T-shirt Size</label
  >
  <div class="radio-container">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Team Leader T-Shirt"
        id="TL_Size"
        value="M"
      />
      <label class="form-check-label" for="TL_Size">
        M
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Team Leader T-Shirt"
        id="TL_Size"
        value="L"
      />
      <label class="form-check-label" for="TL_Size">
        L
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Team Leader T-Shirt"
        id="TL_Size"
        value="XL"
      />
      <label class="form-check-label" for="TL_Size">
        XL
      </label>
    </div>
  </div>
</div>
  <div class="btn btn-info" id="addMoreMemberButton">
      Add another member
  </div>
  `);
  container.append(element);
  changeTitle('Registering For Hackathon');
  changeButtonText('Hackathon');
  saveToGoogleSheet('hackathon');
  $('#addMoreMemberButton').on('click', addMoreMember);
}

function renderFormForPanelDiscussion() {
  const container = $('#registrationModal  form > .input-container');
  container.empty();

  const element = $(`
  <p class="fee">No fee is required for participating.</p>
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
      type="text"
      class="form-control"
      id="phone"
      name="Phone"
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
  <p class="fee">No fee is required for participating.</p>
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
      type="text"
      class="form-control"
      id="phone"
      name="Phone"
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
  <p class="fee">BDT 100  is required for participating.</p>
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
      type="text"
      class="form-control"
      id="phone"
      name="Phone"
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
    <div class="radio-container">
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
    >Third Member Name</label
  >
  <input
    type="text"
    class="form-control"
    id="thirdMemberName"
    name="Third Member Name"
    placeholder="Enter your third member name"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Third Member Phone</label
  >
  <input
    type="text"
    class="form-control"
    id="thirdMemberPhone"
    name="Third Member Phone"
    placeholder="Enter your third member phone"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Third Member Email</label
  >
  <input
    type="email"
    class="form-control"
    id="thirdMemberEmail"
    name="Third Member Email"
    placeholder="Enter your third member email"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Third Member University</label
  >
  <input
    type="text"
    class="form-control"
    id="thirdMemberUniversity"
    name="Third Member University"
    placeholder="Enter your third member university"
  />
</div>
<div class="mb-3">
  <label for="hackathon" class="form-label"
    >Select Third Member T-shirt Size</label
  >
  <div class="radio-container">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Third Member T-Shirt"
        id="thirdMemberTL_Size"
        value="M"
      />
      <label class="form-check-label" for="thirdMemberTL_Size">
        M
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Third Member T-Shirt"
        id="thirdMemberTL_Size"
        value="L"
      />
      <label class="form-check-label" for="thirdMemberTL_Size">
        L
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Third Member T-Shirt"
        id="thirdMemberTL_Size"
        value="XL"
      />
      <label class="form-check-label" for="thirdMemberTL_Size">
        XL
      </label>
    </div>
  </div>
</div>

  `);
    $(element).insertBefore($('#addMoreMemberButton'));
    $('#addMoreMemberButton').addClass('d-none');
  } else {
    const element = $(`
    <div class="mb-3">
    <label for="hackathon" class="form-label"
      >Second Member Name</label
    >
    <input
      type="text"
      class="form-control"
      id="secondMemberName"
      name="Second Member Name"
      placeholder="Enter your second member name"
    />
  </div>
  <div class="mb-3">
    <label for="hackathon" class="form-label"
      >Second Member Phone</label
    >
    <input
      type="text"
      class="form-control"
      id="secondMemberPhone"
      name="Second Member Phone"
      placeholder="Enter your second member phone"
    />
  </div>
  <div class="mb-3">
    <label for="hackathon" class="form-label"
      >Second Member Email</label
    >
    <input
      type="email"
      class="form-control"
      id="secondMemberEmail"
      name="Second Member Email"
      placeholder="Enter your second member email"
    />
  </div>
  <div class="mb-3">
    <label for="hackathon" class="form-label"
      >Second Member University</label
    >
    <input
      type="text"
      class="form-control"
      id="secondMemberUniversity"
      name="Second Member University"
      placeholder="Enter your second member university"
    />
  </div>
  <div class="mb-3">
  <label for="hackathon" class="form-label"
    >Select Second Member T-shirt Size</label
  >
  <div class="radio-container">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Second Member T-Shirt"
        id="secondMemberTL_Size"
        value="M"
      />
      <label class="form-check-label" for="secondMemberTL_Size">
        M
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Second Member T-Shirt"
        id="secondMemberTL_Size"
        value="L"
      />
      <label class="form-check-label" for="secondMemberTL_Size">
        L
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Second Member T-Shirt"
        id="secondMemberTL_Size"
        value="XL"
      />
      <label class="form-check-label" for="secondMemberTL_Size">
        XL
      </label>
    </div>
  </div>
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
  const workshop = $("input[name='Workshop']:checked").val();
  const payment = $("#payment[name='Payment']:checked").val();
  const transactionNumber = $('#transactionNumber').val();

  if (
    name === '' ||
    phone === '' ||
    university === '' ||
    email === '' ||
    workshop === '' ||
    payment === undefined ||
    transactionNumber === ''
  ) {
    return false;
  } else {
    return true;
  }
}

function getSeminarData() {
  const name = $('#name').val();
  const phone = $('#phone').val();
  const university = $('#university').val();
  const email = $('#email').val();
  if (name === '' || phone === '' || university === '' || email === '') {
    return false;
  } else {
    return true;
  }
}

function getPanelDiscussionData() {
  const name = $('#name').val();
  const phone = $('#phone').val();
  const university = $('#university').val();
  const email = $('#email').val();
  const panel = $("input[name='panel']:checked").val();

  if (
    name === '' ||
    phone === '' ||
    university === '' ||
    email === '' ||
    panel === ''
  ) {
    return false;
  } else {
    return true;
  }
}

function getHackathonData() {
  const teamName = $('#teamName').val();
  const teamLeaderName = $('#teamLeaderName').val();
  const teamLeaderPhone = $('#teamLeaderPhone').val();
  const teamLeaderUniversity = $('#teamLeaderUniversity').val();
  const teamLeaderEmail = $('#teamLeaderEmail').val();
  const payment = $("#payment[name='Payment']:checked").val();
  const transactionNumber = $('#transactionNumber').val();
  const teamLeaderTShirt = $(
    "#TL_Size[name='Team Leader T-Shirt']:checked"
  ).val();
  console.log(payment, teamLeaderTShirt);
  if (
    teamName === '' ||
    teamLeaderName === '' ||
    teamLeaderPhone === '' ||
    teamLeaderUniversity === '' ||
    teamLeaderEmail === '' ||
    payment === undefined ||
    transactionNumber === '' ||
    teamLeaderTShirt === undefined
  ) {
    return false;
  } else {
    return true;
  }
}

function validate(sheetName) {
  if (sheetName === 'workshop') {
    return getWorkshopData();
  } else if (sheetName === 'hackathon') {
    return getHackathonData();
  } else if (sheetName === 'panel_discussion') {
    return getPanelDiscussionData();
  } else if (sheetName === 'seminar') {
    return getSeminarData();
  }
}

function saveToGoogleSheet(sheetName) {
  if (sheetName === 'workshop') {
    scriptURL =
      'https://script.google.com/macros/s/AKfycbxkG_Zwxea5QTQWNcxalVJaRk38YtkZFMzveW4j8etYySU--WWJpXfFWnPqRozGcwjuRg/exec';
  } else if (sheetName === 'hackathon') {
    scriptURL =
      'https://script.google.com/macros/s/AKfycbxE5lb8AZWRI8jH0JxrRRjJo9QZsxcORIlHWFXfN-lhWl-v0jeAgn6vJpquLdcxUrm27Q/exec';
  } else if (sheetName === 'panel_discussion') {
    scriptURL =
      'https://script.google.com/macros/s/AKfycbwgUDOk6ljCFa9_wlcFX-ntxod5iOYZE-3hbxNkKmlzgycHE6qIleaB1jp_43q4_7WTbQ/exec';
  } else if (sheetName === 'seminar') {
    scriptURL =
      'https://script.google.com/macros/s/AKfycbwslKPOGkM4MJz9AfVAmyKcievruwcEfEsf0sORaMZGr8DIBMY7D0KLJV51woUmF8CPTg/exec';
  }

  form = document.forms['google-sheet'];

  form.addEventListener('submit', formHanlder);
}

function formHanlder(e) {
  e.preventDefault();
  console.log(sheetName);
  if (validate(sheetName)) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) =>
        swal('Good job!', 'You will recieve confirmation email soon', 'success')
      )
      .catch((error) => swal('Oops!', 'An error occured', 'error'));
  } else {
    swal('Please!', 'Fill all the field', 'info');
  }
}
