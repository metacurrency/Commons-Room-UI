/*
 * Copyright (C) 2011 GeekGene, All Rights Reserved.
 */

if( !this.crui_stick )
{
	crui_stick = function( wrap, img )
	{
		this._wrap = wrap;
		this._img = img;

		this.STATE_NONE = 0;
		this.STATE_WANT = 1;
		this.STATE_HAS = 2;

		this._state = this.STATE_NONE;

		this.setState = function( state )
		{
			this._state = state;
			switch( state )
			{
				case this.STATE_WANT:
					this._img.src = "stick_want.png";
					this._wrap.style.border = "solid 2px #ffff00"
					break;
				case this.STATE_HAS:
					this._img.src = "stick.png";
					this._wrap.style.border = "solid 2px #000000"
					break;
				default:
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
			this._debugWidget.value = "";
		},

		init:function()
		{
			this._loaded();
		},

		_sendReq:function( msg, data )
		{
			if( this._lastReq!=null )
				return;
			this._lastReq = msg;

			var d = new Date();
			d = '?time=' + d.getTime();

			var form_data = "username="+encodeURIComponent(
					this._username);
			form_data += "&msg="+encodeURIComponent(msg);
			if( data )
			{
				form_data += "&data="+encodeURIComponent(data);
			}

			var url = "/cgi-bin/crui.py"+d;

			this._debug( "SEND " + url + "\n  (" + form_data + ")\n" );

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
				return
			var s = str + this._debugWidget.value;
			this._debugWidget.value = s;
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
			this._debug( "GOT ("+this._lastReq+") "+data+"\n" );
			data = JSON.parse(data);
			if( !this._running && this._lastReq == "gc" )
				this._running = true;
			this._lastReq = null;
			//alert( this._debugJson(data) );
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
				avW.zIndex = 40;
				this._divWrap.appendChild(avW);
				var av = document.createElement("img");
				av.src = "no_icon.png";
				av.width=50;
				av.height=50;
				av.zIndex = 41;
				avW.appendChild(av);

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
			}

			this._getUserName();

			window.setInterval( function()
					{
						crui._getUpdates();
					}, 5000 );
		},

		_getUserName:function()
		{
			var unDiv = document.createElement("div");
			unDiv.style.backgroundColor = "#ffffff";
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
			legend.appendChild(document.createTextNode("Login using your Skype ID:"));

			var lblUser = document.createElement("label");
			fieldset.appendChild(lblUser);
			lblUser.appendChild( document.createTextNode("Skype ID:") );

			var txtUser = document.createElement("input");
			txtUser.type = "text";
			txtUser.id = "crui_username";
			fieldset.appendChild(txtUser);

			var login = document.createElement("input");
			login.type = "submit";
			login.value = "Login"
			fieldset.appendChild(login);

			lblUser.for = "crui_username";

			this._loginWindow = unDiv;
			this._loginUsername = txtUser;

			txtUser.focus();

			crui_event.attach( form, "submit", function(form,data)
					{
						crui._doLogin();
					}, null );
		},

		_getUpdates:function()
		{
			if( !this._running )
				return;
			this._sendReq("gc",null);
		},

		_stickClick:function(index)
		{
			var s = this._avatarSticks[index];
			var ns = s._state+1;
			if( ns>2 )
				ns = 0;
			s.setState(ns);
		},

		_doLogin:function()
		{
			this._username = this._loginUsername.value;
			document.body.removeChild(this._loginWindow);
			this._loginWindow = null;
			this._loginUsername = null;

			this._sendReq("gc",null);
		},

		_debugWidget:null,
		_username:"no-one",
		_divWrap:null,
		_loaded:null,
		_imgUrl:'',
		_imgSize:[100,100],
		_avatarLocs:[],
		_avatarSticks:[],
		_sticks:null,
		_parent:null,
		_loginWindow:null,
		_loginUsername:null,
		_lastReq:null,
		_running:false,
		void:0
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
			}
			if (obj.addEventListener)
				obj.addEventListener(type, dlfn, false);
			else if (obj.attachEvent)
				obj.attachEvent("on" + type, dlfn);			
		},

		void:0
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

