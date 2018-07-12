const express = require('express')
const app = express()

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',

app.get('/svg/:text/', function (req, res) {
  var svgStr = '<?xml version="1.0" encoding="UTF-8"?><svg width="253" height="69" version="1.1" viewBox="0 0 66.939582 18.256251" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 -278.74)"><rect x=".39688" y="279.14" width="66.177" height="17.462" rx="2.6458" ry="2.6458" fill="#f2f2f2"/><text x="11" y="292" fill="#000000" font-family="Verdana" font-size="11px" font-weight="bold" letter-spacing="0px" stroke-width="0" word-spacing="0px" style="line-height:1.25" xml:space="preserve"><tspan x="11" y="292" font-family="Verdana" font-size="11px" font-weight="bold" stroke-width="0">OPS 404</tspan></text><path d="m3.0427 279.14c-1.4658 0-2.6458 1.18-2.6458 2.6458v12.171c0 1.4658 1.18 2.6458 2.6458 2.6458h6.9639v-17.462z" fill="#039"/><rect x=".39688" y="279.14" width="66.146" height="17.462" rx="2.6458" ry="2.6458" fill="none" stroke="#1a1a1a" stroke-width=".79375"/><circle cx="5.3595" cy="284.05" r="1.9182" fill="none" stroke="#ff0" stroke-dasharray="0.79375001,1.58750003" stroke-width=".79375"/><text x="3.5" y="293.82544" fill="#000000" font-family="Verdana" font-size="5px" font-weight="bold" letter-spacing="0px" stroke-width="0" word-spacing="0px" style="line-height:1.25" xml:space="preserve"><tspan x="3.5" y="293.82544" fill="#ffffff" font-family="Verdana" font-size="5px" font-weight="bold" stroke-width="0">S</tspan></text></g></svg>';
  var text = req.params.text.substring(0, 7).toUpperCase();
  svgStr = svgStr.replace("OPS 404", text);
  res.send(svgStr);
})

app.get('*', function (req, res) {
  res.redirect('/svg/OPS 404');
})

app.listen(port, ip, function () {
  console.log( "Licence plate generator listening on http://" + ip + "/:" + port + "/svg/ABC-123")
});

module.exports = app;
