import { TMGrammar } from './types';

import {
	assignmentExpr,
	comments,
	constants,
	expression,
	forStmt,
	funcDeclaration,
	funcName,
	identifier,
	ifStmt,
	importStmt,
	keywords,
	literals,
	namedType,
	operators,
	packageDeclaration,
	parameter,
	parameters,
	primType,
	punctuation,
	statement,
	stdLib,
	stringLiteral,
	structInitBody,
	structExpr,
	typeDeclaration,
	typeModifiers,
	types,
	valueExpr,
	varDeclaration,
} from './repository';

const grammar: TMGrammar = {
	name: 'go',
	scopeName: 'source.go',
	// prettier-ignore
	patterns: [
		{ include: '#comments' },
		{ include: '#statement' },
	],
	repository: {
		assignmentExpr,
		comments,
		constants,
		expression,
		forStmt,
		funcDeclaration,
		funcName,
		identifier,
		ifStmt,
		importStmt,
		keywords,
		literals,
		namedType,
		operators,
		packageDeclaration,
		parameter,
		parameters,
		primType,
		punctuation,
		statement,
		stdLib,
		stringLiteral,
		structInitBody,
		structExpr,
		typeDeclaration,
		typeModifiers,
		types,
		valueExpr,
		varDeclaration,
	},
};

export default grammar;
