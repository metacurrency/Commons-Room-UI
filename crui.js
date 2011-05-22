/*
 * Copyright (C) 2011 GeekGene, All Rights Reserved.
 */


 function get_gravatar(email, size) {

     // MD5 (Message-Digest Algorithm) by WebToolkit
     // http://www.webtoolkit.info/javascript-md5.html

     var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/\r\n/g,"\n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};

     var size = size || 80;

     return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
 }
 
if( !this.crui_avatar )
{
	crui_avatar = function( wrap, img )
	{
		this._wrap = wrap;
		this._img = img;
		this.name = "";
		this.occaddr = -1;
		this._status = "";

		this.setChair = function( src, _name, _full_name , _occaddr, __status )
		{
			this._img.style.display = 'block';
			this._img.src = src;
			this.name = _name;
			this._img.title = _full_name + " ("+__status+")";
			this.occaddr = _occaddr;
			this._status = __status;

			if( this._status == "away" )
			{
				this._wrap.style.background = "url("+src+")";
				this._img.src="Away_Icon.png";
			}
		}

		this.noOne = function()
		{
			this._img.src = "";
			this._img.style.display = 'none';
		}
	}
}

if( !this.crui_stick )
{
	crui_stick = function( wrap, img )
	{
		this._wrap = wrap;
		this._img = img;

		this.STATE_NONE = 0;
		this.STATE_WANT = 1;
		this.STATE_HAS = 2;
		this.STATE_HIDE = 3;

		this._state = this.STATE_NONE;

		this.setState = function( state )
		{
			this._state = state;
			switch( state )
			{
				case this.STATE_WANT:
					this._wrap.style.display = "block";
					this._img.src = "stick_want.png";
					this._wrap.style.border = "solid 2px #c66dff"
					break;
				case this.STATE_HAS:
					this._wrap.style.display = "block";
					this._img.src = "stick.png";
					this._wrap.style.border = "solid 2px #000000"
					break;
				case this.STATE_HIDE:
					this._wrap.style.display = "none";
					break;
				default:
					this._wrap.style.display = "block";
					this._img.src = "stick_none.png";
					this._wrap.style.border = "solid 2px #888888"
					break;
			}
		}

		this.setState( this.STATE_NONE );
	}
}

