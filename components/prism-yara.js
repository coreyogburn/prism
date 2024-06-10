// Resource: https://prismjs.com/extending
Prism.languages.yara = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /"(?:\\.|[^"\\\r\n])*"/,
		greedy: true
	},
	'rule-signature': {
		pattern: /(private\s+)?rule\s*[a-z_][a-z0-9_]{0,127}\s*(:(\s*[a-z_][a-z0-9_]{0,50})+)?/i,
		alias: 'text',
		inside: {
			'tag-separator': {
				pattern: /:/,
				alias: 'operator'
			},
			'identifier': {
				pattern: /(rule\s+)[a-z_][a-z0-9_]{0,127}/i,
				lookbehind: true,
				alias: 'text'
			},
			'private-rule': {
				pattern: /^(private\s+)?rule\b/i,
				alias: 'keyword'
			},
			'tag': {
				pattern: /[a-z_][a-z0-9_]{0,50}/i,
				alias: 'property'
			},
		},
	},
	'category-header': {
		pattern: /(\n\s*)\w+:/,
		lookbehind: true,
		alias: 'keyword'
	},
	'byte-sequence': {
		pattern: /\{[a-f0-9 \[\]\?]*\}/i,
		alias: "string"
	},
	'keyword': {
		pattern: /\b(all|and|any|ascii|at|base64(wide)?|condition|(i)?contains|(i)?endswith|entrypoint|false|filesize|for|fullword|global|import|in|include|(u)?int16(be)?|(u)?int32(be)?|(u)?int8(be)?|iequals|(i)?startswith|matches|meta|nocase|none|not|of|or|private|rule|strings|them|true|wide|xor|defined)\b/i,
	},
};

Prism.languages.YARA = Prism.languages.yara;