#!/usr/bin/env python

#
# Copyright (C) 2011 GeekGene, All Rights Reserved.
#

import sys
import cgi
form = cgi.FieldStorage()

import time

import sys, traceback

import os
import json
import socket

def get_well(name, default=""):
	val = form.getfirst(name)
	if val is None or val == '':
		val = default
	return val

def my_formatException():
	strs = traceback.format_exception(*(sys.exc_info()))
	out = ""
	for str in strs:
		out += str.replace('\n','\r\n')
	return out

def doSend(s,data):
	dOut = ""
	if not data is None:
		s.send(data+"\n")
	try:
		dOut += s.recv(4096)
	except:
		raise
	return dOut

def main():
	the_top = "Expires: Mon, 26 Jul 1997 05:00:00 GMT\n"
	the_top += "Last-Modified: " + str(time.strftime("%a, %d %b %Y %H:%M:%S GMT", time.gmtime(time.time()))) + '\n'
	the_top += "Cache-Control: no-store, no-cache, must-revalidate\n"
	the_top += "Cache-Control: post-check=0, pre-check=0\n"
	the_top += "Pragma: no-cache\n"
	the_top += '''Content-Type: text/plain

'''
	
	try:
		RemoteAddr = '[no address]'
		UserAgent = '[no ua]'

		if os.environ.has_key( 'REMOTE_ADDR' ):
			RemoteAddr = os.environ['REMOTE_ADDR']
		if os.environ.has_key( 'HTTP_USER_AGENT' ):
			UserAgent = os.environ['HTTP_USER_AGENT']

		username = get_well("username","no-one")
		msg = get_well("msg","gc")
		data = get_well("data",None)

		s = socket.socket(socket.AF_INET)
		s.settimeout(5)
		s.connect(("208.78.103.116",3333))
		s.settimeout(1)

		doSend(s,None)

		doSend(s,username)

		if not (data is None):
			msg += " " + data
		dataOut = doSend(s,msg)

		print the_top + dataOut[:-3]

		s.close()

	except BaseException, data:

		try:
			dataOut = [[
				'error', [
					repr(data), 
					my_formatException()
						]
					]]
			dataOut = json.write( dataOut )

			print the_top + dataOut
		except:
			print the_top + '[["error", [%s,""]]]' % ('"' + repr(data).replace('"','\\"') + '"')
	

if __name__ == "__main__":
	main()
