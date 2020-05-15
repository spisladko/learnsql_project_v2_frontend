export default (theme) => ({
    taskRoot: {
        width: '100%'
    },
    taskInfo: {
        padding: 20
    },
    answerFieldContainer: {
        padding: 20,
        maxWidth: '600px',
    },
    buttonsContainer: {
        marginTop: 20
    },
    button: {
        marginLeft: 10
    },
    simpleErrorText: {
        padding: '20px',
        marginTop: '20px',
        color: theme.palette.secondary.main
    },
    tableBody: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    table: {
        marginTop: '20px',
        marginRight: '50px'
    },
    taskDescription: {
        padding: '20px 0px'
    },
    image: {
        width: '100%',
        '& img': {
            maxWidth: '800px'
        }
    },
    tableWrap: {
        padding: '20px'
    },
    tableTitle: {
        marginBottom: 10
    },
    nextTaskButton: {
        marginLeft: 'auto'
    },
    simpleErrorBlock: {
        margin: 20,
        maxWidth: 'max-content'
    },
    showDBButton: {
        margin: '20px 0px'
    },
    materialSubItem: {
        marginLeft: '20px',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    materialItem: {
        fontWeight: 'bold',
    }
});