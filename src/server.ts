import express from 'express';
const app = express();
app.use(express.json());
app.get('/api/patients/:id', (req, res) => res.json({ id: req.params.id, name: 'John Doe', dob: '1985-03-12', bloodType: 'A+', allergies: ['Penicillin'], medications: ['Lisinopril 10mg'] }));
app.get('/api/appointments', (req, res) => res.json({ upcoming: [{ id: 'apt-1', date: '2026-07-15', doctor: 'Dr. Smith', type: 'Checkup' }], past: [] }));
app.post('/api/consultations', (req, res) => res.json({ id: 'consult-' + Date.now(), status: 'scheduled', roomUrl: 'https://mediconnect.zoom.us/j/123456' }));
app.get('/api/records/:id', (req, res) => res.json({ id: req.params.id, visits: [{ date: '2026-06-01', diagnosis: 'Hypertension', notes: 'BP 140/90, prescribed medication', doctor: 'Dr. Smith' }] }));
app.listen(3000);
