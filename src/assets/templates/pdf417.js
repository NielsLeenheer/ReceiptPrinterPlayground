encoder
    .initialize()
    .codepage('auto')
    .line(model)
    .rule()
    .line('PDF417')
    .newline()

encoder
    .line('{}')
    .align('center')
    .pdf417('https://nielsleenheer.com')
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ width: 4, height: 4 }')
    .align('center')
    .pdf417('https://nielsleenheer.com', { width: 4, height: 4 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ errorlevel: 2 }')
    .align('center')
    .pdf417('https://nielsleenheer.com', { errorlevel: 2 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ errorlevel: 4 }')
    .align('center')
    .pdf417('https://nielsleenheer.com', { errorlevel: 4 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ columns: 1 }')
    .align('center')
    .pdf417('https://nielsleenheer.com', { columns: 1 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ columns: 2 }')
    .align('center')
    .pdf417('https://nielsleenheer.com', { columns: 2 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ columns: 3 }')
    .align('center')
    .pdf417('https://nielsleenheer.com', { columns: 3 })
    .align('left')
    .newline()
    .newline()

encoder
    .line('{ columns: 4 }')
    .align('center')
    .pdf417('https://nielsleenheer.com', { columns: 4 })
    .align('left')
    .newline()
    .newline()
