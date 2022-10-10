import Server from 'avanti-core/dist/server';
import chalk from 'chalk';

export const execute = async () => {
    try {
        const server = new Server()
        let serverInfo = await server.info();
        process.stdout.write(JSON.stringify(serverInfo));
    } catch(e) {
        process.exitCode = 1;
        process.stderr.write(chalk.red(chalk.bold('ERROR:') + ' ' + e) + '\n');
    }
};
