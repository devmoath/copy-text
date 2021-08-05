import copy from '../dist';

const commonjsCopy = require('../dist').default;

global.document.execCommand = function execCommandMock(commandId: string, showUI?: boolean | undefined, value?: string | undefined): boolean {
    return true;
};

test('it can copy text to user clipboard', function () {
    expect(copy('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')).toBeTruthy();
    expect(commonjsCopy('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')).toBeTruthy();
});
