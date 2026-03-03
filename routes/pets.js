const { Router } = require('express');
const router = Router();

router.post('/feed', (req, res) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [MASCOTAS] Dispensar comida activado`);
  res.json({ ok: true, action: 'feed', timestamp: ts });
});

module.exports = router;