if( !this.crui )
{
	crui = {
		VERSION_INT: 1,
		VERSION: "0.0.1",

		setLoadedCallback:function(cb)
		{
			this._loaded = cb;
		},

		setupRoom:function( p, img_url, size, avatars )
		{
			this._parent = p;
			this._imgUrl = img_url;
			this._imgSize = size;
			this._avatarLocs = avatars;
			this._initWidget();
		},

		setDebugWidget:function( obj )
		{
			this._debugWidget = obj;
			while( this._debugWidget.childNodes.length>0 )
				this._debugWidget.removeChild(
						this._debugWidget.childNodes[0] );
		},

		init:function()
		{
			this._loaded();
		},

		_getFullState:function()
		{
			this._sendReq(
					"gs",
					"gs",
					JSON.stringify( {"addr":0 } ) //, "full":true } )
					);
		},

		_sendReq:function( res_type, msg, data )
		{
			var d = new Date();
			d = '?time=' + d.getTime();

			var form_data = "username="+encodeURIComponent(
					this._username);
			form_data += "&cmd="+encodeURIComponent(msg);
			if( data )
			{
				form_data += "&data="+encodeURIComponent(data);
			}

			//var url = "/cgi-bin/crui.py"+d;
			var url = "/cmd"+d;

			this._debug(">>push("+res_type+")");
			this._reqList.push( new Array(res_type,url,form_data) );
			this.__sendReq();
		},

		__sendReq:function()
		{
			if( this._lastReq!=null )
				return;

			if( this._reqList.length<1 )
				return;
			var v = this._reqList.shift();
			var res_type = v[0];
			var url = v[1];
			var form_data = v[2];

			this._lastReq = res_type;

			this._debug( "SEND " + url + "\n  (" + 
					unescape(form_data) + ")\n" );

			crui_http.sendRequest( url, 
					function( d )
					{
						crui._gotData( d );
					}, 
					form_data
					);
		},

		_debug:function(str)
		{
			if( !this._debugWidget )
				return;
			this._debugWidget.appendChild(
					document.createTextNode(str) );
			this._debugWidget.appendChild(
					document.createElement("br") );
		},

		_debugJson:function(obj)
		{
			out = "";
			if( typeof obj == "object" )
			{
				out += "{";
				for( var k in obj )
				{
					if( out.length > 1 )
						out+=",";
					out += k + "=" + this._debug(obj[k]);
				}
				out += "}";
			}
			else
				out += obj;
			return out;
		},

		_gotData:function( data )
		{
			var dbg = data.substr(0,100);

			this._debug( "GOT("+this._lastReq+") "+dbg );
			
			dataobj = JSON.parse(data);
			if( dataobj.length>0&&dataobj[0].length>1&&dataobj[0][0]=="error" )
				this._debug("ERROR: "+dataobj[0][1]);
			
			if( !this._running && this._lastReq == "gc" )
				this._running = true;

			if( this._lastReq == "gc" )
				this._gotChange(dataobj);
			else if( this._lastReq == "gs" )
				this._gotState(dataobj);
			else if( this._lastReq == "matpreenter" )
			{
				this._matEnterUserId = dataobj["result"];
				this._sendReq("matenter","ss", JSON.stringify(
						{
							"to":this._roomAddr,
							"signal":"door->enter",
							"params": {
								"password":"pass",
								"name":this._matEnterUsername,
								"data":{"full-name":this._matEnterFullname, "email":this._matEnterEmail}
							}
						})
						);				
			}
			else if( this._lastReq == "matenter" )
			{
				var un = this._matEnterUsername;
				//alert(un+" addr:"+this._allUserAddrs[un]+
				//		", occ:"+dataobj["result"]);
				this._sendReq("matreagent","ss", JSON.stringify(
						{
							"to":this._roomAddr,
							"signal":"matrice->make-agent",
							"params": {
								"addr":this._matEnterUserId,
								"occupant":dataobj["result"]
							}
						})
						);
			}
			else if( this._lastReq == "matcom" || 
					this._lastReq == "matsit" ||
					this._lastReq == "matleave" ||
					this._lastReq == "matreagent" ||
					this._lastReq == "stickgive" ||
					this._lastReq == "stickreq" ||
					this._lastReq == "stickrel" ||
					this._lastReq == "status"
					)
			{
				this._hideWait();
				this._getFullState();
				//alert( data );
			}

			this._lastReq = null;
			this.__sendReq();
		},

		_gotChange:function( data )
		{
			if(data["result"]!=this._lastChange)
			{
				this._lastChange = data["result"];
				this._debug("NewData! ("+this._lastChange+")\n");
				this._getFullState();
			}
		},

		_gotState:function( data )
		{
			if( data["status"]!="ok" )
				return;
			if( this._hideWaitOk )
			{
				this._actualHideWait();
			}

			data = data["result"];
			//get our room address
			var room_addr = data["scapes"]["room-scape"];
			for( var rr in room_addr )
			{
				room_addr = room_addr[rr];
				break;
			}
			this._roomAddr = room_addr;

			this._allUserAddrs = {};
			//find our user address
			var user_addr = data["scapes"]["user-scape"];
			for( var ur in user_addr )
			{
				this._allUserAddrs[ur] = user_addr[ur];
				if( ur == this._username )
				{
					this._useraddr = user_addr[ur];
				}
			}

			//are we a matrice?
			data = data["receptors"][""+room_addr];
			var mats = data["matrices"];
			this._isMatrice = false;
			for( var m in mats )
			{
				if( parseInt(mats[m]) == parseInt(this._useraddr) )
				{
					this._isMatrice = true;
					break;
				}
			}

			//get the occupants & find our occid
			var occs = data["scapes"]["occupant-scape"];
			this._occupants = {};

			for( var occ in occs )
			{
				this._occupants[occs[occ]] = occ;
				if( occ == this._username )
					this._occaddr = occs[occ];
			}

			this._usernameStatus = {};
			//get status-s
			var statscape = data["scapes"]["status-scape"];
			for( var socc in statscape )
			{
				this._usernameStatus[this._occupants[socc]] = 
					statscape[socc];
			}

			//fill in the chairs
			var chairNots = {};
			for( var id in this._avatarAvatars )
				chairNots[id] = true;
			var chairs = data["scapes"]["chair-scape"];
			for( var chair in chairs )
			{
				if( chairs[chair] == this._occaddr )
					this._chairid = chair;
				var username = this._occupants[chairs[chair]];
				this._avatarAvatars[chair].setChair(
				    (data["occupants"][username] && data["occupants"][username]["email"])  ? 
				    get_gravatar(data["occupants"][username]["email"],50) :
						"http://metacurrency.org/invitational/users/"+
						username+".png",
						username,
						data["occupants"][username] ? data["occupants"][username]["full-name"] : username,
						chairs[chair],
						this._usernameStatus[username]);
				chairNots[chair] = false;
			}
			for( var chair in chairNots )
			{
				if( chairNots[chair] )
				{
					this._avatarAvatars[chair].noOne();
					var stick = this._avatarSticks[chair];
					stick.setState(stick.STATE_HIDE);
				}
			}

			//display the talking stick
			var stickscape = data["talking-stick"]["scapes"]["stick-scape"];
			for( var s in this._avatarSticks )
			{
				if( chairs[""+s] )
				{
					var stick = this._avatarSticks[s];
					var state = stickscape[chairs[""+s]];
					if( state == "have-it" )
						stick.setState(stick.STATE_HAS);
					else if( state == "want-it" )
						stick.setState(stick.STATE_WANT);
					else
					{
						if( this._isMatrice || 
								chairs[""+s] == this._occaddr )
							stick.setState(stick.STATE_NONE);
						else
							stick.setState(stick.STATE_HIDE);
					}
				}
			}

			if( this._isMatrice )
				this._setupMatriceControls();

			this._debug("Got(room:"+room_addr+",usr:"+this._useraddr+
					",chair:"+this._chairid+
					",occ:"+this._occaddr+",mat:"+
					(this._isMatrice?"true":"false")+")");
		},

		_initWidget:function()
		{
			while(this._parent.childNodes.length>0)
				this._parent.removeChild(this._parent.childNodes[0]);
			this._divWrap = document.createElement("div");
			this._divWrap.style.position = "absolute";
			this._divWrap.style.width = this._imgSize[0]+"px";
			this._divWrap.style.height = this._imgSize[1]+"px";
			this._parent.appendChild(this._divWrap);

			var img = document.createElement("img");
			img.src=this._imgUrl;
			img.width=this._imgSize[0];
			img.height=this._imgSize[1];
			img.zIndex = 20;
			this._divWrap.appendChild(img);

			for( var i=0; i<this._avatarLocs.length; ++i )
			{
				var avLoc = this._avatarLocs[i];
				var avW = document.createElement("div");
				avW.style.width="50px";
				avW.style.height="50px";
				avW.style.position = "absolute";
				avW.style.left = avLoc[0]+"px";
				avW.style.top = avLoc[1]+"px";
				avW.style.border = "solid 2px #222222"
				avW.style.background = "url(no_icon.png)";
				avW.zIndex = 40;
				this._divWrap.appendChild(avW);
				var av = document.createElement("img");
				av.src = "no_icon.png";
				av.width=50;
				av.height=50;
				av.zIndex = 41;
				avW.appendChild(av);
				this._avatarAvatars.push(
						new crui_avatar(avW,av));
				var num = document.createElement("div");
				num.style.position = "absolute";
				num.style.left = "0px";
				num.style.top = "0px";
				num.zIndex = 42;
				avW.appendChild(num);
				num.appendChild(document.createTextNode(i));

				crui_event.attach( av, "click", function(obj,data)
						{
							crui._avatarClick(data);
						}, this._avatarAvatars.length-1 );

				var stickLoc = this._avatarLocs[i];
				var stickW = document.createElement("div");
				stickW.style.width="20px";
				stickW.style.height="40px";
				stickW.style.position = "absolute";
				stickW.style.left = stickLoc[2]+"px";
				stickW.style.top = stickLoc[3]+"px";
				stickW.style.backgroundColor = "#ffffff";
				stickW.zIndex = 60;
				this._divWrap.appendChild(stickW);
				var stick = document.createElement("img");
				stick.width=20;
				stick.height=40;
				stick.zIndex = 61;
				stickW.appendChild(stick);

				this._avatarSticks.push(
						new crui_stick(stickW,stick));
				crui_event.attach( stick, "click", function(obj,data)
						{
							crui._stickClick(data);
						}, this._avatarSticks.length-1 );
				crui_event.attach( stick, "contextmenu", function(obj,data)
						{
							crui._stickDblClick(data);
						}, this._avatarSticks.length-1 );
			}

			this._getUserName();

			window.setInterval( function()
					{
						crui._getUpdates();
					}, 3000 );
		},

		_getUserName:function()
		{
			this._loginDlg = new crui_dlg(
					"Login using your Skype ID:",
					["Skype ID:"],
					function(form,data)
					{
						crui._doLogin();
					},
					null,
					"Login"
					);
		},

		_getUpdates:function()
		{
			if( !this._running )
				return;
			if( this._reqList.length>0 )
				this.__sendReq();
			else if( this._roomAddr > -1 )
				this._sendReq("gc","gc",JSON.stringify(
							{"addr":this._roomAddr}));
			else
				this._getFullState();
		},

		_avatarClick:function(index)
		{
			if( this._waitDlg )
				return;

			var a = this._avatarAvatars[index];
			var s = this._avatarSticks[index];

			if( this._isMatrice || a.name == this._username )
			{
				var stat = "away";
				if( this._usernameStatus[a.name] == "away" )
					var stat = "present";

				var addr = a.occaddr;
				this._showWait();
				this._sendReq("status","ss", JSON.stringify(
							{
								"to":this._roomAddr,
								"signal":"matrice->update-status",
								"params": {
									"addr":parseInt(addr),
									"status":stat
									}
							}));
			}
		},

		_stickDblClick:function(index)
		{
			if( this._waitDlg )
				return;

			var a = this._avatarAvatars[index];
			var s = this._avatarSticks[index];

			if( this._isMatrice )
			{
				if( s._state == s.STATE_HAS )
				{
					this._showWait();
					this._sendReq("stickrel","ss", JSON.stringify(
							{
								"to":this._roomAddr,
								"signal":"stick->release",
								"params":a.name
							})
							);
				}
				else
				{
					this._showWait();
					this._sendReq("stickgive","ss", JSON.stringify(
							{
								"to":this._roomAddr,
								"signal":"stick->give",
								"params":a.name
							})
							);
				}
			}
		},

		_stickClick:function(index)
		{
			if( this._waitDlg )
				return;

			var a = this._avatarAvatars[index];
			var s = this._avatarSticks[index];

			if( this._isMatrice )
			{
				if( s._state == s.STATE_HAS )
				{
					this._showWait();
					this._sendReq("stickrel","ss", JSON.stringify(
							{
								"to":this._roomAddr,
								"signal":"stick->release",
								"params":a.name
							})
							);
				}
				else
				{
					this._showWait();
					this._sendReq("stickreq","ss", JSON.stringify(
							{
								"to":this._roomAddr,
								"signal":"stick->request",
								"params":a.name
							})
							);
				}
			}
			else if( this._username == a.name )
			{
				this._showWait();
				if( s._state == s.STATE_HAS || s._state == s.STATE_WANT )
				{
					this._sendReq("stickrel","ss", JSON.stringify(
							{
								"to":this._roomAddr,
								"signal":"stick->release",
								"params":this._username
							})
							);
				}
				else
				{
					this._sendReq("stickreq","ss", JSON.stringify(
							{
								"to":this._roomAddr,
								"signal":"stick->request",
								"params":this._username
							})
							);
				}
			}
		},

		_doLogin:function()
		{
			if( !this._loginDlg )
				return;
			this._username = this._loginDlg._elems[0].value;
			this._loginDlg.destroy();
			this._loginDlg = null;

			this._sendReq("gc","gc",null);
		},

		_setupMatriceControls:function()
		{
			if( this._matriceControls )
				return;

			var d = document.createElement("div");
			this._matriceControls = d;
			d.style.position = "absolute";
			d.style.left = "0px";
			d.style.top = "0px";
			d.style.border = "solid 2px #000000";
			d.style.backgroundColor = "#CCFFCC";
			document.body.appendChild(d);

			//command
			var c = document.createElement("a");
			c.style.fontWeight = "bold";
			c.style.cursor = "pointer";
			d.appendChild(c);
			c.appendChild(document.createTextNode("command"));

			crui_event.attach( c, "click", function(c,data)
					{
						crui._matriceCommand();
					}, null );

			d.appendChild(document.createTextNode(" | "));

			//enter
			var c = document.createElement("a");
			c.style.fontWeight = "bold";
			c.style.cursor = "pointer";
			d.appendChild(c);
			c.appendChild(document.createTextNode("enter"));

			crui_event.attach( c, "click", function(c,data)
					{
						crui._matriceEnter();
					}, null );

			d.appendChild(document.createTextNode(" | "));

			//leave
			var c = document.createElement("a");
			c.style.fontWeight = "bold";
			c.style.cursor = "pointer";
			d.appendChild(c);
			c.appendChild(document.createTextNode("leave"));

			crui_event.attach( c, "click", function(c,data)
					{
						crui._matriceLeave();
					}, null );

			d.appendChild(document.createTextNode(" | "));

			//sit
			var c = document.createElement("a");
			c.style.fontWeight = "bold";
			c.style.cursor = "pointer";
			d.appendChild(c);
			c.appendChild(document.createTextNode("sit"));

			crui_event.attach( c, "click", function(c,data)
					{
						crui._matriceSit();
					}, null );
		},

		_matriceCommand:function()
		{
			if( this._loginDlg )
			{
				this._loginDlg.destroy();
				this._loginDlg = null;
			}
			this._loginDlg = new crui_dlg(
					"Manual Scape Command",
					["command (i.e. 'gs')","message (i.e. '{\"addr\":0}"],
					function(form,data)
					{
						crui._doMatriceCommand();
					},
					null,
					"Submit"
					);
		},

		_doMatriceCommand:function()
		{
			if( !this._loginDlg )
				return;
			var msg = this._loginDlg._elems[0].value;
			var data = this._loginDlg._elems[1].value;

			this._loginDlg.destroy();
			this._loginDlg = null;

			if( msg.length<1 )
				return;

			this._showWait();
			this._sendReq("matcom",msg,data.length>0?data:null);
		},

		_matriceEnter:function()
		{
			if( this._loginDlg )
			{
				this._loginDlg.destroy();
				this._loginDlg = null;
			}
			this._loginDlg = new crui_dlg(
					"Cause a user to enter the room",
					["Skype Id:","Full Name:","Email:"],
					function(form,data)
					{
						crui._doMatriceEnter();
					},
					null,
					"Submit"
					);
		},

		_doMatriceEnter:function()
		{
			if( !this._loginDlg )
				return;
  			var username = this._loginDlg._elems[0].value;
  			var fullname = this._loginDlg._elems[1].value;
  			var email = this._loginDlg._elems[2].value;

			this._loginDlg.destroy();
			this._loginDlg = null;

			if( username.length<1 )
				return;

			this._showWait();
			this._matEnterUsername = username;
			this._matEnterFullname = fullname;
			this._matEnterEmail = email;
			
			this._sendReq("matpreenter","ss",JSON.stringify(
						{"to":0,
						"signal":"self->host-user",
						"params":username}));
		},

		_matriceLeave:function()
		{
			if( this._loginDlg )
			{
				this._loginDlg.destroy();
				this._loginDlg = null;
			}
			this._loginDlg = new crui_dlg(
					"Cause a user to leave the room",
					["Skype Id:"],
					function(form,data)
					{
						crui._doMatriceLeave();
					},
					null,
					"Submit"
					);
		},

		_doMatriceLeave:function()
		{
			if( !this._loginDlg )
				return;
			var username = this._loginDlg._elems[0].value;

			this._loginDlg.destroy();
			this._loginDlg = null;

			if( username.length<1 )
				return;

			this._showWait();
			this._sendReq("matleave","ss", JSON.stringify(
					{
						"to":this._roomAddr,
						"signal":"door->leave",
						"params": username
					})
					);
		},

		_matriceSit:function()
		{
			if( this._loginDlg )
			{
				this._loginDlg.destroy();
				this._loginDlg = null;
			}
			this._loginDlg = new crui_dlg(
					"Place an occupant in a chair",
					["Skype Id:","Chair Id:"],
					function(form,data)
					{
						crui._doMatriceSit();
					},
					null,
					"Submit"
					);
		},

		_doMatriceSit:function()
		{
			if( !this._loginDlg )
				return;
			var username = this._loginDlg._elems[0].value;
			var chair = parseInt(this._loginDlg._elems[1].value);

			this._loginDlg.destroy();
			this._loginDlg = null;

			if( username.length<1 )
				return;

			for( occ in this._occupants )
			{
				if( this._occupants[occ] == username )
				{
					this._showWait();
					this._sendReq("matsit","ss", JSON.stringify(
							{
								"to":this._roomAddr,
								"signal":"matrice->sit",
								"params": {
									"addr":occ,
									"chair":chair
								}
							})
							);
					break;
				}
			}
		},

		_showWait:function()
		{
			if( this._waitDlg )
				return;
			if( this._matriceControls )
				this._matriceControls.style.display = "none";
			this._hideWaitOk = false;
			this._waitDlg = new crui_wait("Please wait...");
		},

		_hideWait:function()
		{
			this._hideWaitOk = true;
		},

		_actualHideWait:function()
		{
			if( this._waitDlg )
			{
				this._waitDlg.destroy();
				this._waitDlg = null;
			}
			if( this._matriceControls )
				this._matriceControls.style.display = "block";
		},

		_matEnterUsername:"",
		_matEnterFullname:"",
		_matEnterEmail:"",
		_matEnterUserId:-1,
		_allUserAddrs:{},
		_usernameStatus:{},
		_occupants:{},
		_roomAddr:-1,
		_lastChange:-1,
		_reqList:[],
		_debugWidget:null,
		_username:"no-one",
		_useraddr:-1,
		_occaddr:-1,
		_chairid:-1,
		_isMatrice:false,
		_divWrap:null,
		_loaded:null, //callback to page
		_imgUrl:'',
		_imgSize:[100,100],
		_avatarLocs:[],
		_avatarAvatars:[],
		_avatarSticks:[],
		_sticks:null,
		_parent:null,
		_loginDlg:null,
		_waitDlg:null,
		_hideWaitOk:false,
		_lastReq:null,
		_running:false,
		_matriceControls:null,
		_void:0
	}
}

