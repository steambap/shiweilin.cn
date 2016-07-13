import React from 'react';
import {me} from './style';
import Info from './info';

const App = (
<div id="wrapper">
	<div className="container-fluid">
		<div className="row">
			<div className="media bg-success p-t-3 p-x-1">
				<span className="media-left">
					<img
						src={require('./media/me-160.png')}
						className="media-object img-circle me"
						alt="me"
						style={me}/>
				</span>
				<div className="media-body">
					<h4 className="media-heading">石威林</h4>
					<p className="text-muted small">美工 | 码农 | 单身狗</p>
					<p className="small">来访者你好，我想和你交个朋友</p>
					<p className="small">扫描下面的二维码加我微信</p>
				</div>
			</div>
			<div className="col-xs-12">
				<img
					src={require('./media/qrcode.jpg')}
					className="center-block img-fluid img-rounded qrcode"
					alt="qrcode"/>
			</div>
			<Info />
		</div>
	</div>
</div>
);

module.exports = App;
