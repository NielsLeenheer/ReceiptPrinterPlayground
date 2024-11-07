<script>

    let { view } = $props();

    let html = $state('');

    export const render = (encoder) => { 
        let result = '';

        if (encoder) {
            let data = encoder.encode('lines');

            for (let line of data) {
                result += '<div class="line">';

                for (let command of line) {
                    result += `<div class="command" data-type="${command.type}">`;
                    result += `<span class="type">${command.type === 'style' ? command.property : command.type}</span>`;
                    result += `<span class="raw">${command.payload.map(i => i.toString(16).padStart(2,0)).join(' ')}</span>`;
                    result += '</div>';
                }

                result += '<div class="return">⏎</div>';
                result += '</div>';
            }
        }

        html = result;
    }

</script>

{#if $view === 'encoded'}
    <div>{@html html}</div>
{/if}

<style>

    div {
        padding-top: 16px;
    }

    div :global(.line .command) {
        max-width: calc(100% - 36px);
    }

</style>