if( !this.crui_wait )
{
	crui_wait = function( title )
	{
		this._obj = null;

		this.destroy = function()
		{
			document.body.removeChild(this._obj);
			this._obj = null;
		}

		var unDiv = document.createElement("div");
		this._obj = unDiv;
		unDiv.style.background = "url(bg.png) repeat-x scroll 0 0 #909090";
		unDiv.style.position = "absolute";
		unDiv.style.margin = "auto";
		unDiv.style.left = "20px";
		unDiv.style.top = "20px";
		unDiv.zIndex = 30025;
		unDiv.style.border = "solid 2px #000000";
		unDiv.style.padding = "20px 20px";
		document.body.appendChild( unDiv );

		unDiv.appendChild( document.createTextNode( title ) );
		unDiv.appendChild( document.createElement( "br" ) );
	}
}

if( !this.crui_dlg )
{
	crui_dlg = function( title, elems, cb, cbdata, subtext )
	{
		this._elems = [];
		this._dlgWindow = null;

		this.destroy = function()
		{
			document.body.removeChild(this._dlgWindow);
			this._dlgWindow = null;
			this._elems = [];
		}

		var unDiv = document.createElement("div");
		this._dlgWindow = unDiv;
		unDiv.style.background = "url(bg.png) repeat-x scroll 0 0 #909090";
		unDiv.style.position = "absolute";
		unDiv.style.border = "solid 2px #000000";
		unDiv.style.left = "10px";
		unDiv.style.top = "10px";
		unDiv.style.textAlign = "center";
		unDiv.style.padding = "8px 8px";
		document.body.appendChild( unDiv );

		var form = document.createElement("form");
		unDiv.appendChild( form );

		var fieldset = document.createElement("fieldset");
		form.appendChild(fieldset);

		var legend = document.createElement("legend");
		fieldset.appendChild(legend);
		legend.appendChild(document.createTextNode(title));

		for( var elem in elems )
		{
			var lbl = document.createElement("label");
			fieldset.appendChild(lbl);
			lbl.appendChild( document.createTextNode(elems[elem]) );

			var txt = document.createElement("input");
			txt.type = "text";
			fieldset.appendChild(txt);
			this._elems.push(txt);

			fieldset.appendChild(document.createElement("br"));
		}

		var sub = document.createElement("input");
		sub.type = "submit";
		sub.value = subtext;
		fieldset.appendChild(sub);

		this._elems[0].focus();

		crui_event.attach( form, "submit", cb, cbdata );
	}
}

