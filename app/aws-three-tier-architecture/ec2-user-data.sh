
#!/bin/bash
set -euxo pipefail

mkdir -p /opt/pelumi-app

cat > /opt/pelumi-app/index.html <<'HTML'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pelumi AWS Three-Tier Architecture</title>
</head>
<body>
  <h1>Pelumi AWS Three-Tier Architecture</h1>
  <h2>Application Tier Operational</h2>
  <p>Successfully serving an application from a private EC2 instance.</p>
  <p>Project 01 | AWS Solutions Architecture Portfolio</p>
</body>
</html>
HTML

cat > /etc/systemd/system/pelumi-app.service <<'SERVICE'
[Unit]
Description=Pelumi Portfolio HTTP Application
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/pelumi-app
ExecStart=/usr/bin/python3 -m http.server 80 --bind 0.0.0.0
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
SERVICE

systemctl daemon-reload
systemctl enable --now pelumi-app.service
