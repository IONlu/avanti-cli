import Client from 'avanti-core/client';
import chalk from 'chalk';

export const execute = async (options) => {
    if (!options.host) {
        process.exitCode = 1;
        process.stderr.write(chalk.red('Missing required argument: host') + '\n');
        return;
    }

    if (!options.client) {
        process.exitCode = 1;
        process.stderr.write(chalk.red('Missing required argument: client') + '\n');
        return;
    }

    try {
        await (new Client(options.client)).host(options.host).create(options);
    } catch(e) {
        process.exitCode = 1;
        process.stderr.write(chalk.red(chalk.bold('ERROR:') + ' ' + e) + '\n');
    }
};