if( !this.crui_http )
{
	crui_http = {
		callback : null,
		curRequest : null,

		sendRequest : function( url, cb, data )
		{
			if( this.curRequest )
				throw new Error( 'crui_http: already a request' );

			this.callback = cb;

			// Mozilla, Safari,...
			if (window.XMLHttpRequest)
			{ 
				this.curRequest = new XMLHttpRequest();
				if (this.curRequest.overrideMimeType)
					this.curRequest.overrideMimeType('text/plain');
			}
			// IE
			else if (window.ActiveXObject)
			{
				try{ this.curRequest = 
					new ActiveXObject("Msxml2.XMLHTTP"); }
				catch (e)
				{
					try{ this.curRequest = 
						new ActiveXObject("Microsoft.XMLHTTP");	}
					catch (e) {}
				}
			}

			if (!this.curRequest)
				throw new Error("Could not create XMLHTTP object.", "" );

			this.curRequest.onreadystatechange = function()
			{
				crui_http.gotResponse( );
			}

			if( data )
			{
				this.curRequest.open('POST', url, true);
				this.curRequest.setRequestHeader("Connection", "close");
				this.curRequest.setRequestHeader(
						"Accept-Charset", "UTF-8");
				this.curRequest.setRequestHeader(
						"Content-Type", "application/x-www-form-urlencoded");
				this.curRequest.setRequestHeader(
						"Content-Length", data.length);
				this.curRequest.send(data);
			}
			else
			{
				this.curRequest.open('GET', url, true);
				this.curRequest.setRequestHeader("Connection", "close");
				this.curRequest.setRequestHeader(
						"Accept-Charset", "UTF-8");
				this.curRequest.send(null);
			}
		},

		gotResponse : function( )
		{
			if (this.curRequest.readyState == 4)
			{
				var s = this.curRequest.status;
				var t = this.curRequest.responseText;
				var cb = this.callback;
				this.curRequest = null;
				this.callback = null;
				if (s == 200)
					cb( t );
				else
				{
					throw new Error("HTTP error: " + s + ": " + t);
				}
			}	
		}
	}
}

