<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Psilocon Valley Passport</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background:#0a0a0a; color:#e8e8e8; font-family:'Inter',sans-serif; line-height:1.6; }
    .container { max-width:640px; margin:40px auto; padding:40px 20px; background:#111; border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,0.6); }
    h1 { font-size:42px; font-weight:700; margin:0 0 16px; letter-spacing:-1px; }
    .subtitle { font-size:20px; opacity:0.8; margin-bottom:40px; }
    .card { background:#1a1a1a; padding:32px; border-radius:12px; margin:32px 0; border:1px solid #333; }
    .price { font-size:52px; font-weight:700; margin:0; color:#00ff9d; }
    .counter { font-size:32px; font-weight:600; color:#00ff9d; margin:32px 0; text-align:center; }
    .address { background:#000; padding:16px; border-radius:8px; font-family:monospace; font-size:16px; word-break:break-all; margin:16px 0; border:1px solid #333; }
    .footer { margin-top:80px; opacity:0.5; font-size:14px; text-align:center; }
    .badge { display:inline-block; background:#00ff9d; color:#000; padding:4px 12px; border-radius:6px; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Psilocon Valley Passport</h1>
    <p class="subtitle">Lifetime charter access — 420 only</p>
    
    <div class="card">
      <p><span class="badge">One-time</span> $1,337 in BTC or ETH</p>
      <p class="price">$1,337</p>
      <p>Includes every archive drop, live map, physical black metal card, and everything we will ever release.</p>
      <p>When 420 are claimed, this tier disappears forever.</p>
    </div>

    <div class="counter">
      <div id="counter">0 / 420</div>
    </div>

    <div class="card">
      <p><strong>Bitcoin (BTC)</strong></p>
      <div class="address">3JyxMLQstryN1b68bDva8gmZhEgk8hxWay</div>

      <p><strong>Ethereum / USDC / USDT / L2s</strong></p>
      <div class="address">0x42e63152940bbF469f7d5F41f901563b9329c907</div>
    </div>

    <p style="text-align:center; opacity:0.7; margin-top:40px;">
      First 420 confirmed payments lock in.<br>No refunds · No DMs · No exceptions
    </p>

    <div class="footer">
      Psilocon Valley Research · 2026
    </div>
  </div>

  <script>
    // Live counter (real, not fake)
    fetch('https://psiloconvalley.counter.kasper.gg/count')
      .then(r => ****
