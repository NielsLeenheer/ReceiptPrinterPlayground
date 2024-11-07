<script>

    let { view } = $props();

    let html = $state('');

    export const render = (encoder) => { 
        let result = '';

        if (encoder) {
            let data = encoder.encode('commands');

            for (let line of data) {
                result += '<div class="line">';

                for (let command of line.commands) {

                    if (command.type !== 'empty') {
                        result += `<div class="command" data-type="${command.type}">`;

                        if (command.type === 'raw') {
                            result += `<span class="type">${command.type}</span>`;
                            result += `<span class="raw">${command.payload.map(i => i.toString(16).padStart(2,0)).join(' ')}</span>`;
                        }
                        else if (command.type === 'text') {
                            result += `<span class="type">${command.type}</span>`;
                            result += `<span class="text">${command.value.replace(/ /g, '<span class="space">&nbsp;</span>')}</span>`;

                            if (command.codepage) {
                                result += `<span class="codepage">${command.codepage}</span>`;
                            }
                        }                                
                        else if (command.type === 'style') {
                            result += `<span class="type">${command.property}</span>`;

                            if (command.property === 'size') {
                                result += `<span class="style">${command.value.width}x${command.value.height}</span>`;
                            }
                            else {
                                result += `<span class="style">${command.value}</span>`;
                            }
                        }
                        else {
                            result += `<span class="type">${command.type}</span>`;

                            if (typeof command.command !== 'undefined' || typeof command.value !== 'undefined') {
                                result += `<span class="description">
                                    ${typeof command.command !== 'undefined' ? command.command : ''}
                                    ${typeof command.property !== 'undefined' ? command.property + ': ' : ''}
                                    ${typeof command.value !== 'undefined' && typeof command.value !== 'object' ? command.value : ''}
                                    ${typeof command.value === 'object' ? Object.entries(command.value).map(i => i[0] + ': ' + i[1]).join(', ') : ''}
                                </span>`;
                            }
                        }

                        result += '</div>';
                    }
                }

                result += '<div class="return">⏎</div>';
                result += '</div>';
            }
        }

        html = result;
    }

</script>

{#if $view === 'commands'}
    <div>{@html html}</div>
{/if}

<style>

    div {
        padding-top: 16px;
    }

</style>