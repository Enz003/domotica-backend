const { Router } = require('express');
const router = Router();

router.post('/water', (req, res) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [PLANTAS] Riego activado`);
  res.json({ ok: true, action: 'water', timestamp: ts });
});

module.exports = router;
