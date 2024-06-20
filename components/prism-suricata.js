// Resource: https://prismjs.com/extending
Prism.languages.suricata = {
	'protocol': {
		pattern: /\b(tcp|udp|icmp|ip|all|any|tcp-pkt|tcp-stream|http[12]?|ftp|tls|smb|dns|dcerpc|dhcp|ssh|smtp|imap|pop3|modbus|dnp3|enip|nfs|ike|krb5|bittorrent-dht|ntp|dhcp|rfb|rdp|snmp|tftp|sip|websocket)\b/,
		alias: 'selector'
	},
	'action': {
		pattern: /\b(alert|pass|drop|reject|rejectsrc|rejectdst|rejectboth)\b/,
		alias: 'namespace'
	},
	'direction': {
		pattern: /(->|<>)/,
		alias: 'operator'
	},
	'options': {
		pattern: /\(.*\)?/,
		greedy: true,
		alias: 'text',
		inside: {
			'opening-paren': {
				pattern: /^\(/,
				alias: 'operator'
			},
			'closing-paren': {
				pattern: /\)$/,
				alias: 'operator'
			},
			'string': {
				pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			'option-key': {
				pattern: /\w+:/,
				alias: 'selector'
			},
			'flag-option': {
				pattern: /(noalert|fast_pattern);/,
				alias: 'tag'
			}
		}
	},
	'comment': [
		{
			pattern: /#.*/,
			lookbehind: true,
			greedy: true
		}
	],
};