const { registerBlockType } = wp.blocks;

// new gutenberg block with name "Sports Odd Data Table"
registerBlockType('blexr/sports-odd-data-table', {
    title: 'Sports Odd Data Table',
    description: 'Table representing the latest odds records',
    category: 'media',
    attributes:{},
    edit() {
        var blockProps = wp.blockEditor.useBlockProps( {
            className: 'table-data',
        } );
        return wp.element.createElement( 'div', blockProps, 'Sports Odd Data Table' );
    },
    save() {
        var blockProps = wp.blockEditor.useBlockProps.save();
        return wp.element.createElement( 'div', blockProps, 'Sports Odd Data Table' );
    }
});