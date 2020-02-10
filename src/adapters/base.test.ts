import sinon from 'sinon';
import BaseAdapter from './base';

test('base adapter should construct', () => {
	// arrange
	const client = sinon.stub();

	// act
	const result = new BaseAdapter(client);

	// assert
	expect(result).toBeTruthy();
	expect(result.client).toEqual(client);
});

test('base adapter should construct get', async () => {
	// arrange
	expect.assertions(1);
	const adapter = new BaseAdapter(sinon.stub());

	// act
	const result = await adapter.get('dogs');

	// assert
	expect(result).toEqual({});
});

test('base adapter should set', async () => {
	// arrange
	expect.assertions(1);
	const adapter = new BaseAdapter(sinon.stub());

	// act
	const result = await adapter.set('dogs', 'dalmatians', 101);

	// assert
	expect(result).toBeTruthy();
});

test('base adapter should del', async () => {
	// arrange
	expect.assertions(1);
	const adapter = new BaseAdapter(sinon.stub());

	// act
	const result = await adapter.del('dogs');

	// assert
	expect(result).toBeTruthy();
});

test('base adapter should parseJson [failure]', () => {
	// arrange
	const adapter = new BaseAdapter(sinon.stub());

	// act
	const result = adapter.parseJson('dogs');

	// assert
	expect(result).toBeFalsy();
});

test('base adapter should parseJson [success]', () => {
	// arrange
	const EXPECTED = {dogs: true};
	const adapter = new BaseAdapter(sinon.stub());

	// act
	const result = adapter.parseJson('{"dogs":true}');

	// assert
	expect(result).toEqual(EXPECTED);
});
