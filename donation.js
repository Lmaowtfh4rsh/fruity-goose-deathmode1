// Example frontend code using Fetch API to send a donation request to the backend
const donationForm = document.getElementById('donationForm');

donationForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(donationForm);
  const donationData = {
    name: formData.get('name'),
    email: formData.get('email'),
    amount: formData.get('amount')
  };

  try {
    const response = await fetch('/api/donate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donationData)
    });

    if (response.ok) {
      // Donation successful, display a success message to the user
      alert('Thank you for your donation!');
    } else {
      // Donation failed, display an error message to the user
      alert('Failed to process donation. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});