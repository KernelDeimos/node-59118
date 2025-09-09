// Flags: --max-heap-size=16 --experimental-vm-modules
import {SourceTextModule, createContext} from 'vm';
import {writeHeapSnapshot} from 'v8';

const context = createContext();

(() => {
    new SourceTextModule(`export default function() { }`, {
        identifier: 'foo',
        context,
    });
})();

global.gc();

// writeHeapSnapshot('./baseline.heapsnapshot');
debugger;

(() => {
    new SourceTextModule(`export default function() { }`, {
        identifier: 'foo',
        context,
    });
})();

global.gc();

// writeHeapSnapshot('./leak.heapsnapshot');
debugger;
