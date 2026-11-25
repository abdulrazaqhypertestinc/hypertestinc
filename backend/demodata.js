const connectDB = require('./config/db');
const Medicine = require('./models/Medicine');

const demoMedicines = [
  {
    medicinecode: 'MED001',
    name: 'Dolo 650',
    category: 'General',
    description: 'Used for fever and pain relief',
    status: 'Draft',
    isActive: true,
  },
  {
    medicinecode: 'MED002',
    name: 'Limcee 500',
    category: 'General',
    description: 'Used for vitamin C supplementation',
    status: 'In Review',
    isActive: true,
  },
];

const saveDemoData = async () => {
  try {
    await connectDB();
    await Medicine.syncIndexes();
    const saved = await Medicine.insertMany(demoMedicines);
    console.log(`Saved ${saved.length} demo medicines successfully!`);
    process.exit(0);
  } catch (error) {
    console.error('Error saving data:', error.message);
    process.exit(1);
  }
};
saveDemoData()