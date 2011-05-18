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

		init:function()
		{
			this._loaded();
		},

		_gotData:function( data )
		{
			alert(data);
		},

		_initWidget:function()
		{
			while(this._parent.childNodes.length>0)
				this._parent.removeChild(this._parent.childNodes[0]);
			this._divWrap = document.createElement("div");
			this._divWrap.style.position = "absolute";
			this._divWrap.style.width = this._imgSize[0]+"px";
			this._divWrap.style.height = this._imgSize[1]+"px";

			var img = document.createElement("img");
			img.src=this._imgUrl;
			img.width=this._imgSize[0];
			img.height=this._imgSize[1];
			img.zIndex = 20;

			this._divWrap.appendChild(img);
			this._parent.appendChild(this._divWrap);

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
				var av = document.createElement("img");
				av.src = "no_icon.png";
				av.width=50;
				av.height=50;
				av.zIndex = 41;
				avW.appendChild(av);
				this._divWrap.appendChild(avW);

				var stickLoc = this._avatarLocs[i];
				var stickW = document.createElement("div");
				stickW.style.width="20px";
				stickW.style.height="40px";
				stickW.style.position = "absolute";
				stickW.style.left = stickLoc[2]+"px";
				stickW.style.top = stickLoc[3]+"px";
				//stickW.style.border = "solid 2px #222222"
				stickW.style.backgroundColor = "#ffffff";
				stickW.zIndex = 60;
				var stick = document.createElement("img");
				//stick.src = "stick_none.png";
				stick.width=20;
				stick.height=40;
				stick.zIndex = 61;
				stickW.appendChild(stick);
				this._divWrap.appendChild(stickW);

				this._avatarSticks.push(
						new crui_stick(stickW,stick));
				crui_event.attach( stick, "click", function(obj,data)
						{
							crui._stickClick(data);
						}, this._avatarSticks.length-1 );
			}

			var d = new Date();
			d = '?time=' + d.getTime();

			crui_http.sendRequest( "/cgi-bin/crui.py"+d, 
					function( d )
					{
						crui._gotData( d );
					} );
		},

		_stickClick:function(index)
		{
			var s = this._avatarSticks[index];
			var ns = s._state+1;
			if( ns>2 )
				ns = 0;
			s.setState(ns);
		},

		_divWrap:null,
		_loaded:null,
		_imgUrl:'',
		_imgSize:[100,100],
		_avatarLocs:[],
		_avatarSticks:[],
		_sticks:null,
		_parent:null,
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

