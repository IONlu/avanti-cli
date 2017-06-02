import Host from 'avanti-core/host';
import chalk from 'chalk';
import { table } from 'table';

export const execute = async () => {
    try {
        var hosts = await Host.list();
        var rows = hosts.map(row => {
            return [
                row.host,
                row.user,
                row.path,
                row.client,
                row.php
            ];
        });
        var header = [
            'Host', 'User', 'Path', 'Client', 'PHP'
        ].map(text => chalk.bold(text));
        process.stdout.write(table([ header, ...rows ]));
    } catch(e) {
        process.exitCode = 1;
        process.stderr.write(chalk.red(chalk.bold('ERROR:') + ' ' + e) + '\n');
    }
};
