<script>

    import { writable, get } from 'svelte/store';
    import { getEncoder } from './utils/encoder.js';

    import WebUSBReceiptPrinter from '@point-of-sale/webusb-receipt-printer';
    import WebSerialReceiptPrinter from '@point-of-sale/webserial-receipt-printer';
    import WebBluetoothReceiptPrinter from '@point-of-sale/webbluetooth-receipt-printer';

    import Header from './app/Header.svelte';
    import Main from './app/Main.svelte';


    /* Stores */

    const contents = writable('');
    const model = writable('');


    /* State */

    let connected = $state(false);


    /* Functions */

    let receiptPrinter;

    function onconnect(data) {
        let { driver, baudrate } = data;

        /* Setup driver */

        if (driver === 'usb') {
            receiptPrinter = new WebUSBReceiptPrinter();
        }

        if (driver === 'serial') {
            receiptPrinter = new WebSerialReceiptPrinter({
                baudRate: parseInt(baudrate, 10)
            });
        }

        if (driver === 'bluetooth') {
            receiptPrinter = new WebBluetoothReceiptPrinter();
        }


        /* Event listeners */

        receiptPrinter.addEventListener('connected', device => {
            connected = true;
        });

        /* Connect */

        receiptPrinter.connect();
    }

    function ondisconnect() {
        receiptPrinter.disconnect();
        connected = false;
    }

    async function onprint() {
        let result = await getEncoder({
            printerModel: get(model),
            value: get(contents)
        });

        if (result.encoder) {
            result.encoder.cut();
            receiptPrinter.print(result.encoder.encode());
        }
    }

</script>

<Header {onconnect} {ondisconnect} {onprint} {model} {connected} />
<Main {contents} {model} />
