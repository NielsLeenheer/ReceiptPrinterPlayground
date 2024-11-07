encoder
    .initialize()
    .codepage('auto')
    .line(model)
    .rule()
    .line('Images')
    .newline()

const image = new Image();
image.src ='data:image/png;base64,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';
await image.decode();

encoder
    .align('center')
    .image(image, 128, 128, 'atkinson')
    .align('left')