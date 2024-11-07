encoder
    .initialize()
    .codepage('auto')
    .line(model)
    .rule()
    .line('QR Code')
    .newline()

encoder
    .line('{}')
    .align('center')
    .qrcode('https://nielsleenheer.com')
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ model: 1 }')
    .align('center')
    .qrcode('https://nielsleenheer.com', { model: 1 })
    .align('left')
    .newline()
    .newline()


encoder
    .line('{ model: 2 }')
    .align('center')
    .qrcode('https://nielsleenheer.com', { model: 2 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ size: 4 }')
    .align('center')
    .qrcode('https://nielsleenheer.com', { size: 4 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ size: 8 }')
    .align('center')
    .qrcode('https://nielsleenheer.com', { size: 8 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ errorlevel: l }')
    .align('center')
    .qrcode('https://nielsleenheer.com', { errorlevel: 'l' })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ errorlevel: m }')
    .align('center')
    .qrcode('https://nielsleenheer.com', { errorlevel: 'm' })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ errorlevel: q }')
    .align('center')
    .qrcode('https://nielsleenheer.com', { errorlevel: 'q' })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ errorlevel: h }')
    .align('center')
    .qrcode('https://nielsleenheer.com', { errorlevel: 'h' })
    .align('left')
    .newline()
    .newline()