if( !this.crui_event )
{
	crui_event = {
		_cur_id:0,
		id_cache:{},

		attach:function(obj,type,func,data)
		{
			if( !obj.id )
				obj.id = "CRUI_ID_"+(this._cur_id++);
			if( !this.id_cache[obj.id] )
				this.id_cache[obj.id] = {};
			this.id_cache[obj.id][type] = new Array(obj,func,data);
			var dlfn = function(ev)
			{
				ev = ev || window.event;
				var type = ev.type;
				var target = ev.target || ev.srcElement || document;

				while( !crui_event.id_cache[target.id] ||
						!crui_event.id_cache[target.id][type] )
				{
					target = target.parentNode;
					if( !target )
						return;
				}

				var a = crui_event.id_cache[target.id][type];
				a[1](a[0],a[2]);

				if (ev.preventDefault)
					ev.preventDefault();
				ev.returnValue = false;
				if (ev.stopPropagation)
					ev.stopPropagation();
				ev.cancelBubble = true;
			}
			if (obj.addEventListener)
				obj.addEventListener(type, dlfn, false);
			else if (obj.attachEvent)
				obj.attachEvent("on" + type, dlfn);			
		},

		_void:0
	}
}

if( !this.CruiOnLoadFunction )
{
	CruiOnLoadFunction = function()
	{
		if( window.removeEventListener )
			window.removeEventListener( 'load', CruiOnLoadFunction, false );
		else if( window.detachEvent )
			window.detachEvent( 'onload', CruiOnLoadFunction );
		CruiOnLoadFunction = null;

		crui.init();
	}

	if( window.addEventListener )
		window.addEventListener( 'load', CruiOnLoadFunction, false );
	else if( window.attachEvent )
		window.attachEvent( 'onload', CruiOnLoadFunction );
}
