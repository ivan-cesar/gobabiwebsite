const axios = require('axios');

app.post('/api/contact', async (req, res) => {
  const { recaptchaToken } = req.body;
  const secretKey = '6LcF-DEqAAAAAFC_pnI6zyJ2UvpJoUtxVMHZ3-TH';

  try {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`);
    if (response.data.success) {
      // Le reCAPTCHA est vérifié avec succès, traiter les données du formulaire
      res.status(200).json({ message: 'Le formulaire est envoyé avec succès.' });
    } else {
      res.status(400).json({ message: 'Échec de la vérification reCAPTCHA.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la vérification reCAPTCHA.' });
  }
});
