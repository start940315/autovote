var qiniu = require("qiniu");
qiniu.conf.ACCESS_KEY = "vZWKNhMlb2ydAQv6-J3TqxCS82gVWbRvapSVWgAp";
qiniu.conf.SECRET_KEY = "GDLwP64N0DxVGTrkE5cPgkHhPCgK030VcAXvOVpr";

module.exports = {
	generateSimpleUptoken: generateSimpleUptoken,
	generateDownUrl: generateDownUrl
};

function generateSimpleUptoken(scope, callbackUrl, callbackBody, returnUrl, returnBody, asyncOps, endUser, expires) {
	var policy = new qiniu.rs.PutPolicy(scope, callbackUrl, callbackBody, returnUrl, returnBody, asyncOps, endUser, expires);

	return policy.token();
}
function generateDownUrl(domain, key) {
	var baseUrl = qiniu.rs.makeBaseUrl(domain, key);
	var policy = new qiniu.rs.GetPolicy();
	return policy.makeRequest(baseUrl);
}










