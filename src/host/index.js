export const command = 'host [host]';

export const description = 'host manager';

export const options = {
    list: {
        alias: 'l',
        describe: 'list hosts',
        type: 'boolean'
    },
    client: {
        describe: 'client to use',
        type: 'string'
    },
    create: {
        alias: 'c',
        describe: 'create host',
        type: 'boolean'
    },
    remove: {
        alias: 'r',
        describe: 'remove host',
        type: 'boolean'
    },
    'create-alias': {
        alias: 'alias',
        describe: 'add alias',
        type: 'string'
    },
    'remove-alias': {
        describe: 'remove alias',
        type: 'string'
    },
    php: {
        describe: 'php version',
        type: 'string'
    },
    'set-option': {
        alias: 'option',
        describe: 'set option',
        type: 'array'
    },
    'remove-option': {
        describe: 'remove option',
        type: 'array'
    },
    refresh: {
        describe: 'rebuild config (vhost, fpm, ...)',
        type: 'boolean'
    },
    'create-ftp': {
        alias: 'ftp',
        describe: 'create ftp account',
        type: 'string'
    },
    'remove-ftp': {
        describe: 'remove ftp account',
        type: 'boolean'
    },
    'enable-ssl': {
        generate: 'ssl',
        describe: 'Enable ssl for host [dns | apache | manual]',
        type: 'string'
    },
    'disable-ssl': {
        describe: 'Disable ssl from host',
        type: 'boolean'
    },
};

export const handle = (argv, yargs) => {
    var actions = [
        'list', 'create', 'remove',
        'create-alias', 'remove-alias',
        'php',
        'set-option', 'remove-option',
        'refresh',
        'create-ftp', 'remove-ftp',
        'enable-ssl', 'disable-ssl'
    ];
    for (let i = 0; i < actions.length; i++) {
        if (argv[actions[i]]) {
            return require('./' + actions[i]).execute(argv);
        }
    }

    yargs.showHelp();
};
