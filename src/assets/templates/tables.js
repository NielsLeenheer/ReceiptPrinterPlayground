encoder
    .initialize()
    .codepage('auto')
    .line(model)
    .rule()
    .line('Tables')
    .newline()

let widePaper = encoder.columns >= 42

if (!widePaper) {
    encoder.font('B');
}

encoder.table(
    [
        { width: 15, align: 'left', marginRight: 1 },
        { width: 9, align: 'left', marginRight: 1 },
        { width: 16, align: 'right' }
    ],    
    [
        [
            (encoder) => encoder.bold(true).text('Name').bold(false),
            (encoder) => encoder.bold(true).text('Quantity').bold(false),
            (encoder) => encoder.bold(true).text('Description').bold(false)
        ],
        [
            (encoder) => encoder.rule({ width: 6 }),
            (encoder) => encoder.rule(),
            (encoder) => encoder.rule({ style: 'double' }),
        ],
        ['Banana', '5', 'Ripe Yellow Bananas'],
        ['Cherry', '250000000', 'Delicious Sweet Cherries'],
        [
            (encoder) => encoder.text('Cherry'),
            (encoder) => encoder.width(2).text('250000000').width(1),
            (encoder) => encoder.text('Delicious Sweet Cherries')
        ],
        [
            (encoder) => encoder.bold(true).text('Cherry').bold(false),
            (encoder) => encoder.text('250000000'),
            (encoder) => encoder.bold(true).text('Delicious Sweet Cherries').bold(false)
        ],
        ['[-------------]', '[-------]', '[--------------]']
    ]
)

if (!widePaper) {
    encoder.font('A');
}

encoder.newline()

const firstColumnWidth = Math.round(encoder.columns * 0.1);
const secondColumnWidth = Math.round(encoder.columns * 0.5);

encoder
    .width(2)
    .line("-".repeat(encoder.columns / 2))
    .width(1);

encoder.table(
    [
        { width: firstColumnWidth, marginRight: 1, align: "right" },
        { width: secondColumnWidth, align: "left" },
        {
            width: encoder.columns - firstColumnWidth - secondColumnWidth - 1,
            align: "right",
        },
    ],
    [
        ["1x", "Spaghetti Bolognese", "€ 10,00"],
        ["10x", "Spagetti alla carbonara", "€ 100,00"],
    ],
);

encoder
    .width(2)
    .line("-".repeat(encoder.columns / 2))
    .width(1);