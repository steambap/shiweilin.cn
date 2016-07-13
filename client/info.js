import React from 'react';

const Info = () => (
<div className="col-xs-12">
	<h4 className="text-xs-center p-y-1">开源项目</h4>
	<div className="list-group">
		<a href="https://github.com/lemonce/svg-captcha" target="_blank" className="list-group-item">
			<h4 className="list-group-item-heading">svg-captcha</h4>
			<p className="list-group-item-text">generate svg captcha in node</p>
		</a>
		<a href="https://github.com/lemonce/sublemon" target="_blank" className="list-group-item">
			<h4 className="list-group-item-heading">sublemon</h4>
			<p className="list-group-item-text">code hightlight made ease</p>
		</a>
	</div>
</div>
);

module.exports = Info;
