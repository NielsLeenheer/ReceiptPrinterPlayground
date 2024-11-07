import ReceiptPrinterEncoder from "@point-of-sale/receipt-printer-encoder";

const getEncoder = async (options) => {
    
    /* Get printer model */

    let models = ReceiptPrinterEncoder.printerModels;
    let model = models.find(model => model.id === options.printerModel);
    
    if (model) {
        model = model.name;
    } else {
        model = 'Generic';
    }

    /* Set options */

    let encoderOptions = {};
                
    if (options.printerModel) {
        encoderOptions.printerModel = options.printerModel;
    }

    /* Create encoder */

    let encoder;

    let errors = [];
    let script_ended = false;
    let script_error = null;
    
    let warn = console.warn;

    console.warn = function(e) {
        warn(e);
        errors.push(e);
    }

    try {
        encoder = new ReceiptPrinterEncoder(encoderOptions);

        eval(`
            (async function() {
                try {
                    ${options.value}
                } catch (e) {
                    script_error = e;
                }

                script_ended = true;
            })();
        `);
    }
    catch (e) {
        script_ended = true;
        script_error = e;
    }

    while(!script_ended) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.warn = warn;

    if (script_error) {
        errors.push(script_error);
        return { errors };
    }

    return { encoder, errors };
}

export { getEncoder };