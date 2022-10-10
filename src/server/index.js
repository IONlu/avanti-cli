export const command = 'server';

export const description = 'server manager';

export const options = {
    info: {
        describe: 'Server info',
        type: 'boolean'
    }
};

export const handle = (argv, yargs) => {
    var actions = [
        'info'
    ];
    for (let i = 0; i < actions.length; i++) {
        if (argv[actions[i]]) {
            return require('./' + actions[i]).execute(argv);
        }
    }

    yargs.showHelp();
};
