<script>

    import Tabs from './Toolbar/Tabs.svelte';
    import Templates from './Toolbar/Templates.svelte';
    
    let { onload, view } = $props();

</script>

<div>
    <Templates {onload}/>
    <Tabs {view} />
</div>

<style>

    div {
        grid-row: 2;
        grid-column: 1 / 3;
        padding-right: 5px;
        padding-bottom: 15px;

        display: flex;
        box-sizing: border-box;

        background: #fafafa;
        border-bottom: 1px solid #ddd;
    }

</style>